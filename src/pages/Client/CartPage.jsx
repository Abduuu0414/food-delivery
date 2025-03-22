import { Link } from "react-router-dom"

// Mock cart data - in a real app this would come from a state management solution
const cartItems = [
  {
    id: "1",
    name: "Big Mac",
    price: "$5.95",
    quantity: 2,
    restaurant: "McDonald's",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "French Fries",
    price: "$2.95",
    quantity: 1,
    restaurant: "McDonald's",
    image: "/placeholder.svg?height=200&width=200",
  },
]

function CartPage() {
  const subtotal = "$14.85"
  const deliveryFee = "$1.90"
  const total = "$16.75"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <i className="fas fa-chevron-left"></i>
            </Link>
            <h1 className="text-xl font-bold">Your Cart</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {cartItems.length > 0 ? (
          <>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="font-semibold mb-2">McDonald's</h2>

              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex py-3">
                    <div className="w-16 h-16 rounded overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="font-medium">{item.price}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                            <i className="fas fa-minus text-xs"></i>
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                            <i className="fas fa-plus text-xs"></i>
                          </button>
                        </div>
                        <button className="w-8 h-8 text-gray-500 hover:text-red-500 flex items-center justify-center">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <hr className="my-3 border-gray-100" />}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="font-semibold mb-3">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>{deliveryFee}</span>
                </div>
                <hr className="my-2 border-gray-100" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{total}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#FFC244] hover:bg-[#ffcf65] text-black font-bold py-3 rounded">
              Proceed to Checkout
            </button>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="fas fa-shopping-bag text-gray-400 text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add items to get started</p>
            <Link to="/">
              <button className="bg-[#FFC244] hover:bg-[#ffcf65] text-black px-4 py-2 rounded">
                Browse Restaurants
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage

