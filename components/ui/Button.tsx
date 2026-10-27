import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "light" | "outline";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  showArrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer text-xs md:text-sm px-5 py-2.5";

  const variantStyles = {
    primary:
      "bg-[#141E28] text-white hover:bg-[#1E2D3D] active:scale-[0.98] shadow-sm",
    light:
      "bg-white text-[#141E28] hover:bg-slate-100 active:scale-[0.98] shadow-sm",
    outline:
      "border border-slate-300 text-[#141E28] hover:bg-slate-50 active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </button>
  );
}
