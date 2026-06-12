import { FallingHearts } from "@/components/falling-hearts"
import { Hero } from "@/components/hero"
import { LetterSection } from "@/components/letter-section"
import { Gallery } from "@/components/gallery"
import { Reasons } from "@/components/reasons"
import { Closing } from "@/components/closing"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <FallingHearts />
      <Hero />
      <LetterSection />
      <Gallery />
      <Reasons />
      <Closing />
    </main>
  )
}
