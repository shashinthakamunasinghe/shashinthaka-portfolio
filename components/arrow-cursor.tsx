"use client"

import { useEffect, useState, useCallback, useRef } from "react"

export function ArrowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [angle, setAngle] = useState(0)
  const requestRef = useRef<number | null>(null)
  const trailRef = useRef({ x: 0, y: 0 })
  const prevPosition = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const dx = e.clientX - prevPosition.current.x
    const dy = e.clientY - prevPosition.current.y
    
    if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
      const newAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
      setAngle(newAngle)
    }
    
    prevPosition.current = { x: e.clientX, y: e.clientY }
    setPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const animate = () => {
      trailRef.current.x += (position.x - trailRef.current.x) * 0.12
      trailRef.current.y += (position.y - trailRef.current.y) * 0.12
      setTrailPosition({ x: trailRef.current.x, y: trailRef.current.y })
      requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [position])

  useEffect(() => {
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseover", handleMouseOver, { passive: true })
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [handleMouseMove])

  return (
    <>
      {/* Arrow cursor */}
      <div
        className="hidden lg:flex pointer-events-none fixed z-[9999] items-center justify-center"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) rotate(${angle}deg) scale(${isClicking ? 0.85 : isHovering ? 1.2 : 1})`,
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease",
        }}
      >
        <svg
          width={isHovering ? "28" : "24"}
          height={isHovering ? "28" : "24"}
          viewBox="0 0 24 24"
          fill="none"
          style={{
            filter: isHovering ? "drop-shadow(0 0 8px var(--primary))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            transition: "filter 0.2s ease, width 0.2s ease, height 0.2s ease",
          }}
        >
          <path
            d="M12 2L12 22M12 2L6 8M12 2L18 8"
            stroke={isHovering ? "var(--primary)" : "white"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "stroke 0.2s ease" }}
          />
        </svg>
      </div>

      {/* Trailing glow effect */}
      <div
        className="hidden lg:block pointer-events-none fixed z-[9998]"
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
          borderRadius: "50%",
          background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
          opacity: isVisible ? (isHovering ? 0.3 : 0.15) : 0,
          filter: "blur(12px)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        }}
      />

      {/* Background ambient glow */}
      <div
        className="cursor-glow hidden lg:block pointer-events-none"
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          opacity: isVisible ? 1 : 0,
          width: isHovering ? "500px" : "400px",
          height: isHovering ? "500px" : "400px",
          transition: "opacity 0.4s ease, width 0.4s ease, height 0.4s ease",
        }}
      />
    </>
  )
}
