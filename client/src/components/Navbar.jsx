import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-xl">
            ✿
          </div>

          <span className="text-2xl font-bold tracking-tight text-stone-900">
            Lok<span className="text-orange-600">Art</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-orange-600 transition hover:text-orange-700"
          >
            Home
          </a>

          <a
            href="/shop"
            className="text-sm font-medium text-stone-600 transition hover:text-orange-600"
          >
            Shop
          </a>

          <a
            href="/artisans"
            className="text-sm font-medium text-stone-600 transition hover:text-orange-600"
          >
            Artisans
          </a>

          <a
            href="/stories"
            className="text-sm font-medium text-stone-600 transition hover:text-orange-600"
          >
            Stories
          </a>

          <a
            href="/impact"
            className="text-sm font-medium text-stone-600 transition hover:text-orange-600"
          >
            Impact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button
            aria-label="Search"
            className="hidden rounded-full p-2 text-stone-600 transition hover:bg-orange-50 hover:text-orange-600 sm:block"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          {/* Wishlist */}
          <button
            aria-label="Wishlist"
            className="hidden rounded-full p-2 text-stone-600 transition hover:bg-orange-50 hover:text-orange-600 sm:block"
          >
            <Heart size={20} strokeWidth={1.8} />
          </button>

          {/* Cart */}
          <button
            aria-label="Shopping bag"
            className="relative rounded-full p-2 text-stone-600 transition hover:bg-orange-50 hover:text-orange-600"
          >
            <ShoppingBag size={21} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          {/* User */}
          <button
            aria-label="Account"
            className="rounded-full border border-stone-200 p-2 text-stone-600 transition hover:border-orange-300 hover:text-orange-600"
          >
            <UserRound size={19} strokeWidth={1.8} />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;