import React from 'react';
import { X, ShieldCheck, FileText, HelpCircle, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../config/checkoutConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: 'Política de Privacidade',
      icon: <ShieldCheck className="w-5 h-5 text-[#FF2442]" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#E8E4E5]/80 leading-relaxed">
          <p>
            A privacidade dos nossos leitores é fundamental. Este website recolhe exclusivamente os dados essenciais para o processamento de encomendas e comunicação de suporte relacionada com o e-book digital <strong>"O CÓDIGO DO AMOR"</strong>.
          </p>
          <h4 className="font-semibold text-white text-sm">1. Recolha de Dados</h4>
          <p>
            Não armazenamos dados bancários, números de cartões ou palavras-passe confidenciais nos nossos servidores. Todo o processamento de pagamento é realizado diretamente através de fornecedores certificados ou canais oficiais de transferência.
          </p>
          <h4 className="font-semibold text-white text-sm">2. Entrega do E-book</h4>
          <p>
            O endereço de correio eletrónico ou número de telefone fornecido no ato da compra é utilizado unicamente para o envio do ficheiro PDF digital e eventuais atualizações do guia.
          </p>
          <h4 className="font-semibold text-white text-sm">3. Direitos do Utilizador</h4>
          <p>
            Podes solicitar a retificação ou eliminação dos teus dados de contacto a qualquer momento entrando em contacto connosco através dos canais de suporte indicados.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Termos e Condições',
      icon: <FileText className="w-5 h-5 text-[#FF2442]" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#E8E4E5]/80 leading-relaxed">
          <p>
            Ao adquirir o e-book digital <strong>"O CÓDIGO DO AMOR"</strong>, concordas com os seguintes termos de utilização:
          </p>
          <h4 className="font-semibold text-white text-sm">1. Propriedade Intelectual</h4>
          <p>
            Este e-book, o seu texto, ilustrações, diagramas e metodologias são protegidos por direitos de autor. É concedida uma licença de utilização individual e pessoal. É expressamente proibida a reprodução, revenda, partilha pública em grupos ou distribuição não autorizada deste material.
          </p>
          <h4 className="font-semibold text-white text-sm">2. Formato e Entrega</h4>
          <p>
            O produto é 100% digital, entregue em formato PDF. Não inclui cópia física impressa. O prazo de entrega do ficheiro depende da validação do pagamento pela plataforma selecionada.
          </p>
          <h4 className="font-semibold text-white text-sm">3. Natureza Educativa e Isenção de Responsabilidade</h4>
          <p>
            Este e-book tem fins exclusivamente educativos e de reflexão pessoal sobre relacionamentos e autoconsciência. Não constitui consulta médica, psiquiátrica ou psicoterapia clínica, nem promete resultados garantidos de reconciliação ou comportamentos de terceiros.
          </p>
        </div>
      ),
    },
    contact: {
      title: 'Suporte & Contacto',
      icon: <HelpCircle className="w-5 h-5 text-[#FF2442]" />,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#E8E4E5]/80 leading-relaxed">
          <p>
            Estamos disponíveis para esclarecer dúvidas sobre a aquisição, formato do e-book ou processo de leitura.
          </p>
          <div className="p-4 rounded-lg bg-[#140508] border border-[#650814]/50 space-y-3">
            <p className="text-white font-medium">Canais Oficiais:</p>
            <p className="text-xs text-[#E8E4E5]/70">
              WhatsApp Oficial: Atendimento direto para dúvidas, suporte ou confirmação de aquisição.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Abrir WhatsApp Oficial</span>
            </a>
            <p className="text-[11px] text-[#E8E4E5]/50">
              Prazo habitual de resposta: até 24 horas úteis.
            </p>
          </div>
          <p className="text-xs text-[#E8E4E5]/60">
            Se já efetuaste o pagamento e precisas do envio do PDF, por favor inclui o comprovativo na tua mensagem para validação imediata.
          </p>
        </div>
      ),
    },
  }[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#0D0D10] border border-[#650814]/70 rounded-xl p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 text-[#E8E4E5]/60 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#D90429]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#30050B] border border-[#650814]/50">
            {content.icon}
          </div>
          <h3 id="legal-modal-title" className="font-display text-xl sm:text-2xl text-white font-semibold">
            {content.title}
          </h3>
        </div>

        <div className="border-t border-white/10 pt-4">
          {content.body}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
