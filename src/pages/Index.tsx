import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, Moon } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-mystical-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 fade-in-up">
          {/* Mystical Icons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <Moon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent floating" />
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary floating" style={{ animationDelay: '0.5s' }} />
            <Heart className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-accent floating" style={{ animationDelay: '1s' }} />
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary floating" style={{ animationDelay: '1.5s' }} />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent floating" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-gradient">Ritual de Apertura</span>
            <br />
            <span className="text-foreground">de Caminos Amorosos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Descubre qué está bloqueando tus conexiones amorosas y cómo el universo te guía hacia el amor verdadero
          </p>

          {/* Value propositions */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-12 max-w-3xl mx-auto px-2">
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
                className="p-4 sm:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 mystical-glow hover:scale-105 transition-transform"
              >
                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2 sm:mb-3 floating" />
                <p className="text-foreground text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8 px-2">
            <Button
              onClick={() => navigate("/quiz")}
              size="lg"
              className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 text-base sm:text-lg md:text-xl font-semibold gradient-mystical hover:opacity-90 transition-opacity mystical-glow-intense shadow-2xl w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
              <span className="leading-tight">Descubrir Mi Diagnóstico Ahora</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2" />
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-2">
              ✨ Solo toma 2 minutos · Completamente personalizado
            </p>
          </div>

          {/* Social proof / mystical element */}
          <div className="pt-8 sm:pt-12 max-w-2xl mx-auto px-2">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <p className="text-sm sm:text-base text-foreground/80 italic leading-relaxed">
                "Este no es un test común. Es una lectura energética de tu momento amoroso actual, 
                diseñada para revelar exactamente qué está interrumpiendo tus conexiones."
              </p>
              <p className="text-accent font-semibold mt-2 sm:mt-3 text-sm sm:text-base">— Método del Destino Vincular</p>
            </div>
          </div>
        </div>

        {/* Decorative mystical elements - hidden on mobile */}
        <div className="hidden md:block absolute top-20 right-20 w-20 h-20 lg:w-24 lg:h-24 border-2 border-primary/20 rounded-full floating" />
        <div className="hidden md:block absolute bottom-20 left-20 w-24 h-24 lg:w-32 lg:h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default Index;
