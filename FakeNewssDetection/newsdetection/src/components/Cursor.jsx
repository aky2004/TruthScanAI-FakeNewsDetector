import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener('mousemove', onMove)

    let rafId
    const animate = () => {
      const lerp = 0.2
      pos.current.x += (mouse.current.x - pos.current.x - 16) * lerp
      pos.current.y += (mouse.current.y - pos.current.y - 16) * lerp
      if (cursorRef.current) {
        cursorRef.current.style.left = pos.current.x + 'px'
        cursorRef.current.style.top  = pos.current.y + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const interactables = document.querySelectorAll('button, a, input, textarea, [role="button"]')
    const expand   = () => cursorRef.current?.classList.add('cursor-expand')
    const collapse = () => cursorRef.current?.classList.remove('cursor-expand')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', collapse)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div id="custom-cursor" ref={cursorRef} />
}
