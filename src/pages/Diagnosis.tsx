import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Star, CheckCircle2, Download, Shield, Clock, HelpCircle, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Diagnosis = () => {
  const [showDeliverables, setShowDeliverables] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const handleCheckout = () => {
    window.location.href = "https://cartpanda.com.br/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden pb-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-12 md:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent floating" />
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary floating" style={{ animationDelay: '0.5s' }} />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4 text-gradient leading-tight px-2">
            Tu Diagnóstico Amoroso: Hilo Pendiente Revelado
          </h1>
        </div>

        <Card className="mb-6 sm:mb-8 overflow-hidden mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
          <div className="aspect-video w-full">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mdiQdzkBpco" title="Diagnóstico Amoroso" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
        </Card>

        <Card className="p-4 sm:p-6 md:p-8 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up mb-6 sm:mb-8">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-foreground">Tu Hilo Pendiente</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed text-sm sm:text-base">
              <p>Lo que estás viviendo tiene un nombre: <span className="text-primary font-semibold">Hilo Pendiente</span>. Es un ciclo energético que nunca se cerró y ahora se está reabriendo.</p>
              <div className="bg-muted/50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-primary mb-2">Lo que detecté:</p>
                <p>Hay una parte del Hilo <span className="font-semibold">desalineada</span>, oscilando entre retorno y alejamiento.</p>
              </div>
              <p className="font-medium">El <span className="text-primary">Ritual de Apertura de Caminos Amorosos</span> alinea esa parte del Hilo en 3 Noches.</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-6 mystical-glow backdrop-blur-sm bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 fade-in-up mb-24">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Garantía Emocional</h3>
              <p className="text-xs sm:text-sm text-foreground/80">Si sigues el ritual completo y no notas señales en 7 días, devolvemos el 100%.</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-primary/20 p-3 sm:p-4 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <Button onClick={handleCheckout} size="lg" className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold gradient-mystical hover:opacity-90 transition-opacity mystical-glow-intense">
            <Sparkles className="w-5 h-5 mr-2" />
            Liberar Ritual de 3 Noches
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">Acceso inmediato · PDF + audios</p>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
