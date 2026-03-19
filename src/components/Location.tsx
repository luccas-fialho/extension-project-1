import { MapPin, Phone, Clock } from "lucide-react";

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
                    Av. Benjamin Possebon, 369 - Quissisana
                    <br />
                    São José dos Pinhais - PR, 83085-190
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
                    (41) 98886-0680
                    <br />
                    treino@lightfitness.com.br
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?cid=16996957898424327532&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=pt-BR&gl=BR&source=embed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-none font-display font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto p-2"
              data-testid="button-directions"
            >
              Abrir no GPS
            </a>
          </div>

          {/* Map Side (Placeholder) */}
          <div className="relative min-h-100 lg:min-h-full bg-secondary overflow-hidden group border-t lg:border-t-0 lg:border-l border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4280.796365151382!2d-49.152608137051956!3d-25.548157746444968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf7a389af2a35%3A0xebe15327a5da1d6c!2sAcademia%20Light%20Fitness%20-%20Avenida%20Benjamin%20Possebon%20-%20Quissisana%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20State%20of%20Paran%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1773958771156!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-100"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
