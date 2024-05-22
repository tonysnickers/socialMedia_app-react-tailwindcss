import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { formatDistanceToNow, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatRelativeTime = (dateString: string): string => {
  // Parse the date string into a Date object
  const date = parseISO(dateString);

  // Calculate the distance to now in words
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  return relativeTime;
};

// Example usage
const dateString = "2024-05-20T17:26:36.791+00:00";
const result = formatRelativeTime(dateString);
console.log(result); // Output will be something like "2 days ago" or "in 2 hours"
