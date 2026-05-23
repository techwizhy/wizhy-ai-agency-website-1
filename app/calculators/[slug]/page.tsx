import React from 'react';
import { notFound } from 'next/navigation';
import { calculators } from '@/config/calculators';
import { generateCalculatorMetadata, generateBreadcrumbSchema } from '@/lib/seo/metadata';
import { AdContainer } from '@/components/ui/AdContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return calculators.map((calc) => ({
    slug: calc.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const calc = calculators.find((c) => c.slug === params.slug);
  if (!calc) return {};
  return generateCalculatorMetadata(calc);
}

export default function CalculatorPage({ params }: { params: { slug: string } }) {
  const calc = calculators.find((c) => c.slug === params.slug);
  if (!calc) {
    notFound();
  }

  // Pre-generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Calculators', url: '/#calculators' },
    { name: calc.title, url: `/calculators/${calc.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <span>Home</span> / <span>Calculators</span> / <span className="text-slate-800 font-medium">{calc.title}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{calc.title}</h1>
          <p className="text-slate-600 text-lg">{calc.shortDesc}</p>
        </div>

        <AdContainer className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calculator Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              {calc.slug === 'sip-calculator' ? (
                // Demo form for SIP calculator
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Investment (₹)</label>
                    <input type="number" className="w-full border-slate-300 rounded-md shadow-sm h-11 px-3 bg-slate-50 border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="5000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Expected Return Rate (p.a %)</label>
                    <input type="number" className="w-full border-slate-300 rounded-md shadow-sm h-11 px-3 bg-slate-50 border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Time Period (Years)</label>
                    <input type="number" className="w-full border-slate-300 rounded-md shadow-sm h-11 px-3 bg-slate-50 border focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="10" />
                  </div>
                  <Button fullWidth size="lg">Calculate Returns</Button>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-slate-500 bg-slate-50 rounded border border-dashed border-slate-200">
                  Interactive form for {calc.title} will be implemented here.
                </div>
              )}
            </Card>

            <div className="prose prose-slate max-w-none bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
              <h2>About {calc.title}</h2>
              <p>This is placeholder SEO optimized content describing how the {calc.title} works, what formulas it uses, and why it&apos;s beneficial for financial planning in India.</p>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            {calc.slug === 'sip-calculator' && (
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-sky-100 border-primary/20">
                <h3 className="font-semibold text-slate-900 mb-4">Estimated Result</h3>
                <div className="space-y-4">
                   <div>
                     <p className="text-sm text-slate-500">Invested Amount</p>
                     <p className="text-xl font-bold text-slate-800">₹6,00,000</p>
                   </div>
                   <div>
                     <p className="text-sm text-slate-500">Est. Returns</p>
                     <p className="text-xl font-bold text-green-600">₹5,61,695</p>
                   </div>
                   <div className="pt-4 border-t border-slate-200">
                     <p className="text-sm text-slate-500">Total Value</p>
                     <p className="text-2xl font-extrabold text-primary">₹11,61,695</p>
                   </div>
                </div>
              </Card>
            )}

            <AdContainer className="min-h-[250px]" />

            <Card className="p-6">
              <h3 className="font-semibold mb-4 text-slate-800">Related Tools</h3>
              <ul className="space-y-3 text-sm">
                {calculators.filter(c => c.category === calc.category && c.slug !== calc.slug).slice(0, 4).map(c => (
                  <li key={c.slug}>
                    <a href={`/calculators/${c.slug}`} className="text-slate-600 hover:text-primary transition-colors">
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
