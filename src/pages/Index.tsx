import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import MysticalBackground from "@/components/MysticalBackground";
import PageHeader from "@/components/PageHeader";
import DecorativeElements from "@/components/DecorativeElements";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <MysticalBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-16">
        <PageHeader 
          title="Revela La Geometría Interna De Tu Estado En Solo 7 Minutos."
          subtitle="Tu símbolo está variando ahora. Solo podemos leer la forma que adoptó hoy."
        />

        {/* Main Content */}
        <div className="mb-8 fade-in-up space-y-8">

          {/* How it works - 3 steps */}
          <section className="grid sm:grid-cols-3 gap-4 sm:gap-6" aria-label="Pasos del ritual">
            <article className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary/30 mx-auto flex items-center justify-center mystical-glow">
                <span className="text-2xl sm:text-3xl font-serif text-primary">1</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-foreground">Responde 5 Preguntas Simples.</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">No hay respuestas incorrectas</p>
              </div>
            </article>

            <article className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/10 border-2 border-accent/30 mx-auto flex items-center justify-center mystical-glow">
                <span className="text-2xl sm:text-3xl font-serif text-accent">2</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-foreground">Leemos Tu Estado Lùmina Del Día.</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Interpretación en tiempo real</p>
              </div>
            </article>

            <article className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 border-2 border-primary/30 mx-auto flex items-center justify-center mystical-glow">
                <span className="text-2xl sm:text-3xl font-serif text-primary">3</span>
              </div>
              <div>
                <p className="text-base sm:text-lg font-medium text-foreground">Recibes Tu Símbolo + El Audio De 7 Minutos.</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Entrega inmediata</p>
              </div>
            </article>
          </section>

          {/* Testimonial Section */}
          <blockquote className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
            <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed italic">
              "Yo pensé que esto iba a ser otra cosa complicada… pero el Ritual Lùmina-7 fue tan simple que hice en menos de ocho minutos. Y lo que más me sorprendió es que sentí mi cabeza más clara al terminar. No sé cómo explicarlo, pero funciona." <cite className="font-medium text-foreground not-italic">— Camila</cite>
            </p>
          </blockquote>

          {/* CTA Button */}
          <Button
            onClick={() => navigate("/quiz")}
            size="lg"
            className="group w-full h-16 text-xl font-serif font-semibold gradient-mystical hover:scale-105 transition-transform duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true" />
            <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" aria-hidden="true" />
            <span className="relative">Iniciar el Ritual</span>
            <Sparkles className="w-6 h-6 ml-2 group-hover:-rotate-12 transition-transform" aria-hidden="true" />
          </Button>
        </div>

        <DecorativeElements />
      </div>
    </main>
  );
};

export default Index;