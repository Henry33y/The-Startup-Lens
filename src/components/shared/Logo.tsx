import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "header";
  className?: string;
  imageClassName?: string;
  href?: string;
}

export default function Logo({
  variant = "dark",
  size = "md",
  className,
  imageClassName,
  href = "/",
}: LogoProps) {
  const sizeMap = {
    sm: { height: 26, width: 55, maxHeight: "max-h-[26px]" },
    md: { height: 34, width: 72, maxHeight: "max-h-[34px]" },
    header: { height: 46, width: 97, maxHeight: "max-h-[44px] sm:max-h-[48px]" },
    lg: { height: 54, width: 114, maxHeight: "max-h-[54px]" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const logoSrc =
    variant === "light"
      ? "/logos/TheStartUPLens-Logo-white-trimmed.png"
      : "/logos/TheStartUPLens-Logo-trimmed.png";

  const content = (
    <div className={cn("relative inline-flex items-center group cursor-pointer", className)}>
      {/* Brand Lens Motif Ambient Glow on Hover */}
      <div className="absolute -inset-1 rounded-full bg-tsl-blue/0 group-hover:bg-tsl-blue/20 blur-md transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="The Startup Lens"
          width={currentSize.width}
          height={currentSize.height}
          priority
          className={cn(
            "h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]",
            currentSize.maxHeight,
            imageClassName
          )}
        />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
