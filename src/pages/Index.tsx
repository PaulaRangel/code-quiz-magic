import { useState } from "react";
import { z } from "zod";
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
    // Validação dos dados antes de enviar
    const schema = z.object({
      nome: z.string().trim().min(1, { message: 'Nome é obrigatório' }).max(120),
      email: z.string().trim().email({ message: 'E-mail inválido' }).max(255),
      empresa: z.string().trim().min(1, { message: 'Empresa é obrigatória' }).max(200),
      cargo: z.string().trim().max(200).optional(),
    });

    const validation = schema.safeParse(formData);

    if (!validation.success) {
      const firstError = validation.error.issues[0]?.message ?? 'Dados inválidos';
      toast({ title: 'Verifique os dados', description: firstError, variant: 'destructive' });
      return;
    }

    const requiredQuestions = [1, 2, 3, 4, 5];
    const missing = requiredQuestions.filter((q) => !answers[q]);
    if (missing.length > 0) {
      toast({
        title: 'Responda todas as perguntas',
        description: `Falta responder a pergunta ${missing[0]}.`,
        variant: 'destructive',
      });
      return;
    }

    const dadosParaEnvio = {
      ...formData,
      origem: 'Site',
      pergunta_1: answers[1],
      pergunta_2: answers[2],
      pergunta_3: answers[3],
      pergunta_4: answers[4],
      pergunta_5: answers[5],
    };

    try {
      // Envio via formulário oculto para evitar CORS no navegador
      const url = 'https://automacao.rangelpower.com/webhook-test/quiz-more-analytics';

      // Garante iframe de destino para o POST cross-origin
      let iframe = document.querySelector('iframe[name="webhook_iframe"]') as HTMLIFrameElement | null;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'webhook_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      const form = document.createElement('form');
      form.action = url;
      form.method = 'POST';
      form.target = 'webhook_iframe';
      form.style.display = 'none';

      const appendField = (name: string, value: string | undefined) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value ?? '';
        form.appendChild(input);
      };

      appendField('nome', dadosParaEnvio.nome);
      appendField('email', dadosParaEnvio.email);
      appendField('empresa', dadosParaEnvio.empresa);
      appendField('cargo', dadosParaEnvio.cargo);
      appendField('origem', dadosParaEnvio.origem);
      appendField('pergunta_1', dadosParaEnvio.pergunta_1);
      appendField('pergunta_2', dadosParaEnvio.pergunta_2);
      appendField('pergunta_3', dadosParaEnvio.pergunta_3);
      appendField('pergunta_4', dadosParaEnvio.pergunta_4);
      appendField('pergunta_5', dadosParaEnvio.pergunta_5);

      document.body.appendChild(form);
      form.submit();
      setTimeout(() => form.remove(), 1500);

      toast({
        title: 'Quiz enviado com sucesso!',
        description: 'Você receberá seu diagnóstico por e-mail em breve.',
      });
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: 'Erro de conexão',
        description: 'Verifique sua conexão e tente novamente.',
        variant: 'destructive',
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
