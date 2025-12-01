import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import MysticalBackground from "@/components/MysticalBackground";
import PageHeader from "@/components/PageHeader";
import DecorativeElements from "@/components/DecorativeElements";

const OrderBump2 = () => {
  const handleDownloadPDF = () => {
    window.open("https://drive.google.com/uc?export=download&id=1_dkX7JUvXfJF453UzlZhbX7STsup6K-I", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <MysticalBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        <PageHeader 
          title="Sello Lùmina De Protección Energética"
          subtitle="Activación de 72 horas para mantener tu eje protegido y estable."
        />

        {/* Main content */}
        <div className="space-y-8 fade-in-up">
          {/* Video section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <div className="text-center space-y-6 mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mystical-glow">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-gradient">
                Audio De Activación
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Escucha el audio de activación para iniciar la protección energética de 72 horas.
              </p>
            </div>

            <div className="aspect-video w-full rounded-lg overflow-hidden border border-primary/20 mystical-glow">
              <iframe
                src="https://www.youtube.com/embed/1uWiMZ42PLQ?enablejsapi=1&rel=0&modestbranding=1"
                title="Sello Lùmina de Protección Energética"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* PDF Download section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mystical-glow">
                <Download className="w-10 h-10 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-serif text-gradient">
                  Guía De Protección
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Descarga la guía completa del Sello Lùmina con instrucciones detalladas para mantener la protección activa.
                </p>
              </div>

              <Button
                onClick={handleDownloadPDF}
                size="lg"
                className="group w-full sm:w-auto h-14 text-lg font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download className="w-5 h-5 mr-2 relative" />
                <span className="relative">Descargar Guía PDF</span>
              </Button>
            </div>
          </div>

          {/* Info section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Cómo Funciona El Sello
            </h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl font-serif">1</span>
                </div>
                <p className="text-base font-medium text-foreground">Escucha El Audio</p>
                <p className="text-sm text-muted-foreground">
                  Activa la protección energética
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-accent text-xl font-serif">2</span>
                </div>
                <p className="text-base font-medium text-foreground">Lee La Guía</p>
                <p className="text-sm text-muted-foreground">
                  Comprende el proceso completo
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl font-serif">3</span>
                </div>
                <p className="text-base font-medium text-foreground">Mantén La Protección</p>
                <p className="text-sm text-muted-foreground">
                  72 horas de estabilidad
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

export default OrderBump2;
