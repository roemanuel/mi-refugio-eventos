import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
          Viví tu evento en un <br />
          <span className="text-accent-foreground">entorno rústico y familiar</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto font-light">
          Más que una quinta, un espacio para crear recuerdos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("contacto")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong text-lg px-8 py-6"
          >
            Agendá tu visita
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("galeria")}
            className="border-2 border-white bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-6"
          >
            Ver galería
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
