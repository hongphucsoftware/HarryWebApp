import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  inView?: boolean;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  inView = false,
  duration = 2000,
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentVal = Math.floor(easeOutQuart * value);
      
      setCurrentValue(currentVal);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, inView, duration]);

  return (
    <span data-testid={`counter-${value}`}>
      {prefix}{currentValue}{suffix}
    </span>
  );
}
