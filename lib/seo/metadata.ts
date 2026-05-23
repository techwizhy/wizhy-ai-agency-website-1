import { Metadata } from 'next';
import { Calculator } from '@/config/calculators';
import { siteConfig } from '@/config/site';

export function generateCalculatorMetadata(calc: Calculator): Metadata {
  return {
    title: `${calc.title} | ${siteConfig.name}`,
    description: calc.shortDesc,
    alternates: {
      canonical: `${siteConfig.url}/calculators/${calc.slug}`,
    },
    openGraph: {
      title: `${calc.title} | ${siteConfig.name}`,
      description: calc.shortDesc,
      url: `${siteConfig.url}/calculators/${calc.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image.webp`, // Placeholder
          width: 1200,
          height: 630,
          alt: calc.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${calc.title} | ${siteConfig.name}`,
      description: calc.shortDesc,
      creator: siteConfig.social.twitter,
      images: [`${siteConfig.url}/og-image.webp`],
    },
  };
}

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`, // Placeholder
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ].filter(Boolean),
  };
}
