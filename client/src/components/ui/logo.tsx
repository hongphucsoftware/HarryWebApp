import { cn } from "@/lib/utils";
import logoIcon from "@/assets/logo-icon.png";
import logoFull from "@/assets/logo-full.png";
import logoCollective from "@/assets/logo-collective.png";
import nousuNavLogo from "@/assets/nousu-nav-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  variant?: "icon" | "full" | "collective" | "nav"; // New prop to explicitly choose variant
}

export default function Logo({ 
  size = "md", 
  className, 
  showText = true, 
  variant 
}: LogoProps) {
  // Determine which logo to use - prioritize new nav logo for nav variant
  const useNavLogo = variant === "nav";
  const useCollectiveLogo = variant === "collective" || (size === "lg" || size === "xl") && showText && !useNavLogo;
  const useFullLogo = variant === "full" && !useCollectiveLogo && !useNavLogo;
  
  const sizeClasses = {
    sm: useCollectiveLogo || useFullLogo || useNavLogo ? "h-6" : "w-8 h-8",
    md: useCollectiveLogo || useFullLogo || useNavLogo ? "h-8" : "w-10 h-10", 
    lg: useCollectiveLogo || useFullLogo || useNavLogo ? "h-10" : "w-12 h-12",
    xl: useCollectiveLogo || useFullLogo || useNavLogo ? "h-12" : "w-16 h-16"
  };

  // If using nav logo, show it
  if (useNavLogo) {
    return (
      <div className={cn("flex items-center", className)} data-testid="logo">
        <img
          src={nousuNavLogo}
          alt="Nousu"
          className={cn("object-contain", sizeClasses[size])}
          data-testid="logo-nav"
        />
      </div>
    );
  }

  // If using collective logo, show it
  if (useCollectiveLogo) {
    return (
      <div className={cn("flex items-center", className)} data-testid="logo">
        <img
          src={logoCollective}
          alt="Nousu Collective"
          className={cn("object-contain", sizeClasses[size])}
          data-testid="logo-collective"
        />
      </div>
    );
  }

  // If using full logo, don't show separate text
  if (useFullLogo) {
    return (
      <div className={cn("flex items-center", className)} data-testid="logo">
        <img
          src={logoFull}
          alt="Nousu - Communicate. Collaborate. Create."
          className={cn("object-contain", sizeClasses[size])}
          data-testid="logo-full"
        />
      </div>
    );
  }

  // For smaller sizes or icon-only, use the N icon
  return (
    <div className={cn("flex items-center space-x-3", className)} data-testid="logo">
      <img
        src={logoIcon}
        alt="Nousu"
        className={cn("object-contain", sizeClasses[size])}
        data-testid="logo-icon"
      />
      
      {showText && (
        <span
          className={cn(
            "font-bold text-foreground text-xl"
          )}
          data-testid="logo-text"
        >
          Nousu
        </span>
      )}
    </div>
  );
}