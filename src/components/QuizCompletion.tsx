import React from 'react';

export const QuizCompletion = () => {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <img 
        src="https://i.ibb.co/vxTPQdHL/Group-427318301.png" 
        alt="Logo More Analytics" 
        style={{ maxWidth: '200px', margin: '0 auto 20px auto', display: 'block' }}
      />
      <h2 className="text-3xl font-bold text-green-600 mb-4">Diagnóstico Enviado com Sucesso!</h2>
      <p className="text-lg text-gray-700 mb-6">
        Obrigado por completar o Quiz de Maturidade de Dados da More Analytics.
        Seu diagnóstico personalizado está a caminho do seu e-mail.
      </p>
      <p className="text-md text-gray-600 mb-8">
        Verifique sua caixa de entrada (e a pasta de spam, caso não encontre).
      </p>
      <a 
        href="https://www.moreanalytics.com.br" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 inline-block"
      >
        Visite nosso site
      </a>
      <p className="text-sm text-gray-500 mt-4">
        <a href="https://calendly.com/anaprangel01/30min" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Agende uma conversa de 15 minutos
        </a> para discutir seu diagnóstico.
      </p>
    </div>
  );
};


