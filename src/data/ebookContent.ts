import { ToolItem } from '../components/InteractiveToolModal';

export interface EbookPart {
  number: string;
  roman: string;
  title: string;
  description: string;
  chapters: {
    number: number;
    title: string;
    description: string;
  }[];
}

export const EBOOK_PARTS: EbookPart[] = [
  {
    number: '01',
    roman: 'PARTE I',
    title: 'COMPREENDER-TE NO AMOR',
    description: 'Investiga as tuas raízes afetivas, padrões automáticos de apego e porque tantas vezes abandonamos quem somos em nome de uma relação.',
    chapters: [
      {
        number: 1,
        title: 'Porque Nos Perdemos de Nós Quando Amamos',
        description: 'A anatomia do autoabandono emocional e como o medo da rejeição nos leva a abdicar dos próprios limites.',
      },
      {
        number: 2,
        title: 'Os Teus Padrões nas Relações',
        description: 'Mapeamento das repetições inconscientes: porque continuas a viver dinâmicas semelhantes com pessoas diferentes.',
      },
      {
        number: 3,
        title: 'Apego, Insegurança e Gatilhos Emocionais',
        description: 'Como o apego ansioso e evitativo opera na rotina e como desarmar reações imediatas a sinais de distância.',
      },
    ],
  },
  {
    number: '02',
    roman: 'PARTE II',
    title: 'ATRAÇÃO, COMUNICAÇÃO E LIGAÇÃO',
    description: 'Aprende a expressar vulnerabilidade sem medo, desconstruir joguinhos e comunicar com clareza sem discussões destrutivas.',
    chapters: [
      {
        number: 4,
        title: 'Atração Sem Jogos nem Manipulação',
        description: 'Construir interesse autêntico fundamentado em presença e clareza, em vez de táticas artificiais de ausência.',
      },
      {
        number: 5,
        title: 'Como Conversar Sem Transformar Tudo numa Discussão',
        description: 'Estruturas de diálogo não violento focadas no problema em vez do ataque à pessoa.',
      },
      {
        number: 6,
        title: 'Como Interpretar Mensagens Sem Inventar Histórias',
        description: 'Desarmar a hiperanálise no WhatsApp e mensagens instantâneas; separar os factos reais das narrativas criadas pela ansiedade.',
      },
      {
        number: 7,
        title: 'Limites, Respeito, Confiança e Reciprocidade',
        description: 'Critérios tangíveis para medir o esforço mútuo e dizer "isto não é aceitável para mim" com serenidade.',
      },
    ],
  },
  {
    number: '03',
    roman: 'PARTE III',
    title: 'QUANDO O AMOR DÓI',
    description: 'Identificar a linha ténue entre desentendimentos comuns e dinâmicas desgastantes que minam a tua saúde mental.',
    chapters: [
      {
        number: 8,
        title: 'Ciúme, Medo e Dependência Emocional',
        description: 'Diferenciar o cuidado legítimo da necessidade sufocante de controlo e validação constante.',
      },
      {
        number: 9,
        title: 'Reconhecer Dinâmicas Que Fazem Mal',
        description: 'Sinais claros de inconsistência crónica, chantagem silenciosa e desvalorização subtil.',
      },
      {
        number: 10,
        title: 'Quando Sentes Que Só Tu Estás a Tentar',
        description: 'O desgaste do esforço unilateral e como reconhecer o momento em que insistir se torna autossabotagem.',
      },
    ],
  },
  {
    number: '04',
    roman: 'PARTE IV',
    title: 'RUTURAS, CURA E REAPROXIMAÇÃO',
    description: 'Um guia sóbrio para navegar pelo luto de uma separação, restaurar a dignidade e ponderar uma reconciliação com lucidez.',
    chapters: [
      {
        number: 11,
        title: 'Sobreviver a uma Rutura Sem Te Perderes',
        description: 'Protocolos de primeiros socorros emocionais para os primeiros dias após o fim de uma relação.',
      },
      {
        number: 12,
        title: 'Distância, Silêncio e Clareza Emocional',
        description: 'O verdadeiro propósito do afastamento temporário: não como castigo para o outro, mas como espaço de cura própria.',
      },
      {
        number: 13,
        title: 'Reconciliar É Boa Ideia?',
        description: 'Perguntas cruciais para distinguir saudade passageira de uma real capacidade mútua de evolução.',
      },
      {
        number: 14,
        title: 'A Conversa Difícil com um Ex',
        description: 'Como conduzir uma conversa de alinhamento ou fecho sem implorar, sem cobranças vazias e com total autorrespeito.',
      },
    ],
  },
  {
    number: '05',
    roman: 'PARTE V',
    title: 'CONSTRUIR UM AMOR MAIS SAUDÁVEL',
    description: 'As bases práticas de um relacionamento adulto e duradouro, onde o amor soma sem anular a tua individualidade.',
    chapters: [
      {
        number: 15,
        title: 'Escolher um Parceiro Compatível',
        description: 'Alinhamento de valores essenciais, ritmos de vida e capacidade de resolução de conflitos.',
      },
      {
        number: 16,
        title: 'Construir uma Relação Que Possa Durar',
        description: 'A manutenção diária da cumplicidade, acordos explícitos e cultivo de admiração recíproca.',
      },
      {
        number: 17,
        title: 'Amar Sem Te Abandonares',
        description: 'O pacto fundamental contigo mesmo: manter os teus sonhos, amizades e valor inegociáveis.',
      },
    ],
  },
];

export const PRACTICAL_TOOLS: ToolItem[] = [
  {
    id: 'quatro-territorios',
    title: 'Mapa dos Quatro Territórios',
    subtitle: 'Diferenciação clara de responsabilidades emocionais',
    shortDesc: 'Aprende a distinguir o que é da tua responsabilidade, o que pertence ao outro, o que é partilhado e o que é neutro.',
    detailedDesc: 'Muitas discussões desgastantes acontecem quando assumimos a responsabilidade pelo humor, insegurança ou decisões do parceiro, ou quando exigimos que ele adivinhe o que sentimos. O Mapa dos Quatro Territórios desenha fronteiras saudáveis na relação.',
    howToApply: [
      'Território Meu: As minhas reações, a minha comunicação, os meus limites e o meu bem-estar.',
      'Território do Outro: As decisões, o humor, a maturidade e a capacidade de escuta do parceiro.',
      'Território Partilhado: Projetos em comum, acordos de convivência e finanças da relação.',
      'Território Neutro: Fatores externos e imprevistos fora do controlo de qualquer um dos dois.',
    ],
    takeaway: 'Não podes curar o que não é teu, nem podes pedir a outro que cuide do que só tu podes cuidar.',
  },
  {
    id: 'padroes-amorosos',
    title: 'Mapa dos Teus Padrões',
    subtitle: 'Diagnóstico pessoal de repetições nas relações',
    shortDesc: 'Um exercício estruturado para identificar a linha comum entre as pessoas que escolhes e os finais que vivencias.',
    detailedDesc: 'Muitas vezes acreditamos ter "má sorte no amor", quando na verdade estamos inconscientemente a selecionar dinâmicas familiares que confirmam uma crença antiga de insuficiência. Esta ferramenta ilumina o ciclo antes que ele se repita.',
    howToApply: [
      'Registar o perfil de atração inicial (o que chamou a tua atenção no início).',
      'Identificar o primeiro momento em que ignoraste um sinal de alerta (red flag).',
      'Mapear a tua reação típica (recolhimento, perseguição ou agressividade verbal).',
      'Definir a nova resposta consciente a adotar quando o gatilho reaparecer.',
    ],
    takeaway: 'A maturidade amorosa começa quando deixas de culpar o destino e começas a observar as tuas escolhas.',
  },
  {
    id: 'gatilhos-emocionais',
    title: 'Folha de Gatilhos Emocionais',
    subtitle: 'Reconhecimento das feridas que ativam reações automáticas',
    shortDesc: 'Descobre exatamente o que dispara a tua ansiedade ou vontade de fugir antes que digas algo de que te arrependas.',
    detailedDesc: 'Um atraso de resposta, um tom de voz mais sério ou um cancelamento de planos podem parecer banais, mas para quem tem feridas de rejeição disparam um alarme corporal. Esta folha traduz o sinal físico em consciência verbal.',
    howToApply: [
      'Qual foi o facto objetivo (sem adjetivos ou deduções)?',
      'Qual foi a sensação corporal imediata (aperto no peito, nó na garganta, calor)?',
      'Qual foi a história que a minha mente criou ("ele/ela já não quer saber de mim")?',
      'Qual é a resposta mais madura e calma que posso dar após 10 minutos de reflexão?',
    ],
    takeaway: 'O gatilho avisa que há uma ferida antiga; não significa que o outro está obrigatoriamente a atacar-te.',
  },
  {
    id: 'metodo-parar',
    title: 'Método PARAR',
    subtitle: 'Protocolo de emergência em momentos de tensão',
    shortDesc: 'Cinco etapas práticas para evitar discussões destrutivas no calor do momento.',
    detailedDesc: 'Em situações de conflito, o cérebro entra em modo de defesa/ataque. O Método PARAR é uma âncora cognitiva simples que impede a escalada de palavras duras que deixam marcas irreparáveis.',
    howToApply: [
      'P - Pausa: Interrompe a conversa física ou pousa o telemóvel imediatamente.',
      'A - Avalia: Observa o teu nível de agitação numa escala de 1 a 10.',
      'R - Respira: Faz três expirações longas para baixar a frequência cardíaca.',
      'A - Alinha limites: Comunica ao outro: "Quero resolver isto, mas preciso de 15 minutos para me acalmar".',
      'R - Responde com clareza: Retoma a conversa focando estritamente numa solução prática.',
    ],
    takeaway: 'Ganhar uma discussão quase sempre significa perder a intimidade. O objetivo é compreender, não vencer.',
  },
  {
    id: 'guioes-comunicacao',
    title: 'Guiões de Comunicação',
    subtitle: 'Exemplos reais de frases para conversas difíceis',
    shortDesc: 'Modelos práticos de frases para colocar limites, pedir reciprocidade e encerrar conversas sem agressividade.',
    detailedDesc: 'Muitas pessoas calam-se porque não sabem que palavras usar sem parecer que estão a criar um problema. Os guiões oferecem estruturas testadas para expressares vulnerabilidade sem perder a firmeza.',
    howToApply: [
      'Para impor limites: "Eu gosto de estar contigo, mas não fico confortável quando este assunto é tratado com desdém."',
      'Para pedir clareza: "Preciso de compreender se estamos na mesma sintonia em relação ao que queremos construir."',
      'Para desarmar discussões: "Não quero provar quem tem razão. Quero perceber o que sentiste para podermos avançar juntos."',
      'Para após uma rutura: "Respeito a tua decisão e vou focar-me no meu caminho. Desejo-te o melhor."',
    ],
    takeaway: 'A firmeza não precisa de gritos. A tranquilidade com limites claros é a forma mais poderosa de respeito próprio.',
  },
  {
    id: 'planos-acao',
    title: 'Listas de Verificação e Planos de Ação',
    subtitle: 'Roteiros de aplicação para os dias seguintes',
    shortDesc: 'Checklists pontuais para momentos de decisão: continuar a tentar, afastar-se ou iniciar um novo ciclo.',
    detailedDesc: 'Listas de verificação objetivas que retiram o peso da confusão emocional e permitem verificar com frieza se uma relação preenche os requisitos fundamentais de segurança e respeito.',
    howToApply: [
      'Checklist de Reciprocidade: Análise sincera de iniciativa de contacto, apoio em momentos difíceis e coerência entre palavras e ações.',
      'Plano dos 30 Dias de Autonomia: Roteiro semanal de reorganização de rotina, sono, atividade física e conexão com amigos.',
      'Filtro de Reaproximação: 5 condições inegociáveis a verificar antes de considerar qualquer conversa de regresso.',
    ],
    takeaway: 'Sentimentos são importantes, mas comportamentos e acordos cumpridos são o que sustenta uma vida a dois.',
  },
];

export const FAQS = [
  {
    q: 'Em que formato recebo o e-book?',
    a: 'É um produto digital em PDF. A forma e o prazo de entrega dependem do sistema de pagamento configurado pelo vendedor.',
  },
  {
    q: 'Para quem foi criado?',
    a: 'Para adultos que desejam refletir sobre as suas relações, comunicação, limites e bem-estar emocional.',
  },
  {
    q: 'O livro garante que vou recuperar o meu ex?',
    a: 'Não. Nenhum guia pode garantir os sentimentos ou decisões de outra pessoa. O objetivo é ajudar-te a refletir e decidir com mais consciência.',
  },
  {
    q: 'Este e-book substitui terapia?',
    a: 'Não. É um material educativo e de reflexão pessoal, não um diagnóstico nem substituto de acompanhamento psicológico.',
  },
  {
    q: 'Como faço a compra?',
    a: 'Seleciona o botão de compra. Se o checkout ainda não estiver disponível, utiliza o contacto de suporte configurado pelo vendedor.',
  },
];
