import { Mail, ExternalLink, Microscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { members } from "@/data/members";

interface PortfolioLink {
  label: string;
  url: string;
}

const PortfolioLinks = ({ links }: { links: PortfolioLink[] }) => {
  if (links.length === 0) return null;

  if (links.length === 1) {
    return (
      <a
        href={links[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ExternalLink size={15} className="text-accent shrink-0" />
        <span>{links[0].label}</span>
      </a>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body text-left">
          <ExternalLink size={15} className="text-accent shrink-0" />
          <span>Portfólio ↗</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Portfólio</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
            >
              <ExternalLink size={15} className="text-accent shrink-0" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const People = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="section-container text-center">
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Equipe
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
            Pesquisadoras
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-body">
            Conheça as pesquisadoras, estudantes e colaboradores que constroem o MANAS Lab.
          </p>
        </div>
      </section>

      {/* Principal Investigators */}
      <section className="py-20 border-b border-border">
        <div className="section-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent font-display font-semibold text-xs tracking-widest uppercase mb-2">
                Liderança
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Pesquisadoras Principais
              </h2>
            </div>
            <span className="text-muted-foreground text-sm font-body hidden sm:block">
              {members.principalInvestigators.length} PIs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.principalInvestigators.map((m) => (
              <article
                key={m.email}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07] hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur opacity-50 group-hover:opacity-80 transition-opacity" />
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="relative h-20 w-20 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-lg leading-tight truncate">
                      {m.name}
                    </h3>
                    <p className="text-primary text-sm font-body mt-0.5">{m.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-5">
                  {m.bio}
                </p>

                <div className="space-y-2 text-sm font-body border-t border-border pt-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Microscope size={15} className="text-accent mt-0.5 shrink-0" />
                    <span>{m.researchArea}</span>
                  </div>
                  <a
                    href={`mailto:${m.email}`}
                    className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    <Mail size={15} className="text-accent mt-0.5 shrink-0" />
                    <span>{m.email}</span>
                  </a>
                  <a
                    href={m.lattesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={15} className="text-accent shrink-0" />
                    <span>Currículo Lattes</span>
                  </a>
                  <PortfolioLinks links={m.portfolioLinks} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Active Members */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-accent font-display font-semibold text-xs tracking-widest uppercase mb-2">
                Atual
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl">
                Membros Ativos
              </h2>
            </div>
            <span className="text-muted-foreground text-sm font-body hidden sm:block">
              {members.active.length} membros
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.active.map((m) => (
              <article
                key={m.email}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07] hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur opacity-50 group-hover:opacity-80 transition-opacity" />
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="relative h-20 w-20 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-lg leading-tight truncate">
                      {m.name}
                    </h3>
                    <p className="text-primary text-sm font-body mt-0.5">{m.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed font-body mb-5">
                  {m.bio}
                </p>

                <div className="space-y-2 text-sm font-body border-t border-border pt-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Microscope size={15} className="text-accent mt-0.5 shrink-0" />
                    <span>{m.researchArea}</span>
                  </div>
                  <a
                    href={`mailto:${m.email}`}
                    className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    <Mail size={15} className="text-accent mt-0.5 shrink-0" />
                    <span>{m.email}</span>
                  </a>
                  <a
                    href={m.lattesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={15} className="text-accent shrink-0" />
                    <span>Currículo Lattes</span>
                  </a>
                  <PortfolioLinks links={m.portfolioLinks} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default People;
