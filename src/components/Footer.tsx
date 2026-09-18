import { Mail, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import footerBg from "@/assets/footer-neural-bg.jpg";

const pis = [
  { name: "Profa. Dra. Paula Ayako Tiba", email: "paula.tiba@ufabc.edu.br" },
  { name: "Profa. Dra. Raquel Vecchio Fornari", email: "raquel.fornari@ufabc.edu.br" },
  { name: "Profa. Dra. Tatiana Lima Ferreira", email: "tatiana.ferreira@ufabc.edu.br" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src={footerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />

      <div className="relative z-10 section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xl text-primary-foreground mb-6">
              Entre em contacto com as orientadoras:
            </h3>
            <div className="space-y-3">
              {pis.map((pi) => (
                <a
                  key={pi.email}
                  href={`mailto:${pi.email}`}
                  className="flex items-center gap-4 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-4 transition-colors hover:bg-primary-foreground/20"
                >
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary-foreground/15 border border-primary-foreground/25 flex items-center justify-center">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-display font-semibold text-sm">
                      {pi.name}
                    </p>
                    <p className="text-primary-foreground/80 font-body text-sm">
                      {pi.email}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Info & Social */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-xl text-primary-foreground mb-6">
                Redes & Informações
              </h3>
              <div className="space-y-3 text-primary-foreground/80 text-sm font-body">
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-primary-foreground" />
                  grupomemoriaufabc@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary-foreground" />
                  Departamento de Neurociência, Universidade
                </p>
              </div>

            </div>

            <div className="mt-10 pt-6 border-t border-primary-foreground/20">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 gap-2 px-0">
                    <Users size={16} />
                    <span className="font-semibold text-xs">Autores do Site</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-display">Autores do Site</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 text-sm font-body">
                    <div>
                      <p className="font-display font-semibold text-foreground mb-3">
                        Gestão Atual
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Julio Moreno Possebon</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-3">
                        Autores
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Desenvolvedor: Julio Moreno Possebon</li>
                        <li>Texto — conteúdo principal: Paula Tiba, Tatiana Ferreira e Raquel Fornari</li>
                        <li>Texto — técnicas: Ana Carolina Silva, Ben Freitas, Juliana Camino e Lorena</li>
                        <li>Texto — demais: Todos do Grupo</li>
                        <li>Arte principal: William Thiago Boscariol Lourenço</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <p className="text-xs text-primary-foreground/60 font-body mt-2">
                Desde 2012 — MANAS Neuroscience Lab. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
