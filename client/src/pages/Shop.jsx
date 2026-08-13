import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const categories = [
  "All",
  "Textiles",
  "Pottery",
  "Woodcraft",
  "Paper Craft",
];

function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.artisan.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      {/* Header */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Explore LokArt
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Discover something handmade.
          </h1>

          <p className="mt-4 max-w-2xl text-stone-600">
            Explore authentic products crafted by talented local artisans.
            Every purchase supports the hands behind the craft.
          </p>
        </div>
      </section>

      {/* Shop */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        {/* Search + Filter */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-white text-stone-600 ring-1 ring-stone-200 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <div className="flex w-full items-center gap-2 rounded-full bg-white px-4 py-2.5 ring-1 ring-stone-200 lg:w-72">
              <Search size={18} className="text-stone-400" />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
              />
            </div>

            <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-stone-600 ring-1 ring-stone-200 hover:text-orange-600">
              <SlidersHorizontal size={17} />
              <span className="hidden sm:block">Filter</span>
            </button>
          </div>
        </div>

        {/* Product count */}
        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-stone-500">
            Showing{" "}
            <span className="font-semibold text-stone-800">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* Products */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg font-semibold text-stone-800">
              No products found
            </p>

            <p className="mt-2 text-sm text-stone-500">
              Try another search or category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;