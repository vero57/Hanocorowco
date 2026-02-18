import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ href, variant = "primary", className = "", children, ...props }: ButtonProps) => {
  const baseClasses = "magnetic-btn px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:shadow-amber-500/30",
    secondary: "border border-white/30 hover:bg-white/10",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};