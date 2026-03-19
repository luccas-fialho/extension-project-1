import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border border-border">
          {/* Info Side */}
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-card">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-8">
              Venha fazer um <span className="text-primary">Treino</span>
            </h2>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1">
                    Onde Estamos
                  </h4>
                  <p className="text-muted-foreground">
                    Av. dos Ferreiros, 123.
                    <br />
                    Distrito Industrial, São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1">
                    Horário de Funcionamento
                  </h4>
                  <p className="text-muted-foreground">
                    Todos os dias: 06:00 - 22:00
                    <br />
                    Atendimento Recepção: Seg-Sex 08:00 - 20:00, Sáb 09:00 -
                    17:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider mb-1">
                    Fala com a Gente
                  </h4>
                  <p className="text-muted-foreground">
                    (11) 99999-9999
                    <br />
                    treino@lightfitness.com.br
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="rounded-none font-display font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              data-testid="button-directions"
            >
              Abrir no GPS
            </Button>
          </div>

          {/* Map Side (Placeholder) */}
          <div className="relative min-h-100 lg:min-h-full bg-secondary overflow-hidden group border-t lg:border-t-0 lg:border-l border-border">
            {/* Brutalist map placeholder pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-foreground to-transparent bg-size-[20px_20px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary transition-all duration-500">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display font-black text-2xl uppercase tracking-widest text-foreground/50 mb-2">
                Localização no Mapa
              </h3>
              <p className="text-muted-foreground max-w-xs text-sm">
                O mapa interativo será carregado aqui.
              </p>
            </div>

            {/* Crosshairs for aesthetic */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-border/50" />
            <div className="absolute left-1/2 top-0 w-px h-full bg-border/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
