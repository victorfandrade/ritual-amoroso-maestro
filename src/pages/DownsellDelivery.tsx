import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import MysticalBackground from "@/components/MysticalBackground";
import PageHeader from "@/components/PageHeader";
import DecorativeElements from "@/components/DecorativeElements";

const DownsellDelivery = () => {
  const handleDownload = () => {
    window.open("https://drive.google.com/drive/folders/1KK4iqVPx-MYNri3r5QLAu1ysNlnLNna5?usp=sharing", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <MysticalBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        <PageHeader 
          title="Lùmina 14 – Ritual De Reconexión Profunda"
          subtitle="14 días de áudios de 2 minutos para estabilizar la geometría que tu símbolo reveló."
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
                  Tu Ritual De 14 Días Ya Está Listo
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  El Lùmina-7 cierra el movimiento del día. El Lùmina-14 estabiliza la geometría que el símbolo reveló.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                size="lg"
                className="group w-full sm:w-auto h-14 text-lg font-serif font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download className="w-5 h-5 mr-2 relative" />
                <span className="relative">Descargar Lùmina 14</span>
              </Button>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Qué Incluye El Lùmina 14
            </h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  14 Áudios De 2 Minutos
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-accent text-xl">◆</span>
                </div>
                <p className="text-foreground/90">
                  Rotina Simbólica Diária
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  Estabilización Geométrica
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Cómo Usar Tu Ritual
            </h3>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              <p className="text-center text-lg mb-6 italic text-muted-foreground">
                "Tu símbolo no es estático. Es un proceso. Y el Lùmina-14 es la fase donde la forma se estabiliza."
              </p>
              <p>
                <span className="font-medium text-primary">Días 1-5:</span> Cierra el ciclo abierto por el diagnóstico.
              </p>
              <p>
                <span className="font-medium text-accent">Días 6-10:</span> Impide que la geometría se abra nuevamente.
              </p>
              <p>
                <span className="font-medium text-primary">Días 11-14:</span> Profundiza la lectura simbólica del estado.
              </p>
              <p className="text-muted-foreground italic pt-4">
                Solo 2 minutos diarios. La constancia en estos 14 días estabiliza la forma que el símbolo reveló.
              </p>
            </div>
          </div>
        </div>

        <DecorativeElements />
      </div>
    </div>
  );
};

export default DownsellDelivery;
