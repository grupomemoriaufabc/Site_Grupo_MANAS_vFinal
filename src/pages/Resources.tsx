import { CalendarClock, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { meetings } from "@/data/resources";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="section-container text-center">
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">Encontros</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">Reuniões</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-body">
            Agenda semanal do laboratório e recursos partilhados pelos membros do MANAS Lab.
          </p>
        </div>
      </section>

      {/* Lab Meetings */}
      <section className="py-20">
        <div className="section-container">
          <div className="mb-10">
            <p className="text-accent font-display font-semibold text-xs tracking-widest uppercase mb-2">Agenda</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">Lab Meetings</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {meetings.map((m, i) => (
              <article
                key={i}
                className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent p-8 sm:p-10"
              >
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  <div className="shrink-0 h-16 w-16 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <CalendarClock className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl sm:text-2xl mb-2">{m.title}</h3>
                    <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed max-w-2xl">
                      {m.description}
                    </p>
                  </div>
                  <div className="shrink-0 flex md:flex-col items-center md:items-end gap-4 md:gap-1 md:text-right border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                    <div>
                      <p className="text-accent font-mono text-xs tracking-widest uppercase">Dia</p>
                      <p className="font-display font-semibold text-lg">{m.day}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Clock size={18} />
                      <span className="font-mono text-xl font-semibold">{m.time}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Link block */}
      <section className="pb-20">
        <div className="section-container">
          <a
            href="https://docs.google.com/spreadsheets/d/1Y4Zq2w4akoUc9HFMia7Dr0-xt7GJvkt1uHf5UMplbEE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-body text-sm"
          >
            Planilha de Artigos e Apresentações
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
