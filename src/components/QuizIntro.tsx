import { BarChart3, Clock, Target, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizIntroProps {
  onStart: () => void;
}

export const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <BarChart3 className="w-20 h-20 text-primary relative z-10" />
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          More Analytics
        </h1>
        <p className="text-xl text-muted-foreground">
          Mais inteligência. Melhores decisões.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          Diagnóstico de Maturidade de Dados
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Descubra qual é o nível de maturidade da sua empresa no uso de dados e receba uma recomendação personalizada dos nossos módulos de BI.
        </p>
        
        <div className="bg-card rounded-xl p-8 shadow-medium border border-border space-y-4">
          <div className="grid gap-4 text-left">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Rápido e objetivo</p>
                <p className="text-sm text-muted-foreground">Apenas 2 minutos do seu tempo</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">5 perguntas estratégicas</p>
                <p className="text-sm text-muted-foreground">Avaliação completa da maturidade de dados</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Diagnóstico personalizado</p>
                <p className="text-sm text-muted-foreground">Resultado detalhado enviado por e-mail</p>
              </div>
            </div>
          </div>
        </div>

        <Button 
          onClick={onStart} 
          size="lg"
          className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-large transition-all duration-300 hover:scale-105"
        >
          Começar Diagnóstico
        </Button>
      </div>
    </div>
  );
};
