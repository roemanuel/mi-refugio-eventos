import { Pizza, PartyPopper, Users } from "lucide-react";
import pizzaPartyImage from "@/assets/pizza-party.jpg";
import quinchoImage from "@/assets/quincho.jpg";

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-6">
            Nuestros servicios
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Organizamos eventos con servicio de Pizza Party para disfrutar al aire libre.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pizza Party Card */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in-up">
            <img
              src={pizzaPartyImage}
              alt="Pizza Party"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Pizza className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-playfair font-bold text-primary">
                  Pizza Party
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Disfrutá de pizzas recién horneadas en un ambiente al aire libre, 
                perfecto para cumpleaños, reuniones familiares y celebraciones.
              </p>
            </div>
          </div>

          {/* Quincho Card */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-strong hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in-up">
            <img
              src={quinchoImage}
              alt="Quincho y Parrilla"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <PartyPopper className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-playfair font-bold text-primary">
                  Eventos Personalizados
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Quincho con parrilla, barra y espacio cubierto. Ideal para eventos 
                de cualquier tipo con la comodidad de un ambiente rústico y acogedor.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary-foreground/90 text-lg">
            <Users className="w-6 h-6" />
            <span className="font-medium">Capacidad para grupos grandes y pequeños</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
