import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Magnetic } from './Magnetic';
import { Search, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const { searchQuery, setSearchQuery } = useStore();
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Components', path: '/components' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-white neo-brutal rounded-none shadow-[8px_8px_0px_#000000]">
      
      {/* Search Input hidden inside pill or expanded */}
      <div className="relative flex items-center px-4 pl-10 h-10 w-48 bg-white border-2 border-transparent focus-within:border-black font-bold text-xs hidden md:flex transition-transform">
        <Search className="w-3.5 h-3.5 absolute left-4 text-black" />
        <input 
          type="text"
          placeholder="Search Vault..."
          className="bg-transparent border-none outline-none w-full text-black placeholder-black/50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="w-[3px] h-6 bg-black mx-1 hidden md:block" />

      {links.map((link) => (
        <Magnetic key={link.name} strength={0.3}>
          <Link
            to={link.path}
            className={cn(
              "relative px-5 py-2 rounded-none text-sm font-black transition-transform z-10 block whitespace-nowrap",
              location.pathname === link.path ? "text-white" : "text-black hover:-translate-y-[2px]"
            )}
          >
            {location.pathname === link.path && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-black rounded-none -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {link.name}
          </Link>
        </Magnetic>
      ))}

      <div className="w-[3px] h-6 bg-black mx-1" />

      <Magnetic strength={0.4}>
        <Link to="/add" className="flex items-center gap-1 neo-btn-dark px-4 py-2 rounded-none text-sm whitespace-nowrap">
          <Plus className="w-4 h-4" /> Add
        </Link>
      </Magnetic>
    </div>
  );
}
