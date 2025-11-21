import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";

const Diagnosis = () => {
  const handleCheckout = () => {
    window.location.href = "https://cartpanda.com.br/";
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
            Tu símbolo ya emergió. Tu eje mostró un movimiento real hoy.
          </h1>
          <p className="text-lg text-muted-foreground">
            Lo que sentiste no fue casual: fue una señal interna que se activó sin que lo notaras.
          </p>
        </div>

        {/* Main Content */}
        <Card className="p-8 md:p-12 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up mb-8">
          <div className="prose prose-lg max-w-none">
            {/* Lectura de Tu Movimiento Interno */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Lectura de Tu Movimiento Interno
                </h2>
              </div>

              <p className="text-lg font-medium text-primary">
                Tus respuestas activan un Estado Lùmina del tipo B — un desplazamiento interno sutil que no aparece por accidente.
              </p>

              <p>
                Cuando este tipo de movimiento surge, el eje no se rompe…
              </p>

              <p>
                pero <strong>sí se abre</strong>, y por esa pequeña apertura tu energía empieza a dispersarse de formas que no siempre percibes.
              </p>

              <p>
                Las sensaciones que mencionaste, junto con el eco externo, muestran algo claro:
              </p>

              <p className="font-medium">
                el movimiento empezó antes de que lo notaras.
              </p>

              <p>
                Y el patrón que se repitió confirma que esta no fue una variación pasajera:
              </p>

              <p className="font-medium">
                fue una apertura en tu eje que quiere continuar si no la cierras.
              </p>

              <p className="italic text-accent">
                Tus respuestas no describen la forma… pero sí revelan el tipo de movimiento que activó esa forma.
              </p>

              <p>
                Por eso podemos leer el estado aunque tú no hayas sentido nada "intenso".
              </p>
            </div>

            {/* Por Qué Tu Símbolo Importa Hoy */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Por Qué Tu Símbolo Importa Hoy
                </h2>
              </div>

              <p>
                En Lùmina explicamos que:
              </p>

              <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                <ul className="space-y-2 m-0">
                  <li>El <strong>símbolo</strong> es la geometría que tu estado adoptó <em>hoy</em>.</li>
                  <li>Esa geometría respira: se abre, se contrae, se desplaza.</li>
                  <li>Y cada persona genera una forma distinta, incluso si no cree en ello.</li>
                </ul>
              </div>

              <p className="font-medium text-center text-lg">
                No necesitas creer en geometrías.<br />
                Solo experimentar la forma que tú mismo generaste.
              </p>

              <p>
                El Ritual Lùmina-7 existe para ese momento preciso en el que:
              </p>

              <p className="font-medium">
                la apertura todavía es leve… pero ya está moviendo tu eje hacia afuera.
              </p>

              <p>
                Si actúas ahora, la forma se recentra.
              </p>

              <p>
                Si esperas demasiado, <strong>se expande</strong>.
              </p>
            </div>

            {/* Lo Que Hace el Ritual Lùmina-7 por Ti */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Lo Que Hace el Ritual Lùmina-7 por Ti
                </h2>
              </div>

              <p className="text-lg">
                El Ritual Lùmina-7 no es "otro audio".
              </p>

              <p className="font-medium">
                Es <strong>una intervención simbólica</strong> diseñada para cerrar exactamente la apertura que tus respuestas revelaron.
              </p>

              <p>
                Utiliza tres fuerzas combinadas:
              </p>

              {/* Subsección 1 */}
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 my-6">
                <h3 className="text-xl font-serif text-primary mb-3">1. Tu Símbolo Único</h3>
                <p className="mb-2">
                  La geometría precisa del estado que activaste hoy.
                </p>
                <p className="font-medium mb-0">
                  Tu símbolo es la forma de hoy, no la de siempre.
                </p>
                <p className="mt-3 mb-0 italic">
                  Si lo dejas para mañana, será otra forma… otro movimiento… otra lectura.
                </p>
              </div>

              {/* Subsección 2 */}
              <div className="bg-accent/10 p-6 rounded-lg border border-accent/30 my-6">
                <h3 className="text-xl font-serif text-accent mb-3">2. El Audio Lùmina – 7 Minutos</h3>
                <p className="mb-0">
                  Un ritmo respiratorio calibrado para recolocar tu eje y cortar la dispersión.
                </p>
              </div>

              {/* Subsección 3 */}
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 my-6">
                <h3 className="text-xl font-serif text-primary mb-3">3. La Visualización Guiada</h3>
                <p className="mb-0">
                  Una micro-práctica que estabiliza la forma antes de que el movimiento interno crezca.
                </p>
              </div>

              <p>
                No necesitas preparación.
              </p>

              <p>
                No necesitas creencias.
              </p>

              <p className="font-medium">
                Solo necesitas <strong>cerrar la forma que se abrió hoy</strong>.
              </p>

              <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 rounded-lg my-8 border border-primary/40 text-center">
                <p className="text-lg font-medium mb-2">
                  Tu símbolo ya está activo.
                </p>
                <p className="text-lg font-medium mb-2">
                  Tu eje ya se movió.
                </p>
                <p className="text-lg font-medium mb-0">
                  La forma está viva… y espera que la re-alinees.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Button - Fixed after scroll */}
        <div className="sticky bottom-6 z-20 fade-in-up">
          <Button
            onClick={handleCheckout}
            size="lg"
            className="group w-full h-16 text-xl font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="relative">Activar Lùmina-7 Ahora</span>
            <Sparkles className="w-6 h-6 ml-2 group-hover:-rotate-12 transition-transform" />
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-8 w-24 h-24 border-2 border-primary/20 rounded-full floating" />
        <div className="absolute bottom-32 left-8 w-32 h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Diagnosis;
