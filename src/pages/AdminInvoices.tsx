import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface InvoiceItem {
  product: string;
  price: number;
  quantity: number;
}

const generateInvoiceNumber = () => {
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `YAP-${y}${m}${d}-${rand}`;
};

const AdminInvoices = () => {
  const navigate = useNavigate();
  const printRef = useRef<HTMLDivElement>(null);
  const [invoiceNumber] = useState(generateInvoiceNumber());
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([{ product: "", price: 0, quantity: 1 }]);

  // Auth check
  if (sessionStorage.getItem("yapati_admin") !== "true") {
    navigate("/admin");
    return null;
  }

  const addItem = () => setItems([...items, { product: "", price: 0, quantity: 1 }]);

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const updated = [...items];
    (updated[index] as any)[field] = value;
    setItems(updated);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) setItems(items.filter((_, i) => i !== index));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePrint = () => {
    const content = printRef.current;
    if (!content) return;
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`
      <html><head><title>Invoice ${invoiceNumber}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; padding: 40px; color: #2B2B2B; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #C9A86A; padding-bottom: 20px; }
        .brand { font-size: 28px; font-weight: bold; color: #7A1E2C; }
        .tagline { font-size: 12px; color: #999; letter-spacing: 3px; text-transform: uppercase; }
        .inv-num { font-size: 14px; color: #C9A86A; margin-top: 8px; }
        .info { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .info div { font-size: 14px; line-height: 1.8; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th { background: #7A1E2C; color: white; padding: 10px; text-align: left; font-size: 13px; }
        td { padding: 10px; border-bottom: 1px solid #eee; font-size: 13px; }
        .total-row { font-weight: bold; font-size: 16px; }
        .footer { text-align: center; margin-top: 40px; font-size: 11px; color: #999; border-top: 1px solid #eee; padding-top: 15px; }
      </style></head><body>
      <div class="header">
        <div class="brand">YAPATI</div>
        <div class="tagline">Kappana Tharu · Grow Together</div>
        <div class="inv-num">Invoice: ${invoiceNumber}</div>
        <div style="font-size:12px;color:#666;margin-top:4px">${new Date().toLocaleDateString()}</div>
      </div>
      <div class="info">
        <div><strong>Bill To:</strong><br/>${customerName}<br/>${address}<br/>${country}</div>
      </div>
      <table>
        <thead><tr><th>#</th><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th></tr></thead>
        <tbody>
          ${items.map((item, i) => `<tr><td>${i + 1}</td><td>${item.product}</td><td>₹${item.price.toFixed(2)}</td><td>${item.quantity}</td><td>₹${(item.price * item.quantity).toFixed(2)}</td></tr>`).join("")}
          <tr class="total-row"><td colspan="4" style="text-align:right">Total:</td><td>₹${total.toFixed(2)}</td></tr>
        </tbody>
      </table>
      <div class="footer">Thank you for being part of the YAPATI family!<br/>www.yapati.com</div>
      </body></html>
    `);
    win.document.close();
    win.print();
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🪔 *YAPATI Invoice*\n\nInvoice: ${invoiceNumber}\nDate: ${new Date().toLocaleDateString()}\n\nCustomer: ${customerName}\nAddress: ${address}\nCountry: ${country}\n\n*Items:*\n${items.map((item, i) => `${i + 1}. ${item.product} — ₹${item.price} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`).join("\n")}\n\n*Total: ₹${total.toFixed(2)}*\n\nThank you! 🙏\nYAPATI — Grow Together`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("yapati_admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-sand-warm">
      {/* Header */}
      <div className="bg-gradient-maroon py-4 px-6 flex items-center justify-between">
        <div>
          <h1 className="text-gradient-gold font-heading text-xl font-bold">YAPATI Admin</h1>
          <p className="text-primary-foreground/50 font-body text-xs">Invoice Generator</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => navigate("/")} variant="ghost" className="text-primary-foreground/70 font-body text-xs hover:text-primary-foreground hover:bg-maroon-light">
            View Site
          </Button>
          <Button onClick={handleLogout} variant="ghost" className="text-primary-foreground/70 font-body text-xs hover:text-primary-foreground hover:bg-maroon-light">
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-3xl">
        <div ref={printRef} className="bg-card rounded-sm border border-border p-8 shadow-gold">
          {/* Invoice Header */}
          <div className="text-center mb-8 pb-6 border-b border-gold/30">
            <h2 className="font-heading text-2xl text-primary font-bold">Invoice</h2>
            <p className="font-body text-accent text-sm mt-1">{invoiceNumber}</p>
            <p className="font-body text-muted-foreground text-xs mt-1">{new Date().toLocaleDateString()}</p>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1 block">Customer Name</label>
              <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Full name" className="bg-sand border-border" />
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1 block">Country</label>
              <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. Sri Lanka" className="bg-sand border-border" />
            </div>
            <div className="md:col-span-2">
              <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1 block">Address</label>
              <Textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Full address" className="bg-sand border-border" rows={2} />
            </div>
          </div>

          {/* Items */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg text-foreground">Products</h3>
              <Button onClick={addItem} variant="outline" size="sm" className="font-body text-xs border-gold/30 text-accent hover:bg-gold/10">
                + Add Item
              </Button>
            </div>

            <div className="space-y-3">
              {items.map((item, i) => (
                <div key={i} className="grid grid-cols-12 gap-2 items-end">
                  <div className="col-span-5">
                    {i === 0 && <label className="font-body text-xs text-muted-foreground mb-1 block">Product</label>}
                    <Input value={item.product} onChange={(e) => updateItem(i, "product", e.target.value)} placeholder="Product name" className="bg-sand border-border text-sm" />
                  </div>
                  <div className="col-span-3">
                    {i === 0 && <label className="font-body text-xs text-muted-foreground mb-1 block">Price (₹)</label>}
                    <Input type="number" value={item.price || ""} onChange={(e) => updateItem(i, "price", parseFloat(e.target.value) || 0)} placeholder="0" className="bg-sand border-border text-sm" />
                  </div>
                  <div className="col-span-2">
                    {i === 0 && <label className="font-body text-xs text-muted-foreground mb-1 block">Qty</label>}
                    <Input type="number" value={item.quantity || ""} onChange={(e) => updateItem(i, "quantity", parseInt(e.target.value) || 0)} placeholder="1" className="bg-sand border-border text-sm" />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <span className="font-body text-sm text-foreground font-medium whitespace-nowrap">
                      ₹{(item.price * item.quantity).toFixed(0)}
                    </span>
                    {items.length > 1 && (
                      <button onClick={() => removeItem(i)} className="text-destructive hover:text-destructive/80 text-lg leading-none">×</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-end py-4 border-t border-border">
            <div className="text-right">
              <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">Total</span>
              <p className="font-heading text-3xl text-primary font-bold">₹{total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button onClick={handlePrint} className="flex-1 bg-gradient-maroon text-primary-foreground font-body font-semibold uppercase tracking-wider hover:opacity-90">
            📄 Export PDF / Print
          </Button>
          <Button onClick={handleWhatsAppShare} className="flex-1 bg-[hsl(142,70%,35%)] text-primary-foreground font-body font-semibold uppercase tracking-wider hover:opacity-90">
            💬 Share on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminInvoices;
