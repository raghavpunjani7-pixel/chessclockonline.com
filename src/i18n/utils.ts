import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLocale, type Locale } from "./ui";

/** Build a link that stays in the current locale (defaults to the site default locale). */
export function localizedPath(locale: string | undefined, path: string): string {
  const l = (locale ?? defaultLocale) as Locale;
  if (l === defaultLocale) return path;
  return getRelativeLocaleUrl(l, path);
}
