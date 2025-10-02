import { QuizQuestion as QuizQuestionType } from "@/data/quizData";
import { Check } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string | undefined;
  onAnswer: (value: string) => void;
}

export const QuizQuestion = ({ question, selectedAnswer, onAnswer }: QuizQuestionProps) => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          {question.title}
        </h2>
        <p className="text-lg text-muted-foreground">{question.subtitle}</p>
      </div>
      
      <div className="space-y-4">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.value;
          
          return (
            <div 
              key={option.value}
              className={`
                cursor-pointer transition-all duration-300 p-6 rounded-xl border-2
                ${isSelected 
                  ? 'border-primary bg-secondary shadow-medium scale-[1.02]' 
                  : 'border-border bg-card hover:border-primary/50 hover:shadow-soft hover:scale-[1.01]'
                }
              `}
              onClick={() => onAnswer(option.value)}
            >
              <div className="flex items-start gap-4">
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
                  ${isSelected
                    ? 'border-primary bg-primary'
                    : 'border-muted-foreground/30'
                  }
                `}>
                  {isSelected && (
                    <Check className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isSelected ? 'text-foreground font-medium' : 'text-foreground/80'
                  }`}>
                    {option.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
