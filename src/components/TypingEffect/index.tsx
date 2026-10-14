"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  speed?: number;
  pauseBetweenWords?: number;
  cursor?: boolean;
  className?: string;
  start?: boolean;
  onComplete?: () => void;
  instant?: boolean;
}

export default function TypingEffect({
  words,
  speed = 100,
  pauseBetweenWords = 250,
  cursor = true,
  className = "",
  start = true,
  onComplete,
  instant = false,
}: TypingEffectProps) {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!start || completed) return;

    if (currentWord >= words.length) {
      setCompleted(true);
      onComplete?.();
      return;
    }

    const word = words[currentWord];

    if (currentLetter >= word.length) {
      const timeout = setTimeout(() => {
        setCurrentWord((prev) => prev + 1);
        setCurrentLetter(0);
      }, pauseBetweenWords);

      return () => clearTimeout(timeout);
    }

    if (instant) {
      setDisplayedWords(words);
      setCurrentWord(words.length);
      setCurrentLetter(0);
      setCompleted(true);
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedWords((prev) => {
        const updated = [...prev];
        updated[currentWord] = word.slice(0, currentLetter + 1);
        return updated;
      });

      setCurrentLetter((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [
    start,
    completed,
    words,
    currentWord,
    currentLetter,
    speed,
    pauseBetweenWords,
    onComplete,
  ]);

  return (
    <div
      aria-label={words.join(" ")}
      className={`text-xs leading-6 tracking-[0.2em] text-white/55 ${className}`}
    >
      {words.map((word, index) => (
        <div key={`${index}-${word}`} className="whitespace-nowrap">
          {displayedWords[index] ?? ""}
          {cursor && !completed && currentWord === index && start && (
            <span className="ml-[2px] animate-pulse text-red-dark">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
