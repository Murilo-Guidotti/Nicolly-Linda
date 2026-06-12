import { PhotoFrame } from "./photo-frame"

export function LetterSection() {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-2xl rounded-2xl bg-card/80 p-8 shadow-[0_20px_60px_-30px_rgba(120,30,40,0.4)] ring-1 ring-border backdrop-blur sm:p-12">
        <h2 className="text-center font-serif text-4xl font-semibold text-primary sm:text-5xl">
          Uma cartinha pra você
        </h2>
        <div className="mx-auto mt-6 h-px w-20 bg-primary/40" />
        <div className="mt-8 space-y-5 font-serif text-xl leading-relaxed text-foreground/85 sm:text-2xl">
          <p>Minha Nicolly,</p>
          <p>
            Hoje é o nosso dia, mas a verdade é que todo dia ao seu lado já parece uma data
            especial. Você deixa as coisas simples mais bonitas, e os dias difíceis mais leves.
          </p>
          <p>
            Obrigado por cada sorriso, cada abraço e cada momento que a gente construiu juntos.
            Eu escolheria você de novo, sempre.
          </p>
          <p className="font-medium italic text-primary">
            Com todo o meu amor, hoje e sempre. 💌
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-6">
        <PhotoFrame rotate="-5deg" caption="nós dois" className="w-44 sm:w-52" />
        <PhotoFrame rotate="3deg" caption="seu sorriso" className="w-44 sm:w-52" />
        <PhotoFrame rotate="-2deg" caption="aquele dia" className="w-44 sm:w-52" />
      </div>
    </section>
  )
}
