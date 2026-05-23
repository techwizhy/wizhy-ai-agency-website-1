import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { calculators } from '@/config/calculators';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const calculatorRoutes = calculators.map((calc) => ({
    url: `${siteConfig.url}/calculators/${calc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...calculatorRoutes];
}
