'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PlywoodsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/products');
  }, [router]);

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div>
        <h2>Redirecting to Plywood Collection...</h2>
        <p style={{ color: 'var(--color-muted)', marginTop: '0.5rem' }}>
          Please wait while we take you to our complete plywood products portfolio.
        </p>
      </div>
    </div>
  );
}

