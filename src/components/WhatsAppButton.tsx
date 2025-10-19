import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "Hola! Me gustaría consultar sobre Mi Refugio Quinta.";
    const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-strong hover:shadow-xl transition-all hover:scale-110 animate-fade-in"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
