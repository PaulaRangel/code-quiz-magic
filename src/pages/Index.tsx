import { useState } from "react";
import { quizData } from "@/data/quizData";
import { QuizIntro } from "@/components/QuizIntro";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizForm } from "@/components/QuizForm";
import { QuizHeader } from "@/components/QuizHeader";
import { QuizProgress } from "@/components/QuizProgress";
import { QuizNavigation } from "@/components/QuizNavigation";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  nome: string;
  email: string;
  empresa: string;
  cargo: string;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    empresa: '',
    cargo: ''
  });
  const { toast } = useToast();

  const totalSlides = quizData.questions.length + 2;

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    const dadosParaEnvio = {
      ...formData,
      origem: 'Site',
      pergunta_1: answers[1],
      pergunta_2: answers[2],
      pergunta_3: answers[3],
      pergunta_4: answers[4],
      pergunta_5: answers[5]
    };

    try {
      // Substitua pela URL real do webhook
      const response = await fetch('https://webhook.automacao.rangelpower.com/webhook/quiz-more-analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosParaEnvio)
      });

      if (response.ok) {
        toast({
          title: "Quiz enviado com sucesso!",
          description: "Você receberá seu diagnóstico por e-mail em breve.",
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Por favor, tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "Erro de conexão",
        description: "Verifique sua conexão com a internet e tente novamente.",
        variant: "destructive",
      });
    }
  };

  const canProceed = () => {
    if (currentSlide === 0) return true;
    if (currentSlide >= 1 && currentSlide <= quizData.questions.length) {
      return !!answers[currentSlide];
    }
    if (currentSlide === totalSlides - 1) {
      return !!(formData.nome && formData.email && formData.empresa);
    }
    return false;
  };

  const renderContent = () => {
    if (currentSlide === 0) {
      return <QuizIntro onStart={handleNext} />;
    }
    
    if (currentSlide >= 1 && currentSlide <= quizData.questions.length) {
      const question = quizData.questions[currentSlide - 1];
      return (
        <QuizQuestion
          question={question}
          selectedAnswer={answers[question.id]}
          onAnswer={(value) => handleAnswer(question.id, value)}
        />
      );
    }
    
    return (
      <QuizForm
        formData={formData}
        onChange={handleFormChange}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-hero pb-24">
      <QuizHeader 
        currentSlide={currentSlide} 
        totalQuestions={quizData.questions.length}
      />
      
      <QuizProgress 
        currentSlide={currentSlide} 
        totalSlides={totalSlides}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {renderContent()}
      </div>

      {currentSlide > 0 && (
        <QuizNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          canProceed={canProceed()}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Index;
