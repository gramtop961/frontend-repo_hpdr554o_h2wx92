import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryScroller from './components/CategoryScroller';
import Featured from './components/Featured';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xl font-semibold"><span className="text-neutral-900">Chrono</span><span className="text-emerald-600">24</span></div>
            <p className="text-sm text-neutral-600 mt-1">The world’s leading marketplace for luxury watches.</p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-neutral-900">Marketplace</div>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">Buy a watch</a>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">Sell a watch</a>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">How it works</a>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-neutral-900">Company</div>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">About</a>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">Careers</a>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">Press</a>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-neutral-900">Support</div>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">Help center</a>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">Contact</a>
              <a href="#" className="block text-neutral-600 hover:text-emerald-600">Buyer protection</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Chrono24 clone. For demo purposes only.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <CategoryScroller />
      <Featured />
      <Footer />
    </div>
  );
}
