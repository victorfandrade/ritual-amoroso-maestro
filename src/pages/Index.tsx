import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, Moon } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

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
            Revela la geometría interna de tu estado en solo 7 minutos.
          </h1>
          <p className="text-lg text-muted-foreground">
            El Ritual Lùmina-7 usa un símbolo único + un audio guiado para recentrar tu eje interno.
          </p>

        </div>

        {/* Main Content */}
        <div className="mb-8 fade-in-up">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-primary/20 mb-6">
            <p className="text-muted-foreground text-center italic">
              Tu símbolo está variando ahora. Solo podemos leer la forma que adoptó hoy.
            </p>
          </div>

          {/* How it works - 3 steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Star,
                number: "1",
                text: "Responde 5 preguntas simples.",
              },
              {
                icon: Sparkles,
                number: "2",
                text: "Leemos tu estado Lùmina del día.",
              },
              {
                icon: Heart,
                number: "3",
                text: "Recibes tu símbolo + el audio de 7 minutos.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/95 backdrop-blur-sm border border-primary/20 mystical-glow hover:scale-105 transition-transform"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-3 floating" />
                <p className="text-foreground text-center">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Quick experience section */}
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
            <p className="text-foreground/90 text-center leading-relaxed">
              Una práctica simbólica breve que te ayuda a recuperar foco interno sin técnicas complicadas.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => navigate("/quiz")}
            size="lg"
            className="group w-full h-16 text-xl font-semibold gradient-mystical hover:scale-105 transition-all duration-300 mystical-glow-intense shadow-2xl relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="relative">Iniciar el Ritual</span>
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

export default Index;
