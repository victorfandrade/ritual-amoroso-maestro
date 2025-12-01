import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import MysticalBackground from "@/components/MysticalBackground";
import PageHeader from "@/components/PageHeader";
import DecorativeElements from "@/components/DecorativeElements";
import { LazyVideo } from "@/components/LazyVideo";

const Delivery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for symbol generation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleExplore = () => {
    window.location.href = "https://rituallumina7.mycartpanda.com/checkout/203307246:1";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          {/* Symbol being drawn */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="hsl(var(--primary))"
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
                stroke="hsl(var(--accent))"
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
            <h1 className="text-4xl md:text-5xl font-serif text-gradient">
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
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <MysticalBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        <PageHeader 
          title="Tu Ritual Lùmina-7 Está Listo"
          subtitle="Este es tu símbolo único del día. Úsalo ahora con el audio de 7 minutos."
        />

        {/* Symbol Display - Centered */}
        <div className="mb-8 sm:mb-12 fade-in-up flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Outer circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="hsl(275 60% 45%)"
                strokeWidth="2"
                className="animate-pulse"
              />
              
              {/* Inner geometric shape */}
              <path
                d="M 100 40 L 140 80 L 140 120 L 100 160 L 60 120 L 60 80 Z"
                fill="hsl(295 70% 65% / 0.2)"
                stroke="hsl(295 70% 65%)"
                strokeWidth="2"
              />
              
              {/* Center point */}
              <circle
                cx="100"
                cy="100"
                r="5"
                fill="hsl(275 60% 45%)"
              />
              
              {/* Connecting lines */}
              <line x1="100" y1="40" x2="100" y2="160" stroke="hsl(275 60% 45%)" strokeWidth="1" opacity="0.5" />
              <line x1="60" y1="80" x2="140" y2="120" stroke="hsl(295 70% 65%)" strokeWidth="1" opacity="0.5" />
              <line x1="60" y1="120" x2="140" y2="80" stroke="hsl(295 70% 65%)" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-6 sm:space-y-8">
          {/* Ritual Instructions */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 sm:p-6 md:p-8 fade-in-up mystical-glow">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6 text-gradient">
              Cómo Hacer El Ritual
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/90">
              <p className="leading-relaxed">
                <strong>1. Encuentra un lugar donde puedas estar solo durante 7 minutos.</strong>
              </p>
              <p className="leading-relaxed">
                <strong>2. Usa audífonos</strong> — El audio fue calibrado para generar micro-desplazamientos en tu eje interno.
              </p>
              <p className="leading-relaxed">
                <strong>3. No trates de entender todo lo que escuches.</strong> El Ritual Lùmina-7 no funciona con tu mente lógica.
              </p>
              <p className="leading-relaxed">
                La mayoría siente algo sutil al terminar: más claridad, menos peso mental, o simplemente… alineación.
              </p>
            </div>

            {/* Video Player */}
            <div className="mt-6 sm:mt-8">
              <LazyVideo
                src="https://www.youtube.com/embed/5oQ_wao60HQ"
                title="Ritual Lùmina-7 Audio"
                className="relative w-full aspect-video rounded-lg overflow-hidden mystical-glow border border-primary/20"
              />
            </div>
          </div>

          {/* Anclaje Exercise */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 sm:p-6 md:p-8 fade-in-up mystical-glow">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6 text-gradient">
              Anclaje — 30 Segundos
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/90">
              <p className="leading-relaxed">
                Antes de continuar con tu día, cierra el proceso con este micro-ejercicio:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 sm:p-5">
                <ol className="space-y-2 sm:space-y-3 list-decimal list-inside">
                  <li className="leading-relaxed">Coloca una mano sobre tu pecho.</li>
                  <li className="leading-relaxed">Respira lento 3 veces — Inhalando por la nariz, exhalando por la boca.</li>
                  <li className="leading-relaxed">Di mentalmente: "Mi eje ya se cerró".</li>
                </ol>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Este anclaje sella el movimiento interno que acabas de recolocar.
              </p>
            </div>
          </div>

          {/* Symbol Interpretation */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 sm:p-6 md:p-8 fade-in-up mystical-glow">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6 text-gradient">
              Interpretación De Tu Símbolo
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/90">
              <p className="leading-relaxed">
                <strong>Tu símbolo:</strong> Hexágono vertical con eje central
              </p>
              <p className="leading-relaxed">
                Este patrón aparece cuando tu estado interno tiene <strong>apertura en la base</strong> pero <strong>estructura arriba</strong>.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-5 space-y-2">
                <p className="font-medium text-primary">Qué Significa:</p>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm list-disc list-inside ml-2">
                  <li>Tu forma interna está intentando cerrar, pero algo la mantiene ligeramente abierta.</li>
                  <li>No es colapso total — es una <strong>micro-apertura</strong> que genera dispersión leve.</li>
                  <li>El Ritual Lùmina-7 recalibra esa geometría para que vuelva a su eje natural.</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                <strong>Tu activación:</strong> Estado B-3 (movimiento dispersivo leve con anclaje emocional fuerte)
              </p>
              <p className="leading-relaxed">
                El patrón B-3 significa que tienes claridad mental pero <strong>inestabilidad emocional leve</strong>. El ritual ajusta ese desequilibrio sin forzar.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Este símbolo solo es válido hoy. Mañana, tu estado interno habrá cambiado.
              </p>
            </div>
          </div>

          {/* Upsell to Lùmina-21 */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-lg p-5 sm:p-6 md:p-8 fade-in-up mystical-glow-intense">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6 text-gradient">
              Lùmina-21: La Continuidad
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/90">
              <p className="leading-relaxed">
                El Ritual Lùmina-7 cierra tu eje <strong>hoy</strong>. Pero tu forma interna sigue moviéndose cada día.
              </p>
              <p className="leading-relaxed font-medium text-accent">
                Lùmina-21 mantiene tu geometría estable durante 21 días — sin dispersión, sin reapertura.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 list-disc list-inside ml-2 text-xs sm:text-sm">
                <li>Audios diarios de 2 minutos (en lugar de 7)</li>
                <li>Estabilización progresiva de tu eje</li>
                <li>Sin recaídas en patrones antiguos</li>
              </ul>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                La mayoría de personas que usan Lùmina-21 reportan mayor claridad sostenida y menos peso emocional acumulado.
              </p>
            </div>
            <Button 
              onClick={handleExplore}
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-medium gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense mt-6"
            >
              Explorar Lùmina-21 →
            </Button>
          </div>

          {/* Final Note */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-5 sm:p-6 md:p-8 fade-in-up mystical-glow">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6 text-gradient">
              Última Aclaración
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/90">
              <p className="leading-relaxed">
                El Ritual Lùmina-7 <strong>no es magia</strong>. Es una práctica simbólica diseñada para generar micro-ajustes en tu percepción interna.
              </p>
              <p className="leading-relaxed">
                Algunas personas sienten el efecto de inmediato. Otras lo notan horas después. Y otras simplemente experimentan mayor claridad sin saber exactamente por qué.
              </p>
              <p className="leading-relaxed font-medium text-accent">
                No tienes que creer para que funcione. Solo tienes que hacerlo.
              </p>
            </div>
          </div>
        </div>

        <DecorativeElements />
      </div>
    </div>
  );
};

export default Delivery;