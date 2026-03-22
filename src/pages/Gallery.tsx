
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Gallery() {
  const { components, searchQuery, activeFilter, setActiveFilter, favorites, addFavorite, removeFavorite } = useStore();
  const toggleFavorite = (id: string) => favorites.includes(id) ? removeFavorite(id) : addFavorite(id);

  const allTags = Array.from(new Set(components.flatMap(c => c.tags)));
  const filters = ['all', ...allTags];

  const filteredComponents = components.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || c.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });



  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24 relative z-10">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-unbounded font-bold tracking-tight">Component Library</h1>
        
        <div className="flex flex-wrap gap-1.5 max-h-[140px] overflow-y-auto pr-2 pb-2" style={{ scrollbarWidth: 'thin' }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-3 py-1.5 text-xs tracking-wide rounded-full capitalize transition-colors border",
                activeFilter === filter 
                  ? "bg-black text-white font-bold border-black shadow-md" 
                  : "bg-surface hover:bg-black/5 text-gray-500 font-medium border-border"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {filteredComponents.length === 0 ? (
        <div className="py-20 text-center text-gray-500 font-mono text-sm border border-dashed border-black/10 rounded-xl bg-surface/30 backdrop-blur">
          No components found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredComponents.map((comp) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-xl overflow-hidden flex flex-col relative neo-brutal neo-brutal-hover block"
              >
                <button 
                  onClick={(e) => { e.preventDefault(); toggleFavorite(comp.id); }}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-md border border-black/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white"
                >
                  <Star className={cn("w-4 h-4", favorites.includes(comp.id) ? "fill-yellow-400 text-yellow-400" : "")} />
                </button>
                <div className="h-48 w-full overflow-hidden relative border-b border-black/[0.05] bg-[#fafafa]">
                  <div dangerouslySetInnerHTML={{ __html: comp.preview }} className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/[0.02] transition-colors duration-300 pointer-events-none" />
                </div>
                <div className="p-5 flex-1 flex flex-col bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-black text-lg tracking-tight leading-tight">{comp.name}</h3>
                  </div>
                  <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed mb-4">{comp.desc}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {comp.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase font-mono tracking-widest px-2 py-1 rounded bg-black/5 border border-black/5 text-gray-600 transition-colors group-hover:bg-black/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={`/components/${comp.id}`} className="shrink-0 p-2 py-1.5 px-4 text-xs font-bold tracking-wide uppercase text-black bg-white border border-black/10 rounded shadow-sm hover:text-white hover:bg-black hover:border-black transition-colors w-full flex justify-center group/btn">
                      View details <ArrowRight className="w-3 h-3 ml-2 mt-0.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
