import React from 'react';

export function AdContainer({ className = '' }: { className?: string }) {
  // Mobile min-height: 100px, Desktop min-height: 280px
  // Prevents CLS aggressively
  return (
    <div className={`w-full max-w-[728px] mx-auto min-h-[100px] md:min-h-[280px] bg-slate-50 flex items-center justify-center text-slate-300 text-sm border border-slate-100 rounded my-8 ${className}`}>
      {/* Google AdSense ins block would go here */}
      Advertisement
    </div>
  );
}
