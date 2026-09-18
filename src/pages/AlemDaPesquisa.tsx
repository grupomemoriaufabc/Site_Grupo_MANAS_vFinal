import { ExternalLink, Globe, FlaskConical } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import foto01 from "@/assets/foto-mundo-01.jpg";
import foto02 from "@/assets/foto-mundo-02.jpg";
import foto03 from "@/assets/foto-mundo-03.jpg";
import foto04 from "@/assets/foto-mundo-04.jpg";
import foto05 from "@/assets/foto-mundo-05.jpg";
import foto06 from "@/assets/foto-mundo-06.jpg";
import foto07 from "@/assets/foto-mundo-07.jpg";
import foto08 from "@/assets/foto-mundo-08.jpg";
import foto09 from "@/assets/foto-mundo-09.jpg";
import foto10 from "@/assets/foto-mundo-10.jpg";
import foto11 from "@/assets/foto-mundo-11.jpg";
import foto12 from "@/assets/foto-mundo-12.jpg";
import foto13 from "@/assets/foto-mundo-13.jpg";
import foto14 from "@/assets/foto-mundo-14.jpg";
import foto15 from "@/assets/foto-mundo-15.jpg";

const worldPhotos = [
  foto01, foto02, foto03, foto04, foto05,
  foto06, foto07, foto08, foto09, foto10,
  foto11, foto12, foto13, foto14, foto15,
];

const outreachProjects = [
  {
    title: "PenseBrain!",
    url: "https://www.instagram.com/pensebrain.ufabc/",
  },
  {
    title: "NeuroEduca",
    url: "https://www.instagram.com/neuroeduca.ufabc/",
  },
  {
    title: "Site Neuro",
    url: null as string | null,
  },
];

const AlemDaPesquisa = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="section-container text-center">
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Além da Pesquisa
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
            Além da Pesquisa
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-body">
            Divulgação científica, projetos de extensão e a presença do MANAS Lab pelo mundo.
          </p>
        </div>
      </section>

      {/* Section 1 — MANAS pelo Mundo */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent font-display font-semibold text-xs tracking-widest uppercase mb-2">
                MANAS pelo Mundo
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">Fotografias</h2>
            </div>
            <span className="text-muted-foreground text-sm font-body hidden sm:block">
              {worldPhotos.length} {worldPhotos.length === 1 ? "imagem" : "imagens"}
            </span>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {worldPhotos.map((src, i) => (
              <figure
                key={i}
                className="rounded-xl overflow-hidden mb-4 break-inside-avoid border border-border bg-card"
              >
                <img
                  src={src}
                  alt={`MANAS pelo Mundo ${String(i + 1).padStart(2, "0")}`}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Projetos de Extensão */}
      <section className="py-20 border-t border-border bg-white/[0.02]">
        <div className="section-container">
          <div className="max-w-3xl mb-10">
            <p className="text-accent font-display font-semibold text-xs tracking-widest uppercase mb-2">
              Projetos de Extensão
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4">
              Projetos de Extensão
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              O MANAS está diretamente envolvido em diversos projetos de extensão da NeuroUFABC.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Destacamos a participação no Projeto Pense Brain!, que visa disseminar as
              Neurociências por meio da divulgação científica, e o NeuroEduca, que visa aproximar
              as Neurociências das práticas escolares, em parceria com professores e escolas
              parceiras.
            </p>
          </div>

          <div className="space-y-3">
            {outreachProjects.map((p) =>
              p.url ? (
                <a
                  key={p.title}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-border rounded-xl px-5 py-4 bg-card transition-colors hover:border-primary/40 group"
                >
                  <span className="h-10 w-10 shrink-0 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Globe className="text-primary" size={19} />
                  </span>
                  <span className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </span>
                  <ExternalLink size={15} className="ml-auto text-muted-foreground" />
                </a>
              ) : (
                <div
                  key={p.title}
                  className="flex items-center gap-4 border border-border rounded-xl px-5 py-4 bg-card"
                >
                  <span className="h-10 w-10 shrink-0 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <FlaskConical className="text-primary" size={19} />
                  </span>
                  <span>
                    <span className="block font-display font-semibold text-base text-foreground">
                      {p.title}
                    </span>
                    <span className="block text-muted-foreground text-sm font-body">
                      Em andamento
                    </span>
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AlemDaPesquisa;
