import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizNavigationProps {
  currentSlide: number;
  totalSlides: number;
  canProceed: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const QuizNavigation = ({
  currentSlide,
  totalSlides,
  canProceed,
  onPrevious,
  onNext,
  onSubmit
}: QuizNavigationProps) => {
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-large z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Button
            onClick={onPrevious}
            disabled={isFirstSlide}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          
          {!isLastSlide ? (
            <Button
              onClick={onNext}
              disabled={!canProceed}
              size="lg"
              className="gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium"
            >
              Próximo
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={onSubmit}
              disabled={!canProceed}
              size="lg"
              className="gap-2 bg-success hover:bg-success/90 text-success-foreground shadow-medium"
            >
              <Send className="w-4 h-4" />
              Receber Diagnóstico
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
