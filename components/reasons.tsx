import { Heart, Sparkles, Star, Sun } from "lucide-react"

const reasons = [
  {
    icon: Heart,
    title: "Seu jeito",
    text: "O seu jeitinho de ser, eu amo muito",
  },
  {
    icon: Sun,
    title: "Seu sorriso",
    text: "Adoro ver esse sorriso, e de ouvir as suas risadas (coisa rara).",
  },
  {
    icon: Star,
    title: "Sua companhia",
    text: "Acho que não preciso nem dizer, eu AMO estar com você",
  },
  {
    icon: Sparkles,
    title: "Por ser quem você é",
    text: "Meu orgulho de ver quem você é e quem você está se tornando, do quanto você se esforça nas coisas",
  },
]

export function Reasons() {
  return (
    <section className="relative z-10 bg-secondary/40 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-balance font-serif text-4xl font-semibold text-primary sm:text-6xl">
          Alguns motivos pra te amar
        </h2>
        <p className="mt-3 font-serif text-xl italic text-muted-foreground">
          (eram muitos, então escolhi só alguns)
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="flex gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
              <r.icon className="size-6" />
            </span>
            <div className="text-left">
              <h3 className="font-serif text-2xl font-semibold text-foreground">{r.title}</h3>
              <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
