function Home() {
  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Authentic. Local. Handmade.
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
            Bringing
            <span className="text-orange-600"> Artisans </span>
            Closer to the World.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            Discover authentic handmade products, meet the people behind them,
            and support local craftsmanship through every purchase.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/shop"
              className="rounded-full bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700"
            >
              Explore Products
            </a>

            <button className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-orange-300 hover:text-orange-600"
            >
              Meet Our Artisans
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;