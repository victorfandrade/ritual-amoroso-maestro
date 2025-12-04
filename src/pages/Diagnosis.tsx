import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import MysticalBackground from "@/components/MysticalBackground";
import PageHeader from "@/components/PageHeader";
import DecorativeElements from "@/components/DecorativeElements";

const Diagnosis = () => {
  const handleCheckout = () => {
    window.location.href = "https://rituallumina7.mycartpanda.com/checkout/202980015:1";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <MysticalBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        <PageHeader 
          title="Tu Símbolo Ya Emergió. Tu Eje Mostró Un Movimiento Real Hoy."
          subtitle="Lo que sentiste no fue casual: fue una señal interna que se activó sin que lo notaras. Ahora, mira el video rápido abajo para identificar tu diagnóstico."
        />

        {/* YouTube Video Section */}
        <div className="mb-12 fade-in-up">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mystical-glow border border-primary/20">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Dr8dNTWxT4Y?enablejsapi=1&rel=0&modestbranding=1"
              title="Lùmina-7 Diagnóstico"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        {/* Content Sections Below VSL */}
        <div className="space-y-8">
          {/* Lectura del Movimiento Interno */}
          <Card className="p-6 md:p-8 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
            <h2 className="text-2xl md:text-3xl font-serif text-gradient mb-6">
              Lectura Del Movimiento Interno
            </h2>
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
            <h2 className="text-2xl md:text-3xl font-serif text-gradient mb-6">
              Por Qué Tu Símbolo Importa Hoy
            </h2>
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
            <h2 className="text-2xl md:text-3xl font-serif text-gradient mb-6">
              Lo Que Hace El Ritual Lùmina-7
            </h2>
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
            className="group w-full h-16 text-xl font-serif font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="relative">Activar Lùmina-7 Ahora</span>
            <Sparkles className="w-6 h-6 ml-2 group-hover:-rotate-12 transition-transform" />
          </Button>
        </div>

        <DecorativeElements />
      </div>
    </div>
  );
};

export default Diagnosis;
