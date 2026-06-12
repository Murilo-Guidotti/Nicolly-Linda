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
          Aqui é o nosso álbum. Coloque as fotos que mais marcaram a nossa história.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-5 sm:gap-8 md:grid-cols-3">
        <PhotoFrame rotate="-3deg" caption="o começo" />
        <PhotoFrame rotate="2deg" caption="risadas" className="md:mt-10" />
        <PhotoFrame rotate="-1deg" caption="viagens" />
        <PhotoFrame rotate="3deg" caption="abraços" className="md:mt-8" />
        <PhotoFrame rotate="-2deg" caption="você" />
        <PhotoFrame rotate="1deg" caption="a gente" className="md:mt-6" />
      </div>
    </section>
  )
}
