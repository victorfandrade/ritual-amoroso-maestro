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
        {/* 1. WELCOME SECTION */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-gradient-primary animate-fade-in-up">
              Tu Ritual Lùmina-7 está listo para activarse
            </h1>
            <div className="space-y-4 text-foreground/70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg">
                Este ritual no cambia tu día.
              </p>
              <p className="text-lg">
                Solo ajusta tu punto de presencia para que tu eje deje de desplazarse hacia fuera.
              </p>
              <p className="text-base italic pt-4">
                En los próximos minutos podrías notar <span className="text-primary">micro-señales internas</span>: cambios sutiles que muestran que tu eje está respondiendo.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ESTADO ACTUAL B-3 */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-mystical-glow/20 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-serif text-center text-gradient-primary">
                Tu Activación: B-3 — Movimiento interno con eco externo
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  El B-3 no aparece en fluctuaciones comunes.
                </p>
                <p>Solo surge cuando coinciden tres elementos:</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li><strong>Una señal interna sutil</strong></li>
                  <li><strong>Una micro-reacción externa que hizo eco</strong></li>
                  <li><strong>Una repetición mínima del mismo patrón emocional</strong></li>
                </ol>
                <p className="pt-4">
                  Este cruce es poco frecuente y muestra que tu eje recibió un micro-impacto que aún no absorbió por completo.
                </p>
                <p className="italic text-primary">
                  Lo que vas a recibir ahora está diseñado para estabilizar ese punto antes de que el ciclo se amplifique.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 3. TU SÍMBOLO LÙMINA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif text-center text-gradient-primary">
              Tu Símbolo Único dentro de la Matriz Lùmina
            </h2>
            
            <div className="space-y-4 text-foreground/80 text-center max-w-2xl mx-auto">
              <p>En Lùmina existen <strong className="text-primary">14 familias principales de símbolos</strong>.</p>
              <p>Cada familia representa una geometría distinta del eje.</p>
              <p>
                Tu símbolo pertenece a una <strong>variación específica dentro de esa familia</strong>, activada solo cuando aparece el triángulo:
              </p>
              <p className="text-primary italic">
                <strong>señal → eco externo → repetición interna</strong>
              </p>
              <p>
                Esto explica por qué tu símbolo <strong>no es aleatorio</strong>: es la expresión visual del patrón que activaste.
              </p>
            </div>

            {/* Complex Animated Symbol */}
            <div className="relative w-80 h-80 mx-auto my-12">
              <svg className="w-full h-full animate-fade-in-up" viewBox="0 0 300 300" style={{ animationDelay: '0.4s' }}>
                <defs>
                  <linearGradient id="symbolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="hsl(var(--mystical-glow))" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="hsl(var(--ethereal-light))" stopOpacity="0.7" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main pulsating and rotating group */}
                <g className="origin-center" style={{ animation: 'symbolPulse 4s ease-in-out infinite, symbolRotate 20s linear infinite' }} filter="url(#glow)">
                  {/* Outer circle */}
                  <circle
                    cx="150"
                    cy="150"
                    r="110"
                    fill="none"
                    stroke="url(#symbolGradient)"
                    strokeWidth="1.5"
                    className="opacity-40"
                  />
                  
                  {/* Secondary circle */}
                  <circle
                    cx="150"
                    cy="150"
                    r="90"
                    fill="none"
                    stroke="hsl(var(--mystical-glow))"
                    strokeWidth="1"
                    className="opacity-50"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Inner sacred geometry - hexagon */}
                  <polygon
                    points="150,60 210,97.5 210,172.5 150,210 90,172.5 90,97.5"
                    fill="none"
                    stroke="hsl(var(--ethereal-light))"
                    strokeWidth="2"
                    className="opacity-70"
                  />
                  
                  {/* Star pattern */}
                  <path
                    d="M 150 70 L 150 200 M 80 120 L 220 150 M 80 180 L 220 150"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                  
                  {/* Pentagon center */}
                  <polygon
                    points="150,100 175,125 162,155 138,155 125,125"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    className="opacity-80"
                  />
                  
                  {/* Triangular elements */}
                  <path
                    d="M 120 120 L 150 90 L 180 120 Z"
                    fill="none"
                    stroke="hsl(var(--ethereal-light))"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                  <path
                    d="M 120 180 L 150 210 L 180 180 Z"
                    fill="none"
                    stroke="hsl(var(--ethereal-light))"
                    strokeWidth="1.5"
                    className="opacity-60"
                  />
                  
                  {/* Cross pattern */}
                  <path
                    d="M 150 80 L 150 220 M 80 150 L 220 150"
                    fill="none"
                    stroke="hsl(var(--mystical-glow))"
                    strokeWidth="0.5"
                    className="opacity-40"
                  />
                  
                  {/* Orbital circles */}
                  <circle cx="150" cy="80" r="5" fill="hsl(var(--primary))" className="opacity-70">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="220" cy="150" r="5" fill="hsl(var(--ethereal-light))" className="opacity-70">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                  <circle cx="150" cy="220" r="5" fill="hsl(var(--mystical-glow))" className="opacity-70">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="80" cy="150" r="5" fill="hsl(var(--primary))" className="opacity-70">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  
                  {/* Central point */}
                  <circle
                    cx="150"
                    cy="150"
                    r="8"
                    fill="hsl(var(--primary))"
                    className="opacity-90"
                  />
                </g>
              </svg>
            </div>

            <p className="text-center text-foreground/60 italic">
              Familia Lùmina VII — Variación 3.12
            </p>

            <div className="text-center">
              <Button 
                onClick={handleDownload}
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar tu símbolo (PNG)
              </Button>
            </div>
          </div>
        </section>

        {/* 4. QUÉ PODRÍAS NOTAR */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-ethereal-light/20 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-serif text-center text-gradient-primary">
                Qué podrías notar durante los próximos minutos
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>No esperes sensaciones fuertes.</p>
                <p>El Ritual trabaja en micro-ajustes internos.</p>
                <p className="pt-2">Pon atención a señales muy leves como:</p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>un alivio mínimo en la respiración</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>una pequeña descarga de tensión en pecho o cuello</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>una sensación discreta de "acomodamiento"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>una breve pausa mental, como si el ruido bajara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>una micro-presencia, incluso si dura segundos</span>
                  </li>
                </ul>
                <p className="pt-4 italic text-primary">
                  Cualquiera de estas señales —por leve que sea— indica que el Ritual está actuando.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 5. RITUAL AUDIO SECTION */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-mystical-glow/20 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-serif text-center text-gradient-primary">
                Activa tu Ritual ahora
              </h2>

              <div className="space-y-4 text-foreground/70 text-center">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Usa audífonos.</li>
                  <li>Mira tu símbolo durante los primeros segundos.</li>
                  <li>Inicia el audio.</li>
                  <li>Deja que el ritmo de la respiración conduzca tu eje hacia dentro.</li>
                </ol>
              </div>

              {/* Audio Player */}
              <div className="bg-background/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={toggleAudio}
                    size="lg"
                    className="rounded-full w-20 h-20 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Progress bar placeholder */}
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full transition-all duration-300" style={{ width: '0%' }} />
                </div>
                <p className="text-center text-sm text-muted-foreground">7:00</p>
              </div>

              <p className="text-center text-foreground/70 italic pt-4">
                Ritual Lùmina-7
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 6. ANCLAJE 30 SEGUNDOS */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-serif text-center text-gradient-primary">
                30 segundos clave para fijar tu eje
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>Al terminar el audio, cierra los ojos por 30 segundos y observa:</p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>si algo dentro de ti "se acomodó" ligeramente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>si la respiración se volvió un poco más amplia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>si tu símbolo dejó una impresión sutil en tu visión interna</span>
                  </li>
                </ul>
                <p className="pt-4">No tiene que ser intenso.</p>
                <p className="italic text-primary">
                  El efecto del Ritual está justamente en <strong>ese nivel mínimo</strong>, donde el ajuste ocurre antes de convertirse en sensación fuerte.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 7. INTERPRETACIÓN PERSONALIZADA */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-ethereal-light/20 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-serif text-center text-gradient-primary">
                Lo que revela tu combinación
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  Tu símbolo + tu B-3 indican que tu eje reaccionó a un micro-impacto reciente.
                </p>
                <p>No es negativo.</p>
                <p>Solo significa que estás en una fase donde:</p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>lo interno responde más rápido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>lo externo te afecta un poco más</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>tu claridad depende de volver al centro antes de 24–48h</span>
                  </li>
                </ul>
                <p className="pt-4 text-muted-foreground italic text-sm">
                  Esta interpretación se siente personalizada, pero se basa únicamente en las variables que tú mismo activaste.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 8. CONTINUITY SECTION - UPSELL */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8 space-y-6 text-center">
              <h2 className="text-2xl font-serif text-gradient-primary">
                Si el B-3 ya apareció, el siguiente paso es evitar que regrese
              </h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  El Lùmina-7 estabiliza tu eje para <em>este momento</em>.
                </p>
                <p>
                  Pero el patrón que se activó suele reaparecer entre 7 y 10 días si no hay continuidad interna.
                </p>
                <p>
                  Por eso quienes activan un B-3 suelen pasar al <strong className="text-primary">Lùmina-21</strong>, que genera un ajuste diario y cierra el ciclo.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/5 mt-4"
                onClick={() => window.location.href = '/upsell'}
              >
                Explorar Lùmina-21
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* 9. FINAL SECTION */}
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border-mystical-glow/20 shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-serif text-center text-gradient-primary">
                No busques una transformación. Busca una señal mínima.
              </h2>
              <div className="space-y-4 text-foreground/80 text-center">
                <p>
                  La lógica Lùmina no opera con "cambios drásticos".
                </p>
                <p>
                  Opera con <strong className="text-primary">micro-movimientos del eje</strong> que tu cuerpo reconoce de inmediato.
                </p>
                <p className="pt-4">Si notaste:</p>
                <ul className="space-y-2 inline-block text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>una pausa leve</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>una respiración más profunda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>un instante de claridad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>un ajuste interno mínimo</span>
                  </li>
                </ul>
                <p className="pt-4 text-primary font-semibold">
                  … es suficiente.
                </p>
                <p className="text-foreground/80">
                  Tu eje ya respondió.
                </p>
              </div>
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