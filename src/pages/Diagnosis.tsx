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
            Tu Estado Lùmina Ha Sido Revelado
          </h1>
          <p className="text-lg text-muted-foreground">
            La geometría interna de tu eje se está mostrando
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
                Tu Lectura Lùmina
              </h2>
            </div>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-lg font-medium text-primary">
                Tus respuestas activan un estado Lùmina del tipo B — un movimiento interno donde la geometría del eje comienza a desplazarse hacia fuera.
              </p>

              <p>
                Nada grave, pero sí es un movimiento real, no una variación pasajera.
              </p>

              <p>
                La señal interna que mencionaste + la reacción externa indican que el desajuste empezó antes, dentro de tu propio eje.
              </p>

              <p>
                El patrón repetido confirma que la geometría interna se está abriendo, no cerrando.
              </p>

              <div className="bg-accent/10 p-6 rounded-lg my-6 border border-accent/30">
                <h3 className="text-xl font-serif text-accent mb-3">En Lùmina explicamos que:</h3>
                <ul className="space-y-2 m-0">
                  <li>El símbolo revela la forma exacta que tu estado adoptó hoy.</li>
                  <li>Esa forma se expande o se contrae según lo que hagas en las próximas horas.</li>
                </ul>
              </div>

              <p>
                Por eso el Ritual Lùmina-7 existe: para recentrar esa geometría antes de que el movimiento interno se amplifique.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg my-6 border border-primary/30">
                <h3 className="text-xl font-serif text-primary mb-3">El Ritual Lùmina-7 usa:</h3>
                <ul className="space-y-2 m-0">
                  <li>Tu símbolo único</li>
                  <li>Un audio guiado de 7 minutos</li>
                  <li>Una visualización breve que ayuda a recentrar el eje</li>
                </ul>
                <p className="mt-4 mb-0 text-center">
                  Es una micro-intervención simbólica, rápida y pensada para ciclos como el tuyo.
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
            Acceder al Ritual Ahora
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
