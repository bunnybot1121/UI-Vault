import { motion } from 'framer-motion';

export function InfiniteImageMarquee() {
  const images = Array.from({ length: 17 }, (_, i) => `/gallery/img-${i + 1}.jpg`);
  const marqueeItems = [...images, ...images, ...images, ...images];

  return (
    <div className="relative flex overflow-hidden w-[100vw] left-1/2 -translate-x-1/2 py-24 my-20 border-y-4 border-black bg-white shadow-[0_20px_0_0_rgba(0,0,0,0.05)]">
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {marqueeItems.map((src, i) => (
          <div key={i} className="w-48 h-64 md:w-[300px] md:h-[400px] flex-shrink-0 border-4 border-black bg-black neo-brutal overflow-hidden group cursor-pointer">
            <img src={src} className="w-full h-full object-cover object-top group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" alt="Marvel Artwork" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
