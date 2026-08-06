export type ClassValue = string | number | false | null | undefined;

// Joins truthy class names into one string — the shared className merge used by
// the ui primitives so each doesn't re-implement the filter/join inline.
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
