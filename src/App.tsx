/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Menu,
  X,
  HeartHandshake,
  Brain,
  MessageSquare,
  Shield,
  Compass,
  Layers,
  Scale,
  RefreshCw,
  FileCheck,
  Search,
  Lock,
  ExternalLink,
} from 'lucide-react';

import {
  PRODUCT_PRICE,
  PURCHASE_URL,
  WHATSAPP_URL,
  formatProductPrice,
} from './config/checkoutConfig';
import { PRACTICAL_TOOLS, FAQS } from './data/ebookContent';
import { EbookCoverMockup } from './components/EbookCoverMockup';
import { InteractiveToolModal, ToolItem } from './components/InteractiveToolModal';
import { LegalModal } from './components/LegalModal';
import { FloatingControls } from './components/FloatingControls';

// Imagens geradas com cinematografia de alta fidelidade
import heroBackgroundUrl from './assets/images/hero_cinematic_fracture_1791922861155.jpg';
import toolsBannerUrl from './assets/images/tools_reflection_concept_1791922861434.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'contact' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const priceData = formatProductPrice();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  /**
   * Função central de compra e redirecionamento direto:
   * Leva o utilizador imediatamente para o link oficial sem exibir popups intermediários.
   */
  const handlePurchaseAction = () => {
    window.open(PURCHASE_URL || 'https://bit.ly/codigo-do-amor1', '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsApp = () => {
    window.open(WHATSAPP_URL || 'https://bit.ly/codigo-do-amor1', '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E8E4E5] font-sans-body selection:bg-[#D90429] selection:text-white relative overflow-x-hidden">
      {/* Toast Feedback */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 sm:right-8 z-50 bg-[#160408] border border-[#FF2442]/80 text-[#E8E4E5] text-xs sm:text-sm px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 backdrop-blur-md animate-in fade-in slide-in-from-top-2"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF2442] shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-[#E8E4E5]/60 hover:text-white"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 1. PREMIUM NAVBAR (Strict 3-Zone Contract) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#650814]/40 shadow-[0_4px_30px_rgba(101,8,20,0.15)]'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-xl sm:text-2xl text-white font-semibold tracking-wider hover:text-[#FF2442] transition-colors whitespace-nowrap shrink-0"
          >
            O CÓDIGO DO AMOR
          </a>

          {/* Zone 2: 4 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm text-[#E8E4E5]/80 font-medium">
            <button
              onClick={() => scrollToSection('o-ebook')}
              className="hover:text-[#FF5E78] transition-colors whitespace-nowrap shrink-0 cursor-pointer glow-text-hover"
            >
              O E-book
            </button>
            <button
              onClick={() => scrollToSection('ferramentas')}
              className="hover:text-[#FF5E78] transition-colors whitespace-nowrap shrink-0 cursor-pointer glow-text-hover"
            >
              Ferramentas Práticas
            </button>
            <button
              onClick={() => scrollToSection('para-quem-e')}
              className="hover:text-[#FF5E78] transition-colors whitespace-nowrap shrink-0 cursor-pointer glow-text-hover"
            >
              Para Quem É
            </button>
            <button
              onClick={() => scrollToSection('perguntas-frequentes')}
              className="hover:text-[#FF5E78] transition-colors whitespace-nowrap shrink-0 cursor-pointer glow-text-hover"
            >
              Perguntas Frequentes
            </button>
          </nav>

          {/* Zone 3: 1 primary CTA button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={handlePurchaseAction}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D90429] to-[#FF2442] hover:brightness-110 rounded-lg shadow-[0_0_20px_rgba(217,4,41,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              QUERO O MEU E-BOOK
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            className="md:hidden p-2 text-[#E8E4E5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D90429] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#09090B] border-b border-[#650814]/70 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
            <nav className="flex flex-col space-y-3.5 text-sm font-medium">
              <button
                onClick={() => scrollToSection('o-ebook')}
                className="text-left py-1 text-[#E8E4E5]/80 hover:text-[#FF5E78] transition-colors glow-text-hover"
              >
                O E-book
              </button>
              <button
                onClick={() => scrollToSection('ferramentas')}
                className="text-left py-1 text-[#E8E4E5]/80 hover:text-[#FF5E78] transition-colors glow-text-hover"
              >
                Ferramentas Práticas
              </button>
              <button
                onClick={() => scrollToSection('para-quem-e')}
                className="text-left py-1 text-[#E8E4E5]/80 hover:text-[#FF5E78] transition-colors glow-text-hover"
              >
                Para Quem É
              </button>
              <button
                onClick={() => scrollToSection('perguntas-frequentes')}
                className="text-left py-1 text-[#E8E4E5]/80 hover:text-[#FF5E78] transition-colors glow-text-hover"
              >
                Perguntas Frequentes
              </button>
            </nav>
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePurchaseAction();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D90429] to-[#FF2442] rounded-lg shadow-lg"
              >
                QUERO O MEU E-BOOK
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. CINEMATIC HERO — THE FIRST IMPRESSION */}
      <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackgroundUrl}
            alt="Atmosfera de romance sombrio e fratura de luz vermelha"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-35 filter brightness-75 contrast-125"
          />
          {/* Deep obsidian vignette and bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/60 to-[#050505]" />
          
          {/* Glowing Red Fracture Line across screen */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] fracture-line opacity-40 hidden lg:block pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Editorial Pitch */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Eyebrow Label (Clean unboxed text, no pill) */}
              <div className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#FF2442] font-semibold flex items-center gap-2">
                <span className="w-6 h-[1.5px] bg-[#FF2442]" />
                <span>UM GUIA PARA COMPREENDER MELHOR O AMOR</span>
              </div>

              {/* Main Headline com palavras e letras dinâmicas que acendem em vermelho claro ao passar o cursor */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-[1.08] text-balance select-none">
                <span className="lit-word">O</span>{' '}
                <span className="lit-word">AMOR</span>{' '}
                <span className="lit-word">NÃO</span>{' '}
                <span className="lit-word">DEVERIA</span>{' '}
                <span className="lit-word">FAZER-TE</span>{' '}
                <span className="lit-word text-[#FF2442] glow-crimson inline-block">
                  PERDER
                </span>{' '}
                <span className="lit-word text-[#FF2442] glow-crimson inline-block">
                  DE
                </span>{' '}
                <span className="lit-word text-[#FF2442] glow-crimson inline-block">
                  TI.
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="font-display text-lg sm:text-xl md:text-2xl text-[#E8E4E5] font-normal leading-snug glow-text-hover">
                Compreende as relações, recupera o teu valor e constrói um amor que não te destrói.
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base text-[#E8E4E5]/80 font-light leading-relaxed max-w-2xl glow-text-hover">
                Descobre ferramentas práticas para refletires sobre os teus padrões, compreenderes melhor as tuas emoções, comunicares com mais clareza e tomares decisões amorosas mais conscientes.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handlePurchaseAction}
                  className="px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D90429] to-[#FF2442] hover:brightness-110 rounded-lg shadow-[0_0_30px_rgba(217,4,41,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>QUERO DESCOBRIR O CÓDIGO DO AMOR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('ferramentas')}
                  className="px-6 py-4 text-xs sm:text-sm font-semibold tracking-wider text-[#E8E4E5] hover:text-[#FF5E78] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#650814] rounded-lg transition-all flex items-center justify-center cursor-pointer whitespace-nowrap shrink-0 glow-text-hover"
                >
                  EXPLORAR FERRAMENTAS
                </button>
              </div>

              {/* Compact Truthful Product Strip (Zero-Pill: clean unboxed text with · separators) */}
              <div className="pt-3 flex flex-wrap items-center gap-2.5 text-xs text-[#E8E4E5]/70">
                <span className="font-medium text-white">E-book digital PDF</span>
                <span aria-hidden="true" className="text-[#D90429]">·</span>
                <span>Exercícios de reflexão</span>
                <span aria-hidden="true" className="text-[#D90429]">·</span>
                <span>Lê ao teu ritmo</span>
              </div>
            </div>

            {/* Right Column: 3D Ebook Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center py-6">
              <EbookCoverMockup size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EMOTIONAL PROBLEM SECTION */}
      <section className="py-24 bg-[#09090B] border-y border-[#650814]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF2442] font-semibold">
              Reconhecer o Desgaste
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight text-balance interactive-title glow-text-hover">
              ÀS VEZES, O MAIS DIFÍCIL NÃO É AMAR. É NÃO TE PERDERES NO PROCESSO.
            </h2>
            <div className="h-[1.5px] w-16 bg-[#D90429] mx-auto my-4" />
          </div>

          {/* 5 Dark Cards with Subtle Red Borders & Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0E0E12] border border-[#650814]/60 hover:border-[#FF2442]/70 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#30050B] border border-[#650814] flex items-center justify-center text-[#FF2442] mb-4 group-hover:scale-105 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-semibold mb-2 glow-text-hover">
                Pensar demasiado em cada mensagem
              </h3>
              <p className="text-xs sm:text-sm text-[#E8E4E5]/70 leading-relaxed">
                Analisar palavras, tempos de resposta e entrelinhas até perderes a paz mental e a capacidade de relaxar.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0E12] border border-[#650814]/60 hover:border-[#FF2442]/70 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#30050B] border border-[#650814] flex items-center justify-center text-[#FF2442] mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-semibold mb-2 glow-text-hover">
                Ter dificuldade em expressar o que sentes
              </h3>
              <p className="text-xs sm:text-sm text-[#E8E4E5]/70 leading-relaxed">
                Engolir incómodos com receio de parecer exigente, provocar um afastamento ou iniciar um conflito difícil.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0E12] border border-[#650814]/60 hover:border-[#FF2442]/70 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#30050B] border border-[#650814] flex items-center justify-center text-[#FF2442] mb-4 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-semibold mb-2 glow-text-hover">
                Esquecer os teus próprios limites
              </h3>
              <p className="text-xs sm:text-sm text-[#E8E4E5]/70 leading-relaxed">
                Ceder aos poucos para acomodar o outro até deixares de reconhecer as tuas próprias vontades e valores.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0E12] border border-[#650814]/60 hover:border-[#FF2442]/70 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#30050B] border border-[#650814] flex items-center justify-center text-[#FF2442] mb-4 group-hover:scale-105 transition-transform">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-semibold mb-2 glow-text-hover">
                Repetir padrões que te magoam
              </h3>
              <p className="text-xs sm:text-sm text-[#E8E4E5]/70 leading-relaxed">
                Sentir que, mesmo mudando de parceiro, as mesmas dinâmicas de insegurança e frustração voltam a acontecer.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0E12] border border-[#650814]/60 hover:border-[#FF2442]/70 transition-all duration-300 group md:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-[#30050B] border border-[#650814] flex items-center justify-center text-[#FF2442] mb-4 group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-white font-semibold mb-2 glow-text-hover">
                Tentar compreender uma relação depois de uma rutura
              </h3>
              <p className="text-xs sm:text-sm text-[#E8E4E5]/70 leading-relaxed">
                Procurar sentido no que aconteceu, lidar com a saudade e distinguir se uma reconciliação seria crescimento mútuo ou apenas medo do vazio.
              </p>
            </div>
          </div>

          {/* Supporting Empathetic Copy */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base text-[#E8E4E5]/90 leading-relaxed bg-[#141416]/50 p-6 rounded-xl border border-white/5 glow-text-hover">
              Se alguma destas situações te é familiar, este guia pode ajudar-te a refletir sobre o que sentes, reconhecer padrões e explorar formas mais saudáveis de agir.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT REVEAL — THE EBOOK */}
      <section id="o-ebook" className="py-24 relative overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#650814]/20 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Split Left: Ebook Mockup */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <EbookCoverMockup size="normal" />
            </div>

            {/* Split Right: Product Framing & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#FF2442] font-semibold">
                APRESENTAÇÃO OFICIAL
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight interactive-title glow-text-hover">
                APRESENTAMOS O CÓDIGO DO AMOR
              </h2>

              <div className="h-[2px] w-20 bg-gradient-to-r from-[#D90429] to-transparent" />

              <p className="text-sm sm:text-base text-[#E8E4E5]/90 leading-relaxed">
                Um guia digital criado para te ajudar a compreender melhor a tua forma de amar, reconhecer padrões emocionais e desenvolver relações baseadas em respeito, comunicação e reciprocidade.
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2442] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E8E4E5]/80">
                    <strong>17 Capítulos Práticos:</strong> Uma jornada completa dividida em 5 partes essenciais de autodescoberta e dinâmicas a dois.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2442] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E8E4E5]/80">
                    <strong>Sem Fórmulas Mágicas nem Manipulação:</strong> Foco em maturidade emocional, clareza verbal e respeito à tua individualidade.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF2442] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E8E4E5]/80">
                    <strong>Ferramentas de Aplicação Pessoal:</strong> Mapas mentais, métodos de desaceleração e guiões para conversas difíceis.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handlePurchaseAction}
                  className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D90429] to-[#FF2442] hover:brightness-110 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  QUERO CONHECER O GUIA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRACTICAL TOOLS SECTION */}
      <section id="ferramentas" className="py-24 bg-[#09090B] border-t border-[#650814]/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF2442] font-semibold">
              Aplicação Real
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight interactive-title glow-text-hover">
              UM GUIA PARA REFLETIR E AGIR, NÃO APENAS LER
            </h2>
            <p className="text-xs sm:text-sm text-[#E8E4E5]/70 max-w-xl mx-auto glow-text-hover">
              Cada conceito do livro é acompanhado por métodos acionáveis concebidos para os momentos em que a emoção tenta assumir o controlo.
            </p>
          </div>

          {/* Banner with Editorial Still Life */}
          <div className="mb-12 relative rounded-2xl overflow-hidden border border-[#650814]/50 shadow-2xl">
            <div className="relative h-48 sm:h-64 w-full">
              <img
                src={toolsBannerUrl}
                alt="Caderno e ferramentas de reflexão emocional"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-70 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent flex items-center px-6 sm:px-12">
                <div className="max-w-lg space-y-2">
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#FF2442] font-semibold">
                    Caderno de Trabalho Integrado
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white font-bold glow-text-hover">
                    Exercícios desenhados para o teu quotidiano
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8E4E5]/80 glow-text-hover">
                    Clica em qualquer uma das ferramentas abaixo para explorar a sua finalidade prática.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Practical Tools Grid with interactive preview modals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICAL_TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="p-6 rounded-xl bg-[#0E0E12] border border-[#650814]/50 hover:border-[#FF2442] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-wider uppercase text-[#FF2442] font-semibold font-mono">
                      Ferramenta Prática
                    </span>
                    <FileCheck className="w-4 h-4 text-[#E8E4E5]/40 group-hover:text-[#FF2442] transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-white font-semibold mb-1 group-hover:text-[#FF2442] glow-text-hover transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-[#E8E4E5]/60 mb-3 italic">
                    {tool.subtitle}
                  </p>
                  <p className="text-xs text-[#E8E4E5]/80 leading-relaxed mb-4">
                    {tool.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <button
                    onClick={() => setSelectedTool(tool)}
                    className="w-full py-2 px-3 text-xs font-semibold text-white bg-white/5 hover:bg-[#30050B] hover:text-[#FF2442] border border-white/10 hover:border-[#650814] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explorar Metodologia</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHO THIS EBOOK IS FOR */}
      <section id="para-quem-e" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF2442] font-semibold">
              Público & Alinhamento
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight interactive-title glow-text-hover">
              ESTE GUIA PODE SER PARA TI SE…
            </h2>
          </div>

          {/* Two-column statements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              'Queres compreender melhor as tuas reações nas relações.',
              'Desejas comunicar com mais clareza.',
              'Estás a recuperar de uma separação.',
              'Queres refletir antes de tentar uma reconciliação.',
              'Desejas proteger a tua identidade e autoestima.',
              'Procuras construir uma relação mais consciente.',
            ].map((statement, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#09090C] border border-[#650814]/40 flex items-start gap-4 hover:border-[#FF2442]/60 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#30050B] text-[#FF2442] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-[#E8E4E5]/90 font-medium leading-relaxed">
                  {statement}
                </p>
              </div>
            ))}
          </div>

          {/* Gentle Educational Note */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-xs text-[#E8E4E5]/60 leading-relaxed border-t border-white/5 pt-6">
              Este e-book destina-se a adultos que procuram reflexão pessoal e educação emocional prática. Não constitui terapia, diagnóstico clínico nem acompanhamento médico profissional.
            </p>
          </div>
        </div>
      </section>

      {/* 9. PRICE AND PURCHASE SECTION — HIGHEST CONVERSION PRIORITY */}
      <section id="comprar" className="py-24 bg-[#09090B] border-y border-[#650814]/40 relative">
        {/* Halo Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#650814]/25 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF2442] font-semibold">
            Decisão & Acesso Imediato
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight text-balance interactive-title glow-text-hover">
            COMEÇA A ESCREVER UMA NOVA PÁGINA NA TUA VIDA AMOROSA.
          </h2>

          <p className="text-xs sm:text-sm text-[#E8E4E5]/70 max-w-lg mx-auto glow-text-hover">
            Recebe o guia completo em formato digital PDF para leres no telemóvel, tablet ou computador.
          </p>

          {/* Premium Purchase Card */}
          <div className="mt-8 p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#140407] to-[#0A0A0C] border border-[#FF2442]/60 shadow-[0_10px_60px_-15px_rgba(217,4,41,0.35)] space-y-6 text-left relative overflow-hidden">
            {/* Top Product Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-wide glow-text-hover">
                  O CÓDIGO DO AMOR
                </h3>
                <span className="text-xs text-[#E8E4E5]/70 block mt-1">
                  E-book digital em PDF · Acesso Vitalício
                </span>
              </div>

              {/* Price display with truthful fallback */}
              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#E8E4E5]/60 block">
                  Investimento
                </span>
                <span className="font-display text-2xl sm:text-3xl text-[#FF2442] font-bold glow-text-hover">
                  {priceData.isConfigured ? priceData.displayPrice : 'Preço a definir'}
                </span>
                {!priceData.isConfigured && (
                  <span className="text-[10px] text-[#E8E4E5]/50 block">
                    (Configuração pelo responsável)
                  </span>
                )}
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="space-y-3 py-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#E8E4E5]/90 glow-text-hover">
                <CheckCircle2 className="w-4 h-4 text-[#FF2442] shrink-0" />
                <span>17 capítulos completos organizados em 5 partes fundamentais</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#E8E4E5]/90 glow-text-hover">
                <CheckCircle2 className="w-4 h-4 text-[#FF2442] shrink-0" />
                <span>6 ferramentas práticas de reflexão e guiões de diálogo</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#E8E4E5]/90 glow-text-hover">
                <CheckCircle2 className="w-4 h-4 text-[#FF2442] shrink-0" />
                <span>Formato PDF universal compatível com telemóvel, tablet e e-readers</span>
              </div>
            </div>

            {/* Main Purchase Button */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handlePurchaseAction}
                className="w-full py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D90429] to-[#FF2442] hover:brightness-110 rounded-xl shadow-[0_0_35px_rgba(217,4,41,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>SIM, QUERO O MEU E-BOOK</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-[11px] text-center text-[#E8E4E5]/60">
                Entrega digital em formato PDF. Acesso direto após validação do pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ — ACCESSIBLE INTERACTIVE ACCORDION */}
      <section id="perguntas-frequentes" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FF2442] font-semibold">
              Esclarecimentos Transparentes
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight interactive-title glow-text-hover">
              PERGUNTAS FREQUENTES
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E0E12] border-[#FF2442]/60'
                      : 'bg-[#09090B] border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#FF2442]"
                  >
                    <span className="font-display text-base sm:text-lg text-white font-semibold glow-text-hover">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E8E4E5]/70 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180 text-[#FF2442]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#E8E4E5]/80 leading-relaxed border-t border-white/5"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FINAL CINEMATIC CTA */}
      <section className="py-28 bg-gradient-to-b from-[#09090B] via-[#140407] to-[#050505] border-t border-[#650814]/40 relative overflow-hidden text-center">
        {/* Horizon crimson streak */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF2442]/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#FF2442] font-semibold block">
            O Próximo Passo
          </span>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight tracking-tight text-balance interactive-title glow-text-hover">
            O TEU VALOR NÃO DEPENDE DE QUEM ESCOLHE FICAR.
          </h2>

          <p className="text-sm sm:text-base text-[#E8E4E5]/80 font-light max-w-xl mx-auto leading-relaxed glow-text-hover">
            Começa por compreender os teus padrões, respeitar os teus limites e tomar decisões mais conscientes.
          </p>

          <div className="pt-4">
            <button
              onClick={handlePurchaseAction}
              className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D90429] to-[#FF2442] hover:brightness-110 rounded-xl shadow-[0_0_40px_rgba(217,4,41,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center gap-3"
            >
              <span>QUERO DESCOBRIR O CÓDIGO DO AMOR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 py-14 text-center sm:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
            <div>
              <span className="font-display text-xl text-white font-semibold tracking-wider block">
                O CÓDIGO DO AMOR
              </span>
              <p className="text-xs text-[#E8E4E5]/60 mt-1">
                Mais diálogo. Mais consciência. Relações mais saudáveis.
              </p>
            </div>

            {/* Legal and Support modal buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#E8E4E5]/70">
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Termos e Condições
              </button>
              <button
                onClick={() => setLegalModalType('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contacto & Suporte
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#E8E4E5]/50">
            <p>
              © {new Date().getFullYear()} O Código do Amor. Todos os direitos reservados.
            </p>
            <p className="max-w-md text-center md:text-right">
              Este e-book tem fins educativos e de reflexão pessoal. Não garante resultados específicos nem substitui apoio psicológico profissional.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING CONTROLS (Scroll progress, WhatsApp button, Back to top, Mobile sticky bar) */}
      <FloatingControls
        onPurchaseClick={handlePurchaseAction}
        showToast={showToast}
      />

      {/* MODALS */}
      <InteractiveToolModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
