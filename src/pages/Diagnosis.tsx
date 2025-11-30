import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";

const Diagnosis = () => {
  const handleCheckout = () => {
    window.location.href = "https://rituallumina7.mycartpanda.com/checkout/202980015:1";
  };

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
            Tu símbolo ya emergió. Tu eje mostró un movimiento real hoy.
          </h1>
          <p className="text-lg text-muted-foreground">
            Lo que sentiste no fue casual: fue una señal interna que se activó sin que lo notaras.
          </p>
        </div>

        {/* YouTube Video Section */}
        <div className="mb-12 fade-in-up">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mystical-glow border border-primary/20">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ToEg_WNpUnE"
              title="Ritual Lùmina-7"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Content Sections Below VSL */}
        <div className="space-y-8">
          {/* Lectura del Movimiento Interno */}
          <Card className="p-6 md:p-8 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-serif text-gradient">
                Lectura Del Movimiento Interno
              </h2>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg font-medium text-primary">
                Estado Lùmina: Tipo B — apertura sutil del eje
              </p>
              <p>
                La apertura no rompe tu eje… pero lo dispersa.
              </p>
              <p className="font-medium">
                Tu patrón repetido confirma que el movimiento quiere continuar.
              </p>
            </div>
          </Card>

          {/* Por Qué Tu Símbolo Importa Hoy */}
          <Card className="p-6 md:p-8 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-serif text-gradient">
                Por Qué Tu Símbolo Importa Hoy
              </h2>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                El símbolo es la geometría exacta que tu estado adoptó hoy.
              </p>
              <p>
                Esa forma respira, se abre o se contrae según tu eje.
              </p>
              <p className="font-medium text-accent">
                Si esperas: la forma muda → la lectura deja de corresponder.
              </p>
            </div>
          </Card>

          {/* Lo Que Hace el Ritual Lùmina-7 */}
          <Card className="p-6 md:p-8 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-serif text-gradient">
                Lo Que Hace El Ritual Lùmina-7
              </h2>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <div className="bg-primary/10 p-5 rounded-lg border border-primary/30">
                <p className="font-medium mb-2 text-gradient">Tu Símbolo Único</p>
                <p className="text-sm">La geometría precisa del estado que activaste hoy</p>
              </div>
              <div className="bg-primary/10 p-5 rounded-lg border border-primary/30">
                <p className="font-medium mb-2 text-gradient">Audio De 7 Minutos Calibrado</p>
                <p className="text-sm">Recoloca tu eje y corta la dispersión</p>
              </div>
              <div className="bg-primary/10 p-5 rounded-lg border border-primary/30">
                <p className="font-medium mb-2 text-gradient">Visualización Guiada</p>
                <p className="text-sm">Cierra la apertura antes de que crezca</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="sticky bottom-6 z-20 fade-in-up mt-8">
          <Button
            onClick={handleCheckout}
            size="lg"
            className="group w-full h-16 text-xl font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="relative">Activar Lùmina-7 Ahora</span>
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

export default Diagnosis;