import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import MysticalBackground from "@/components/MysticalBackground";
import PageHeader from "@/components/PageHeader";
import DecorativeElements from "@/components/DecorativeElements";

const OrderBump1 = () => {
  const handleDownload = () => {
    window.open("https://drive.google.com/uc?export=download&id=1TUO-bf_dqNinPfWZmjS4_2ncMu0_KOyC", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <MysticalBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        <PageHeader 
          title="Mapa Lùmina De Tendencias Emocionales"
          subtitle="Tu guía personal para comprender los patrones emocionales que se manifiestan en tu eje interno."
        />

        {/* Main content */}
        <div className="space-y-8 fade-in-up">
          {/* Download section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-4 mystical-glow">
                <Download className="w-10 h-10 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-serif text-gradient">
                  Tu Mapa Ya Está Listo
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Descarga tu Mapa Lùmina y descubre las tendencias emocionales que influyen en tu estado interno.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                size="lg"
                className="group w-full sm:w-auto h-14 text-lg font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download className="w-5 h-5 mr-2 relative" />
                <span className="relative">Descargar Mapa PDF</span>
              </Button>
            </div>
          </div>

          {/* Info section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Qué Encontrarás En Tu Mapa
            </h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  Patrones Emocionales Recurrentes
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-accent text-xl">◆</span>
                </div>
                <p className="text-foreground/90">
                  Tendencias De Tu Estado Interno
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  Guía De Interpretación Personal
                </p>
              </div>
            </div>
          </div>
        </div>

        <DecorativeElements />
      </div>
    </div>
  );
};

export default OrderBump1;
