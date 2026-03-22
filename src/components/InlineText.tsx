import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export function InlineText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center 50%"] // Start animating when it enters view, finish when centered
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  // Interpolating from 0fr to 1fr creates a perfectly smooth width expansion that pushes text natively
  const gridExpansion = useTransform(smoothProgress, [0, 1], ["0.001fr", "1fr"]);

  const images = [
    "/gallery/img-1.jpg", // UI Wireframes replaced
    "/gallery/img-7.jpg", // Color palettes replaced
    "/gallery/img-11.jpg", // Abstract 3D shape replaced
    "/gallery/img-16.jpg"  // Workstation replaced
  ];

  const Pill = ({ src, wide = false }: { src: string; wide?: boolean }) => (
    <motion.span 
      className="inline-grid align-middle mx-1 md:mx-2"
      style={{ gridTemplateColumns: gridExpansion }}
    >
      <span className="overflow-hidden min-w-0 flex items-center justify-center">
        <span 
          className={`shrink-0 overflow-hidden relative neo-brutal neo-brutal-hover ${
            wide 
              ? 'w-[100px] h-[46px] md:w-[180px] md:h-[72px] lg:w-[220px] lg:h-[80px] rounded-xl' 
              : 'w-[80px] h-[50px] md:w-[140px] md:h-[76px] lg:w-[160px] lg:h-[84px] rounded-lg'
          }`}
          style={{ marginTop: '-0.1em' }}
        >
          <img src={src} className="w-full h-full object-cover object-center" alt="UI Element" />
        </span>
      </span>
    </motion.span>
  );

  const Text = ({ children, italic = false }: { children: React.ReactNode; italic?: boolean }) => (
    <span 
      className={`text-[32px] sm:text-5xl md:text-7xl lg:text-[80px] font-unbounded font-black uppercase text-black tracking-tighter whitespace-nowrap leading-none ${italic ? 'italic pr-2' : ''}`}
    >
      {children}
    </span>
  );

  return (
    <div ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 border-y border-black/5 bg-surface/30 my-20 w-[100vw] relative left-1/2 -translate-x-1/2">
      <div 
        className="text-center max-w-[1400px] mx-auto flex flex-wrap justify-center items-center gap-y-2 md:gap-y-4"
        style={{ lineHeight: '1.2' }}
      >
        <Text>We build</Text>
        <Pill src={images[0]} wide />
        <Text italic>beautiful interfaces</Text>
        <Pill src={images[1]} />
        <Text>that accelerate</Text>
        <Pill src={images[2]} wide />
        <Text italic>design</Text>
        <Pill src={images[3]} />
        <Text>workflows.</Text>
      </div>
    </div>
  );
}
