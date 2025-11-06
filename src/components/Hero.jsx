export default function Hero() {
  return (
    <section className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Buy & sell luxury watches
            </h1>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg">
              Discover new, pre-owned, and vintage timepieces from verified sellers worldwide. Secure transactions, buyer protection, and global shipping.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#listings" className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-5 py-3 text-sm font-medium hover:bg-emerald-700 transition">
                Explore watches
              </a>
              <a href="#sell" className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium hover:border-emerald-500 hover:text-emerald-600 transition">
                Sell a watch
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <div>Trusted platform</div>
              <div className="h-4 w-px bg-neutral-300" />
              <div>Secure payment</div>
              <div className="h-4 w-px bg-neutral-300" />
              <div>Global shipping</div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-sm bg-white p-4">
              <div className="h-full w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2070&auto=format&fit=crop')] bg-center bg-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
