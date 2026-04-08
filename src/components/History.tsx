import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img3 from "@/assets/images/gym-carousel_4.jpg";
import img4 from "@/assets/images/gym-carousel_5.jpg";
import img5 from "@/assets/images/gym-carousel_6.jpg";
import img6 from "@/assets/images/gym-carousel_7.jpg";
import img7 from "@/assets/images/gym-carousel_8.jpg";
import img8 from "@/assets/images/gym-carousel_9.jpg";

const images = [img3, img4, img5, img6, img7, img8];

export default function History() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="history"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Brutalist Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 clip-diagonal -z-10" />
      <div className="absolute -left-10 top-20 text-[10rem] font-display font-black text-white/5 whitespace-nowrap select-none pointer-events-none z-0">
        NOSSA HISTÓRIA
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-100 md:min-h-150"
          >
            <div className="relative z-10 border-4 border-border p-2 bg-background w-full h-full overflow-hidden">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Estrutura da academia ${index + 1}`}
                  className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover grayscale transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 transition-all ${index === currentImage ? "w-8 bg-primary" : "w-2 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
            {/* Offset decorative block */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-foreground">
              Onde a Transformação{" "}
              <span className="text-primary">Acontece</span>
            </h2>
            <div className="w-20 h-2 bg-primary" />

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                A nossa academia nasceu com um propósito simples: criar um
                ambiente onde qualquer pessoa pudesse evoluir de verdade, com
                estrutura de qualidade e acompanhamento próximo. Desde o início,
                o foco sempre foi entregar resultado, sem complicação e sem
                promessas vazias.
              </p>
              <p>
                Aqui, cada treino é levado a sério. Contamos com equipamentos
                modernos, profissionais capacitados e uma comunidade que motiva
                você a ir além todos os dias. Seja para ganhar massa, emagrecer
                ou melhorar a qualidade de vida, você encontra o suporte certo
                para alcançar seus objetivos.
              </p>
              <p className="font-semibold text-foreground border-l-4 border-primary pl-4 py-2">
                Mais do que uma academia, somos um espaço de transformação —
                onde disciplina, constância e atitude se transformam em
                resultados reais.
              </p>
            </div>

            <div className="grid grid-cols-1 text-center sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-4xl font-display font-black text-primary">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  Foco no resultado
                </div>
              </div>
              <div>
                <div className="text-4xl font-display font-black text-primary">
                  6h-22h
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  Horário de Funcionamento (Segunda à Sexta)
                </div>
              </div>
              <div>
                <div className="text-4xl font-display font-black text-primary">
                  Zero
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  Enrolação no treino
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
