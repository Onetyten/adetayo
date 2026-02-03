import { useRef, useEffect } from "react"

export default function ParallaxCircles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const circles = Array.from(container.children) as HTMLDivElement[]

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - (left + width / 2)) / (width / 2) // -1 to 1
      const y = (e.clientY - (top + height / 2)) / (height / 2) // -1 to 1

      circles.forEach((circle, i) => {
        const depth = (i + 1) / circles.length // inner circles move more subtly
        const maxOffset = 10 // max px offset
        const offsetX = x * maxOffset * depth
        const offsetY = y * maxOffset * depth

        circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const firstCircleSize = 70
  const decrement = 12
  const numCircles = 6

  return (
    <div
      ref={containerRef}
      className="absolute -bottom-16 -right-16 w-[35%] aspect-square rounded-full border-2 border-text opacity-15"
    >
      {[...Array(numCircles)].map((_, i) => {
        const sizePercent = firstCircleSize - i * decrement
        return (
          <div
            key={i}
            className={`absolute rounded-full border-2 border-text ${i === numCircles - 1 ? "bg-text" : ""}`}
            style={{
              width: `${sizePercent}%`,
              height: `${sizePercent}%`,
              top: `${(100 - sizePercent) / 2}%`,
              left: `${(100 - sizePercent) / 2}%`,
              transition: "transform 0.1s linear", // smooth movement
            }}
          />
        )
      })}
    </div>
  )
}
