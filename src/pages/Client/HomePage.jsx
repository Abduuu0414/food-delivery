"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { categories, popularStores } from "../../data/stores"

function HomePage() {
  const [location, setLocation] = useState("Maroc")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#FFC244] py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">Bd&Bnn</div>
            <div className="flex items-center gap-3">
              <button className="flex items-center text-black bg-transparent hover:bg-[#ffcf65] px-3 py-2 rounded-md">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {location}
              </button>
              <Link
                to="/client/dashboard"
                className="text-black bg-transparent hover:bg-[#ffcf65] px-3 py-2 rounded-md"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#FFC244] pb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 text-black">Food delivery and more</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-10 py-4 rounded-lg border-none shadow-md"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">What do you need?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`} className="block group">
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#FFF5DD] rounded-full flex items-center justify-center">
                  <i className={`fas fa-${category.icon} text-[#FFC244] text-xl`}></i>
                </div>
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Stores */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Popular on Bd&Bn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularStores.map((store) => (
            <Link key={store.id} to={`/restaurant/${store.id}`} className="block group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={store.image || "/placeholder.svg?height=400&width=600"}
                    alt={store.name}
                    className="w-full h-full object-cover"
                  />
                  {store.discount && (
                    <div className="absolute top-3 left-3 bg-[#FFC244] text-black px-2 py-1 rounded font-medium text-sm">
                      {store.discount}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{store.name}</h3>
                    {store.rating && (
                      <div className="bg-gray-100 text-black text-sm px-2 py-1 rounded">{store.rating}</div>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{store.category}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    {store.deliveryFee ? (
                      <div className="flex items-center mr-3">
                        <i className="fas fa-shopping-bag mr-1 text-xs"></i>
                        <span>{store.deliveryFee}</span>
                      </div>
                    ) : (
                      <div className="flex items-center mr-3 text-green-600">
                        <i className="fas fa-shopping-bag mr-1 text-xs"></i>
                        <span>Free delivery</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <i className="fas fa-clock mr-1 text-xs"></i>
                      <span>{store.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Download App Banner */}
      <div className="bg-[#FFC244] py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2 text-black">Download the Bd&Bn App</h2>
              <p className="text-black/80 mb-4">Get the full experience on our app</p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-black/80">App Store</button>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-black/80">Google Play</button>
              </div>
            </div>
            <div className="w-64">
              <img src="/placeholder.svg?height=400&width=300" alt="Glovo App" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Bd&Bn</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Useful links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-black">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-500">
            <p>© {new Date().getFullYear()} Bd&Bn</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage

