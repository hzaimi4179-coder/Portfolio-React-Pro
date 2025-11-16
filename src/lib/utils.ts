import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fmt(s: string | null | undefined) { 
  if(!s) return "Présent"; 
  const [y,m] = s.split("-"); 
  return `${m}/${y}`; 
}
