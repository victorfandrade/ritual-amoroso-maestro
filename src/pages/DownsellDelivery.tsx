import { Download, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownsellDelivery = () => {
  const handleDownload = () => {
    // Replace with actual downsell delivery link
    window.open("https://drive.google.com/uc?export=download&id=YOUR_DOWNSELL_FILE_ID", "_blank");
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
            Refuerzo Lùmina: Tu Guía De 7 Días
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una semana de práctica intensiva para fortalecer tu conexión interna.
          </p>
        </div>

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
                  Tu Refuerzo De 7 Días Ya Está Listo
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Descarga tu guía de refuerzo Lùmina y continúa fortaleciendo tu eje interno durante la próxima semana.
                </p>
              </div>

              <Button
                onClick={handleDownload}
                size="lg"
                className="group w-full sm:w-auto h-14 text-lg font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Download className="w-5 h-5 mr-2 relative" />
                <span className="relative">Descargar Guía De Refuerzo</span>
              </Button>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Qué Incluye El Refuerzo
            </h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  7 Audios De Refuerzo Diario
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-accent text-xl">◆</span>
                </div>
                <p className="text-foreground/90">
                  Prácticas De Consolidación
                </p>
              </div>
              
              <div className="text-center space-y-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 mx-auto mb-3 flex items-center justify-center mystical-glow">
                  <span className="text-primary text-xl">◇</span>
                </div>
                <p className="text-foreground/90">
                  Ejercicios De Estabilización
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif text-gradient text-center mb-8">
              Cómo Usar Tu Refuerzo
            </h3>
            
            <div className="space-y-4 text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              <p>
                <span className="font-medium text-primary">Día 1-3:</span> Reconexión con tu eje interno.
              </p>
              <p>
                <span className="font-medium text-accent">Día 4-5:</span> Profundización de la estabilidad.
              </p>
              <p>
                <span className="font-medium text-primary">Día 6-7:</span> Integración y consolidación final.
              </p>
              <p className="text-muted-foreground italic pt-4">
                Dedica al menos 10 minutos cada día a tu práctica. La regularidad en estos 7 días hará la diferencia.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-8 w-24 h-24 border-2 border-primary/20 rounded-full floating" />
        <div className="absolute bottom-32 left-8 w-32 h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default DownsellDelivery;
