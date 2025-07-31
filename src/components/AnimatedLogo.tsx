import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const AnimatedLogo = ({ className }: { className?: string }) => {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "compass" | "final">("initial");

  useEffect(() => {
    // Start compass rotation after component mounts
    const timer1 = setTimeout(() => {
      setAnimationPhase("compass");
    }, 500);

    // Transition to final phase after compass rotation
    const timer2 = setTimeout(() => {
      setAnimationPhase("final");
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={cn("relative flex items-center space-x-3", className)}>
      {/* Animated Compass Logo */}
      <div className="relative h-12 w-12">
        {/* Large Compass Phase */}
        <div className={cn(
          "absolute inset-0 transition-all duration-1000",
          animationPhase === "final" ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}>
          {/* Compass SVG with 8 rotating arrows */}
          <svg
            viewBox="0 0 100 100"
            className={cn(
              "w-full h-full",
              animationPhase === "compass" && "animate-spin"
            )}
            style={{
              animationDuration: animationPhase === "compass" ? "4s" : "0s",
              animationIterationCount: animationPhase === "compass" ? "1" : "0"
            }}
          >
            {/* Outer green circle */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#8FBC8F" strokeWidth="4"/>
            
            {/* Inner navy circle */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#1e3a8a" strokeWidth="3"/>
            
            {/* 8 compass arrows */}
            {/* North */}
            <path d="M50 15 L55 25 L50 20 L45 25 Z" fill="#1e3a8a"/>
            {/* Northeast */}
            <path d="M75 25 L70 35 L70 30 L65 35 Z" fill="#1e3a8a" transform="rotate(45 50 50)"/>
            {/* East */}
            <path d="M85 50 L75 55 L80 50 L75 45 Z" fill="#1e3a8a"/>
            {/* Southeast */}
            <path d="M75 75 L65 70 L70 70 L65 65 Z" fill="#1e3a8a" transform="rotate(135 50 50)"/>
            {/* South */}
            <path d="M50 85 L45 75 L50 80 L55 75 Z" fill="#1e3a8a"/>
            {/* Southwest */}
            <path d="M25 75 L35 65 L30 70 L35 65 Z" fill="#1e3a8a" transform="rotate(225 50 50)"/>
            {/* West */}
            <path d="M15 50 L25 45 L20 50 L25 55 Z" fill="#1e3a8a"/>
            {/* Northwest */}
            <path d="M25 25 L35 35 L30 30 L35 35 Z" fill="#1e3a8a" transform="rotate(315 50 50)"/>
            
            {/* Center I²E text */}
            <text x="50" y="58" textAnchor="middle" className="text-sm font-bold fill-primary">I²E</text>
          </svg>
        </div>

        {/* Small Compass Phase */}
        <div className={cn(
          "absolute inset-0 transition-all duration-1000 delay-500",
          animationPhase === "final" ? "opacity-100 scale-100" : "opacity-0 scale-0"
        )}>
          <svg
            viewBox="0 0 100 100"
            className={cn(
              "w-full h-full",
              animationPhase === "final" && "animate-spin"
            )}
            style={{
              animationDuration: animationPhase === "final" ? "4s" : "0s",
              animationIterationCount: animationPhase === "final" ? "1" : "0"
            }}
          >
            {/* Smaller compass version */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#8FBC8F" strokeWidth="3"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="#1e3a8a" strokeWidth="2"/>
            
            {/* 8 smaller arrows */}
            <path d="M50 20 L53 28 L50 25 L47 28 Z" fill="#1e3a8a"/>
            <path d="M70 30 L68 38 L68 35 L65 38 Z" fill="#1e3a8a" transform="rotate(45 50 50)"/>
            <path d="M80 50 L72 53 L75 50 L72 47 Z" fill="#1e3a8a"/>
            <path d="M70 70 L65 68 L68 68 L65 65 Z" fill="#1e3a8a" transform="rotate(135 50 50)"/>
            <path d="M50 80 L47 72 L50 75 L53 72 Z" fill="#1e3a8a"/>
            <path d="M30 70 L38 65 L35 68 L38 65 Z" fill="#1e3a8a" transform="rotate(225 50 50)"/>
            <path d="M20 50 L28 47 L25 50 L28 53 Z" fill="#1e3a8a"/>
            <path d="M30 30 L38 38 L35 35 L38 38 Z" fill="#1e3a8a" transform="rotate(315 50 50)"/>
            
            <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-primary">I²E</text>
          </svg>
        </div>
      </div>

      {/* Text that fades in */}
      <div className={cn(
        "transition-all duration-1000 delay-1000",
        animationPhase === "final" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      )}>
        <h1 className="text-xl font-bold text-primary">I²E</h1>
        <p className="text-sm text-muted-foreground hidden sm:block">International Institute of Entrepreneurship</p>
      </div>
    </div>
  );
};