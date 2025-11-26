import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderBump1 = () => {
  const handleDownload = () => {
    window.open("https://drive.google.com/uc?export=download&id=1TUO-bf_dqNinPfWZmjS4_2ncMu0_KOyC", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-mystical-deep/20 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Decorative top */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 rounded-full bg-primary/20" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
            Mapa Lùmina de Tendencias Emocionales
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu guía personal para comprender los patrones emocionales que se manifiestan en tu eje interno.
          </p>
        </div>

        {/* Main content */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12 space-y-8">
          {/* Download section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Download className="w-10 h-10 text-primary" />
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-serif text-foreground">
                Tu Mapa Ya Está Listo
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Descarga tu Mapa Lùmina y descubre las tendencias emocionales que influyen en tu estado interno.
              </p>
            </div>

            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar Mapa PDF
            </Button>
          </div>

          {/* Info section */}
          <div className="border-t border-border/50 pt-8 space-y-4">
            <h3 className="text-xl font-serif text-foreground text-center mb-6">
              Qué Encontrarás en Tu Mapa
            </h3>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center space-y-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Patrones emocionales recurrentes
                </p>
              </div>
              
              <div className="text-center space-y-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary text-xl">◆</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tendencias de tu estado interno
                </p>
              </div>
              
              <div className="text-center space-y-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guía de interpretación personal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBump1;
