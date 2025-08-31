"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "EasySeerah Children's Book Set",
    price: "$29.99",
    image: "📚",
    category: "Books",
    description: "Complete 3-book series covering Makkah, Medina, and Legacy periods",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Prophet's Journey Board Game",
    price: "$39.99",
    image: "🎲",
    category: "Games",
    description: "Educational board game for the whole family",
    badge: "New"
  },
  {
    id: 3,
    name: "Seerah Timeline Poster",
    price: "$14.99",
    image: "🗺️",
    category: "Posters",
    description: "Beautiful illustrated timeline poster (24x36 inches)",
    badge: null
  },
  {
    id: 4,
    name: "99 Names of Allah Flashcards",
    price: "$19.99",
    image: "🎴",
    category: "Learning",
    description: "Premium flashcards with meanings and benefits",
    badge: null
  },
  {
    id: 5,
    name: "EasySeerah T-Shirt",
    price: "$24.99",
    image: "👕",
    category: "Apparel",
    description: "Comfortable cotton t-shirt with inspirational quote",
    badge: null
  },
  {
    id: 6,
    name: "Prayer Mat for Kids",
    price: "$34.99",
    image: "🕌",
    category: "Prayer",
    description: "Colorful educational prayer mat with positions guide",
    badge: "Popular"
  },
  {
    id: 7,
    name: "Ramadan Activity Book",
    price: "$12.99",
    image: "📖",
    category: "Books",
    description: "30 days of activities and lessons for Ramadan",
    badge: null
  },
  {
    id: 8,
    name: "Islamic Calligraphy Set",
    price: "$44.99",
    image: "✒️",
    category: "Art",
    description: "Complete set with pens, ink, and practice sheets",
    badge: null
  },
  {
    id: 9,
    name: "Prophets Stories Audio Collection",
    price: "$29.99",
    image: "🎧",
    category: "Audio",
    description: "25 stories of the Prophets in engaging audio format",
    badge: "Digital"
  },
  {
    id: 10,
    name: "EasySeerah Notebook Set",
    price: "$16.99",
    image: "📓",
    category: "Stationery",
    description: "Set of 3 notebooks with Islamic patterns",
    badge: null
  },
  {
    id: 11,
    name: "Mosque Building Blocks",
    price: "$49.99",
    image: "🧱",
    category: "Toys",
    description: "Build famous mosques with 500+ pieces",
    badge: "Educational"
  },
  {
    id: 12,
    name: "Daily Dua Cards",
    price: "$14.99",
    image: "📿",
    category: "Learning",
    description: "50 essential duas for daily life",
    badge: null
  }
];

const categories = ["All", "Books", "Games", "Learning", "Apparel", "Prayer", "Art", "Audio", "Toys", "Stationery", "Posters"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            EasySeerah Shop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational resources and merchandise to enhance your learning journey
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">🎉 Special Offer!</h3>
              <p>Get 20% off on all books with code: LEARN2024</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Shop Now →
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-t-xl flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-emerald-600">{product.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product.id);
                    }}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-sm text-gray-600">On orders over $50</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-gray-600">All products are carefully selected</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="font-semibold text-gray-900 mb-2">Gift Wrapping</h3>
            <p className="text-sm text-gray-600">Available on all items</p>
          </div>
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                  <span className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
                    {selectedProduct.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-center h-48 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg mb-6">
                <span className="text-8xl">{selectedProduct.image}</span>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-emerald-600">{selectedProduct.price}</span>
                <div className="space-x-3">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-emerald-600 text-white p-4 rounded-full shadow-lg">
            <div className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}