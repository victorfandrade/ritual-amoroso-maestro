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
            <Heart className="w-8 h-8 text-primary floating" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="w-6 h-6 text-accent floating" style={{ animationDelay: '1s' }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gradient">
            Tu Diagnóstico Amoroso Ha Sido Revelado
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubre lo que el universo tiene preparado para ti
          </p>
        </div>

        {/* Video Section */}
        <Card className="mb-12 overflow-hidden mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mdiQdzkBpco"
              title="Diagnóstico Amoroso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Card>

        {/* Diagnosis Content */}
        <Card className="p-8 md:p-12 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up mb-8">
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-accent" />
              <h2 className="text-2xl md:text-3xl font-serif text-foreground m-0">
                Tu Ciclo de Conexión Interrumpida
              </h2>
            </div>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                Tu energía amorosa está atravesando lo que llamo <span className="text-primary font-semibold">Ciclo de Conexión Interrumpida</span>. 
                No es que no estés lista para el amor... es que hay un bloqueo energético impidiendo que las conexiones verdaderas se completen.
              </p>

              <p>
                Esto no comenzó hace 30 días. Viene de antes. Tal vez de años atrás. Y se manifestó de diferentes maneras: 
                personas que desaparecieron sin explicación, relaciones que no prosperaron, ese miedo constante de no ser suficiente, 
                o la sensación de dar más de lo que recibes.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary my-6">
                <p className="text-base font-medium text-primary mb-2">
                  El patrón que detecté en tus respuestas:
                </p>
                <p className="m-0">
                  Tu energía amorosa está <span className="font-semibold">fragmentada</span>. Parte de ella sigue vinculada 
                  al pasado. Otra parte está proyectada en el miedo del futuro. Y solo una pequeña parte está realmente 
                  disponible en el presente... que es donde el amor puede florecer.
                </p>
              </div>

              <p>
                Cuando tu energía está así, dividida, pasa algo muy específico: atraes personas que también están 
                energéticamente divididas. Personas emocionalmente indisponibles. Conexiones confusas. Situaciones que nunca 
                se definen del todo.
              </p>

              <p>
                Y cuanto más intentas "resolver" estas situaciones con lógica, más frustrante se vuelve... porque este no es 
                un problema lógico. <span className="text-accent font-semibold">Es un bloqueo energético</span>.
              </p>

              <div className="bg-accent/10 p-6 rounded-lg my-6 border border-accent/30">
                <h3 className="text-xl font-serif text-accent mb-3">¿Por qué esto importa ahora?</h3>
                <p className="m-0">
                  Porque hay un momento específico en el ciclo lunar y astrológico donde estos bloqueos pueden ser 
                  liberados de forma más profunda y permanente. Y ese momento está ocurriendo <span className="font-semibold">ahora</span>.
                </p>
              </div>

              <p>
                Es por eso que creé el <span className="text-primary font-semibold">Ritual de Apertura de Caminos Amorosos</span>: 
                un proceso energético específicamente diseñado para reintegrar tu energía amorosa, liberar los vínculos del 
                pasado que te mantienen atada, y abrir espacio para conexiones verdaderas y recíprocas.
              </p>

              <p className="text-lg font-medium text-primary">
                No se trata de "manifestar" un amor ideal. Se trata de <span className="underline">limpiar el camino</span> para 
                que el amor pueda llegar sin obstáculos. De realinear tu energía para atraer lo que mereces: conexiones claras, 
                presentes y comprometidas.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg my-6 border border-primary/30">
                <p className="m-0 text-center text-lg">
                  Este ritual está disponible para ti ahora, mientras la ventana energética está abierta.
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
            className="w-full h-16 text-xl font-semibold gradient-mystical hover:opacity-90 transition-opacity mystical-glow-intense shadow-2xl"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            Liberar Ritual de Apertura de Caminos Amorosos
            <Sparkles className="w-6 h-6 ml-2" />
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
