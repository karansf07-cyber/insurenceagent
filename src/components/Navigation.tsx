import { Shield } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Insurance Products' },
    { id: 'claims', label: 'Claims Guide' },
    { id: 'support', label: 'Support & Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Insurance Plus
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex gap-2">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-2 py-1 text-xs rounded transition-all ${
                  currentPage === item.id
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
