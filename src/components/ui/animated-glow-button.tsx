import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedGlowButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
}

const AnimatedGlowButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedGlowButtonProps
>(({ text = "Voir plus", className, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        "px-5 py-2 rounded-md font-semibold tracking-wide transition-all duration-300",

        // ---- STYLE MARRON + GLOW ----
        "bg-[#7a4a2b] text-[#f8f1e7] border border-[#a67c52]", // marron + beige
        "shadow-[0_0_10px_rgba(166,124,82,0.4)]",               // glow bronze
        "hover:bg-[#8f5c3a] hover:shadow-[0_0_15px_rgba(166,124,82,0.7)]",
        "active:scale-95",

        className
      )}
    >
      {text}
    </button>
  );
});

AnimatedGlowButton.displayName = "AnimatedGlowButton";

export default AnimatedGlowButton;
