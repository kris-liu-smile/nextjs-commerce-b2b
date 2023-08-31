import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense, useEffect } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  useEffect(() => {
    (window as any).B3 = { setting: { store_hash: 'imk8zz7jip' } }

    const script1 = document.createElement('script');
    
    script1.src = 'https://cdn.bundleb2b.net/b2b/staging/storefront/index-legacy.8e12e9bd.js'
    
    document.body.append(script1)	

    const script = document.createElement('script');
    
    script.src = 'https://cdn.bundleb2b.net/b2b/staging/storefront/polyfills-legacy.777236c5.js'
    
    document.body.append(script)	

  }, [])
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
