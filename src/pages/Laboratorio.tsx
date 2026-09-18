import { ExternalLink, FlaskConical, BookOpen, Microscope, Code2, Database, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { resources, type Resource } from "@/data/resources";

const iconMap: Record<Resource["icon"], typeof FlaskConical> = {
  flask: FlaskConical,
  book: BookOpen,
  microscope: Microscope,
  code: Code2,
  database: Database,
  brain: Brain,
};

const Laboratorio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="section-container text-center">
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Galeria
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
            Laboratório
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-body">
            Conheça as técnicas, ferramentas e protocolos utilizados pelo MANAS Lab nas nossas investigações.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 border-t border-border bg-white/[0.02]">
        <div className="section-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent font-display font-semibold text-xs tracking-widest uppercase mb-2">
                Técnicas e Recursos
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Técnicas</h2>
            </div>
            <span className="text-muted-foreground text-sm font-body hidden sm:block">
              {resources.length} recursos
            </span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {resources.map((r, i) => {
              const Icon = iconMap[r.icon];
              return (
                <AccordionItem
                  key={i}
                  value={`resource-${i}`}
                  className="border border-border rounded-xl mb-3 px-5 bg-card"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="flex items-center gap-4 text-left">
                      <span className="h-10 w-10 shrink-0 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                        <Icon className="text-primary" size={19} />
                      </span>
                      <span>
                        <span className="block font-display font-semibold text-base leading-tight">
                          {r.title}
                        </span>
                        <span className="block text-muted-foreground text-sm font-body leading-relaxed mt-0.5">
                          {r.description}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                    <p className="whitespace-pre-line">{r.details}</p>
                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-primary hover:underline text-sm"
                      >
                        <ExternalLink size={14} />
                        Acessar recurso
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Laboratorio;
