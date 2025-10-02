export interface QuizOption {
  value: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

export interface QuizData {
  questions: QuizQuestion[];
}

export const quizData: QuizData = {
  questions: [
    {
      id: 1,
      title: "Como sua empresa lida com dados de diferentes fontes?",
      subtitle: "Planilhas, sistemas, redes sociais, etc.",
      options: [
        {
          value: "A",
          text: "É um caos. Cada dado está em um lugar, e juntar tudo é um trabalho manual, demorado e cheio de erros."
        },
        {
          value: "B", 
          text: "Temos algumas planilhas centralizadas, mas ainda gastamos muito tempo organizando e limpando os dados."
        },
        {
          value: "C",
          text: "Usamos algumas integrações, mas ainda não é um processo totalmente confiável ou unificado."
        },
        {
          value: "D",
          text: "Nossos dados de diferentes fontes são integrados e centralizados automaticamente em um único local."
        }
      ]
    },
    {
      id: 2,
      title: "Como os gestores acessam indicadores para tomar decisões?",
      subtitle: "Relatórios, dashboards, análises",
      options: [
        {
          value: "A",
          text: "Eles dependem de relatórios estáticos (PDFs, planilhas) que alguém precisa montar. A análise é superficial e demorada."
        },
        {
          value: "B",
          text: "Temos algumas planilhas com gráficos, mas eles não são interativos e levam tempo para serem atualizados."
        },
        {
          value: "C", 
          text: "Usamos uma ferramenta de BI, mas os dashboards são complexos e poucas pessoas conseguem extrair insights."
        },
        {
          value: "D",
          text: "Nossos gestores têm acesso a dashboards interativos e fáceis de usar, permitindo decisões rápidas."
        }
      ]
    },
    {
      id: 3,
      title: "Como as métricas chegam às pessoas que precisam delas?",
      subtitle: "KPIs, relatórios, informações do dia a dia",
      options: [
        {
          value: "A",
          text: "As pessoas precisam pedir para alguém ou procurar em vários lugares. Muitas vezes, a informação chega tarde demais."
        },
        {
          value: "B",
          text: "Alguém é responsável por enviar relatórios por e-mail periodicamente, mas é um processo manual e sujeito a esquecimentos."
        },
        {
          value: "C",
          text: "Temos alguns alertas automáticos, mas a cobertura é limitada e a configuração é complexa."
        },
        {
          value: "D",
          text: "As principais métricas são enviadas automaticamente para os responsáveis na frequência que eles precisam."
        }
      ]
    },
    {
      id: 4,
      title: "Como vocês respondem novas perguntas sobre os dados?",
      subtitle: "Análises ad-hoc, consultas específicas",
      options: [
        {
          value: "A",
          text: "É preciso abrir um chamado ou pedir para a equipe de TI/analistas, e a resposta pode levar dias para chegar."
        },
        {
          value: "B",
          text: "Um pequeno grupo de pessoas sabe como acessar e analisar os dados, gerando um gargalo na empresa."
        },
        {
          value: "C",
          text: "Tentamos usar os dashboards existentes, mas nem sempre eles respondem a perguntas mais específicas ou novas."
        },
        {
          value: "D",
          text: "Temos ferramentas que permitem que qualquer gestor faça perguntas em linguagem natural e obtenha respostas na hora."
        }
      ]
    },
    {
      id: 5,
      title: "Qual frase melhor descreve o momento atual da sua empresa?",
      subtitle: "Em relação ao uso de dados",
      options: [
        {
          value: "A",
          text: "Estamos perdendo oportunidades por não conseguir usar nossos dados de forma eficaz."
        },
        {
          value: "B",
          text: "Já começamos a nos organizar, mas ainda estamos longe do ideal e precisamos acelerar."
        },
        {
          value: "C",
          text: "Temos algumas soluções, mas sentimos que poderiam ser mais integradas e inteligentes."
        },
        {
          value: "D",
          text: "Já temos uma boa cultura de dados, mas estamos sempre buscando inovar e otimizar."
        }
      ]
    }
  ]
};
