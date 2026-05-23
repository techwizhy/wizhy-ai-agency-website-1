import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity">
              <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
                Fintech<span className="text-brand-600">Tools</span>
              </span>
            </Link>
            <p className="text-slate-600 mb-6 max-w-sm text-sm leading-relaxed">
              Your trusted partner for financial calculations and wealth planning. Empowering millions to make smarter money decisions.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Calculators</h4>
            <ul className="space-y-3">
              <li><Link href="/calculators/sip-calculator" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">SIP Calculator</Link></li>
              <li><Link href="/calculators/emi-calculator" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">EMI Calculator</Link></li>
              <li><Link href="/calculators/cagr-calculator" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">CAGR Calculator</Link></li>
              <li><Link href="/calculators/gst-calculator" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">GST Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Disclaimer</Link></li>
              <li><Link href="/sitemap.xml" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} FintechTools. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 max-w-2xl text-center md:text-right leading-relaxed">
            Disclaimer: The calculators provided on this website are for informational purposes only. Results may vary based on actual market conditions and institution-specific policies.
          </p>
        </div>
      </div>
    </footer>
  );
}
