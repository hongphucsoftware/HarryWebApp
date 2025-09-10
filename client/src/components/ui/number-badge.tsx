import { cn } from "@/lib/utils";

interface NumberBadgeProps {
  number: string;
  size?: "default" | "lg";
  className?: string;
}

export default function NumberBadge({ 
  number, 
  size = "default", 
  className 
}: NumberBadgeProps) {
  return (
    <div
      className={cn(
        "number-badge text-primary-foreground rounded-full flex items-center justify-center font-bold",
        size === "default" && "w-12 h-12 text-lg",
        size === "lg" && "w-16 h-16 text-xl",
        className
      )}
      data-testid={`number-badge-${number}`}
    >
      {number}
    </div>
  );
}
