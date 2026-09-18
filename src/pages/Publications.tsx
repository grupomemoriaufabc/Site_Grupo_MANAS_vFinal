import { useMemo, useState } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { publications, type PublicationType } from "@/data/publications";

const typeLabels: { value: PublicationType; label: string; countLabel: string }[] = [
  { value: "artigo", label: "Artigos", countLabel: "artigos" },
  { value: "capitulo", label: "Capítulos", countLabel: "capítulos" },
  { value: "midia", label: "Mídia", countLabel: "mídias" },
];

const Publications = () => {
  const sorted = useMemo(
    () => [...publications].sort((a, b) => b.year - a.year),
    []
  );

  const [activeType, setActiveType] = useState<PublicationType>("artigo");
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  const yearsForType = useMemo(
    () =>
      Array.from(
        new Set(sorted.filter((p) => p.type === activeType).map((p) => p.year))
      ).sort((a, b) => b - a),
    [sorted, activeType]
  );

  const activeTypeMeta = typeLabels.find((t) => t.value === activeType)!;

  const filtered = sorted.filter(
    (p) => p.type === activeType && (activeYear === "all" || p.year === activeYear)
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="section-container text-center">
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Produção Científica
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
            Publications
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-body">
            Artigos, revisões e pré-prints publicados pelos membros do MANAS Lab.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 border-b border-border sticky top-16 z-30 bg-background/85 backdrop-blur">
        <div className="section-container flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {typeLabels.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => {
                  setActiveType(value);
                  setActiveYear("all");
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-body border transition-all ${
                  activeType === value
                    ? "bg-primary text-white border-primary"
                    : "bg-muted text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <select
            value={activeYear === "all" ? "all" : String(activeYear)}
            onChange={(e) =>
              setActiveYear(e.target.value === "all" ? "all" : Number(e.target.value))
            }
            className="px-4 py-1.5 rounded-full text-sm font-body border border-border bg-muted text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
          >
            <option value="all">Todos os anos</option>
            {yearsForType.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          <span className="ml-auto text-muted-foreground text-sm font-body hidden sm:block">
            {filtered.length}{" "}
            {filtered.length === 1
              ? activeTypeMeta.countLabel.replace(/s$/, "")
              : activeTypeMeta.countLabel}
          </span>
        </div>
      </section>

      {/* Publication List */}
      <section className="py-16">
        <div className="section-container space-y-8">
          {filtered.map((p, i) => (
            <article
              key={`${p.year}-${p.title}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 rounded-xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07] hover:-translate-y-0.5"
            >
              {/* Cover */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-gradient-to-br from-primary/20 to-accent/20">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="text-muted-foreground/40" size={42} />
                    </div>
                  )}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-mono">
                    {p.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 lg:col-span-9 flex flex-col">
                <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2">
                  {String(i + 1).padStart(2, "0")} · {p.year}
                </span>
                <h2 className="font-display font-semibold text-xl sm:text-2xl leading-snug mb-2">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-start gap-2"
                    >
                      <span>{p.title}</span>
                      <ExternalLink
                        size={14}
                        className="mt-1.5 shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors"
                      />
                    </a>
                  ) : (
                    <span>{p.title}</span>
                  )}
                </h2>
                <p className="text-muted-foreground text-sm font-body mb-1 italic">
                  {p.authors}
                </p>
                <p className="text-muted-foreground text-sm italic mb-3">
                  {p.journal}
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-body">
                  {p.summary}
                </p>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12 font-body">
              Nenhuma publicação encontrada para estes filtros.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
