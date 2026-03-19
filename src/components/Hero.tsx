import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/images/hero-gym.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Dark intense gym workout"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="border border-primary text-primary px-4 py-1 text-sm font-bold uppercase tracking-[0.2em]">
            Compromisso e Saúde
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-black uppercase leading-[0.85] tracking-tighter mb-6"
        >
          <span className="block text-stroke-primary opacity-50">
            Foco Total
          </span>
          <span className="block text-foreground drop-shadow-[0_0_15px_rgba(255,87,34,0.3)]">
            Resultados Reais
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium"
        >
          A principal academia do seu bairro. Um ambiente acolhedor e
          profissional, totalmente focado na qualidade do seu treino e na sua
          evolução constante.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="rounded-none h-16 px-10 font-display font-black uppercase tracking-widest text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:border-primary/90 transition-all group"
            data-testid="button-hero-start"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <a
            href="#prices"
            className="flex items-center rounded-none h-16 px-10 font-display font-bold uppercase tracking-widest text-lg border-2 hover:bg-white/5 transition-all"
            data-testid="button-hero-tour"
          >
            Ver Planos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
