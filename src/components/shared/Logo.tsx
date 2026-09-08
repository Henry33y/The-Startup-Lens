import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
}

export default function Logo({
  variant = "light",
  size = "md",
  className,
  href = "/",
}: LogoProps) {
  const sizeMap = {
    sm: { height: 28, width: 140, lensDot: "w-1.5 h-1.5" },
    md: { height: 36, width: 180, lensDot: "w-2 h-2" },
    lg: { height: 48, width: 240, lensDot: "w-2.5 h-2.5" },
  };

  const currentSize = sizeMap[size];
  const logoSrc =
    variant === "light"
      ? "/logos/TheStartUPLens-Logo-white.png"
      : "/logos/TheStartUPLens-Logo.png";

  const content = (
    <div className={cn("relative inline-flex items-center group cursor-pointer", className)}>
      {/* Brand Lens Motif Ambient Glow on Hover */}
      <div className="absolute -inset-1 rounded-full bg-tsl-blue/0 group-hover:bg-tsl-blue/20 blur-md transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <div className="relative flex items-center space-x-2">
        <Image
          src={logoSrc}
          alt="The Startup Lens"
          width={currentSize.width}
          height={currentSize.height}
          priority
          className="h-auto w-auto max-h-[48px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {/* Subtle Lens Indicator dot */}
        <span className={cn("rounded-full bg-tsl-blue shadow-[0_0_8px_#00D4FF] animate-pulse", currentSize.lensDot)} />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
