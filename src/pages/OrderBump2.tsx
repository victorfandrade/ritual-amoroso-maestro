import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderBump2 = () => {
  const handleDownloadPDF = () => {
    window.open("https://drive.google.com/uc?export=download&id=1_dkX7JUvXfJF453UzlZhbX7STsup6K-I", "_blank");
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
            Sello Lùmina de Protección Energética
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Activación de 72 horas para mantener tu eje protegido y estable.
          </p>
        </div>

        {/* Main content */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 md:p-12 space-y-8">
          {/* Video section */}
          <div className="space-y-6">
            <div className="text-center space-y-3 mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-serif text-foreground">
                Audio de Activación
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Escucha el audio de activación para iniciar la protección energética de 72 horas.
              </p>
            </div>

            <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-border/50 shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/1uWiMZ42PLQ"
                title="Sello Lùmina de Protección Energética"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* PDF Download section */}
          <div className="border-t border-border/50 pt-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30">
                <Download className="w-10 h-10 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-serif text-foreground">
                  Guía de Protección
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Descarga la guía completa del Sello Lùmina con instrucciones detalladas para mantener la protección activa.
                </p>
              </div>

              <Button
                onClick={handleDownloadPDF}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar Guía PDF
              </Button>
            </div>
          </div>

          {/* Info section */}
          <div className="border-t border-border/50 pt-8 space-y-4">
            <h3 className="text-xl font-serif text-foreground text-center mb-6">
              Cómo Funciona el Sello
            </h3>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center space-y-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary text-xl">1</span>
                </div>
                <p className="text-sm font-medium text-foreground">Escucha el Audio</p>
                <p className="text-xs text-muted-foreground">
                  Activa la protección energética
                </p>
              </div>
              
              <div className="text-center space-y-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary text-xl">2</span>
                </div>
                <p className="text-sm font-medium text-foreground">Lee la Guía</p>
                <p className="text-xs text-muted-foreground">
                  Comprende el proceso completo
                </p>
              </div>
              
              <div className="text-center space-y-2 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary text-xl">3</span>
                </div>
                <p className="text-sm font-medium text-foreground">Mantén la Protección</p>
                <p className="text-xs text-muted-foreground">
                  72 horas de estabilidad
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

export default OrderBump2;
