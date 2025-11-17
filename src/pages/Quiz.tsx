import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Cuando tu vida amorosa se traba, ¿qué sensación aparece primero?",
    options: [
      "Repitiendo una historia anterior",
      "Doy más de lo que recibo",
      "Me vuelvo invisible cuando me gusta alguien",
      "Atraigo a personas emocionalmente indisponibles",
    ],
  },
  {
    id: 2,
    question: "En los últimos 30 días, ¿qué fue lo que más ocurrió contigo?",
    options: [
      "Un alejamiento inesperado",
      "Fallé en el momento decisivo",
      "Alguien del pasado reapareció de forma confusa",
      "Mi vida amorosa quedó totalmente parada",
    ],
  },
  {
    id: 3,
    question: "¿Qué pesa más en tu interior ahora?",
    options: [
      "Miedo a no ser elegida",
      "Duda sobre lo que él siente",
      "Sensación de no ser suficiente",
      "Miedo a repetir el mismo error amoroso",
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
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mystical-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress bar */}
        <div className="mb-8 fade-in-up">
          <div className="h-2 bg-muted rounded-full overflow-hidden mystical-glow">
            <div
              className="h-full gradient-mystical transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        <Card className="p-8 md:p-12 mystical-glow backdrop-blur-sm bg-card/95 border-primary/20 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-accent floating" />
          </div>

          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 text-foreground">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 ${
                  selectedOption === option
                    ? "border-primary bg-primary/10 mystical-glow shadow-lg scale-[1.02]"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === option
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedOption === option && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-base md:text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="w-full mt-8 h-12 text-lg font-medium gradient-mystical hover:opacity-90 transition-opacity disabled:opacity-50 mystical-glow"
          >
            {currentQuestion < questions.length - 1 ? "Continuar" : "Ver mi Diagnóstico"}
          </Button>
        </Card>

        {/* Decorative mystical elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full floating" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/20 rounded-full floating" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default Quiz;
