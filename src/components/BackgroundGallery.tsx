import { motion } from 'framer-motion';
import { useMemo } from 'react';

export function BackgroundGallery() {
  // Memoize random image array so it doesn't reshuffle on every re-render
  const cols = useMemo(() => {
    const defaultImages = Array.from({ length: 17 }, (_, i) => `/gallery/img-${i + 1}.jpg`);
    return Array.from({ length: 8 }).map(() => {
      // Triple the images per column and randomize them
      return [...defaultImages, ...defaultImages, ...defaultImages].sort(() => Math.random() - 0.5);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-[0.6] grayscale contrast-[1.2] mix-blend-multiply flex gap-6 w-[200vw] h-[200vh] -top-[50vh] -left-[20vw] rotate-[-12deg]">
        {cols.map((images, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col gap-6 w-1/8 min-w-[280px]"
            animate={{ y: [0, -3000] }}
            transition={{
              duration: 60 + (colIndex % 4) * 20, /* Slight timing offsets globally */
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {images.map((src, i) => (
              <img key={`${colIndex}-${i}`} src={src} className="w-full h-auto object-cover border-[8px] border-black rounded-xl shadow-[12px_12px_0_0_#000]" alt="" />
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Heavy Grain Noise overlay to meld images heavily into the wall */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
