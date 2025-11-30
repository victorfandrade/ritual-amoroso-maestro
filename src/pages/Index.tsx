import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-mystical-glow/5 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent floating" />
            <Star className="w-8 h-8 text-primary floating" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="w-6 h-6 text-accent floating" style={{ animationDelay: '1s' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gradient">
            Revela La Geometría Interna De Tu Estado En Solo 7 Minutos.
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-8 fade-in-up space-y-8">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
            <p className="text-muted-foreground text-center italic">
              Tu símbolo está variando ahora. Solo podemos leer la forma que adoptó hoy.
            </p>
          </div>

          {/* How it works - 3 steps */}
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary/30 mx-auto flex items-center justify-center mystical-glow">
                <span className="text-2xl sm:text-3xl font-serif text-primary">1</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-foreground">Responde 5 Preguntas Simples.</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">No hay respuestas incorrectas</p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 border-2 border-accent/30 mx-auto flex items-center justify-center mystical-glow">
                <span className="text-2xl sm:text-3xl font-serif text-accent">2</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-foreground">Leemos Tu Estado Lùmina Del Día.</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Interpretación en tiempo real</p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary/30 mx-auto flex items-center justify-center mystical-glow">
                <span className="text-2xl sm:text-3xl font-serif text-primary">3</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-foreground">Recibes Tu Símbolo + El Audio De 7 Minutos.</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Entrega inmediata</p>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
            <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed italic">
              "Yo pensé que esto iba a ser otra cosa complicada… pero el Ritual Lùmina-7 fue tan simple que hice en menos de ocho minutos. Y lo que más me sorprendió es que sentí mi cabeza más clara al terminar. No sé cómo explicarlo, pero funciona." <span className="font-medium text-foreground">— Camila</span>
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => navigate("/quiz")}
            size="lg"
            className="group w-full h-16 text-xl font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="relative">Iniciar el Ritual</span>
            <Sparkles className="w-6 h-6 ml-2 group-hover:-rotate-12 transition-transform" />
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-8 w-24 h-24 border-2 border-primary/20 rounded-full floating" />
        <div className="absolute bottom-32 left-8 w-32 h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Index;