import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, CodeSquare, Palette } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

export function AddUI() {
  const navigate = useNavigate();
  // Simple form state (not persisting to actual backend since it's just a UI demo)
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    html: '',
    css: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('UI Component Saved (Mock Event)');
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-unbounded font-bold tracking-tight">Add New UI</h1>
        <p className="text-gray-400 text-sm">Create a new reusable component for the Vault.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-surface border border-border rounded-xl p-6 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Component Name</label>
              <input 
                required
                type="text" 
                placeholder="e.g. Neon Button"
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Category Tags (comma separated)</label>
              <input 
                type="text" 
                placeholder="button, neon, animated"
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Description</label>
            <textarea 
              rows={3}
              placeholder="Describe the component..."
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              value={formData.desc}
              onChange={e => setFormData({...formData, desc: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-xl flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center gap-2 bg-background/50 text-sm font-medium text-gray-400">
              <CodeSquare className="w-4 h-4" /> HTML Source
            </div>
            <textarea 
              required
              rows={12}
              className="w-full bg-[#0d0d0d] font-mono text-sm text-gray-300 p-4 focus:outline-none resize-none"
              placeholder='<div class="my-component">...</div>'
              value={formData.html}
              onChange={e => setFormData({...formData, html: e.target.value})}
            />
          </div>

          <div className="bg-surface border border-border rounded-xl flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center gap-2 bg-background/50 text-sm font-medium text-gray-400">
              <Palette className="w-4 h-4" /> CSS Source
            </div>
            <textarea 
              required
              rows={12}
              className="w-full bg-[#0d0d0d] font-mono text-sm text-gray-300 p-4 focus:outline-none resize-none"
              placeholder='.my-component { ... }'
              value={formData.css}
              onChange={e => setFormData({...formData, css: e.target.value})}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button 
            type="button" 
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 rounded-lg border border-border text-gray-400 hover:text-foreground hover:bg-surface transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent text-background font-bold hover:bg-accent/90 transition-colors shadow-[0_0_15px_rgba(74,222,128,0.2)]"
          >
            <Plus className="w-4 h-4" />
            Save Component
          </button>
        </div>
      </form>
    </div>
  );
}
