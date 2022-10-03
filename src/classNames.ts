export function cn(...args: (string | undefined | boolean)[]) {
  return args.filter(Boolean).join(" ");
}
