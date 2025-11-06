const items = [
  {
    title: 'Rolex Submariner Date',
    price: '$12,450',
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Omega Speedmaster Professional',
    price: '$6,990',
    img: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Patek Philippe Nautilus',
    price: '$89,000',
    img: 'https://images.unsplash.com/photo-1518544801976-3e1883ac5993?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Audemars Piguet Royal Oak',
    price: '$45,200',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Featured() {
  return (
    <section id="listings" className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Featured watches</h2>
          <a href="#" className="text-emerald-600 text-sm hover:underline">See more</a>
        </div>
        <div className="flex flex-wrap gap-6">
          {items.map((item) => (
            <a key={item.title} href="#" className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
              <div className="rounded-lg overflow-hidden bg-white border border-neutral-200 hover:shadow-md transition">
                <div className="aspect-square bg-center bg-cover" style={{ backgroundImage: `url(${item.img})` }} />
                <div className="p-4">
                  <div className="font-medium">{item.title}</div>
                  <div className="mt-1 text-emerald-600 font-semibold">{item.price}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
