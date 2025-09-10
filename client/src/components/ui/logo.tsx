import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = "md", className, showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={cn("flex items-center space-x-3", className)} data-testid="logo">
      {/* Modern geometric logo icon */}
      <div className={cn("relative", sizeClasses[size])}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl rotate-6 opacity-20"></div>
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg p-2 shadow-lg">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-white"
            data-testid="logo-icon"
          >
            {/* Abstract "N" shape with modern geometric design */}
            <path
              d="M4 4L20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path
              d="M6 8L6 16M18 8L18 16M6 8L12 14L18 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="15" cy="9" r="2" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      </div>
      
      {showText && (
        <span
          className={cn(
            "font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent",
            textSizes[size]
          )}
          data-testid="logo-text"
        >
          Nousu
        </span>
      )}
    </div>
  );
}