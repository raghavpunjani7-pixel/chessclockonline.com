import type { APIRoute } from 'astro';

const SITE = 'https://chessclockonline.com';

const locales = ['en', 'es', 'fr', 'de', 'pt'] as const;
const defaultLocale = 'en';

const paths = [
  '',
  '/about',
  '/clock',
  '/contact',
  '/faq',
  '/features',
  '/privacy',
  '/terms',
  '/time-controls',
];

function urlFor(locale: string, path: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${SITE}${prefix}${path}`;
}

export const GET: APIRoute = () => {
  const urls = paths.map((path) => {
    const alternates = locales
      .map(
        (locale) =>
          `      <xhtml:link rel="alternate" hreflang="${locale}" href="${urlFor(locale, path)}" />`
      )
      .join('\n');

    return locales.map((locale) => {
      const loc = urlFor(locale, path);
      return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n      <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(defaultLocale, path)}" />\n  </url>`;
    }).join('\n');
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
