import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ADMIN_PASSWORD = "yapati2024";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("yapati_admin", "true");
      navigate("/admin/invoices");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-maroon flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-sand rounded-sm p-8 shadow-gold">
        <div className="text-center mb-8">
          <h1 className="text-gradient-gold font-heading text-3xl font-bold">YAPATI</h1>
          <p className="text-muted-foreground font-body text-sm mt-2">Admin Panel</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="font-body text-sm text-foreground mb-1 block">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Enter admin password"
              className="bg-card border-border"
            />
            {error && <p className="text-destructive font-body text-xs mt-1">{error}</p>}
          </div>
          <Button type="submit" className="w-full bg-gradient-maroon text-primary-foreground font-body font-semibold uppercase tracking-wider hover:opacity-90">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
