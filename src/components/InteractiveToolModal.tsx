import React from 'react';
import { X, CheckCircle2, BookOpen } from 'lucide-react';

export interface ToolItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  detailedDesc: string;
  howToApply: string[];
  takeaway: string;
}

interface InteractiveToolModalProps {
  tool: ToolItem | null;
  onClose: () => void;
}

export const InteractiveToolModal: React.FC<InteractiveToolModalProps> = ({
  tool,
  onClose,
}) => {
  if (!tool) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tool-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0D0D10] border border-[#650814]/70 rounded-xl p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar pré-visualização da ferramenta"
          className="absolute top-4 right-4 p-2 text-[#E8E4E5]/60 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#D90429]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FF2442] font-semibold mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Ferramenta Prática do E-book</span>
        </div>

        <h3 id="tool-modal-title" className="font-display text-2xl sm:text-3xl text-white font-semibold">
          {tool.title}
        </h3>
        <p className="text-sm text-[#E8E4E5]/70 mt-1 mb-5">
          {tool.subtitle}
        </p>

        <div className="space-y-4 text-sm text-[#E8E4E5]/90 border-t border-white/10 pt-4">
          <div className="p-4 rounded-lg bg-[#140508] border border-[#650814]/40">
            <h4 className="text-xs uppercase tracking-wider text-[#FF2442] font-semibold mb-2">
              Conceito & Finalidade
            </h4>
            <p className="leading-relaxed text-[#E8E4E5]">
              {tool.detailedDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#E8E4E5]/80 font-semibold mb-2.5">
              Passos de Aplicação no Livro:
            </h4>
            <ul className="space-y-2">
              {tool.howToApply.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E8E4E5]/80 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 text-xs text-[#E8E4E5]/70 italic">
            <span className="font-semibold text-white not-italic block mb-0.5">Reflexão central:</span>
            "{tool.takeaway}"
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-lg bg-[#D90429] hover:bg-[#FF2442] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
