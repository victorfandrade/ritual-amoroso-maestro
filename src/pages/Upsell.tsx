import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Star, Shield, CheckCircle } from "lucide-react";

const Upsell = () => {
  const handleCheckout = () => {
    window.location.href = "https://cartpanda.com.br/lumina21";
  };

  const handleDecline = () => {
    window.location.href = "/";
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
            Potencia tu Ritual Lùmina y mantén tu eje interno estable por más tiempo.
          </h1>
          <p className="text-lg text-muted-foreground">
            Accede al Protocolo Lùmina-Extendido y evita regresar al desequilibrio emocional de antes.
          </p>
        </div>

        {/* Main Content */}
        <Card className="p-8 md:p-12 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up mb-8">
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Confirmación + Conexión con tu compra */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <p className="text-lg">
                Acabas de activar tu eje interno con el Ritual Lùmina-7.
              </p>
              <p className="text-lg">
                Ese movimiento ya está funcionando dentro de ti… pero su efecto suele durar pocas horas si no se refuerza.
              </p>
              <p className="text-lg">
                Muchas personas sienten claridad inmediata, pero después vuelven a los mismos micro-patrones que abren la geometría interna otra vez.
              </p>
              <p className="text-lg font-medium">
                Para quienes no quieren perder lo que acaban de activar, existe un siguiente paso.
              </p>
            </div>

            {/* Section 2: Qué es el Protocolo Lùmina-Extendido 3D */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Qué es el Protocolo Lùmina-Extendido 3D
                </h2>
              </div>

              <p className="text-lg">
                Es una secuencia guiada diseñada para <strong>profundizar, fijar y prolongar</strong> la alineación que inicia el Ritual Lùmina-7.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 my-6">
                <p className="text-lg mb-3">
                  <strong>Incluye:</strong>
                </p>
                <ul className="space-y-2 text-lg">
                  <li>• Un ritual adicional de estabilización profunda.</li>
                  <li>• Una guía de micro-movimientos para mantener el eje cerrado durante el día.</li>
                  <li>• Un cierre energético de 3 minutos para evitar recaídas en el patrón Lùmina tipo B.</li>
                </ul>
              </div>

              <p className="text-lg font-medium text-center">
                El objetivo es simple: que la claridad y la estabilidad emocional duren <strong>mucho más</strong> que unas horas.
              </p>
            </div>

            {/* Section 3: Beneficios directos y medibles */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Beneficios directos y medibles
                </h2>
              </div>

              <ul className="space-y-3 text-lg">
                <li>• Alineación más estable durante el día.</li>
                <li>• Menos dispersión mental y menos micro-tensión.</li>
                <li>• Menos riesgo de "reapertura interna" después del Ritual Lùmina-7.</li>
                <li>• Capacidad de volver al eje en segundos.</li>
                <li>• Sensación de firmeza emocional continua.</li>
              </ul>

              <p className="text-lg font-medium text-center mt-6">
                Esto no compite con el ritual anterior; lo amplifica.
              </p>
            </div>

            {/* Section 4: Oferta especial solo ahora */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Oferta especial solo ahora
                </h2>
              </div>

              <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-10 rounded-lg border border-primary/40">
                <p className="text-lg mb-4">
                  El Protocolo Lùmina-Extendido tiene un precio regular de <span className="line-through">$37</span>,
                </p>
                <p className="text-lg mb-6">
                  pero por haber activado tu eje hace pocos minutos, puedes obtenerlo por:
                </p>
                <p className="text-5xl font-bold text-primary text-center mb-6">
                  $27
                </p>
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <p className="text-lg font-medium text-center m-0">
                    Esta oferta aparece una sola vez y no vuelve después.<br />
                    Si sales de esta página, el precio vuelve al valor completo.
                  </p>
                </div>
              </div>

              <p className="text-lg text-center font-medium mt-6">
                Acceso inmediato, sin esperas.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Principal - Section 5 */}
        <div className="space-y-6 fade-in-up">
          <Button
            onClick={handleCheckout}
            size="lg"
            className="group w-full h-16 text-xl font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Heart className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="relative">Sí, quiero mantener mi eje estable</span>
            <Heart className="w-6 h-6 ml-2 group-hover:-rotate-12 transition-transform" />
          </Button>

          <p className="text-center text-base text-muted-foreground font-medium">
            No dejes que tu eje vuelva a abrirse. Mantén la alineación que acabas de activar.
          </p>

          {/* CTA Secundário */}
          <div className="text-center pt-4">
            <button
              onClick={handleDecline}
              className="text-sm text-muted-foreground/60 hover:text-muted-foreground underline transition-colors"
            >
              No, prefiero regresar al desequilibrio.
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-8 w-24 h-24 border-2 border-primary/20 rounded-full floating" />
        <div className="absolute bottom-32 left-8 w-32 h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Upsell;
