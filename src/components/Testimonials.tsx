import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A melhor academia da região. Ambiente super agradável, professores atenciosos e equipamentos sempre em ótimo estado. Me sinto muito bem treinando aqui!",
    author: "Juliana M.",
    role: "Aluna há 1 ano",
  },
  {
    quote:
      "A estrutura é fantástica e a equipe de instrutores é excelente. Eles montaram um treino específico para mim e os resultados já são visíveis em poucos meses.",
    author: "Ricardo T.",
    role: "Aluno há 3 meses",
  },
  {
    quote:
      "O que mais gosto é a flexibilidade de horário e o clima respeitoso. Ninguém fica te julgando, é um espaço focado em saúde e bem-estar de verdade.",
    author: "Carlos P.",
    role: "Aluno há 5 anos",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background border-y border-border overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Título e Intro */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-4">
              O Que Nossos Alunos <span className="text-primary">Dizem</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Não acredite apenas no que a gente fala. Dá uma olhada no que a
              galera que sua a camisa com a gente todos os dias tem a dizer:
            </p>
          </div>
          <div className="hidden md:block text-9xl font-display text-border/40 leading-none pointer-events-none">
            "
          </div>
        </div>
        {/* Avaliações Fixas (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-card border border-border p-8 relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors flex items-center justify-center bg-secondary/50 text-2xl font-display font-black text-primary">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground uppercase">
                    {t.author}
                  </h4>
                  <p className="text-xs text-primary tracking-wider uppercase font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground italic relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
