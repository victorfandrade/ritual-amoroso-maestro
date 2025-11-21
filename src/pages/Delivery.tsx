import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Play, Pause } from "lucide-react";

const Delivery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Show loading screen for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    // Download functionality would go here
    console.log("Downloading symbol...");
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-mystical-deep/20 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mystical-glow/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ethereal-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          {/* Symbol being drawn */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Animated symbol paths */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="hsl(var(--mystical-glow))"
                strokeWidth="2"
                strokeDasharray="440"
                strokeDashoffset="0"
                className="opacity-60"
                style={{
                  animation: 'drawCircle 3s ease-in-out infinite',
                }}
              />
              <path
                d="M 100 30 L 100 170 M 30 100 L 170 100"
                fill="none"
                stroke="hsl(var(--ethereal-light))"
                strokeWidth="2"
                strokeDasharray="280"
                strokeDashoffset="0"
                className="opacity-80"
                style={{
                  animation: 'drawCross 3s ease-in-out infinite',
                  animationDelay: '0.5s',
                }}
              />
              <polygon
                points="100,50 130,90 120,130 80,130 70,90"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="300"
                strokeDashoffset="0"
                className="opacity-70"
                style={{
                  animation: 'drawPoly 3s ease-in-out infinite',
                  animationDelay: '1s',
                }}
              />
            </svg>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-gradient-primary">
              Generando tu símbolo…
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Leyendo el movimiento interno que activaste hoy.
            </p>
            <p className="text-sm text-muted-foreground/60 pt-4">
              Esto puede tomar unos segundos.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes drawCircle {
            0%, 100% { stroke-dashoffset: 440; opacity: 0.3; }
            50% { stroke-dashoffset: 0; opacity: 0.8; }
          }
          @keyframes drawCross {
            0%, 100% { stroke-dashoffset: 280; opacity: 0.4; }
            50% { stroke-dashoffset: 0; opacity: 0.9; }
          }
          @keyframes drawPoly {
            0%, 100% { stroke-dashoffset: 300; opacity: 0.3; }
            50% { stroke-dashoffset: 0; opacity: 0.8; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-mystical-deep/20">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mystical-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-ethereal-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif text-gradient-primary animate-fade-in-up">
              Tu símbolo Lùmina ya emergió.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Es la geometría exacta del movimiento interno que activaste hoy.
            </p>

            {/* Animated Symbol */}
            <div className="relative w-64 h-64 mx-auto my-12">
              <svg className="w-full h-full animate-fade-in-up" viewBox="0 0 200 200" style={{ animationDelay: '0.4s' }}>
                {/* Pulsating and rotating symbol */}
                <g className="origin-center" style={{ animation: 'symbolPulse 4s ease-in-out infinite, symbolRotate 20s linear infinite' }}>
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="hsl(var(--mystical-glow))"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                  <path
                    d="M 100 30 L 100 170 M 30 100 L 170 100"
                    fill="none"
                    stroke="hsl(var(--ethereal-light))"
                    strokeWidth="2"
                    className="opacity-80"
                  />
                  <polygon
                    points="100,50 130,90 120,130 80,130 70,90"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    className="opacity-70"
                  />
                  {/* Subtle golden accent */}
                  <circle
                    cx="100"
                    cy="100"
                    r="5"
                    fill="hsl(var(--primary))"
                    className="opacity-90"
                  />
                </g>
              </svg>
            </div>

            <Button 
              onClick={handleDownload}
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar tu símbolo (PNG)
            </Button>
          </div>
        </section>

        {/* RITUAL AUDIO SECTION */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-mystical-glow/20 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-serif text-center text-gradient-primary">
                Ritual Lùmina-7 — Re-alinéate en 7 minutos
              </h2>

              {/* Audio Player */}
              <div className="bg-background/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={toggleAudio}
                    size="lg"
                    variant="outline"
                    className="rounded-full w-16 h-16 border-primary/30 hover:border-primary hover:bg-primary/10"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6 text-primary" />
                    ) : (
                      <Play className="h-6 w-6 text-primary ml-1" />
                    )}
                  </Button>
                </div>

                {/* Progress bar placeholder */}
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '0%' }} />
                </div>
              </div>

              <p className="text-center text-foreground/70 italic">
                Escucha. Respira. Visualiza la forma. Tu eje se recentra ahora.
              </p>

              <Button
                variant="ghost"
                className="w-full hover:bg-primary/5"
              >
                Repetir Ritual Cuando Lo Necesites
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* THREE FORCES SECTION */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Force 1 */}
            <Card className="bg-card/50 backdrop-blur-sm border-mystical-glow/20 hover:border-mystical-glow/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <polygon
                      points="50,20 70,40 60,70 40,70 30,40"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="200"
                      strokeDashoffset="0"
                      style={{ animation: 'drawSymbol 2s ease-in-out infinite' }}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gradient-primary">
                  Tu Símbolo Único
                </h3>
                <p className="text-sm text-muted-foreground">
                  La forma que ves es la geometría del movimiento que activaste hoy.
                </p>
              </CardContent>
            </Card>

            {/* Force 2 */}
            <Card className="bg-card/50 backdrop-blur-sm border-ethereal-light/20 hover:border-ethereal-light/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="hsl(var(--ethereal-light))"
                      strokeWidth="2"
                      style={{ animation: 'breathe 3s ease-in-out infinite' }}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gradient-primary">
                  El Ritmo Respiratorio
                </h3>
                <p className="text-sm text-muted-foreground">
                  El audio recoloca tu eje y corta la dispersión.
                </p>
              </CardContent>
            </Card>

            {/* Force 3 */}
            <Card className="bg-card/50 backdrop-blur-sm border-mystical-glow/20 hover:border-mystical-glow/40 transition-all duration-300">
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M 30 70 L 50 30 L 70 70 Z"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      style={{ animation: 'stabilize 2.5s ease-in-out infinite' }}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-gradient-primary">
                  La Estabilización
                </h3>
                <p className="text-sm text-muted-foreground">
                  La visualización final estabiliza la forma antes de que siga creciendo.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CONTINUITY SECTION */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 space-y-6 text-center">
              <h2 className="text-2xl font-serif text-gradient-primary">
                Tu proceso continúa.
              </h2>
              <p className="text-foreground/70">
                La forma que se abrió hoy puede estabilizarse más allá de este ritual. Mantener presencia evita que la geometría vuelva a dispersarse.
              </p>
              <Button
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
                onClick={() => window.open('https://cartpanda.com.br/', '_blank')}
              >
                Explorar Lùmina-21
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* FOOTER */}
        <footer className="container mx-auto px-4 py-12 text-center">
          <p className="text-xs text-muted-foreground/60">
            Experiencia simbólica y ritualística. Sin promesas terapéuticas o religiosas.
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes symbolPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes symbolRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes drawSymbol {
          0%, 100% { stroke-dashoffset: 200; opacity: 0.5; }
          50% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes breathe {
          0%, 100% { r: 25px; opacity: 0.6; }
          50% { r: 35px; opacity: 1; }
        }
        @keyframes stabilize {
          0%, 100% { stroke-dasharray: 0, 200; opacity: 0.5; }
          50% { stroke-dasharray: 200, 0; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Delivery;