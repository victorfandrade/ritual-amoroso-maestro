import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, Moon } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mystical-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-8 fade-in-up">
          {/* Mystical Icons */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Moon className="w-8 h-8 text-accent floating" />
            <Sparkles className="w-10 h-10 text-primary floating" style={{ animationDelay: '0.5s' }} />
            <Heart className="w-12 h-12 text-accent floating" style={{ animationDelay: '1s' }} />
            <Sparkles className="w-10 h-10 text-primary floating" style={{ animationDelay: '1.5s' }} />
            <Star className="w-8 h-8 text-accent floating" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            <span className="text-gradient">Ritual de Apertura</span>
            <br />
            <span className="text-foreground">de Caminos Amorosos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre qué está bloqueando tus conexiones amorosas y cómo el universo te guía hacia el amor verdadero
          </p>

          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-6 my-12 max-w-3xl mx-auto">
            {[
              {
                icon: Heart,
                text: "Identifica tu patrón energético amoroso",
              },
              {
                icon: Sparkles,
                text: "Libera bloqueos del pasado",
              },
              {
                icon: Star,
                text: "Abre camino a conexiones verdaderas",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 mystical-glow hover:scale-105 transition-transform"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-3 floating" />
                <p className="text-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={() => navigate("/quiz")}
              size="lg"
              className="h-16 px-12 text-xl font-semibold gradient-mystical hover:opacity-90 transition-opacity mystical-glow-intense shadow-2xl"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Descubrir Mi Diagnóstico Ahora
              <Sparkles className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✨ Solo toma 2 minutos · Completamente personalizado
            </p>
          </div>

          {/* Social proof / mystical element */}
          <div className="pt-12 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <p className="text-foreground/80 italic">
                "Este no es un test común. Es una lectura energética de tu momento amoroso actual, 
                diseñada para revelar exactamente qué está interrumpiendo tus conexiones."
              </p>
              <p className="text-accent font-semibold mt-3">— Método del Destino Vincular</p>
            </div>
          </div>
        </div>

        {/* Decorative mystical elements */}
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-primary/20 rounded-full floating" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default Index;
