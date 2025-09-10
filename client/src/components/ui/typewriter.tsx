import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  staticText: string;
  words: string[];
  speed?: number;
  eraseSpeed?: number;
  delay?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

export default function TypewriterEffect({
  staticText,
  words,
  speed = 100,
  eraseSpeed = 50,
  delay = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (wordIndex >= words.length) return;
    const currentWord = words[wordIndex];

    if (!isDeleting && index < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, eraseSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === currentWord.length) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [index, isDeleting, wordIndex, words, speed, eraseSpeed, delay]);

  return (
    <div className={className}>
      {staticText}{" "}
      <span className="text-primary">{displayedText}</span>
      {showCursor && (
        <span
          className="text-primary"
          style={{ opacity: blink ? 1 : 0 }}
        >
          {cursorCharacter}
        </span>
      )}
    </div>
  );
}