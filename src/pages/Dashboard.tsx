import { motion, useScroll, useTransform, useSpring, useMotionValue, type Variants } from 'framer-motion';
import { useStore } from '../store/useStore';
import { ArrowRight, Layers, LayoutTemplate, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HandDrawnArrow } from '../components/HandDrawnArrow';
import { InfiniteScrollRows } from '../components/InfiniteScrollRows';
import { InlineText } from '../components/InlineText';

function TiltHero({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Use a larger dampening range for the hero so it's subtle and giant
  const rotateX = useTransform(y, [-400, 400], [10, -10]);
  const rotateY = useTransform(x, [-400, 400], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      className="relative z-10 w-full flex flex-col items-center cursor-default"
    >
      <div style={{ transformStyle: "preserve-3d" }} className="relative flex flex-col items-center">
        {children}
      </div>
    </motion.div>
  );
}

function TiltCard({ children, className, delay, variants }: { children: React.ReactNode, className?: string, delay?: number, variants?: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      custom={delay}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full relative">
        {children}
      </div>
    </motion.div>
  );
}

function NeoCube({ className, delay = 0, colors }: { className: string, delay?: number, colors: string[] }) {
  return (
    <motion.div 
      className={`absolute w-16 h-16 pointer-events-none ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    >
      <div className={`absolute inset-0 border-[3px] border-black ${colors[0]}`} style={{ transform: 'translateZ(32px)' }} />
      <div className={`absolute inset-0 border-[3px] border-black ${colors[1]}`} style={{ transform: 'rotateY(180deg) translateZ(32px)' }} />
      <div className={`absolute inset-0 border-[3px] border-black ${colors[2]}`} style={{ transform: 'rotateY(90deg) translateZ(32px)' }} />
      <div className={`absolute inset-0 border-[3px] border-black ${colors[3]}`} style={{ transform: 'rotateY(-90deg) translateZ(32px)' }} />
      <div className={`absolute inset-0 border-[3px] border-black ${colors[4]}`} style={{ transform: 'rotateX(90deg) translateZ(32px)' }} />
      <div className={`absolute inset-0 border-[3px] border-black ${colors[5]}`} style={{ transform: 'rotateX(-90deg) translateZ(32px)' }} />
    </motion.div>
  );
}

export function Dashboard() {
  const { components } = useStore();
  const recentComponents = components.slice(0, 4);

  const stats = [
    { label: 'Total', value: components.length, icon: Layers, bgHover: 'bg-[#ffde00]' },
    { label: 'Layouts', value: '12', icon: LayoutTemplate, bgHover: 'bg-[#4ade80]' },
    { label: 'Favorites', value: '24', icon: Star, bgHover: 'bg-[#f472b6]' },
  ];

  const { scrollYProgress, scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 40, damping: 20 });
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const yText = useTransform(smoothY, [0, 800], [0, 60]);

  const card: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto pb-24 relative z-10">
      {/* Hero */}
      <motion.section
        style={{ scale }}
        className="pt-32 pb-24 flex items-center justify-center text-center px-6 mb-10"
      >
        <motion.div style={{ y: yText }} className="max-w-4xl flex flex-col items-center relative w-full pt-10">
          <NeoCube 
            className="top-0 left-0 md:-left-10 xl:-left-24 z-[-1]" 
            colors={['bg-[#ffde00]', 'bg-[#4ade80]', 'bg-[#f472b6]', 'bg-white', 'bg-black', 'bg-[#ffde00]']} 
          />
          <NeoCube 
            className="bottom-14 right-10 md:right-0 xl:-right-24 scale-75 z-[-1]" 
            delay={-5}
            colors={['bg-[#f472b6]', 'bg-[#ffde00]', 'bg-white', 'bg-[#4ade80]', 'bg-black', 'bg-white']} 
          />
          
          <TiltHero>
            <div className="relative inline-flex mb-8 mt-12 items-end justify-center" style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="text-[80px] md:text-[140px] font-brutal leading-[0.85] uppercase text-white tracking-normal m-0 select-none pb-4 z-10"
                style={{ WebkitTextStroke: '4px black', textShadow: '10px 10px 0px #000' }}
              >
                UI VAULT
              </motion.h1>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute bottom-4 right-0 translate-x-[60%] translate-y-[20%] bg-[#ffde00] border-[4px] border-black shadow-[6px_6px_0_0_#000] px-4 py-1.5 text-black font-brutal uppercase tracking-wider text-xl z-20 select-none"
                style={{ transform: "translateZ(80px)" }}
              >
                V2.0 NEO
              </motion.div>
              <HandDrawnArrow delay={1.5} className="w-32 h-32 absolute -top-16 -right-16 hidden md:block" />
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
              transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
              className="mt-6 mb-12 z-10 relative"
              style={{ transform: "translateZ(60px)" }}
            >
              <span className="bg-white text-black border-4 border-black shadow-[6px_6px_0_0_#000] px-8 py-3.5 font-brutal uppercase tracking-widest text-sm md:text-lg inline-block pointer-events-none skew-x-[-5deg]">
                Collect • Remix • Reuse
              </span>
            </motion.div>
          </TiltHero>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-wrap gap-4 justify-center max-w-2xl relative z-20"
          >
            {['glass', 'minimal', 'neon', 'cards', 'dashboards'].map((t, i) => (
              <span
                key={t}
                className={`text-xs px-4 py-2 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] text-black font-bold uppercase transition-transform cursor-default ${i % 2 === 0 ? '-rotate-2 hover:-rotate-1' : 'rotate-2 hover:rotate-1'} hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]`}
              >
                #{t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-4 md:px-0" style={{ perspective: 1200 }}>
        {stats.map((stat, i) => (
          <TiltCard 
            key={stat.label}
            variants={card}
            delay={i}
            className="group outline outline-2 outline-black bg-white shadow-[8px_8px_0_0_#000] cursor-default"
          >
            <div className="w-full h-full p-6 flex flex-col items-start relative overflow-hidden bg-white">
              <div className={`absolute inset-0 ${stat.bgHover} translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0`} />
              <div className="relative z-10 w-full flex justify-between items-start" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                <div>
                  <div className="text-xs font-black uppercase font-mono tracking-widest text-gray-500 mb-2 group-hover:text-black transition-colors">{stat.label}</div>
                  <div className="text-6xl font-black text-black tracking-tighter">{stat.value}</div>
                </div>
                <div className="w-14 h-14 bg-white border-2 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center transition-transform group-hover:-translate-y-2 group-hover:shadow-[4px_12px_0_0_#000]" style={{ transform: "translateZ(40px)" }}>
                  <stat.icon className="w-7 h-7 text-black stroke-[2.5]" />
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      <InfiniteScrollRows />
      <InlineText />

      {/* Gallery / Recently Added */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-unbounded font-semibold">Recently Added</h2>
          <Link to="/components" className="text-sm text-accent hover:text-accent/80 flex items-center gap-1 transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentComponents.map((comp, i) => comp ? (
            <motion.div
              key={comp.id}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              custom={i}
              className="group bg-white rounded-xl overflow-hidden flex flex-col neo-brutal neo-brutal-hover block"
            >
              <div className="h-44 w-full overflow-hidden relative border-b border-black/[0.05] bg-[#fafafa]">
                <div className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" dangerouslySetInnerHTML={{ __html: comp.preview }} />
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/[0.02] transition-colors duration-300 pointer-events-none" />
              </div>
              <div className="p-5 flex-1 flex flex-col bg-white">
                <h3 className="font-bold text-black text-lg tracking-tight leading-tight mb-1">{comp.name}</h3>
                <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed">{comp.desc}</p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                  <span className="px-2 py-1 bg-black/5 border border-black/5 rounded text-black transition-colors group-hover:bg-black/10">{comp.tags[0]}</span>
                  <span>•</span>
                  <span>{comp.era}</span>
                </div>
              </div>
            </motion.div>
          ) : null)}
        </div>
      </div>
      
      {/* Footer vibe */}
      <div className="text-center text-gray-500 pt-20 pb-10 font-mono text-sm opacity-50">
        built like a system, not a page
      </div>
    </div>
  );
}
