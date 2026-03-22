import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useStore } from '../store/useStore';

export function InfiniteScrollRows() {
  const { components } = useStore();
  const { scrollY } = useScroll();
  
  const smoothY = useSpring(scrollY, { stiffness: 50, damping: 20 });
  const x1 = useTransform(smoothY, [0, 3000], [0, -1500]);
  const x2 = useTransform(smoothY, [0, 3000], [-1000, 500]);
  const x3 = useTransform(smoothY, [0, 3000], [0, -2000]);

  // Safely split components into 3 groups, tripling for seamless looping
  const total = components.length;
  const third = Math.ceil(total / 3);
  const group1 = components.slice(0, third);
  const group2 = components.slice(third, third * 2);
  const group3 = components.slice(third * 2);

  // Triple each group so there's enough content to scroll
  const row1Items = [...group1, ...group1, ...group1].filter(Boolean);
  const row2Items = (group2.length > 0 ? [...group2, ...group2, ...group2] : [...group1, ...group1, ...group1]).filter(Boolean);
  const row3Items = (group3.length > 0 ? [...group3, ...group3, ...group3] : [...group1, ...group1, ...group1]).filter(Boolean);

  const Row = ({ items, x, tall = false }: { items: typeof components; x: any; tall?: boolean }) => (
    <div className="relative overflow-hidden py-3 my-2 w-full">
      <motion.div style={{ x }} className="flex gap-4 w-max">
        {items.map((comp, i) => (
          <div 
            key={`${comp.id}-${i}`} 
            className={`flex-shrink-0 relative overflow-hidden bg-[#e8e4dc] group cursor-pointer neo-brutal neo-brutal-hover ${tall ? 'w-60 h-40 md:w-[240px] md:h-[160px] rounded-xl' : 'w-48 h-32 md:w-[200px] md:h-[130px] rounded-lg'}`}
          >
            <div className="w-full h-full relative overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" dangerouslySetInnerHTML={{ __html: comp.preview }} />
          </div>
        ))}
      </motion.div>
    </div>
  );

  if (components.length === 0) return null;

  return (
    <div className="py-20 w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden bg-background">
      <Row items={row1Items} x={x1} />
      <Row items={row2Items} x={x2} tall />
      <Row items={row3Items} x={x3} />
    </div>
  );
}
