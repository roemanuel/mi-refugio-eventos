import { Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Mi Refugio <span className="text-accent-foreground">Quinta</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Tu lugar ideal para compartir momentos inolvidables en un entorno natural y acogedor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces rápidos</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Seguinos</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://maps.google.com/?q=Av.+San+Fernando+6061,+Moreno"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Av. San Fernando 6061, entre las calles Pedro Agote y Las Bases, Cuartel V, Moreno, Buenos Aires
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Mi Refugio Quinta. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
