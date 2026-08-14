import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  // Product not found
  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fcfaf7] px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-900">
            Product not found
          </h1>

          <p className="mt-3 text-stone-500">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            <ArrowLeft size={17} />
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">

        {/* Back to Shop */}
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-orange-600"
        >
          <ArrowLeft size={17} />
          Back to Shop
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl bg-stone-100">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square h-full w-full object-cover lg:aspect-auto lg:min-h-150"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              {product.category}
            </p>

            {/* Product Name */}
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              {product.name}
            </h1>

            {/* Artisan */}
            <p className="mt-4 text-stone-500">
              Handcrafted by{" "}
              <span className="font-semibold text-stone-800">
                {product.artisan}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={18}
                  className="fill-amber-400 text-amber-400"
                />

                <span className="font-semibold text-stone-800">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-stone-400">
                24 reviews
              </span>
            </div>

            {/* Price */}
            <p className="mt-7 text-3xl font-bold text-stone-900">
              Rs. {product.price.toLocaleString()}
            </p>

            <div className="my-8 h-px bg-stone-200" />

            {/* Product Story */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                The Story Behind The Product
              </p>

              <p className="mt-3 leading-7 text-stone-600">
                Every LokArt product carries a story. This piece is
                carefully handcrafted using traditional techniques
                passed down through generations. By purchasing it,
                you're supporting the artisan and helping preserve
                local craftsmanship.
              </p>
            </div>

            {/* Artisan Card */}
            <div className="mt-7 rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Crafted by
              </p>

              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-stone-900">
                    {product.artisan}
                  </h3>

                  <p className="mt-1 text-sm text-stone-500">
                    Local artisan • Nepal
                  </p>
                </div>

                <button className="whitespace-nowrap text-sm font-semibold text-orange-600 transition hover:text-orange-700">
                  Meet Artisan →
                </button>
              </div>
            </div>

            {/* Quantity + Actions */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Quantity */}
              <div className="flex items-center rounded-full border border-stone-300 bg-white">
                <button
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="p-3 text-stone-600 transition hover:text-orange-600"
                  aria-label="Decrease quantity"
                >
                  <Minus size={17} />
                </button>

                <span className="w-8 text-center font-semibold text-stone-800">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="p-3 text-stone-600 transition hover:text-orange-600"
                  aria-label="Increase quantity"
                >
                  <Plus size={17} />
                </button>
              </div>

              {/* Add to Cart */}
              <button
  onClick={() => addToCart(product, quantity)}
  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700"
>
  <ShoppingBag size={19} />
  Add to Cart
</button>

              {/* Wishlist */}
              <button
                aria-label="Add to wishlist"
                className="rounded-full border border-stone-300 bg-white p-3.5 text-stone-600 transition hover:border-orange-300 hover:text-orange-600"
              >
                <Heart size={20} />
              </button>

            </div>

            {/* Small Trust Information */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone-500">
              <span>✓ Handmade</span>
              <span>✓ Supports local artisans</span>
              <span>✓ Authentic craft</span>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;