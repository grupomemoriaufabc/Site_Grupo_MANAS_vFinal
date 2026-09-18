import { useEffect, useState } from "react";
import heroImage from "@/assets/cavalo-marinho.png";

const HeroSection = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center bg-background"
    >
      {/* Seahorse copies scattered as decorative background */}
      <img
        src={heroImage}
        alt=""
        className="absolute top-8 left-4 z-[6] h-52 object-contain opacity-15 rotate-[-15deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute top-4 left-[25%] z-[6] h-44 object-contain opacity-10 rotate-[8deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute top-6 right-6 z-[6] h-64 object-contain opacity-15 rotate-[12deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute top-10 right-[28%] z-[6] h-48 object-contain opacity-10 rotate-[-8deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute top-[40%] left-2 z-[6] h-60 object-contain opacity-[0.12] rotate-[20deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute top-[35%] right-4 z-[6] h-72 object-contain opacity-15 rotate-[-12deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute bottom-6 left-8 z-[6] h-56 object-contain opacity-[0.12] rotate-[15deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute bottom-4 left-[45%] z-[6] h-48 object-contain opacity-10 rotate-[-5deg] pointer-events-none select-none"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute bottom-8 right-6 z-[6] h-64 object-contain opacity-15 rotate-[-18deg] pointer-events-none select-none"
      />

      {/* Theme-aware overlay */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: isDark
            ? "linear-gradient(to right, hsl(0,0%,5%) 40%, transparent)"
            : "linear-gradient(to right, hsl(0,0%,100%) 40%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto text-center max-w-3xl px-6 animate-fade-in pt-24">
        <p className="text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">
          Neuroscience Research Laboratory
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight text-foreground mb-6">
          MANAS Lab
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto font-body">
          Nosso grupo de pesquisa, liderado pelas professoras Paula Ayako Tiba, Tatiana Lima Ferreira e Raquel Vecchio Fornari, dedica-se ao estudo das neurociências com foco nos mecanismos neurais, farmacológicos e cognitivos que regem a aprendizagem, a memória e o comportamento. Nossas linhas de pesquisa investigam o papel dos núcleos da base e dos circuitos estriatais na memoria e tomada de decisão voluntária ou habitual, a modulação da memória emocional e contextual pelo estresse, corticosterona e receptores neuroquímicos, além de explorarmos a neurobiologia dos sonhos e o desenvolvimento de ferramentas aplicadas à neuroeducação para a otimização do aprendizado
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
