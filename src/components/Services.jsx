import { Pizza, Calendar } from "lucide-react";
import pizzaPartyImage from "@/assets/pizza-party.jpg";
import quinchoImage from "@/assets/quincho.jpg";

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organizamos eventos con servicio de Pizza Party para disfrutar al aire libre
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pizza Party Service */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-natural hover:shadow-strong transition-all hover:-translate-y-2 animate-fade-in-up">
            <div className="relative h-64">
              <img
                src={pizzaPartyImage}
                alt="Pizza Party en Mi Refugio Quinta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Pizza className="w-12 h-12 mb-2" />
                <h3 className="text-2xl font-playfair font-bold">Pizza Party</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                Disfrutá de una deliciosa pizza party en nuestro parque. Ideal para cumpleaños, 
                reuniones familiares y celebraciones al aire libre. Incluye preparación en el momento 
                y servicio completo.
              </p>
            </div>
          </div>

          {/* Custom Events Service */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-natural hover:shadow-strong transition-all hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-64">
              <img
                src={quinchoImage}
                alt="Eventos Personalizados en Mi Refugio Quinta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Calendar className="w-12 h-12 mb-2" />
                <h3 className="text-2xl font-playfair font-bold">Eventos Personalizados</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                Armá tu evento a medida en nuestro quincho y parque. Contás con parrilla, 
                espacio al aire libre y todas las comodidades para hacer de tu celebración 
                un momento único e inolvidable.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground">
            <span className="font-bold text-accent">Capacidad para grupos grandes y pequeños</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
