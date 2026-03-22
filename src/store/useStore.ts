import { create } from 'zustand';
import { uiStyles } from '../data/styles';

export type UIComponent = typeof uiStyles[0];

interface AppState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favorites: string[]; /* Array of UI component IDs */
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  components: UIComponent[];
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const useStore = create<AppState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  favorites: [],
  addFavorite: (id) => set((state) => ({ favorites: [...state.favorites, id] })),
  removeFavorite: (id) => set((state) => ({ favorites: state.favorites.filter(favId => favId !== id) })),
  components: uiStyles,  /* Initialize with extracted styles */
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  activeFilter: 'all',
  setActiveFilter: (filter) => set({ activeFilter: filter }),
}));
