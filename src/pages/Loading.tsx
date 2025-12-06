import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/diagnosis"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-mystical-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center fade-in-up">
        <div className="mb-8 flex items-center justify-center" aria-hidden="true">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-4 border-2 border-accent/40 rotate-0 floating" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            <div className="absolute inset-8 border-2 border-primary/50 rounded-full mystical-glow">
              <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-accent floating" />
            </div>
            <div className="absolute -inset-2 border border-accent/20 animate-pulse" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }} />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 text-gradient leading-relaxed px-4">
          Tu eje puede estar en tres movimientos: A, B o C.
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 px-4">
          Estamos leyendo cuál se activó hoy...
        </p>

        <div className="flex items-center justify-center gap-2" role="status" aria-label="Cargando">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </main>
  );
};

export default Loading;