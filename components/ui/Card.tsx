import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = '', children, ...props }: CardProps) {
  // Using lightweight glassmorphism alternative as requested
  const classes = `bg-white/80 border border-slate-200 shadow-sm rounded-xl overflow-hidden ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
