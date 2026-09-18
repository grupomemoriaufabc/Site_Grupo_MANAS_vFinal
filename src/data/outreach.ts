export interface OutreachItem {
  title: string;
  description?: string;
  image: string;
  url: string;
  tag?: "Artigo" | "Podcast" | "Mídia" | "Vídeo" | string;
}

export const outreach: OutreachItem[] = [
  {
    title: "Como o cérebro decide sob incerteza",
    description: "Entrevista sobre os bastidores da pesquisa em neurociência da decisão.",
    image: "https://picsum.photos/seed/manas-outreach-1/1200/800",
    url: "https://example.com/artigo-1",
    tag: "Artigo",
  },
  {
    title: "Podcast: Mentes em rede",
    description: "Conversa sobre redes neurais biológicas e artificiais.",
    image: "https://picsum.photos/seed/manas-outreach-2/1200/800",
    url: "https://example.com/podcast-1",
    tag: "Podcast",
  },
  {
    title: "Lab MANAS na mídia nacional",
    description: "Cobertura sobre os avanços recentes do laboratório.",
    image: "https://picsum.photos/seed/manas-outreach-3/1200/800",
    url: "https://example.com/midia-1",
    tag: "Mídia",
  },
  {
    title: "Vídeo: Um tour pelo laboratório",
    description: "Conheça os equipamentos e o dia a dia da equipe.",
    image: "https://picsum.photos/seed/manas-outreach-4/1200/800",
    url: "https://example.com/video-1",
    tag: "Vídeo",
  },
  {
    title: "Neurociência para todos",
    description: "Coluna de divulgação científica voltada ao grande público.",
    image: "https://picsum.photos/seed/manas-outreach-5/1200/800",
    url: "https://example.com/artigo-2",
    tag: "Artigo",
  },
];
