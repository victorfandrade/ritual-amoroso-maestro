import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "En los últimos días, ¿cuál de estas señales notaste en el vínculo?",
    options: [
      "Un cambio repentino en su comportamiento sin motivo claro.",
      "Una memoria fuerte que apareció \"de la nada\".",
      "Sensación de que el vínculo se reactivó solo.",
      "Energía pesada, confusa o inestable entre ustedes.",
    ],
  },
  {
    id: 2,
    question: "Cuando intentas entender lo que pasa, ¿qué te llama más la atención?",
    options: [
      "Parece que algo lo está jalando de vuelta.",
      "Siento una interferencia que afectó el vínculo.",
      "Hay un retorno silencioso moviéndose.",
      "El ciclo no se cerró… y se está reabriendo.",
    ],
  },
  {
    id: 3,
    question: "¿Qué describe mejor el estado del Hilo ahora?",
    options: [
      "Una reactivación inesperada.",
      "Un corte vibracional que enfrío la conexión.",
      "Oscilaciones constantes sin explicación.",
      "Estancamiento total, energía detenida.",
    ],
  },
  {
    id: 4,
    question: "En el fondo, ¿qué te afecta más de este movimiento?",
    options: [
      "Que el retorno me tome desprevenida.",
      "Que el alejamiento se vuelva definitivo.",
      "No saber qué siente realmente.",
      "La ansiedad de no entender la energía.",
    ],
  },
  {
    id: 5,
    question: "Cuando el movimiento se confirme, ¿qué deseas saber primero?",
    options: [
      "Quién reabrió el ciclo y por qué.",
      "Si el bloqueo puede revertirse.",
      "Qué parte del Hilo debes alinear.",
      "Si el Ritual va a acelerar el movimiento.",
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Quiz completed, navigate to diagnosis
        navigate("/diagnosis");
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center px-3 py-6 sm:p-4 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-mystical-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress bar */}
        <div className="mb-4 sm:mb-6 md:mb-8 fade-in-up">
          <div className="h-2 bg-muted rounded-full overflow-hidden mystical-glow">
            <div
              className="h-full gradient-mystical transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        <Card className="p-4 sm:p-6 md:p-8 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-accent floating" />
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-center mb-4 sm:mb-6 md:mb-8 text-foreground leading-relaxed">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-2.5 sm:space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-3 sm:p-4 text-left rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${
                  selectedOption === option
                    ? "border-primary bg-primary/10 mystical-glow shadow-lg scale-[1.02]"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === option
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedOption === option && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm sm:text-base leading-relaxed break-words flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="w-full mt-4 sm:mt-6 md:mt-8 h-10 sm:h-11 md:h-12 text-sm sm:text-base md:text-lg font-medium gradient-mystical hover:opacity-90 transition-opacity disabled:opacity-50 mystical-glow"
          >
            {currentQuestion < questions.length - 1 ? "Continuar" : "Ver mi Diagnóstico"}
          </Button>
        </Card>

        {/* Decorative mystical elements - hidden on small mobile */}
        <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 border-2 border-primary/20 rounded-full floating" style={{ animationDelay: '0.5s' }} />
        <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default Quiz;
