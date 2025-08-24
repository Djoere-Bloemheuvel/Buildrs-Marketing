
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Memoized className utility for better performance
const classNameCache = new Map<string, string>();

export function cn(...inputs: ClassValue[]) {
  const key = JSON.stringify(inputs);

  if (classNameCache.has(key)) {
    const cachedResult = classNameCache.get(key);
    return cachedResult || "";
  }

  const result = twMerge(clsx(inputs));

  // Limit cache size to prevent memory leaks
  if (classNameCache.size > 1000) {
    const firstKey = classNameCache.keys().next().value;
    if (firstKey) {
      classNameCache.delete(firstKey);
    }
  }

  classNameCache.set(key, result);
  return result;
}
