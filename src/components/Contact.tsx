import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms access key
    formData.append("access_key", "0724ff3d-7b04-4145-bb4c-41fafc901d15");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body text-sm tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-4">
            Contact Us
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                Have questions about our collections or want to join our community? 
                We'd love to hear from you.
              </p>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8267!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YAPATI Location"
              />
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Location</h4>
                  <p className="font-body text-muted-foreground text-sm">
                    Chennai, Tamil Nadu, India
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/5ofWG8L4i7jz1iQv6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline inline-block mt-1"
                  >
                    View on Map
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:idayavadani@gmail.com" 
                    className="font-body text-muted-foreground text-sm hover:text-accent transition-colors block"
                  >
                    idayavadani@gmail.com
                  </a>
                  <a 
                    href="mailto:dhaarini1806@gmail.com" 
                    className="font-body text-muted-foreground text-sm hover:text-accent transition-colors block"
                  >
                    dhaarini1806@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Phone</h4>
                  <a 
                    href="tel:+919003251346" 
                    className="font-body text-muted-foreground text-sm hover:text-accent transition-colors block"
                  >
                    +91 9003251346 (Idayavadani)
                  </a>
                  <a 
                    href="tel:+917200843784" 
                    className="font-body text-muted-foreground text-sm hover:text-accent transition-colors block"
                  >
                    +91 7200843784 (Dhaarini)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone (Optional)"
                  className="w-full"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
