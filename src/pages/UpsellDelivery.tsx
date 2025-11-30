import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import MysticalBackground from "@/components/MysticalBackground";
import PageHeader from "@/components/PageHeader";
import DecorativeElements from "@/components/DecorativeElements";

const UpsellDelivery = () => {
  const handleDownload = () => {
    // Replace with actual upsell delivery link
    window.open("https://drive.google.com/uc?export=download&id=YOUR_UPSELL_FILE_ID", "_blank");
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
        <PageHeader 
          title="Lùmina 21 – Estabilización Profunda"
          subtitle="21 días de áudios de 3 minutos para profundizar la geometría que tu símbolo reveló."
        />

        {/* Main Content */}
        <div className="space-y-8 fade-in-up">
          {/* Welcome Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mystical-glow">
                <Download className="w-10 h-10 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-serif text-gradient">
                  Tu Guía De 21 Días Ya Está Lista
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Descarga tu programa completo Lùmina-21 y comienza el camino hacia la estabilización total de tu eje interno.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                size="lg"
                className="group w-full sm:w-auto h-14 text-lg font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download className="w-5 h-5 mr-2 relative" />
                <span className="relative">Descargar Programa Completo</span>
              </Button>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Qué Incluye Lùmina-21
            </h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  21 Audios Diarios Calibrados
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-accent text-xl">◆</span>
                </div>
                <p className="text-foreground/90">
                  Guía De Estabilización Progresiva
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  Sistema De Seguimiento Personal
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Cómo Usar Tu Programa
            </h3>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              <p>
                <span className="font-medium text-primary">Día 1-7:</span> Fase de Alineación - Establece tu base interna.
              </p>
              <p>
                <span className="font-medium text-accent">Día 8-14:</span> Fase de Integración - Profundiza la conexión con tu eje.
              </p>
              <p>
                <span className="font-medium text-primary">Día 15-21:</span> Fase de Estabilización - Consolida el movimiento interno.
              </p>
              <p className="text-muted-foreground italic pt-4">
                Escucha tu audio diario en el momento que mejor se adapte a tu rutina. La constancia es más importante que la perfección.
              </p>
            </div>
          </div>
        </div>

        <DecorativeElements />
      </div>
    </div>
  );
};

export default UpsellDelivery;
