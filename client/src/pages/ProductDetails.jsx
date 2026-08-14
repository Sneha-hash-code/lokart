import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fcfaf7]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-900">
            Product not found
          </h1>

          <a
            href="/shop"
            className="mt-5 inline-block text-sm font-semibold text-orange-600"
          >
            ← Back to Shop
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl bg-stone-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-162.5 w-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-3 text-stone-500">
              Handcrafted by{" "}
              <span className="font-medium text-stone-800">
                {product.artisan}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
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
                • 24 reviews
              </span>
            </div>

            {/* Price */}
            <p className="mt-7 text-3xl font-bold text-stone-900">
              Rs. {product.price.toLocaleString()}
            </p>

            <div className="my-8 h-px bg-stone-200" />

            {/* Story */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                The Story Behind The Product
              </p>

              <p className="mt-3 leading-7 text-stone-600">
                Every LokArt product carries a story. This piece is carefully
                handcrafted using traditional techniques passed down through
                generations. By purchasing it, you're supporting the artisan
                and helping preserve local craftsmanship.
              </p>
            </div>

            {/* Artisan */}
            <div className="mt-7 rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-sm text-stone-500">
                Crafted by
              </p>

              <div className="mt-2 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-stone-900">
                    {product.artisan}
                  </h3>

                  <p className="mt-1 text-sm text-stone-500">
                    Local artisan • Nepal
                  </p>
                </div>

                <button className="text-sm font-semibold text-orange-600 hover:text-orange-700">
                  Meet Artisan →
                </button>
              </div>
            </div>

            {/* Quantity + Actions */}
            <div className="mt-8 flex flex-wrap gap-4">

              <div className="flex items-center rounded-full border border-stone-300 bg-white">
                <button
                  onClick={() =>
                    setQuantity((value) => Math.max(1, value - 1))
                  }
                  className="p-3 text-stone-600 hover:text-orange-600"
                >
                  <Minus size={17} />
                </button>

                <span className="w-8 text-center font-medium">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((value) => value + 1)}
                  className="p-3 text-stone-600 hover:text-orange-600"
                >
                  <Plus size={17} />
                </button>
              </div>

              <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-700">
                <ShoppingBag size={19} />
                Add to Cart
              </button>

              <button
                aria-label="Add to wishlist"
                className="rounded-full border border-stone-300 bg-white p-3.5 text-stone-600 transition hover:border-orange-300 hover:text-orange-600"
              >
                <Heart size={20} />
              </button>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;