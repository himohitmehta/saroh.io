/* eslint-disable @typescript-eslint/explicit-function-return-type  -- not added because it's a utility function that doesn't need a return type
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
