import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
  } = useCart();

  const deliveryFee = cartItems.length > 0 ? 100 : 0;
  const total = cartSubtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#fcfaf7] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <ShoppingBag
              size={32}
              className="text-orange-600"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-stone-900">
            Your cart is empty
          </h1>

          <p className="mt-3 text-stone-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-700"
          >
            Explore Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fcfaf7]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            LokArt
          </p>

          <h1 className="mt-2 text-4xl font-bold text-stone-900">
            Your Cart
          </h1>

          <p className="mt-2 text-stone-500">
            Review your handmade treasures before checkout.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 rounded-2xl border border-stone-200 bg-white p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-xl object-cover"
                />

                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                      {item.category}
                    </p>

                    <h2 className="mt-1 font-semibold text-stone-900">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-sm text-stone-500">
                      by {item.artisan}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center rounded-full border border-stone-200">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        className="p-2 text-stone-500 hover:text-orange-600"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="p-2 text-stone-500 hover:text-orange-600"
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <p className="font-bold text-stone-900">
                      Rs.{" "}
                      {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="self-start rounded-full p-2 text-stone-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-bold text-stone-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal</span>
                <span className="font-medium text-stone-800">
                  Rs. {cartSubtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-stone-500">
                <span>Delivery</span>
                <span className="font-medium text-stone-800">
                  Rs. {deliveryFee.toLocaleString()}
                </span>
              </div>

              <div className="h-px bg-stone-200" />

              <div className="flex justify-between text-base">
                <span className="font-semibold text-stone-900">
                  Total
                </span>

                <span className="font-bold text-stone-900">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
            </div>

            <button className="mt-7 w-full rounded-full bg-orange-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700">
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="mt-3 block text-center text-sm font-medium text-stone-500 transition hover:text-orange-600"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Cart;