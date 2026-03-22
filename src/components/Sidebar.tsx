import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Layers, MonitorPlay, Zap, Bookmark, FolderHeart, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Components', icon: Layers, path: '/components' },
  { label: 'Layouts', icon: MonitorPlay, path: '/layouts' },
  { label: 'Animations', icon: Zap, path: '/animations' },
  { label: 'Saved', icon: Bookmark, path: '/saved' },
  { label: 'Collections', icon: FolderHeart, path: '/collections' },
];

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useStore();

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isSidebarOpen ? 240 : 80 }}
      className="h-screen sticky top-0 bg-surface border-r border-border relative flex flex-col pt-6 z-20 shrink-0 shadow-lg"
    >
      <div className={cn("px-6 mb-8 flex items-center", !isSidebarOpen && "justify-center px-0")}>
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background font-bold shrink-0">
          UIV
        </div>
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.span 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="font-unbounded font-bold text-lg ml-3 text-foreground tracking-tight overflow-hidden whitespace-nowrap"
            >
              UI Vault
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center py-2.5 px-3 rounded-lg text-sm font-medium transition-colors hover:text-foreground",
              isActive ? "bg-background/50 text-accent ring-1 ring-border/50" : "text-gray-400 hover:bg-background/20",
              !isSidebarOpen && "justify-center px-0"
            )}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="ml-3 overflow-hidden whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-border">
        <NavLink to="/settings" className={cn(
          "flex items-center py-2.5 px-3 rounded-lg text-sm font-medium transition-colors text-gray-400 hover:text-foreground hover:bg-background/20",
          !isSidebarOpen && "justify-center px-0"
        )}>
           <Settings className="w-5 h-5 shrink-0" />
           <AnimatePresence>
             {isSidebarOpen && (
               <motion.span
                 initial={{ opacity: 0, width: 0 }}
                 animate={{ opacity: 1, width: "auto" }}
                 exit={{ opacity: 0, width: 0 }}
                 className="ml-3 overflow-hidden whitespace-nowrap"
               >
                 Settings
               </motion.span>
             )}
           </AnimatePresence>
        </NavLink>
      </div>

      <button 
        onClick={toggleSidebar}
        className="absolute -right-3.5 top-8 bg-surface border border-border rounded-full w-7 h-7 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors shadow-sm cursor-pointer z-50"
      >
        {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
    </motion.aside>
  );
}
