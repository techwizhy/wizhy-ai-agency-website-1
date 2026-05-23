"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter text-slate-900 flex items-center gap-1 hover:opacity-90 transition-opacity">
          <span>Fintech</span><span className="text-brand-600">Tools</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <div className="relative group">
            <button className="hover:text-brand-600 transition-colors flex items-center gap-1 py-5">
              Calculators
              <svg className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white border border-slate-200 shadow-xl rounded-xl mt-0 py-2 overflow-hidden transition-all duration-200">
              <Link href="/#investment" className="block px-4 py-2 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors font-medium">Investment</Link>
              <Link href="/#loan" className="block px-4 py-2 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors font-medium">Loan</Link>
              <Link href="/#retirement" className="block px-4 py-2 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors font-medium">Retirement</Link>
              <Link href="/#tax" className="block px-4 py-2 text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-colors font-medium">Tax</Link>
            </div>
          </div>
          <Link href="/blog" className="hover:text-brand-600 transition-colors py-5">Blog</Link>
          <Link href="/about" className="hover:text-brand-600 transition-colors py-5">About</Link>
        </nav>

        {/* Desktop CTA & Search */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="h-10 w-48 rounded-full border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 w-56 focus:bg-white"
            />
            <svg className="absolute left-3.5 top-3 h-4 w-4 text-slate-400 group-focus-within:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <Link href="/#calculators" className="bg-brand-600 text-white h-10 px-5 rounded-full text-sm font-semibold hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/20 transition-all flex items-center justify-center">
            Try Free Calculators
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-brand-600 focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search calculators..." 
                className="w-full h-10 rounded-full border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
              />
              <svg className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-700">
              <Link href="/#investment" onClick={() => setIsOpen(false)} className="hover:text-brand-600 transition-colors py-1.5">Investment Calculators</Link>
              <Link href="/#loan" onClick={() => setIsOpen(false)} className="hover:text-brand-600 transition-colors py-1.5">Loan Calculators</Link>
              <Link href="/#retirement" onClick={() => setIsOpen(false)} className="hover:text-brand-600 transition-colors py-1.5">Retirement Calculators</Link>
              <Link href="/#tax" onClick={() => setIsOpen(false)} className="hover:text-brand-600 transition-colors py-1.5">Tax Calculators</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-brand-600 transition-colors py-1.5 border-t border-slate-100 pt-3">Blog</Link>
            </div>
            <Link href="/#calculators" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-600 text-white py-3 rounded-full text-sm font-bold hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/20 transition-all mt-4">
              Try Free Calculators
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
