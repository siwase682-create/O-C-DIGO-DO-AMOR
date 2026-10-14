import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_NUMBER, formatProductPrice } from '../config/checkoutConfig';

interface FloatingControlsProps {
  onPurchaseClick: () => void;
  showToast?: (msg: string) => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  onPurchaseClick,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingActions, setShowFloatingActions] = useState(true);

  const priceInfo = formatProductPrice();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setShowBackToTop(currentScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL || `https://wa.me/244${WHATSAPP_NUMBER}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* 1. Scroll Progress Bar (Linha Vermelha de Alta Definição no topo) */}
      <div
        className="fixed top-0 left-0 h-[3px] z-50 bg-gradient-to-r from-[#650814] via-[#D90429] to-[#FF2442] shadow-[0_0_10px_#FF2442] transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de leitura da página"
      />

      {/* 2. DOCK DE BOTÕES FLUTUANTES (Canto Inferior Direito) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Botão Flutuante: Voltar ao Topo */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="w-11 h-11 rounded-full bg-[#09090B]/95 border border-[#650814]/70 hover:border-[#FF2442] text-[#E8E4E5] hover:text-[#FF5E78] flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,36,66,0.35)] focus:outline-none focus:ring-2 focus:ring-[#D90429] cursor-pointer group"
          >
            <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        )}

        {/* Botão Flutuante de Compra Rápida (Desktop & Mobile) */}
        <button
          onClick={onPurchaseClick}
          aria-label="Comprar E-book Agora"
          className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D90429] to-[#FF2442] text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(217,4,41,0.5)] hover:shadow-[0_0_35px_rgba(255,36,66,0.7)] hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20"
        >
          <ShoppingBag className="w-4 h-4 fill-current" />
          <span>Comprar E-book</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </button>

        {/* Botão Flutuante do WhatsApp (Com redirecionamento direto para 928230620) */}
        <div className="relative group flex items-center">
          {/* Etiqueta elegante com o número de WhatsApp solicitado */}
          <div className="hidden lg:flex items-center gap-2 mr-3 px-3 py-1.5 rounded-full bg-[#0D0D10]/95 border border-[#25D366]/40 text-xs text-[#E8E4E5] backdrop-blur-md shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-medium">WhatsApp: {WHATSAPP_NUMBER}</span>
          </div>

          <button
            onClick={handleWhatsAppClick}
            aria-label={`Falar no WhatsApp (${WHATSAPP_NUMBER})`}
            className="relative w-13 h-13 rounded-full bg-[#121215] border-2 border-[#25D366] text-[#25D366] hover:text-white hover:bg-[#25D366] flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.65)] backdrop-blur-md transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] cursor-pointer"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
            {/* Halo pulsante */}
            <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping pointer-events-none" />
          </button>
        </div>
      </div>

      {/* 3. BARRA FIXA MÓVEL INFERIOR (Mobile Sticky Bar com Acesso Rápido a Compra e WhatsApp) */}
      <aside
        aria-label="Barra de ação rápida móvel"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#09090B]/95 border-t border-[#650814]/70 px-4 py-2.5 backdrop-blur-lg flex items-center justify-between gap-3 shadow-2xl"
      >
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#141418] border border-[#25D366]/60 text-[#25D366] text-xs font-semibold shrink-0 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{WHATSAPP_NUMBER}</span>
        </button>

        <button
          onClick={onPurchaseClick}
          className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-[#D90429] to-[#FF2442] hover:brightness-110 rounded-lg shadow-[0_0_20px_rgba(217,4,41,0.4)] text-center transition-all cursor-pointer whitespace-nowrap"
        >
          COMPRAR E-BOOK
        </button>
      </aside>
    </>
  );
};
