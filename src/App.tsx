import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import ClaimsGuide from './pages/ClaimsGuide';
import Support from './pages/Support';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'claims':
        return <ClaimsGuide />;
      case 'support':
        return <Support />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
}
