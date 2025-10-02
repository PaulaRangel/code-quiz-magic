import { BarChart3 } from "lucide-react";

interface QuizHeaderProps {
  currentSlide: number;
  totalQuestions: number;
}

export const QuizHeader = ({ currentSlide, totalQuestions }: QuizHeaderProps) => {
  const getStatusText = () => {
    if (currentSlide === 0) return 'Início';
    if (currentSlide <= totalQuestions) return `Pergunta ${currentSlide} de ${totalQuestions}`;
    return 'Seus dados';
  };
  
  return (
    <div className="bg-card shadow-soft border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <BarChart3 className="w-8 h-8 text-primary relative z-10" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              More Analytics
            </span>
          </div>
          <div className="text-sm font-medium text-muted-foreground bg-secondary px-4 py-2 rounded-full">
            {getStatusText()}
          </div>
        </div>
      </div>
    </div>
  );
};
