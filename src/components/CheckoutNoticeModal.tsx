import React from 'react';
import { X, AlertCircle, MessageCircle, Info } from 'lucide-react';
import { WHATSAPP_URL } from '../config/checkoutConfig';

interface CheckoutNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const CheckoutNoticeModal: React.FC<CheckoutNoticeModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsApp,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0E0E11] border border-[#650814]/60 rounded-xl p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 p-2 text-[#E8E4E5]/60 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#D90429]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#30050B] border border-[#650814] flex items-center justify-center text-[#FF2442] shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 id="modal-title" className="font-display text-xl sm:text-2xl text-white font-semibold">
              Finalização da Compra
            </h3>
            <span className="text-xs text-[#E8E4E5]/60">Informação Oficial do E-book</span>
          </div>
        </div>

        <div className="space-y-3.5 text-sm text-[#E8E4E5]/90 leading-relaxed border-t border-white/5 pt-4">
          <div className="p-3.5 rounded-lg bg-[#180407] border border-[#650814]/40 flex gap-3 text-sm text-[#E8E4E5]">
            <AlertCircle className="w-5 h-5 text-[#FF2442] shrink-0 mt-0.5" />
            <p>
              O pagamento direto ainda não está configurado nesta página. Contacta o responsável pelo produto para concluir a compra e receberes o teu exemplar em PDF.
            </p>
          </div>

          <p className="text-xs text-[#E8E4E5]/70">
            Se és o autor ou administrador da página, podes ligar o teu link de pagamento (Multicaixa Express, Stripe, Hotmart ou conta bancária) editando a variável <code className="text-[#FF2442] bg-white/5 px-1 py-0.5 rounded">PURCHASE_URL</code> no ficheiro de configuração.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenWhatsApp();
            }}
            className="flex-1 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar por WhatsApp</span>
          </button>
          
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-lg bg-white/5 hover:bg-white/10 text-[#E8E4E5] font-medium text-sm transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
