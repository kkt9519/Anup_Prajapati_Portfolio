import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchOrReducedMotion, setIsTouchOrReducedMotion] = useState(false);

  // Position references for smooth interpolation (lerp)
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // 1. Safeguard: Check touch device or prefers-reduced-motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsTouchOrReducedMotion(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant update for the dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Dynamic hover detection for interactive elements
    const handleElementHover = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Smooth animation loop for the trailing ring
    const render = () => {
      // Lerp factor: 0.18 for a silky smooth, responsive trailing effect
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isVisible]);

  // If touch screen or user prefers reduced motion, do not render decorative cursor
  if (isTouchOrReducedMotion || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Small cursor dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`cursor-dot fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 dark:bg-cyan-300 pointer-events-none transition-transform duration-75 ease-out shadow-[0_0_8px_#38bdf8] ${
          isClicking ? 'scale-75' : isHovered ? 'scale-150 bg-purple-400 dark:bg-purple-300 shadow-[0_0_10px_#c084fc]' : 'scale-100'
        }`}
      />

      {/* Smooth trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cursor-ring fixed top-0 left-0 pointer-events-none rounded-full transition-[width,height,margin,border-color,background-color] duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-2 border-purple-400/80 bg-purple-500/10 backdrop-blur-[1px] shadow-[0_0_15px_rgba(168,85,247,0.3)]'
            : isClicking
            ? 'w-7 h-7 -ml-3.5 -mt-3.5 border border-cyan-400/90 bg-cyan-400/15'
            : 'w-9 h-9 -ml-4.5 -mt-4.5 border border-cyan-400/50 bg-cyan-400/5'
        }`}
      />
    </>
  );
}
