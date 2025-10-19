import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    date: "",
    guests: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hola! Me gustaría solicitar información:\n\nNombre: ${formData.name}\nTipo de evento: ${formData.eventType}\nFecha estimada: ${formData.date}\nCantidad de invitados: ${formData.guests}\nContacto: ${formData.contact}\nMensaje: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te redirigimos a WhatsApp para completar tu consulta.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Ubicación y Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map and Location Info */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl overflow-hidden shadow-natural mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8276541234567!2d-58.79!3d-34.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzAwLjAiUyA1OMKwNDcnMjQuMCJX!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Mi Refugio Quinta"
              ></iframe>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-natural">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. San Fernando 6061, entre las calles Pedro Agote y Las Bases<br />
                    Cuartel V, Moreno, Buenos Aires
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Con fácil acceso por autopista y estacionamiento interno.
                  </p>
                </div>
              </div>

              <Button
                onClick={() => window.open('https://maps.google.com/?q=Av.+San+Fernando+6061,+Moreno', '_blank')}
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Ver en Google Maps
              </Button>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-bold text-lg text-primary mb-4">Redes Sociales</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/5491100000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:info@mirefugioquinta.com"
                    className="p-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-card p-8 rounded-2xl shadow-natural">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-6">
                Solicitá tu propuesta
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre y apellido</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="eventType">Tipo de evento</Label>
                  <Input
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="Ej: Cumpleaños, reunión familiar"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="date">Fecha estimada</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="guests">Cantidad de invitados</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Ej: 50"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contact">Teléfono o Email</Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Tu mejor contacto"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Contanos más sobre tu evento..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-natural text-lg py-6"
                >
                  Solicitá tu propuesta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
