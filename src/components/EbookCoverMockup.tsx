import React, { useState } from 'react';
import { COVER_IMAGE_URL } from '../config/checkoutConfig';
import { BookOpen, Sparkles } from 'lucide-react';

interface EbookCoverMockupProps {
  className?: string;
  size?: 'normal' | 'large' | 'compact';
  interactive?: boolean;
}

export const EbookCoverMockup: React.FC<EbookCoverMockupProps> = ({
  className = '',
  size = 'normal',
  interactive = true,
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const dimensions = {
    compact: 'w-[220px] h-[310px]',
    normal: 'w-[280px] sm:w-[320px] h-[395px] sm:h-[450px]',
    large: 'w-[300px] sm:w-[360px] h-[420px] sm:h-[505px]',
  }[size];

  return (
    <div
      className={`relative flex items-center justify-center book-stage ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Red Glow Halo behind the book */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-[#650814]/40 via-[#D90429]/25 to-transparent rounded-2xl filter blur-3xl pointer-events-none transition-opacity duration-700"
        style={{ opacity: isHovered ? 0.9 : 0.6 }}
      />

      {/* 3D Book Container */}
      <div
        className={`relative ${dimensions} book-card cursor-pointer select-none`}
        style={{
          transform: isHovered
            ? `rotateY(${rotate.y - 12}deg) rotateX(${rotate.x + 3}deg) translateZ(20px)`
            : 'rotateY(-14deg) rotateX(2deg)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Book Spine (left 3D extrusion) */}
        <div
          className="absolute top-0 bottom-0 left-0 w-[24px] origin-right bg-gradient-to-r from-[#050505] via-[#1a0408] to-[#0a0a0c] border-r border-[#650814]/40"
          style={{
            transform: 'rotateY(-90deg) translateX(-24px)',
            boxShadow: 'inset -2px 0 6px rgba(0,0,0,0.8)',
          }}
        >
          <div className="h-full flex items-center justify-center">
            <span
              className="text-[9px] tracking-[0.25em] text-[#E8E4E5]/70 uppercase font-serif whitespace-nowrap transform -rotate-90 origin-center"
            >
              O CÓDIGO DO AMOR
            </span>
          </div>
        </div>

        {/* Book Pages Edge (Right 3D Paper Thickness) */}
        <div
          className="absolute top-[3px] bottom-[3px] right-0 w-[18px] origin-left bg-[#1a1818] border-l border-black/80"
          style={{
            transform: 'rotateY(90deg) translateX(18px)',
            background: 'repeating-linear-gradient(90deg, #1f1b1c 0px, #1f1b1c 1px, #120f10 2px, #120f10 3px)',
            boxShadow: 'inset 0 0 4px rgba(0,0,0,0.9)',
          }}
        />

        {/* Book Cover Face */}
        <div
          className="relative w-full h-full rounded-r-md overflow-hidden bg-[#070709] border border-white/10"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 25px -5px rgba(217, 4, 41, 0.25)',
          }}
        >
          {COVER_IMAGE_URL ? (
            /* Imagem externa customizada se fornecida pelo vendedor */
            <img
              src={COVER_IMAGE_URL}
              alt="Capa do E-book O Código do Amor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Se a imagem falhar, oculta a tag para mostrar o fallback estético
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            /* Editorial 3D Cover Design Fallback (Alta Definição Editorial Cinematográfica) */
            <div className="relative w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#09090B] via-[#180407] to-[#060608] overflow-hidden">
              {/* Efeito sutil de textura de vinco de lombada */}
              <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/80 via-white/5 to-transparent pointer-events-none" />

              {/* Linha de Fratura Vermelha Brilhante Central (Símbolo de Rutura e Reencontro) */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-70">
                <div className="w-[1px] h-[85%] fracture-line relative">
                  <div className="absolute top-1/3 -left-2 w-4 h-4 bg-[#D90429]/40 rounded-full filter blur-md" />
                  <div className="absolute top-2/3 -left-3 w-6 h-6 bg-[#FF2442]/30 rounded-full filter blur-lg" />
                </div>
              </div>

              {/* Silhuetas sutis de duas pessoas distanciadas */}
              <div className="absolute inset-0 pointer-events-none opacity-25 flex items-center justify-between px-6">
                <div className="w-16 h-36 bg-gradient-to-t from-[#30050B] to-transparent rounded-t-full filter blur-[1px]" />
                <div className="w-16 h-36 bg-gradient-to-t from-[#30050B] to-transparent rounded-t-full filter blur-[1px]" />
              </div>

              {/* Cabeçalho da Capa */}
              <div className="relative z-10 pt-2 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#E8E4E5]/70 font-medium block mb-1">
                  GUIA PRÁTICO DIGITAL
                </span>
                <div className="h-[1px] w-8 bg-[#D90429]/60 mx-auto" />
              </div>

              {/* Título Principal Tipográfico de Alto Impacto */}
              <div className="relative z-10 text-center my-auto py-2">
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wider font-semibold leading-tight">
                  O CÓDIGO
                </h3>
                <div className="font-display text-3xl sm:text-4xl text-[#FF2442] tracking-widest font-bold my-1 drop-shadow-[0_0_12px_rgba(255,36,66,0.6)]">
                  DO AMOR
                </div>
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D90429] to-transparent mx-auto my-3" />
                <p className="text-[10px] sm:text-[11px] text-[#E8E4E5]/80 font-light leading-relaxed max-w-[210px] mx-auto">
                  Como compreender as relações, recuperar o teu valor e construir um amor que não te destrói.
                </p>
              </div>

              {/* Rodapé da Capa */}
              <div className="relative z-10 text-center border-t border-white/5 pt-3">
                <div className="flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-widest text-[#E8E4E5]/60 font-medium">
                  <BookOpen className="w-3 h-3 text-[#FF2442]" />
                  <span>Edição Digital em PDF</span>
                </div>
                <div className="mt-1 text-[8px] text-[#E8E4E5]/40 tracking-wider">
                  Desenvolvimento Emocional & Relações
                </div>
              </div>

              {/* Reflexo de Luz Diagonal Suave */}
              <div
                className="absolute -top-[120%] -left-[100%] w-[250%] h-[250%] bg-gradient-to-b from-white/10 via-transparent to-transparent transform -rotate-45 pointer-events-none transition-transform duration-700"
                style={{
                  transform: isHovered ? 'rotate(-45deg) translateY(20%)' : 'rotate(-45deg) translateY(0)',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
