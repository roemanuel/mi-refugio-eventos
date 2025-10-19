import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

import heroPool from "@/assets/hero-pool.jpg";
import park from "@/assets/park.jpg";
import quincho from "@/assets/quincho.jpg";
import pizzaParty from "@/assets/pizza-party.jpg";
import poolSunset from "@/assets/pool-sunset.jpg";
import eventNight from "@/assets/event-night.jpg";
import playground from "@/assets/playground.jpg";
import gatheringDay from "@/assets/gathering-day.jpg";

const galleryImages = [
  { src: heroPool, alt: "Piscina y parque", category: "dia" },
  { src: park, alt: "Parque arbolado", category: "dia" },
  { src: quincho, alt: "Quincho con parrilla", category: "dia" },
  { src: pizzaParty, alt: "Pizza Party", category: "eventos" },
  { src: poolSunset, alt: "Piscina al atardecer", category: "dia" },
  { src: eventNight, alt: "Evento nocturno", category: "noche" },
  { src: playground, alt: "Juegos para niños", category: "dia" },
  { src: gatheringDay, alt: "Reunión familiar", category: "eventos" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("todo");

  const filteredImages = filter === "todo" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === filter);

  const filters = [
    { label: "Todo", value: "todo" },
    { label: "Día", value: "dia" },
    { label: "Noche", value: "noche" },
    { label: "Eventos", value: "eventos" },
  ];

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Galería
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubrí los espacios de nuestra quinta
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.value}
              variant={filter === filterOption.value ? "default" : "outline"}
              onClick={() => setFilter(filterOption.value)}
              className={
                filter === filterOption.value
                  ? "bg-primary text-primary-foreground"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {filterOption.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-natural hover:shadow-strong transition-all hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-medium p-6 text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center animate-fade-in">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-medium"
          >
            <Instagram className="w-6 h-6" />
            Ver más fotos en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
