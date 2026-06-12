import Image from "next/image"
import { Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <Image
        src="/hero-flowers.png"
        alt=""
        width={320}
        height={320}
        aria-hidden="true"
        className="animate-float-soft pointer-events-none absolute -left-10 top-10 w-40 opacity-80 sm:w-64 md:left-4"
      />
      <Image
        src="/hero-flowers.png"
        alt=""
        width={320}
        height={320}
        aria-hidden="true"
        className="animate-float-soft pointer-events-none absolute -right-10 bottom-10 w-40 -scale-x-100 opacity-80 sm:w-64 md:right-4"
      />

      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 font-sans text-sm font-semibold uppercase tracking-widest text-secondary-foreground">
          <Heart className="size-4" fill="currentColor" />
          Feliz Dia dos Namorados
        </span>

        <p className="font-serif text-2xl italic text-muted-foreground">Para a minha</p>
        <h1 className="text-balance font-serif text-6xl font-semibold leading-[0.95] text-primary sm:text-7xl md:text-8xl lg:text-9xl">
          Nicolly Félix
        </h1>
        <p className="mt-2 font-serif text-3xl italic text-foreground/70 sm:text-4xl">dos Santos</p>

        <p className="mt-8 max-w-md text-pretty font-sans text-base leading-relaxed text-muted-foreground">
          Fiz esse cantinho só pra você, pra guardar um pouquinho de tudo que eu sinto.
          Role pra baixo com calma. Eu te amo. ❤️
        </p>

        <div className="mt-10 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-sans text-xs uppercase tracking-widest">role pra baixo</span>
          <span className="h-10 w-px animate-pulse bg-primary/50" />
        </div>
      </div>
    </section>
  )
}
