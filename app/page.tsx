import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { calculators } from '@/config/calculators';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FAQSection } from '@/components/sections/FAQ';

export default function Home() {
  const popularCalculators = calculators.filter(c => c.isPopular);
  const investmentCalculators = calculators.filter(c => c.category === 'investment');
  const loanCalculators = calculators.filter(c => c.category === 'loan');
  const retirementCalculators = calculators.filter(c => c.category === 'retirement');
  const taxCalculators = calculators.filter(c => c.category === 'tax');

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-slate-50">
      
      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32 border-b border-slate-100">
        {/* Premium Background gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-100/50 blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand-50 blur-3xl opacity-60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-sm font-semibold text-brand-600 mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-600 mr-2.5 animate-pulse"></span>
              50+ Premium Financial Calculators
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Free Finance Calculators <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                for Every Indian.
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl font-normal leading-relaxed">
              Make smarter financial decisions with our suite of institutional-grade calculators. 
              From SIP and EMI planning to complex tax projections, perfectly optimized for accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="#calculators">
                <Button size="lg" className="h-14 px-8 rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-500 hover:shadow-brand-500/40 transition-all text-base font-semibold flex items-center justify-center gap-2">
                  Explore Tools
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all text-base font-semibold">
                  Read Financial Guides
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-100 w-full">
              {[
                { icon: "shield", label: "Bank-Grade Accuracy" },
                { icon: "zap", label: "Lightning Fast" },
                { icon: "chart", label: "Visual Analytics" },
                { icon: "gift", label: "100% Free to Use" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon === "shield" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}
                    {feature.icon === "zap" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                    {feature.icon === "chart" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>}
                    {feature.icon === "gift" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>}
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dashboard Preview */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Powerful Visual Analytics
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our tools don&apos;t just give you raw numbers. They provide rich, interactive charts and visualizations to help you truly understand your financial trajectory.
            </p>
            <button className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors group">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Watch how it works
            </button>
          </div>

          <div className="relative mx-auto max-w-5xl">
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-tr from-brand-100 to-cyan-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-xl shadow-2xl p-2 sm:p-4 relative z-10">
              <div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-inner relative w-full aspect-[16/9] min-h-[300px]">
                <Image src="/images/hero_dashboard_1779031263236.png" alt="Fintech Dashboard Visual Analytics" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Calculators */}
      <section className="py-24 bg-white relative overflow-hidden" id="popular">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Trending Financial Tools
              </h2>
              <p className="text-lg text-slate-600">
                Join millions of users who trust our most popular calculators for their daily financial planning.
              </p>
            </div>
            <Link
              href="#calculators"
              className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 group"
            >
              Explore all tools 
              <svg className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularCalculators.slice(0, 3).map((tool, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:bg-brand-900 hover:border-brand-900 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white text-slate-600 mb-6 group-hover:bg-white group-hover:text-brand-600 shadow-sm transition-colors">
                    {tool.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 mb-8 group-hover:text-brand-100 transition-colors line-clamp-2">
                    {tool.shortDesc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-200 group-hover:border-brand-800 transition-colors">
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-brand-200">
                    Active Calculators
                  </span>
                  <Link href={`/calculators/${tool.slug}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Calculator Categories */}
      <section id="calculators" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Financial Calculators for Every Need
            </h2>
            <p className="text-lg text-slate-600">
              Explore our comprehensive suite of 50+ financial calculators designed to help you make informed decisions about your money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "investment", title: "Investment Tools", desc: "Plan your wealth creation journey", icon: "TrendingUp", list: investmentCalculators },
              { id: "loan", title: "Loan Calculators", desc: "Manage your debt efficiently", icon: "Home", list: loanCalculators },
              { id: "retirement", title: "Retirement Planning", desc: "Secure your golden years", icon: "PiggyBank", list: retirementCalculators },
              { id: "tax", title: "Tax Calculators", desc: "Optimize your tax outflows", icon: "Receipt", list: taxCalculators },
            ].map((category) => (
              <div
                key={category.id}
                className="group relative flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    {category.icon === "TrendingUp" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
                    {category.icon === "Home" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>}
                    {category.icon === "PiggyBank" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                    {category.icon === "Receipt" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                    <p className="text-sm text-slate-500">{category.desc}</p>
                  </div>
                </div>
                
                <ul className="flex-1 space-y-3 mb-6">
                  {category.list.slice(0, 4).map((calc, i) => (
                    <li key={i}>
                      <Link
                        href={`/calculators/${calc.slug}`}
                        className="flex items-center text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                      >
                        <svg className="h-4 w-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        {calc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`#${category.id}`}
                  className="inline-flex items-center justify-center w-full py-2.5 text-sm font-semibold text-brand-600 bg-brand-50 rounded-lg group-hover:bg-brand-100 transition-colors"
                >
                  View all in {category.title.split(' ')[0]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
                Why millions choose our <span className="text-brand-400">financial tools</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                We built this platform to democratize financial planning. Complex calculations shouldn&apos;t require an expensive advisor or complicated spreadsheets.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Bank-Grade Accuracy", desc: "Our formulas are vetted by financial experts.", icon: "shield" },
                  { title: "Lightning Fast", desc: "Calculators run locally in your browser instantly.", icon: "fast" },
                  { title: "100% Free Always", desc: "No paywalls, no hidden fees, no registration.", icon: "check" },
                  { title: "Mobile Optimized", desc: "Responsive layout that works great on any device.", icon: "phone" },
                ].map((reason, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-brand-400 mb-4 border border-slate-700">
                      {reason.icon === "shield" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}
                      {reason.icon === "fast" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                      {reason.icon === "check" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                      {reason.icon === "phone" && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-sm text-slate-400">{reason.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-600 to-cyan-600 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl p-8">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                  <div>
                    <p className="text-sm text-slate-400 font-medium mb-1">Estimated Returns</p>
                    <p className="text-3xl font-extrabold text-white">₹ 1,42,85,900</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400 font-medium mb-1">Total Investment</p>
                    <p className="text-xl font-semibold text-white">₹ 36,00,000</p>
                  </div>
                </div>
                
                {/* Mock Chart Area */}
                <div className="h-48 flex items-end justify-between gap-2">
                  {[40, 55, 75, 90, 115, 140, 180, 220].map((height, i) => (
                    <div key={i} className="w-full bg-brand-500/20 rounded-t-sm relative group cursor-pointer transition-all hover:bg-brand-500/40" style={{ height: `${height}px` }}>
                      <div className="absolute bottom-0 w-full bg-brand-500 rounded-t-sm" style={{ height: `${height * 0.4}px` }}></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-4">
                  <span>1 Yr</span>
                  <span>3 Yrs</span>
                  <span>5 Yrs</span>
                  <span>10 Yrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEO Content Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-slate-900 leading-tight">Master Your Finances in India</h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Navigating personal finance requires accurate planning. Whether you&apos;re considering a Systematic Investment Plan (SIP) in mutual funds, planning to buy a house on EMI, or preparing for your retirement, our suite of free online calculators is designed specifically for the Indian financial ecosystem.
            </p>
            <p>
              <strong>Why Planning Matters:</strong> Inflation constantly erodes the value of idle cash. By actively investing and managing your taxes under the latest Indian Tax Regimes, you can accelerate your path to financial independence. Our CAGR and SIP calculators help you visualize the power of compounding over decades.
            </p>
            <ul className="list-disc pl-6 space-y-3 font-semibold text-slate-700">
              <li><strong>SIP & Wealth Creation:</strong> Start small, stay consistent, and let compounding do the heavy lifting.</li>
              <li><strong>Smart Loan Management:</strong> Use our EMI calculators to understand your interest outgo and plan prepayments.</li>
              <li><strong>Retirement Planning:</strong> Calculate your expected gratuity and pension to build a secure safety net.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Featured Finance Guides */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">Latest Finance Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="flex flex-col overflow-hidden border border-slate-200/80 bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer rounded-2xl">
                <div className="h-48 bg-slate-100 w-full group-hover:opacity-90 transition-opacity relative">
                  <Image src={`/images/${['blog_sip_1779031283591.png', 'blog_tax_1779031299102.png', 'blog_retire_1779031314909.png'][item - 1]}`} alt="Finance Guide" fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-primary transition-colors line-clamp-2">How to maximize your SIP returns in 2024</h3>
                  <p className="text-slate-500 text-sm mb-4 flex-grow leading-relaxed">Discover the best strategies for managing your mutual fund investments during market volatility.</p>
                  <span className="text-brand-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article 
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Testimonials */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-slate-900">What Users Say</h2>
          <p className="text-sm text-slate-400 mb-12 italic">Note: These are demo placeholder testimonials.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-yellow-400 mb-4 flex justify-center text-lg">★★★★★</div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed italic">&quot;The SIP calculator is incredibly fast and easy to use. I love the clean interface and the fact that there are no annoying popups.&quot;</p>
                <div className="font-semibold text-slate-900">- Demo User {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Ready to plan your financial future?</h2>
          <p className="text-brand-200 mb-10 text-xl font-normal max-w-xl mx-auto leading-relaxed">Join thousands of Indians making smarter money decisions every day.</p>
          <Link href="#calculators" className="inline-flex h-14 items-center justify-center px-10 rounded-full bg-white text-brand-900 hover:bg-slate-50 font-bold shadow-xl transition-all">
            Explore All Calculators
          </Link>
        </div>
      </section>

    </div>
  );
}
