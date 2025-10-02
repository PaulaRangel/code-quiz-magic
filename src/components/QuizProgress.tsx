interface QuizProgressProps {
  currentSlide: number;
  totalSlides: number;
}

export const QuizProgress = ({ currentSlide, totalSlides }: QuizProgressProps) => {
  const progress = (currentSlide / (totalSlides - 1)) * 100;
  
  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
