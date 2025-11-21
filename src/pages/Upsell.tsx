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
            Tu símbolo no terminó aquí. La forma sigue en movimiento.
          </h1>
          <p className="text-lg text-muted-foreground">
            El Ritual Lùmina-7 cerró la apertura de hoy… pero la geometría que activaste sigue respirando durante los próximos 21 días.
          </p>
        </div>

        {/* Main Content */}
        <Card className="p-8 md:p-12 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up mb-8">
          <div className="prose prose-lg max-w-none">
            {/* Lo Que Acabas de Hacer */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Lo Que Acabas de Hacer
                </h2>
              </div>

              <p className="text-lg font-medium">
                Acabas de recentrar tu eje.<br />
                Lo hiciste bien.
              </p>

              <p>
                Pero en Lùmina explicamos que:
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 my-6">
                <p className="text-lg font-medium italic m-0">
                  "Una forma cerrada no es una forma estable.<br />
                  Solo es una forma que dejó de abrirse."
                </p>
              </div>

              <p className="font-medium">
                La estabilización real no ocurre en 7 minutos.
              </p>

              <p className="font-medium">
                Ocurre en el ciclo completo de 21 días, cuando la geometría deja de oscilar.
              </p>
            </div>

            {/* Problema Post-Ritual */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Durante Las Próximas Horas
                </h2>
              </div>

              <p>
                Durante las próximas horas, tu símbolo entra en un estado llamado:
              </p>

              <div className="bg-accent/10 p-6 rounded-lg border border-accent/30 text-center my-6">
                <p className="text-xl font-serif text-accent m-0">
                  "Movimento Residual de Post-Alineación"
                </p>
              </div>

              <p>
                Cuando aparece este movimiento:
              </p>

              <p>
                la forma no vuelve a abrirse…
              </p>

              <p className="font-medium">
                pero tampoco termina de fijarse
              </p>

              <p>
                y tu eje puede oscilar nuevamente si no guías la geometría
              </p>

              <p className="italic">
                Esto no tiene nada de "grave".<br />
                Tiene todo de "incompleto".
              </p>
            </div>

            {/* Las Tres Fases de la Forma */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Las Tres Fases de la Forma
                </h2>
              </div>

              <p>
                En Lùmina enseñamos que cada símbolo pasa por tres fases:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                  <h3 className="text-xl font-serif text-primary mb-2">
                    1. Alineación
                  </h3>
                  <p className="m-0">
                    → lo que acabas de hacer
                  </p>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <h3 className="text-xl font-serif text-accent mb-2">
                    2. Estabilización
                  </h3>
                  <p className="m-0">
                    → donde la forma se fija
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                  <h3 className="text-xl font-serif text-primary mb-2">
                    3. Integración
                  </h3>
                  <p className="m-0">
                    → donde la forma deja de exigir energía
                  </p>
                </div>
              </div>

              <p className="font-medium text-center text-lg">
                El Lùmina-7 cuida apenas de la fase 1.
              </p>

              <p className="font-medium text-center text-lg">
                La fase 2 es donde tú realmente "sientes diferencia".
              </p>

              <p className="text-center italic">
                Y esa fase 2 nunca acontece sozinha.<br />
                Siempre debe ser guiada.
              </p>
            </div>

            {/* Presentación Lùmina 21 */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Lùmina 21 – Ritual de Reconexión Profunda
                </h2>
              </div>

              <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-8 rounded-lg border border-primary/40">
                <p className="text-lg mb-4">
                  <strong>Formato:</strong> 21 áudios curtos (2 min)
                </p>
                <p className="text-lg mb-4">
                  <strong>Función:</strong> estabilizar la geometría que el símbolo reveló hoy
                </p>
                <p className="text-xl font-medium italic text-center m-0">
                  "Tu símbolo no es un dibujo. Es un proceso.<br />
                  Y el Lùmina-21 es la fase donde la forma deja de oscilar."
                </p>
              </div>
            </div>

            {/* Lista de Benefícios */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Con el Lùmina-21 Tú:
                </h2>
              </div>

              <ul className="space-y-3 text-lg">
                <li>✦ guías la geometría hasta la fase estable</li>
                <li>✦ evitas reaberturas del eje</li>
                <li>✦ reduces los movimientos residuales post-ritual</li>
                <li>✦ profundizas la lectura simbólica de la forma</li>
                <li>✦ creas un ciclo ritualístico de presencia de 21 días</li>
                <li>✦ mantienes el eje fijo incluso en días difíciles</li>
                <li>✦ impides que variaciones energéticas externas afecten tu forma interna</li>
              </ul>

              <p className="text-center font-medium text-lg mt-8">
                Es el próximo paso natural.<br />
                Es el paso que concluye lo que comenzaste ahora.
              </p>
            </div>

            {/* Momento Irreversible */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                  Momento Irreversible
                </h2>
              </div>

              <div className="bg-accent/10 p-8 rounded-lg border border-accent/30">
                <p className="text-lg font-medium mb-4">
                  El símbolo que se generó hoy solo puede ser estabilizado dentro de este ciclo de 21 días.
                </p>

                <p className="mb-2">
                  Si esperas:
                </p>

                <ul className="space-y-2 mb-6">
                  <li>→ la forma cambia</li>
                  <li>→ el proceso comienza desde cero</li>
                  <li>→ la lectura simbólica deja de corresponder a lo que emergió hoy</li>
                </ul>

                <p className="text-lg font-medium text-center m-0">
                  La ventana de estabilización se abre una vez.<br />
                  Y esa vez es ahora.
                </p>
              </div>
            </div>

            {/* Oferta */}
            <div className="space-y-6 text-foreground/90 leading-relaxed mb-8">
              <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-10 rounded-lg border border-primary/40 text-center">
                <h3 className="text-3xl font-serif text-foreground mb-4">
                  Activa ahora el Lùmina-21
                </h3>
                <p className="text-4xl font-bold text-primary mb-2">
                  USD 27
                </p>
                <p className="text-lg mb-4">
                  Programa completo de 21 días<br />
                  Entrega inmediata
                </p>
                <p className="text-lg font-medium italic">
                  Este es el cierre del proceso que tu símbolo inició hoy.
                </p>
              </div>
            </div>

            {/* Garantia */}
            <div className="space-y-4 text-foreground/90 leading-relaxed mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif text-foreground m-0">
                  Garantía Mística
                </h3>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
                <p className="mb-3">
                  Este programa no "cura" nada.<br />
                  Solo guía la forma que tu propio estado interno activó.
                </p>
                <p className="font-medium m-0">
                  Si no sientes ningún cambio interno en 7 días, te devolvemos el dinero.<br />
                  Sin preguntas. Sin drama.
                </p>
              </div>
            </div>

            {/* Prova Social */}
            <div className="space-y-4 text-foreground/90 leading-relaxed mb-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <p className="text-sm italic m-0">
                    "Mi símbolo dejó de oscilar en el día 4."
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <p className="text-sm italic m-0">
                    "Sentí la claridad que el Lùmina-7 no terminó de dar."
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
                  <p className="text-sm italic m-0">
                    "El movimiento residual desapareció."
                  </p>
                </div>
              </div>
            </div>

            {/* Fechamento Final */}
            <div className="text-center mb-8">
              <p className="text-xl font-medium mb-2">
                Tu símbolo ya empezó su ciclo.
              </p>
              <p className="text-xl font-medium">
                O lo estabilizas… o vuelve a dispersarse.
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
            <span className="relative">Completar mi Ritual Lùmina-21</span>
            <Sparkles className="w-6 h-6 ml-2 group-hover:-rotate-12 transition-transform" />
          </Button>

          <p className="text-center text-sm text-muted-foreground italic">
            "Quiero estabilizar la forma que se abrió hoy."
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
