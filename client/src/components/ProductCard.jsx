import { Heart, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <button
            aria-label="Add to wishlist"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow-sm backdrop-blur transition hover:text-orange-600"
          >
            <Heart size={18} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-orange-600">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-stone-900 hover:text-orange-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-stone-500">
          by {product.artisan}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-stone-900">
              Rs. {product.price.toLocaleString()}
            </p>

            <div className="mt-1 flex items-center gap-1 text-sm text-stone-500">
              <Star
                size={14}
                className="fill-amber-400 text-amber-400"
              />
              {product.rating}
            </div>
          </div>

          <button
            aria-label="Add to cart"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 text-white transition hover:bg-orange-700"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

    </article>
  );
}

export default ProductCard;