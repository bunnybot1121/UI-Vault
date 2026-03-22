import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { BackgroundGallery } from './BackgroundGallery';

export function Layout() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 40, damping: 20 });
  const yBg = useTransform(smoothY, [0, 800], [0, 200]);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    // Fallback for older package versions
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Ambient Brutalist Wallpaper */}
      <BackgroundGallery />

      {/* Ambient gradients */}
      <motion.div style={{ y: yBg }} className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_60%,rgba(74,222,128,0.1),transparent)]" />
      </motion.div>



      <div className="flex-1 flex flex-col min-w-0 z-10 relative">
        <Navbar />
        {/* Adjusted padding top because Navbar is now a fixed top pill */}
        <main className="flex-1 px-6 pt-32 pb-12 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
