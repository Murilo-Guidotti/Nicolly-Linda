import { PhotoFrame } from "./photo-frame"

export function Gallery() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
          nossa galeria
        </p>
        <h2 className="mt-3 text-balance font-serif text-4xl font-semibold text-foreground sm:text-6xl">
          Momentos que eu nunca quero esquecer
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty font-sans leading-relaxed text-muted-foreground">
          Cada foto aqui é um pedacinho da nossa história, e da pessoa mais linda que eu conheço.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-5 sm:gap-8 md:grid-cols-3">
        <PhotoFrame rotate="-3deg" caption="Os seus olhos" src="/nicolly-onibus.jpg" alt="Nicolly na viagem" />
        <PhotoFrame rotate="2deg" caption="O seu Sorriso" src="/nicolly-festa.jpg" alt="Nicolly sorrindo" className="md:mt-10" />
        <PhotoFrame rotate="-1deg" caption="A primeira vez na sua casa" src="/nicolly-cozinha.jpg" alt="Nicolly cozinhando" />
        <PhotoFrame rotate="3deg" caption="A Aliança" src="/nicolly-anel.jpg" alt="Nicolly aliança" className="md:mt-8" />
        <PhotoFrame rotate="-2deg" caption="O seu lindo cabelo vermelho" src="/nicolly-cabelo.jpg" alt="Nicolly jogando cartas" />
        <PhotoFrame rotate="1deg" caption="esse corpinho que eu amo" src="/nicolly-corpo.jpg" alt="A gente juntos" className="md:mt-6" />
      </div>
    </section>
  )
}
