import { Heart } from "lucide-react"

export function Closing() {
  return (
    <section className="relative z-10 px-6 py-28 text-center">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <Heart className="size-12 animate-pulse text-primary" fill="currentColor" />
        <h2 className="mt-6 text-balance font-serif text-5xl font-semibold leading-tight text-foreground sm:text-7xl">
          Eu te amo, Nicolly
        </h2>
        <p className="mt-6 max-w-md text-pretty font-sans text-lg leading-relaxed text-muted-foreground">
          Obrigado por ser meu lar, minha paz e o meu amor preferido. Que a gente tenha
          muitos e muitos Dias dos Namorados pela frente.
        </p>
        <p className="mt-8 font-serif text-2xl italic text-primary">Para sempre seu. 🤍</p>
      </div>

      <footer className="mt-20 font-sans text-xs uppercase tracking-widest text-muted-foreground">
        feito com amor — 12 de junho
      </footer>
    </section>
  )
}
