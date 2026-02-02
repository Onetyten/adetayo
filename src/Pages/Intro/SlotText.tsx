import gsap from "gsap"
import { useEffect, useRef } from "react"

interface proptype{
    text:string
    active:boolean
}

export default function SlotText({text,active}:proptype) {
    const containerRef = useRef<HTMLParagraphElement | null>(null)
    const hasPlayed = useRef(false)

    useEffect(() => {
      if (!active || hasPlayed.current || !containerRef.current) return
      hasPlayed.current = true
      const letters = containerRef.current.querySelectorAll<HTMLSpanElement>(".letter")
      gsap.to(letters, {
        yPercent: -100,
        stagger: 0.1/text.length,
        duration: 0.1,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(letters, { yPercent: 0 })
          hasPlayed.current = false
        },
      })
    }, [active])

  return (
    <p ref={containerRef} className="relative overflow-hidden min-h-4 block">
        
        <span className="flex flex-col relative">
              <span className="flex">
                {[...text].map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>

              <span className="flex absolute top-full left-0">
                {[...text].map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </span>
    </p>
  )
}
