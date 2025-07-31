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
        <div className="absolute inset-0">
          <img
            src="/i2e_Logo.gif"
            alt="I²E Logo"
            className="w-full h-full object-contain"
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