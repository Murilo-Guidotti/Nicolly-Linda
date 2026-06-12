import Image from "next/image"
import { Camera } from "lucide-react"
import { cn } from "@/lib/utils"

type PhotoFrameProps = {
  caption?: string
  rotate?: string
  src?: string
  alt?: string
  className?: string
}

export function PhotoFrame({ caption, rotate = "0deg", src, alt, className }: PhotoFrameProps) {
  return (
    <figure
      className={cn(
        "group rounded-sm bg-card p-3 pb-12 shadow-[0_10px_30px_-12px_rgba(120,30,40,0.35)] ring-1 ring-border transition-transform duration-300 hover:scale-[1.03] hover:rotate-0",
        className,
      )}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-muted">
        {src ? (
          <Image src={src || "/placeholder.svg"} alt={alt ?? caption ?? "Foto da Nicolly"} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <Camera className="size-8" />
            <span className="px-4 text-center font-sans text-xs leading-relaxed">
              Coloque uma foto aqui
            </span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-3 text-center font-serif text-lg italic text-foreground/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
