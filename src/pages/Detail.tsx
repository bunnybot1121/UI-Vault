import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ArrowLeft, Bookmark, Copy, Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export function Detail() {
  const { id } = useParams<{ id: string }>();
  const { components, favorites, addFavorite, removeFavorite } = useStore();
  
  const comp = components.find(c => c.id === id);
  const isFav = comp ? favorites.includes(comp.id) : false;
  
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('css');
  const [copied, setCopied] = useState(false);

  if (!comp) {
    return <div className="p-10 text-center text-gray-400">Component not found.</div>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'css' ? comp.css : comp.preview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <Link to="/components" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
        <button 
          onClick={() => isFav ? removeFavorite(comp.id) : addFavorite(comp.id)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          <Bookmark className={cn("w-4 h-4", isFav ? "fill-accent text-accent" : "")} />
          {isFav ? 'Saved' : 'Save'}
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-unbounded font-bold tracking-tight">{comp.name}</h1>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-accent uppercase tracking-widest font-bold">{comp.era}</span>
          <span className="w-1 h-1 rounded-full bg-border"></span>
          {comp.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 rounded bg-surface border border-border text-gray-400">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        <div className="lg:col-span-2 space-y-8">
          
          {/* Preview Area */}
          <div className="rounded-2xl border border-border bg-[#f5f5f5] overflow-hidden shadow-2xl relative group">
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur text-xs font-mono px-3 py-1.5 border border-black/10 rounded-full z-10 text-gray-400 pointer-events-none">
              Interactive Preview
            </div>
            <div 
              className="w-full h-[400px] flex items-center justify-center relative bg-clip-padding"
              dangerouslySetInnerHTML={{ __html: comp.preview }}
            />
          </div>

          {/* Code Area */}
          <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="flex border-b border-border bg-background/50">
              <button
                className={cn("flex-1 py-3 text-sm font-mono tracking-wide transition-colors", activeTab === 'css' ? 'text-accent border-b-2 border-accent bg-surface/50' : 'text-gray-500 hover:text-gray-300')}
                onClick={() => setActiveTab('css')}
              >
                CSS
              </button>
              <button
                className={cn("flex-1 py-3 text-sm font-mono tracking-wide transition-colors", activeTab === 'html' ? 'text-accent border-b-2 border-accent bg-surface/50' : 'text-gray-500 hover:text-gray-300')}
                onClick={() => setActiveTab('html')}
              >
                HTML
              </button>
            </div>
            <div className="relative">
              <pre className="p-6 text-sm font-mono text-gray-300 overflow-x-auto bg-[#0d0d0d] m-0 h-[300px]">
                <code>
                  {activeTab === 'css' ? comp.css : comp.preview}
                </code>
              </pre>
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 bg-surface/80 backdrop-blur-sm border border-border rounded shadow-lg hover:border-accent hover:text-accent transition-colors flex items-center gap-2 text-xs font-mono"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2 text-accent">
                      <Check className="w-4 h-4" /> Copied
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2 text-gray-400">
                      <Copy className="w-4 h-4" /> Copy
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar details */}
        <div className="space-y-6">
          <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
            <h3 className="font-unbounded font-semibold text-lg border-b border-border pb-3">About this style</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {comp.desc}
            </p>
            
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <Info className="w-3.5 h-3.5" /> Perfect for
              </h4>
              <div className="flex flex-wrap gap-2">
                {comp.uses.map(use => (
                  <span key={use} className="px-3 py-1.5 border border-border bg-background rounded-md text-xs text-gray-300">
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-surface to-background border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">Use in Project</h4>
            <p className="text-sm text-gray-500 mb-4">Copy the HTML and CSS directly into your own codebase.</p>
            <button 
              onClick={handleCopy}
              className="w-full py-2 bg-foreground text-background font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg"
            >
              Copy Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
