import React, { useEffect, useRef, useState } from "react";

export interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number; // delay in ms
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // distance in px
  once?: boolean;
}

export function FadeInOnScroll({
  children,
  className = "",
  threshold = 0.12,
  delay = 0,
  direction = "up",
  distance = 32,
  once = true,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if IntersectionObserver is available
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(0.98)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(0.98)`;
      case "left":
        return `translate3d(${distance}px, 0, 0) scale(0.98)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0) scale(0.98)`;
      case "none":
        return "translate3d(0, 0, 0) scale(0.97)";
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.98)`;
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-1000 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
