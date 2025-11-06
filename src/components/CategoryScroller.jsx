const categories = [
  { name: 'Rolex', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Omega', img: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800&auto=format&fit=crop' },
  { name: 'Patek Philippe', img: 'https://images.unsplash.com/photo-1518544801976-3e1883ac5993?q=80&w=800&auto=format&fit=crop' },
  { name: 'Audemars Piguet', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Cartier', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Breitling', img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=800&auto=format&fit=crop' },
];

export default function CategoryScroller() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Shop by brand</h2>
          <a href="#" className="text-emerald-600 text-sm hover:underline">View all</a>
        </div>
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-4">
            {categories.map((c) => (
              <a key={c.name} href="#" className="min-w-[220px] w-[220px]">
                <div className="rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                  <div className="h-36 bg-center bg-cover" style={{ backgroundImage: `url(${c.img})` }} />
                  <div className="p-3 text-sm font-medium">{c.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
