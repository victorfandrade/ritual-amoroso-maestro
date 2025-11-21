import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";

const Delivery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Mystical background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in">
            Generando tu símbolo…
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Leyendo el movimiento interno que activaste hoy.
          </p>

          {/* Symbol being drawn animation */}
          <div className="w-32 h-32 mx-auto mb-8 relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="251.2"
                strokeDashoffset="251.2"
                className="animate-[draw_3s_ease-in-out_infinite]"
              />
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="90"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="80"
                strokeDashoffset="80"
                className="animate-[draw_3s_ease-in-out_infinite]"
                style={{ animationDelay: "0.5s" }}
              />
              <line
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="80"
                strokeDashoffset="80"
                className="animate-[draw_3s_ease-in-out_infinite]"
                style={{ animationDelay: "1s" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="text-sm text-gray-400 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            Esto puede tomar unos segundos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* Hero - Symbol Emerged */}
        <section className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Tu símbolo Lùmina ya emergió.
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Es la geometría exacta del movimiento interno que activaste hoy.
          </p>

          {/* Main Symbol - Living */}
          <div className="w-48 h-48 mx-auto my-12 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[pulse_4s_ease-in-out_infinite]">
              <g className="animate-[spin_20s_linear_infinite]">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#mainGradient)"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <line
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="90"
                  stroke="url(#mainGradient)"
                  strokeWidth="0.5"
                  opacity="0.8"
                />
                <line
                  x1="10"
                  y1="50"
                  x2="90"
                  y2="50"
                  stroke="url(#mainGradient)"
                  strokeWidth="0.5"
                  opacity="0.8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="3"
                  fill="url(#mainGradient)"
                  className="animate-pulse"
                />
              </g>
              <defs>
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <Button className="bg-gradient-to-r from-amber-500 to-purple-500 text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            <Download className="mr-2" />
            Descargar tu símbolo (PNG)
          </Button>
        </section>

        {/* Ritual Audio Section */}
        <section className="text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Ritual Lùmina-7 — Re-alinéate en 7 minutos
          </h2>

          {/* Audio Player Placeholder */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Button size="icon" className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-purple-500 hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8" />
              </Button>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-amber-500 to-purple-500" />
            </div>
            <p className="text-sm text-gray-400 mt-4">0:00 / 7:00</p>
          </div>

          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Escucha. Respira. Visualiza la forma. Tu eje se recentra ahora.
          </p>

          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 mt-4">
            Repetir Ritual Cuando Lo Necesites
          </Button>
        </section>

        {/* Three Forces */}
        <section className="space-y-12 animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Force 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center space-y-4 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <line
                    x1="20"
                    y1="80"
                    x2="50"
                    y2="20"
                    stroke="url(#forceGradient1)"
                    strokeWidth="2"
                    strokeDasharray="70"
                    strokeDashoffset="70"
                    className="animate-[draw_2s_ease-in-out_infinite]"
                  />
                  <line
                    x1="50"
                    y1="20"
                    x2="80"
                    y2="80"
                    stroke="url(#forceGradient1)"
                    strokeWidth="2"
                    strokeDasharray="70"
                    strokeDashoffset="70"
                    className="animate-[draw_2s_ease-in-out_infinite]"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <line
                    x1="20"
                    y1="80"
                    x2="80"
                    y2="80"
                    stroke="url(#forceGradient1)"
                    strokeWidth="2"
                    strokeDasharray="60"
                    strokeDashoffset="60"
                    className="animate-[draw_2s_ease-in-out_infinite]"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <defs>
                    <linearGradient id="forceGradient1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-light text-white">Tu Símbolo Único</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                La forma que ves es la geometría del movimiento que activaste hoy.
              </p>
            </div>

            {/* Force 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center space-y-4 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="url(#forceGradient2)"
                    strokeWidth="2"
                    className="animate-[pulse_3s_ease-in-out_infinite]"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke="url(#forceGradient2)"
                    strokeWidth="2"
                    className="animate-[pulse_3s_ease-in-out_infinite]"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <defs>
                    <linearGradient id="forceGradient2">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-light text-white">El Ritmo Respiratorio</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                El audio recoloca tu eje y corta la dispersión.
              </p>
            </div>

            {/* Force 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center space-y-4 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M 50 20 L 80 50 L 50 80 L 20 50 Z"
                    fill="none"
                    stroke="url(#forceGradient3)"
                    strokeWidth="2"
                    strokeDasharray="240"
                    strokeDashoffset="240"
                    className="animate-[draw_2s_ease-in-out_infinite]"
                  />
                  <defs>
                    <linearGradient id="forceGradient3">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-light text-white">La Estabilización</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                La visualización final estabiliza la forma antes de que siga creciendo.
              </p>
            </div>
          </div>
        </section>

        {/* Continuity Section */}
        <section className="text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Tu proceso continúa.
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            La forma que se abrió hoy puede estabilizarse más allá de este ritual. 
            Mantener presencia evita que la geometría vuelva a dispersarse.
          </p>

          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 mt-6"
            onClick={() => window.location.href = '/upsell'}
          >
            Explorar Lùmina-21
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center pt-16 pb-8 border-t border-white/10">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Experiencia simbólica y ritualística. Sin promesas terapéuticas o religiosas.
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: 251.2;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 251.2;
          }
        }
      `}</style>
    </div>
  );
};

export default Delivery;
