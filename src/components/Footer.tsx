import { Dumbbell, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group w-max">
              <Dumbbell className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
              <span className="font-display font-black text-2xl tracking-tighter uppercase">
                Light<span className="text-primary">Fitness</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              O ambiente ideal para quem leva a saúde a sério. Um espaço
              dedicado ao seu bem-estar, com estrutura completa e foco em
              resultados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-foreground mb-6">
              Acesso Rápido
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#history"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nossa História
                </a>
              </li>
              <li>
                <a
                  href="#prices"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Valores da Mensalidade
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Avaliações dos Alunos
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Light Fitness. Todos os direitos
            reservados.
          </p>
          <div className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
            COMPROMISSO COM A SUA SAÚDE
          </div>
        </div>
        <div className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest text-center">
          Feito com ❤️ por{" "}
          <a
            href="https://linkedin.com/in/luccas-fialho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:underline transition-colors"
          >
            LUCCAS FIALHO
          </a>
        </div>
      </div>
    </footer>
  );
}
