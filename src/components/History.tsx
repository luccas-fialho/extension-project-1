import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "@/assets/images/gym-carousel_1.jpg";
import img2 from "@/assets/images/gym-carousel_2.jpg";
import img3 from "@/assets/images/gym-carousel_3.jpg";

const images = [img1, img2, img3];

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
                A Light Fitness nasceu em 2015 com um propósito claro: criar um
                espaço focado no treinamento de qualidade, acessível a todos e
                com uma atmosfera acolhedora.
              </p>
              <p>
                Nossa missão sempre foi oferecer uma alternativa mais pessoal às
                grandes redes comerciais. Construímos um ambiente onde pessoas
                de todos os níveis podem treinar com dedicação, acompanhamento
                profissional e respeito, sem se preocuparem com julgamentos.
              </p>
              <p className="font-semibold text-foreground border-l-4 border-primary pl-4 py-2">
                Hoje, somos a principal academia da região, mas nossa essência
                de comunidade e compromisso com o resultado dos nossos alunos
                permanece a mesma.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-4xl font-display font-black text-primary">
                  5k+
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  Alunos Transformados
                </div>
              </div>
              <div>
                <div className="text-4xl font-display font-black text-primary">
                  6h-22h
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  Horário de Funcionamento
                </div>
              </div>
              <div>
                <div className="text-4xl font-display font-black text-primary">
                  10k
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  M² de Área de Treino
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
