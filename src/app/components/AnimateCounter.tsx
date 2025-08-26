'use client'

import { animate, KeyframeOptions, useIsomorphicLayoutEffect } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type AnimateCounterProps = {
  from: number
  to: number
  animationOptions?: KeyframeOptions
}

function formatNumber(value: number): string {
  if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "k"
  }
  return String(Math.floor(value))
}

export default function AnimateCounter({
  from,
  to,
  animationOptions
}: AnimateCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!isInView) return
    const element = ref.current
    if (!element) return

    element.textContent = formatNumber(from)

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = formatNumber(value)
      }
    })

    return () => controls.stop()
  }, [isInView, from, to, animationOptions])

  return <span ref={ref}></span>
}
