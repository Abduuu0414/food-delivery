"use client"

import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { popularStores } from "../../data/stores"

function RestaurantPage() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("popular")

  // Find the restaurant by id
  const restaurant = popularStores.find((store) => store.id === id)

  if (!restaurant) {
    return <div className="container mx-auto px-4 py-8">Restaurant not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <i className="fas fa-chevron-left"></i>
            </Link>
            <h1 className="text-xl font-bold">{restaurant.name}</h1>
          </div>
        </div>
      </header>

      {/* Restaurant Banner */}
      <div className="h-48 sm:h-64 relative">
        <img
          src={restaurant.image || "/placeholder.svg?height=400&width=600"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow-sm hover:bg-gray-100 flex items-center justify-center">
          <i className="fas fa-heart"></i>
        </button>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{restaurant.name}</h1>
              <p className="text-gray-500">{restaurant.category}</p>
              <div className="flex items-center mt-2 text-sm">
                {restaurant.rating && (
                  <div className="flex items-center mr-4">
                    <i className="fas fa-star text-[#FFC244] mr-1"></i>
                    <span>{restaurant.rating}</span>
                  </div>
                )}
                <div className="flex items-center mr-4">
                  <i className="fas fa-clock text-gray-500 mr-1"></i>
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shopping-bag text-gray-500 mr-1"></i>
                  <span>{restaurant.deliveryFee || "Free delivery"}</span>
                </div>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
              <i className="fas fa-info"></i>
            </button>
          </div>

          {/* Search */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search in this restaurant"
              className="w-full pl-10 py-2 rounded-md border border-gray-200"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Menu Tabs */}
      <div className="bg-white border-b overflow-x-auto">
        <div className="container mx-auto">
          <div className="flex">
            <button
              className={`px-4 py-3 font-medium ${activeTab === "popular" ? "text-black border-b-2 border-[#FFC244]" : "text-gray-500"}`}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
            <button
              className={`px-4 py-3 font-medium ${activeTab === "deals" ? "text-black border-b-2 border-[#FFC244]" : "text-gray-500"}`}
              onClick={() => setActiveTab("deals")}
            >
              Deals
            </button>
            {restaurant.menu?.map((category) => (
              <button
                key={category.category}
                className={`px-4 py-3 font-medium ${activeTab === category.category.toLowerCase() ? "text-black border-b-2 border-[#FFC244]" : "text-gray-500"}`}
                onClick={() => setActiveTab(category.category.toLowerCase())}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-6">
        {activeTab === "popular" && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Most Popular</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {restaurant.menu?.[0].items.slice(0, 4).map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 flex shadow-sm">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                    <p className="font-medium">{item.price}</p>
                  </div>
                  <div className="ml-4 relative">
                    <div className="w-24 h-24 rounded overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg?height=200&width=200"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#FFC244] hover:bg-[#ffcf65] text-black shadow-md flex items-center justify-center">
                      <i className="fas fa-plus text-xs"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "deals" && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Special Deals</h2>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-lg mb-2">Bundle Deals</h3>
              <p className="text-sm text-gray-500 mb-4">Save up to 30% with these special offers</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 flex">
                  <div className="flex-1">
                    <h4 className="font-medium">Family Bundle</h4>
                    <p className="text-sm text-gray-500 mb-2">4 main dishes + 2 sides + 2 drinks</p>
                    <p className="font-medium">$39.99</p>
                    <p className="text-sm text-green-600">Save $12.50</p>
                  </div>
                  <div className="ml-4 relative">
                    <div className="w-24 h-24 rounded overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Family Bundle"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#FFC244] hover:bg-[#ffcf65] text-black shadow-md flex items-center justify-center">
                      <i className="fas fa-plus text-xs"></i>
                    </button>
                  </div>
                </div>
                <div className="border rounded-lg p-4 flex">
                  <div className="flex-1">
                    <h4 className="font-medium">Lunch Special</h4>
                    <p className="text-sm text-gray-500 mb-2">1 main dish + 1 side + 1 drink</p>
                    <p className="font-medium">$12.99</p>
                    <p className="text-sm text-green-600">Save $4.50</p>
                  </div>
                  <div className="ml-4 relative">
                    <div className="w-24 h-24 rounded overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt="Lunch Special"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#FFC244] hover:bg-[#ffcf65] text-black shadow-md flex items-center justify-center">
                      <i className="fas fa-plus text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {restaurant.menu?.map(
          (category) =>
            activeTab === category.category.toLowerCase() && (
              <div key={category.category} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg p-4 flex shadow-sm">
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                        <p className="font-medium">{item.price}</p>
                      </div>
                      <div className="ml-4 relative">
                        <div className="w-24 h-24 rounded overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg?height=200&width=200"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#FFC244] hover:bg-[#ffcf65] text-black shadow-md flex items-center justify-center">
                          <i className="fas fa-plus text-xs"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>

      {/* Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="container mx-auto">
          <button className="w-full bg-[#FFC244] hover:bg-[#ffcf65] text-black font-bold py-3 rounded">
            View Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantPage

