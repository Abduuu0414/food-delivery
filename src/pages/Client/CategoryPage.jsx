"use client"

import { Link, useParams } from "react-router-dom"
import { categories, popularStores } from "../../data/stores"

function CategoryPage() {
  const { id } = useParams()

  // Find the category by id
  const category = categories.find((cat) => cat.id === id)

  // Filter stores by category
  const filteredStores = popularStores.filter((store) => store.category.toLowerCase() === category?.name.toLowerCase())

  if (!category) {
    return <div className="container mx-auto px-4 py-8">Category not found</div>
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
            <h1 className="text-xl font-bold">{category.name}</h1>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder={`Search in ${category.name}`}
                className="w-full pl-10 py-2 rounded-md border border-gray-200"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-md flex items-center">
              <i className="fas fa-filter mr-2"></i>
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Store List */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">
          {filteredStores.length} {filteredStores.length === 1 ? "Store" : "Stores"}
        </h2>

        {filteredStores.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No {category.name} stores found in your area.</p>
            <Link to="/" className="bg-[#FFC244] hover:bg-[#ffcf65] text-black px-4 py-2 rounded">
              Explore other categories
            </Link>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 border-t mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Glovo</h3>
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
            <p>© {new Date().getFullYear()} Glovo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CategoryPage

