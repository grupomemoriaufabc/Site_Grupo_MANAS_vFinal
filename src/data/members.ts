export interface ActiveMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  researchArea: string;
  email: string;
  lattesUrl: string;
  portfolioLinks: { label: string; url: string }[];
}

export interface AlumniMember {
  name: string;
  role: string;
  year: string;
}

export const members: {
  principalInvestigators: ActiveMember[];
  active: ActiveMember[];
  alumni: AlumniMember[];
} = {
  principalInvestigators: [
    {
      name: "Profa. Paula Tiba",
      role: "Investigadora Principal",
      bio: "Lidera linhas de pesquisa em neurobiologia dos sonhos e neuroeducação, investigando os mecanismos cognitivos e neurais que integram sono, memória e aprendizagem.",
      photo: new URL("../assets/paulinha.jpg", import.meta.url).href,
      researchArea: "Sono, Estresse e Memória",
      email: "paula.tiba@ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/4204089463111661",
      portfolioLinks: [ { label: "Orcid", url: "https://orcid.org/0000-0001-8030-9232" },
  { label: "Google Scholar", url: "https://scholar.google.com/citations?user=-T6cWlwAAAAJ&hl=pt-BR" },
  { label: "Research Gate", url: "https://www.researchgate.net/profile/Paula-Tiba?ev=prf_overview" }],
    },
    {
      name: "Profa. Tatiana Ferreira",
      role: "Investigadora Principal",
      bio: "Coordena projetos em formação de hábitos, tomada de decisão e circuitos neurais, com foco nos núcleos da base e no sistema endocanabinóide.",
      photo: new URL("../assets/tati.jpg", import.meta.url).href,
      researchArea: "Formação de Hábitos e Memória",
      email: "tatiana.ferreira@ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/2557253808540866",
      portfolioLinks: [],
    },
    {
      name: "Profa. Raquel Fornari",
      role: "Investigadora Principal",
      bio: "Estuda os mecanismos neurobiológicos, hormonais e de circuitos cerebrais envolvidos na consolidação, especificidade e generalização da memória contextual.",
      photo: new URL("../assets/raquel.jpg", import.meta.url).href,
      researchArea: "Neuropsicofarmacologia e Memória",
      email: "raquel.fornari@ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/1247705908524455",
      portfolioLinks: [
  { label: "Google Scholar", url: " https://scholar.google.com.br/citations?user=_1rn350AAAAJ&hl=en&oi=ao" },
  { label: "Research Gate", url: "https://www.researchgate.net/profile/Raquel-Fornari" }],
    },
  ],
  active: [
    {
      name: "Ben Freitas",
      role: "Doutorado",
      bio: "Investiga as bases neurais da tomada de decisão.",
      photo: new URL("../assets/ben.jpg", import.meta.url).href,
      researchArea: "Imuno Florescência",
      email: "b.freitas@ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/7937837808858946",
      portfolioLinks: [],
    },
      {
      name: "Lorena Vido",
      role: "Doutorado",
      bio: "Estuda plasticidade sináptica em modelos animais.",
      photo: new URL("../assets/lo.jpg", import.meta.url).href,
      researchArea: "Neurofisiologia",
      email: "posdoc2@manaslab.org",
      lattesUrl: "http://lattes.cnpq.br/5531004910709404",
      portfolioLinks: [],
    },
    {
      name: "Joice Cruz",
      role: "Mestrado",
      bio: "Estuda efeitos de substâncias psicoativas sobre a atenção.",
      photo: new URL("../assets/joice.jpg", import.meta.url).href,
      researchArea: "Psicofarmacologia",
      email: "mestrado1@manaslab.org",
      lattesUrl: "http://lattes.cnpq.br/0506023106320963",
      portfolioLinks: [],
    },

    {
      name: "Ana Carolina Silva",
      role: "Iniciação Científica",
      bio: "Modelagem computacional de redes neurais aplicadas à memória.",
      photo: new URL("../assets/aninha.jpg", import.meta.url).href,
      researchArea: "Neurociência Computacional",
      email: "doutorando1@manaslab.org",
      lattesUrl: "http://lattes.cnpq.br/4617320925000667",
      portfolioLinks: [{label: "Portfólio", url: "https://www.linkedin.com/in/anacarolinacsilva?utm_source=share_via&utm_content=profile&utm_medium=member_ios"}],
    },
    {
      name: "Anthony Domingues",
      role: "Iniciação Científica",
      bio: "Investiga a relação entre sonhos e afantasia.",
      photo: new URL("../assets/anthony.jpg", import.meta.url).href,
      researchArea: "Sono, Sonhos e Afantasia",
      email: "anthony.domingues@aluno.ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/3362011571485019",
      portfolioLinks: [],
    },
    {
      name: "Juliana Camino",
      role: "Iniciação Científica",
      bio: "Analisa dados de neuroimagem funcional.",
      photo: new URL("../assets/juleana.jpg", import.meta.url).href,
      researchArea: "Neuroimagem",
      email: "juliana.castro@aluno.ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/4999113469495676",
      portfolioLinks: [],
    },
    {
      name: "Julio Moreno Possebon",
      role: "Iniciação Científica",
      bio: "Desenvolvimento de tecnologias auxiliadoras no processo de aprendizagem.",
      photo: new URL("../assets/julio.jpg", import.meta.url).href,
      researchArea: "Neuroeducação Computacional",
      email: "julio.m@aluno.ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/9854803057030503",
      portfolioLinks: [],
    },
    {
      name: "Krisley Shelly",
      role: "Iniciação Científica",
      bio: "Apoio em análises comportamentais.",
      photo: new URL("../assets/shelly.jpg", import.meta.url).href,
      researchArea: "Neurociência Cognitiva",
      email: "Krisley.shelly@aluno.ufabc.edu.br",
      lattesUrl: "",
      portfolioLinks: [{label: "Portfólio", url: ""}],
    },
    {
      name: "Letícia Xavier",
      role: "Iniciação Científica",
      bio: "Análises de comportamentos defensivos",
      photo: new URL("../assets/leticia.jpeg", import.meta.url).href,
      researchArea: "Comportamento Animal",
      email: "xavier.leticia@aluno.ufabc.edu.br",
      lattesUrl: "",
      portfolioLinks: [],
    },
    {
      name: "Mateus Vignola",
      role: "Iniciação Científica",
      bio: "Metodologias e abordagens computacionais no estudo de sonhos",
      photo: new URL("../assets/mateus.jpg", import.meta.url).href,
      researchArea: "Processamento de Linguagem Natural",
      email: "mateus.vignola@aluno.ufabc.edu.br",
      lattesUrl: "http://lattes.cnpq.br/5656503667114557",
      portfolioLinks: [],
    },
    {
      name: "Victoria Rodrigues",
      role: "Iniciação Científica",
      bio: "Análises de comportamentos defensivos",
      photo: new URL("../assets/victoria.jpeg", import.meta.url).href,
      researchArea: "Comportamento Animal",
      email: "victoria.brito@aluno.ufabc.edu.br",
      lattesUrl: "https://lattes.cnpq.br/5776484275573680",
      portfolioLinks: [{label:"Portfólio", url:"https://www.linkedin.com/in/victóriarodriguesbp?utm_source=share_via&utm_content=profile&utm_medium=member_android"}],
    },
    {
      name: "William Thiago Boscariol Lourenço",
      role: "Iniciação Científica",
      bio: "Processos fisiológicos ligados a sistema de memórias e ao comportamento",
      photo: new URL("../assets/will.jpeg", import.meta.url).href,
      researchArea: "Sistemas de Memória",
      email: "behavior.iismo@gmail.com",
      lattesUrl: "http://lattes.cnpq.br/0615783545373827",
      portfolioLinks: [{label: "Research Gate", url: "https://www.researchgate.net/profile/William-Boscariol-Lourenco"},
        {label: "Orcid", url:"https://orcid.org/0009-0003-4524-9010"}
      ],
    },
  ],
  alumni: [],
};
