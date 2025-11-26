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
            Estabiliza la forma interna que tu símbolo reveló — en solo 2 minutos al día.
          </h1>
          <p className="text-lg text-muted-foreground">
            Accede al Lùmina 21 y evita que tu geometría vuelva a abrirse después del Ritual Lùmina-7.
          </p>
        </div>

        {/* Main Content */}
        <Card className="p-8 md:p-12 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up mb-8">
          <div className="prose prose-lg max-w-none">
            {/* 1. Conexión con la compra anterior */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Conexión con la compra anterior
                </h2>
              </div>

              <p className="text-lg">
                Hace unos minutos cerraste tu movimiento del día con el Ritual Lùmina-7.
              </p>
              
              <p className="text-lg">
                Ese cierre es real… pero es solo el <strong>primer paso del proceso simbólico</strong>.
              </p>

              <p className="text-lg">
                Lo que aún no está estabilizado es la <strong>forma interna</strong> asociada a tu símbolo.<br />
                Sin esta estabilización, la geometría vuelve a abrirse — a veces en horas.
              </p>

              <p className="text-lg font-medium">
                Aquí es donde la mayoría pierde la claridad que acabó de activar.
              </p>
            </div>

            {/* 2. Por qué existe el Lùmina 21 */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Por qué existe el Lùmina 21
                </h2>
              </div>

              <p className="text-lg">
                Tu símbolo no es estático.<br />
                Es un <strong>proceso en movimiento</strong>.
              </p>

              <p className="text-lg">
                El Lùmina-7 cierra el movimiento del día.<br />
                El <strong>Lùmina-21 estabiliza la forma que ese movimiento reveló</strong>.
              </p>

              <p className="text-lg">
                Este protocolo fue creado para quienes no quieren regresar al patrón emocional anterior…<br />
                y para quienes entienden que cerrar no es lo mismo que <strong>integrar</strong>.
              </p>
            </div>

            {/* 3. Qué incluye exactamente */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Qué incluye exactamente
                </h2>
              </div>

              <p className="text-lg mb-6">
                Durante 21 días recibirás audios de 2 minutos diseñados para:
              </p>

              <ul className="space-y-3 text-lg">
                <li>• Reforzar la presencia interna.</li>
                <li>• Mantener la geometría cerrada durante el día.</li>
                <li>• Evitar micro-aperturas que diluyen tu claridad.</li>
                <li>• Fortalecer la lectura simbólica del estado que surgió en tu diagnóstico.</li>
                <li>• Transformar el cierre diario en un <strong>proceso continuo</strong>, no un evento aislado.</li>
              </ul>

              <p className="text-lg font-medium italic text-center mt-8">
                Es una rutina simbólica breve, pero extremadamente precisa.
              </p>
            </div>

            {/* 4. Beneficios que el Lùmina-7 no cubre */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Beneficios que el Lùmina-7 no cubre
                </h2>
              </div>

              <ul className="space-y-3 text-lg">
                <li>• Estabilidad emocional acumulativa día tras día.</li>
                <li>• Menos recaídas en micro-patrones anteriores.</li>
                <li>• Mayor nitidez en tu lectura interna.</li>
                <li>• Sensación de eje firmado sin depender del ritual puntual.</li>
                <li>• Consolidación de la forma emocional asociada a tu símbolo.</li>
              </ul>

              <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 rounded-lg border border-primary/40 mt-8">
                <p className="text-xl font-medium text-center m-0">
                  El Lùmina-7 abre el portal.<br />
                  El Lùmina-21 fija la estructura.
                </p>
              </div>
            </div>

            {/* 5. Oferta única */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Oferta única para quienes acaban de cerrar el eje
                </h2>
              </div>

              <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-10 rounded-lg border border-primary/40 text-center">
                <p className="text-4xl font-bold text-primary mb-2">
                  USD 27
                </p>
                <p className="text-lg mb-4">
                  Acceso inmediato. Sin esperas.
                </p>
                <p className="text-lg font-medium">
                  Esta oferta aparece <strong>una sola vez</strong>.<br />
                  Si sales, el precio vuelve a su valor original.
                </p>
              </div>
            </div>

            {/* Texto final */}
            <div className="text-center mb-8">
              <p className="text-xl font-medium italic">
                No dejes que tu geometría vuelva a abrirse.<br />
                Mantén la claridad que ya comenzaste a construir.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Principal */}
        <div className="space-y-6 fade-in-up">
          <Button
            onClick={handleCheckout}
            size="lg"
            className="group w-full h-16 text-xl font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="relative">Sí, quiero estabilizar mi forma interna</span>
            <Sparkles className="w-6 h-6 ml-2 group-hover:-rotate-12 transition-transform" />
          </Button>

          <p className="text-center text-sm text-muted-foreground italic">
            Agregar a mi orden
          </p>

          {/* CTA Secundário */}
          <div className="text-center pt-4">
            <button
              onClick={handleDecline}
              className="text-sm text-muted-foreground/60 hover:text-muted-foreground underline transition-colors"
            >
              No, prefiero dejar mi geometría abierta por ahora.
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
