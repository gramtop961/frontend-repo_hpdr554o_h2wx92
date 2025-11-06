import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded hover:bg-neutral-100"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a href="#" className="flex items-center font-semibold text-xl tracking-tight">
              <span className="text-neutral-900">Chrono</span>
              <span className="text-emerald-600">24</span>
            </a>
          </div>

          <div className="hidden md:flex items-center flex-1 mx-6">
            <input
              type="text"
              placeholder="Search for watches, brands, references..."
              className="w-full rounded-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-emerald-600">Buy</a>
            <a href="#" className="hover:text-emerald-600">Sell</a>
            <a href="#" className="hover:text-emerald-600">Magazine</a>
            <a href="#" className="hover:text-emerald-600">Support</a>
            <button className="rounded-full border border-neutral-300 px-3 py-1 hover:border-emerald-500 hover:text-emerald-600">Log in</button>
          </nav>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search watches..."
                className="w-full rounded-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="py-2 px-2 rounded hover:bg-neutral-100">Buy</a>
              <a href="#" className="py-2 px-2 rounded hover:bg-neutral-100">Sell</a>
              <a href="#" className="py-2 px-2 rounded hover:bg-neutral-100">Magazine</a>
              <a href="#" className="py-2 px-2 rounded hover:bg-neutral-100">Support</a>
              <button className="mt-2 rounded-full border border-neutral-300 px-3 py-2 hover:border-emerald-500 hover:text-emerald-600 w-fit">Log in</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
