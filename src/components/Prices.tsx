import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const recurringPlans = [
  {
    name: "Trimestral",
    total: "299,00",
    installments: "3x R$ 99,66",
    description: "Compromisso de 3 meses para começar a ver os resultados.",
    features: [
      "Acesso completo",
      "Musculação livre",
      "Área de cardio",
      "Vestiários",
    ],
    highlighted: false,
    delay: 0.1,
  },
  {
    name: "Semestral",
    total: "540,00",
    installments: "6x R$ 90,00",
    description: "Para quem já inseriu o treino na rotina.",
    features: [
      "Acesso completo",
      "Musculação livre",
      "Área de cardio",
      "Vestiários",
    ],
    highlighted: true,
    delay: 0.2,
  },
  {
    name: "Anual",
    total: "1020,00",
    installments: "12x R$ 85,00",
    description: "O melhor custo-benefício para os verdadeiramente dedicados.",
    features: [
      "Acesso completo",
      "Musculação livre",
      "Área de cardio",
      "Vestiários",
    ],
    highlighted: false,
    delay: 0.3,
  },
];

export default function Prices() {
  return (
    <section id="prices" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-4">
            Invista no seu <span className="text-primary">Resultado</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Planos sem pegadinhas. Escolha a duração do seu compromisso com a
            sua saúde.
          </p>
        </div>

        {/* Planos Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {recurringPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: plan.delay }}
              className={`relative flex flex-col p-8 bg-background border-2 ${
                plan.highlighted
                  ? "border-primary scale-100 md:scale-105 z-10 shadow-[0_0_30px_rgba(204,255,51,0.15)]"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs px-4 py-1">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-black uppercase mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm h-10">
                  {plan.description}
                </p>

                <div className="mt-6 flex flex-col">
                  <div className="flex items-baseline text-muted-foreground mb-1">
                    <span className="font-bold mr-1">R$</span>
                    <span className="text-3xl font-display font-bold text-foreground line-through opacity-50">
                      {plan.total}
                    </span>
                    <span className="ml-2 text-sm uppercase tracking-wider font-bold">
                      Total
                    </span>
                  </div>
                  <div className="flex items-baseline mt-2 border-l-4 border-primary pl-3 py-1">
                    <span className="text-3xl lg:text-4xl font-display font-black tracking-tighter text-foreground">
                      {plan.installments}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-none font-display font-bold uppercase tracking-wider h-14 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
                data-testid={`button-plan-${plan.name.toLowerCase()}`}
              >
                Assinar {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Planos Mensais e Taxas */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Planos Sem Fidelidade */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border p-8 hover:border-primary/50 transition-colors duration-300"
          >
            <h3 className="text-2xl font-display font-black uppercase mb-6 text-foreground border-b border-border pb-4">
              Planos Mensais
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wide group-hover:text-primary transition-colors">
                    Musculação Mensal
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Renovação mês a mês
                  </p>
                </div>
                <div className="text-xl font-display font-black tracking-tight">
                  R$ 120,00
                </div>
              </div>
              <div className="flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wide group-hover:text-primary transition-colors">
                    Plano Familiar
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Valor por pessoa (mensal)
                  </p>
                </div>
                <div className="text-xl font-display font-black tracking-tight">
                  R$ 110,00
                </div>
              </div>
            </div>
          </motion.div>

          {/* Taxas Adicionais */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border p-8 hover:border-primary/50 transition-colors duration-300"
          >
            <h3 className="text-2xl font-display font-black uppercase mb-6 text-foreground border-b border-border pb-4">
              Taxas & Serviços
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wide group-hover:text-primary transition-colors">
                    Avaliação Física
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Agendamento prévio
                  </p>
                </div>
                <div className="text-xl font-display font-black tracking-tight">
                  R$ 60,00
                </div>
              </div>
              <div className="flex justify-between items-center group">
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wide group-hover:text-primary transition-colors">
                    Taxa de Manutenção
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cobrada anualmente
                  </p>
                </div>
                <div className="text-xl font-display font-black tracking-tight">
                  R$ 39,90
                </div>
              </div>
              <div className="flex justify-between items-center group pt-2">
                <div className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-lg uppercase tracking-wide">
                    Taxa de Matrícula
                  </h4>
                </div>
                <div className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1">
                  Somada no 1º Mês
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
