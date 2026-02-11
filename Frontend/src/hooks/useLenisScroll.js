import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

export const useLenisScroll = () => {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Animation frame loop
    function raf(time) {
      lenisRef.current.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  const scrollTo = (target) => {
    if (lenisRef.current) {
      if (typeof target === 'string') {
        // If it's a selector, find the element
        const element = document.querySelector(target)
        if (element) {
          lenisRef.current.scrollTo(element, { offset: -80 })
        }
      } else {
        lenisRef.current.scrollTo(target)
      }
    } else {
      // Fallback to native scroll
      if (typeof target === 'string') {
        const element = document.querySelector(target)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  return { scrollTo, lenis: lenisRef.current }
}

