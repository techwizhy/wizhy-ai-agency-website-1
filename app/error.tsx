'use client';
 
import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Something went wrong!</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        An unexpected error occurred while loading this page. Our team has been notified.
      </p>
      <Button onClick={() => reset()} size="lg" variant="outline">
        Try again
      </Button>
    </div>
  );
}
