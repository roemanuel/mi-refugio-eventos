import { Trees, Waves, ParkingCircle, UtensilsCrossed, Flame, Baby, Wine, Bath, Users } from "lucide-react";
import parkImage from "@/assets/park.jpg";

const features = [
  { icon: Trees, label: "Parque" },
  { icon: Waves, label: "Pileta" },
  { icon: ParkingCircle, label: "Estacionamiento" },
  { icon: UtensilsCrossed, label: "Quincho" },
  { icon: Flame, label: "Sector Parrillero" },
  { icon: Baby, label: "Juegos Para Niños" },
  { icon: Wine, label: "Barra" },
  { icon: Bath, label: "Baño" },
];

const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src={parkImage}
              alt="Parque de Mi Refugio Quinta"
              className="rounded-2xl shadow-strong w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Un espacio pensado para cualquier evento
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Contamos con un parque, pileta, quincho, sector parrillero, juegos para niños, 
              barra y baño, todo dentro de un entorno natural y tranquilo para disfrutar 
              en familia o con amigos.
            </p>

            <p className="flex items-center gap-3 text-muted-foreground mb-8">
              <Users className="w-5 h-5 text-accent" />
              <span>Capacidad máxima de 50 personas</span>
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-card rounded-xl shadow-soft hover:shadow-natural transition-all hover:-translate-y-1"
                >
                  <feature.icon className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
