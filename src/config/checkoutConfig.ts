/**
 * CONFIGURAÇÃO DO PRODUTO E CHECKOUT
 * ====================================
 * 
 * Este ficheiro centraliza as definições de preço, moeda, ligação de checkout,
 * contacto oficial de WhatsApp e caminho da capa do e-book.
 * 
 * INSTRUÇÕES PARA O VENDEDOR / DESENVOLVEDOR:
 * 1. PREÇO:
 *    - Se o preço ainda não estiver definido, mantenha "DEFINIR_PRECO". O site mostrará "Preço a definir".
 *    - Quando definir o valor (ex: 5000 para 5.000 Kz), altere para: export const PRODUCT_PRICE = "5000";
 * 
 * 2. LINK DE CHECKOUT (PURCHASE_URL):
 *    - Insira a URL real da sua plataforma de pagamento (ex: Hotmart, Kiwify, Stripe, AppyPay,
 *      gateway Multicaixa Express ou página segura de checkout).
 *    - Enquanto estiver vazio (""), o sistema protegerá o utilizador, exibindo um aviso informativo
 *      em português e encaminhando para o suporte oficial.
 * 
 * 3. WHATSAPP (WHATSAPP_URL):
 *    - Insira o link direto do WhatsApp (ex: "https://wa.me/244900000000?text=Olá,%20tenho%20interesse%20no%20Código%20do%20Amor").
 *    - Se estiver vazio (""), o botão informará que o contacto está em fase de ativação.
 * 
 * 4. IMAGEM DA CAPA (COVER_IMAGE_URL):
 *    - Se tiver um ficheiro próprio (ex: "/images/o-codigo-do-amor-capa.png"), especifique o caminho aqui.
 *    - Se for deixado vazio (""), o componente EbookCoverMockup exibirá a arte 3D editorial nativa.
 */

// TODO: O vendedor deve definir o preço em Kwanzas (Kz/AOA) aqui quando lançado.
// Exemplo: export const PRODUCT_PRICE: string = "5000"; (para 5.000 Kz)
export const PRODUCT_PRICE: string = "DEFINIR_PRECO";

// Moeda padrão para Angola e mercado lusófono
export const CURRENCY: string = "AOA";
export const CURRENCY_SYMBOL: string = "Kz";

// Link de compra / redirecionamento direto
export const PURCHASE_URL: string = "https://bit.ly/codigo-do-amor1";

// Link oficial de redirecionamento para o WhatsApp indicado (928230620 - Angola)
export const WHATSAPP_NUMBER: string = "928230620";
export const WHATSAPP_URL: string = "https://wa.me/244928230620?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20e-book%20O%20C%C3%B3digo%20do%20Amor";

// TODO: Caminho para a imagem final da capa do livro digital (caso exista em /public ou assets)
export const COVER_IMAGE_URL: string = "";

/**
 * Utilitário de formatação de preço com base na configuração
 */
export function formatProductPrice(): { isConfigured: boolean; displayPrice: string; rawValue: string } {
  if (!PRODUCT_PRICE || PRODUCT_PRICE === "DEFINIR_PRECO" || PRODUCT_PRICE.trim() === "") {
    return {
      isConfigured: false,
      displayPrice: "Preço a definir",
      rawValue: "",
    };
  }

  // Tentar formatar número com separador de milhares se for numérico
  const numericPrice = Number(PRODUCT_PRICE.replace(/\D/g, ""));
  if (!isNaN(numericPrice) && numericPrice > 0) {
    const formatted = new Intl.NumberFormat("pt-AO").format(numericPrice);
    return {
      isConfigured: true,
      displayPrice: `${formatted} ${CURRENCY_SYMBOL}`,
      rawValue: PRODUCT_PRICE,
    };
  }

  return {
    isConfigured: true,
    displayPrice: `${PRODUCT_PRICE} ${CURRENCY_SYMBOL}`,
    rawValue: PRODUCT_PRICE,
  };
}
