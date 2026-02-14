'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/cart');
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-24 text-center font-black text-slate-300 uppercase tracking-widest animate-pulse">
      Redirecting...
    </div>
  );
}