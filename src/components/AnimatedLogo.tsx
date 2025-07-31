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
      {/* Large Compass Phase - rotates for 4 seconds then disappears */}
      <div className={cn(
        "relative h-16 w-16 transition-all duration-1000",
        animationPhase === "final" ? "opacity-0 scale-0" : "opacity-100 scale-100"
      )}>
        <img
          src="/lovable-uploads/ad6b5420-e9b0-4d79-bec9-18fdbe8589b2.png"
          alt="I²E Large Compass"
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

      {/* Small Compass and Text Phase - appears after large compass disappears */}
      <div className={cn(
        "flex items-center space-x-3 transition-all duration-1000 delay-500",
        animationPhase === "final" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      )}>
        {/* Small rotating compass */}
        <div className="relative h-12 w-12">
          <img
            src="/lovable-uploads/ad6b5420-e9b0-4d79-bec9-18fdbe8589b2.png"
            alt="I²E Small Compass"
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

        {/* Text that fades in */}
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold text-primary">I²E</h1>
          <p className="text-sm text-muted-foreground">International Institute of Entrepreneurship</p>
        </div>
      </div>

      {/* Mobile version - just show I²E text when final */}
      <div className={cn(
        "sm:hidden transition-all duration-1000 delay-500",
        animationPhase === "final" ? "opacity-100" : "opacity-0"
      )}>
        <h1 className="text-xl font-bold text-primary">I²E</h1>
      </div>
    </div>
  );
};