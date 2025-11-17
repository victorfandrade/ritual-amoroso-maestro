import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, CheckCircle2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden">
      {/* Mystical background elements with animated energy lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-mystical-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="text-center space-y-6 sm:space-y-8 fade-in-up">
          {/* Mystical Icons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary floating" />
            <Heart className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-accent floating" style={{ animationDelay: '0.5s' }} />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-accent floating" style={{ animationDelay: '1s' }} />
          </div>

          {/* Main Heading - NEW CREATIVE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-gradient">El movimiento ya empezó…</span>
            <br />
            <span className="text-foreground">y no fue por ti.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Tu lectura detectó un retorno silencioso. Descubre quién reabrió el ciclo y qué hacer ahora.
          </p>

          {/* CTA Button - Sticky on mobile */}
          <div className="pt-6 sm:pt-8 px-2">
            <Button
              onClick={() => navigate("/quiz")}
              size="lg"
              className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-12 text-base sm:text-lg md:text-xl font-semibold gradient-mystical hover:opacity-90 transition-opacity mystical-glow-intense shadow-2xl w-full sm:w-auto sticky top-4 sm:static z-50"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
              <span className="leading-tight">Ver si el Hilo está activo</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2" />
            </Button>
          </div>

          {/* What you'll get - 3 bullets */}
          <div className="pt-8 sm:pt-12 max-w-2xl mx-auto px-2">
            <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-6">¿Qué obtendrás?</h2>
            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: "Diagnóstico inmediato (VSL 3–5 min)" },
                { icon: CheckCircle2, text: "Ritual de 3 Noches (PDF + audio opcional)" },
                { icon: CheckCircle2, text: "Pasos claros y ejecutables" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Micro-testimonial */}
          <div className="pt-8 sm:pt-12 max-w-2xl mx-auto px-2">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <p className="text-sm sm:text-base text-foreground/80 italic leading-relaxed">
                "Sentía que algo me jalaba hacia él… pero no sabía si era real. El ritual me mostró exactamente qué parte del Hilo debía alinear. En 72 horas, todo cambió."
              </p>
              <p className="text-accent font-semibold mt-2 sm:mt-3 text-sm sm:text-base">— María, 32 años</p>
            </div>
          </div>

          {/* Footer minimal */}
          <div className="pt-12 sm:pt-16 text-center px-2">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Política de privacidad</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-primary transition-colors">Preguntas frecuentes</a>
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
