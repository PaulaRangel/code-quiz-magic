import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  nome: string;
  email: string;
  empresa: string;
  cargo: string;
}

interface QuizFormProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
}

export const QuizForm = ({ formData, onChange }: QuizFormProps) => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Quase pronto! Precisamos dos seus dados
        </h2>
        <p className="text-lg text-muted-foreground">
          Para enviarmos seu diagnóstico personalizado por e-mail
        </p>
      </div>
      
      <div className="bg-card p-8 rounded-xl shadow-medium border border-border space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-sm font-semibold text-foreground">
            Nome completo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="nome"
            type="text"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={(e) => onChange('nome', e.target.value)}
            className="h-12 text-base border-2 focus:border-primary transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold text-foreground">
            E-mail profissional <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu.email@empresa.com"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="h-12 text-base border-2 focus:border-primary transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-sm font-semibold text-foreground">
            Nome da empresa <span className="text-destructive">*</span>
          </Label>
          <Input
            id="empresa"
            type="text"
            placeholder="Nome da sua empresa"
            value={formData.empresa}
            onChange={(e) => onChange('empresa', e.target.value)}
            className="h-12 text-base border-2 focus:border-primary transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cargo" className="text-sm font-semibold text-foreground">
            Cargo/Função
          </Label>
          <Input
            id="cargo"
            type="text"
            placeholder="Seu cargo na empresa"
            value={formData.cargo}
            onChange={(e) => onChange('cargo', e.target.value)}
            className="h-12 text-base border-2 focus:border-primary transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
