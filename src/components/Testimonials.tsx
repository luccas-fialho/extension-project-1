import { Star } from "lucide-react";

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
              Nossa maior conquista é o resultado de quem confia em nosso
              trabalho. Confira a experiência de quem treina conosco
              diariamente:
            </p>
          </div>
          <div className="hidden md:block text-9xl font-display text-border/40 leading-none pointer-events-none">
            "
          </div>
        </div>

        {/* Integração Google Reviews */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <h3 className="text-xl md:text-2xl font-display font-bold uppercase text-foreground">
                  Avaliações do Google
                </h3>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-3xl font-bold">4.9</span>
                <div className="flex gap-1 text-[#FBBC05]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-muted-foreground text-sm ml-2">
                  (+150 avaliações)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-48 border-2 border-dashed border-border flex items-center justify-center bg-card/50">
            <p className="text-muted-foreground font-mono uppercase tracking-widest text-sm flex flex-col items-center gap-4 text-center px-4">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              [ Widget do Google Reviews virá aqui ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
