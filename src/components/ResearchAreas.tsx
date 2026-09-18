import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const researchLines = [
  {
    name: "Paula Tiba",
    details:
      "Minha linha de pesquisa atual dedica-se à neurobiologia dos sonhos e à neuroeducação, investigando os mecanismos cognitivos e neurais que integram sono, memória e aprendizagem. Desenvolvemos projetos sobre a neurobiologia e indução dos sonhos lúcidos, o uso de Processamento de Linguagem Natural (NLP) e Modelos de Linguagem (LLMs) para análise de relatos verbais de sonhos, e as interfaces entre o sonhar e fenômenos cognitivos como a afantasia. Em Neuroeducação, desenvolvemos ferramentas digitais e aplicativos baseados em evidências neurocientíficas voltados para a evocação da memória e a otimização da aprendizagem.",
  },
  {
    name: "Raquel Fornari",
    details:
      "Estudo dos mecanismos neurobiológicos, hormonais e de circuitos cerebrais envolvidos na consolidação sistêmica, na especificidade e na generalização da memória contextual em modelos animais.",
  },
  {
    name: "Tatiana Ferreira",
    details: "Em breve.",
  },
];

const ResearchAreas = () => {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Áreas de Investigação
          </p>
        </div>

        <Accordion type="multiple" className="max-w-3xl mx-auto">
          {researchLines.map((line) => (
            <AccordionItem
              key={line.name}
              value={line.name}
              className="border border-border rounded-xl mb-4 px-8 bg-card min-h-[6rem]"
            >
              <AccordionTrigger className="font-display font-bold text-xl text-foreground hover:no-underline py-6">
                {line.name}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground font-body px-8 pb-8">
                {line.details}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ResearchAreas;
