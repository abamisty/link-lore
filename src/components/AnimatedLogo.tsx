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

    // Loop the animation forever
    const loopTimer = setTimeout(() => {
      setAnimationPhase("initial");
    }, 8500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(loopTimer);
    };
  }, [animationPhase]);

  return (
    <div className={cn("relative flex items-center space-x-3", className)}>
      {/* Animated Compass Logo */}
      <div className="relative h-20 w-20">
        {/* Large Compass Phase */}
        <div className={cn(
          "absolute inset-0 transition-all duration-1000",
          animationPhase === "final" ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}>
          <img
            src="/lovable-uploads/541866f1-9e39-45bd-a6a3-0fa24cc4e902.png"
            alt="I²E Compass Logo"
            className={cn(
              "w-full h-full object-contain",
              animationPhase === "compass" && "animate-spin"
            )}
            style={{
              animationDuration: animationPhase === "compass" ? "4s" : "0s",
              animationIterationCount: animationPhase === "compass" ? "1" : "0"
            }}
          />
        </div>

        {/* Small Compass Phase */}
        <div className={cn(
          "absolute inset-0 transition-all duration-1000 delay-500",
          animationPhase === "final" ? "opacity-100 scale-[0.8]" : "opacity-0 scale-0"
        )}>
          <img
            src="/lovable-uploads/541866f1-9e39-45bd-a6a3-0fa24cc4e902.png"
            alt="I²E Compass Logo"
            className={cn(
              "w-full h-full object-contain",
              animationPhase === "final" && "animate-spin"
            )}
            style={{
              animationDuration: animationPhase === "final" ? "4s" : "0s",
              animationIterationCount: animationPhase === "final" ? "1" : "0"
            }}
          />
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