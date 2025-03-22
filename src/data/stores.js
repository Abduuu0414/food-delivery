export const categories = [
    {
      id: "restaurants",
      name: "Restaurants",
      icon: "utensils",
    },
    {
      id: "supermarket",
      name: "Supermarket",
      icon: "shopping-bag",
    },
    {
      id: "fast-food",
      name: "Fast Food",
      icon: "pizza-slice",
    },
    {
      id: "coffee",
      name: "Coffee & Tea",
      icon: "coffee",
    },
    {
      id: "groceries",
      name: "Groceries",
      icon: "apple-alt",
    },
    {
      id: "pharmacy",
      name: "Pharmacy",
      icon: "pills",
    },
    {
      id: "gifts",
      name: "Gifts",
      icon: "gift",
    },
    {
      id: "flowers",
      name: "Flowers",
      icon: "flower",
    },
    {
      id: "anything",
      name: "Anything",
      icon: "shopping-cart",
    },
  ]
  
  export const popularStores = [
    {
      id: "mcdonalds",
      name: "McDonald's",
      category: "Fast Food",
      rating: "4.5",
      deliveryTime: "15-25 min",
      deliveryFee: "€1.90",
      discount: "30% OFF",
      image: "/placeholder.svg",
      menu: [
        {
          category: "Burgers",
          items: [
            {
              id: "big-mac",
              name: "Big Mac",
              description:
                "The iconic burger featuring two beef patties, special sauce, lettuce, cheese, pickles, and onions on a sesame seed bun.",
              price: "€5.95",
              image: "/placeholder.svg",
            },
            {
              id: "quarter-pounder",
              name: "Quarter Pounder with Cheese",
              description:
                "A quarter pound of fresh beef with cheese, onions, pickles, and condiments on a sesame seed bun.",
              price: "€6.45",
              image: "/placeholder.svg",
            },
            {
              id: "mcchicken",
              name: "McChicken",
              description: "A crispy chicken patty topped with mayonnaise and shredded lettuce on a toasted bun.",
              price: "€4.95",
              image: "/placeholder.svg",
            },
            {
              id: "double-cheeseburger",
              name: "Double Cheeseburger",
              description: "Two beef patties with onions, pickles, ketchup, mustard, and two slices of cheese.",
              price: "€3.95",
              image: "/placeholder.svg",
            },
          ],
        },
        {
          category: "Sides",
          items: [
            {
              id: "fries",
              name: "French Fries",
              description: "Golden, crispy french fries seasoned with salt.",
              price: "€2.95",
              image: "/placeholder.svg",
            },
            {
              id: "nuggets",
              name: "Chicken McNuggets (6 pcs)",
              description: "Tender, juicy chicken nuggets made with white meat, wrapped in a crisp tempura batter.",
              price: "€4.95",
              image: "/placeholder.svg",
            },
            {
              id: "salad",
              name: "Side Salad",
              description: "A blend of lettuces garnished with juicy grape tomatoes and shaved carrots.",
              price: "€3.45",
              image: "/placeholder.svg",
            },
          ],
        },
        {
          category: "Desserts",
          items: [
            {
              id: "mcflurry",
              name: "McFlurry with OREO® Cookies",
              description: "Creamy vanilla soft serve with OREO® cookie pieces mixed throughout.",
              price: "€3.95",
              image: "/placeholder.svg",
            },
            {
              id: "apple-pie",
              name: "Baked Apple Pie",
              description: "A crispy pastry filled with apple slices and cinnamon.",
              price: "€2.45",
              image: "/placeholder.svg",
            },
          ],
        },
      ],
    },
    {
      id: "carrefour",
      name: "Carrefour",
      category: "Supermarket",
      rating: "4.7",
      deliveryTime: "25-40 min",
      deliveryFee: "€2.90",
      image: "/placeholder.svg",
      menu: [
        {
          category: "Fruits",
          items: [
            {
              id: "bananas",
              name: "Bananas (1kg)",
              description: "Fresh bananas, perfect for snacking or smoothies.",
              price: "€1.99",
              image: "/placeholder.svg",
            },
            {
              id: "apples",
              name: "Red Apples (1kg)",
              description: "Crisp and sweet red apples.",
              price: "€2.49",
              image: "/placeholder.svg",
            },
            {
              id: "oranges",
              name: "Oranges (1kg)",
              description: "Juicy oranges, rich in vitamin C.",
              price: "€2.99",
              image: "/placeholder.svg",
            },
          ],
        },
        {
          category: "Dairy",
          items: [
            {
              id: "milk",
              name: "Semi-skimmed Milk (1L)",
              description: "Fresh semi-skimmed milk.",
              price: "€1.29",
              image: "/placeholder.svg",
            },
            {
              id: "cheese",
              name: "Cheddar Cheese (200g)",
              description: "Mature cheddar cheese, perfect for sandwiches.",
              price: "€2.79",
              image: "/placeholder.svg",
            },
            {
              id: "yogurt",
              name: "Greek Yogurt (500g)",
              description: "Creamy Greek yogurt, plain flavor.",
              price: "€2.49",
              image: "/placeholder.svg",
            },
          ],
        },
      ],
    },
    {
      id: "starbucks",
      name: "Starbucks",
      category: "Coffee",
      rating: "4.6",
      deliveryTime: "15-25 min",
      deliveryFee: "€1.90",
      image: "/placeholder.svg",
      menu: [
        {
          category: "Hot Coffee",
          items: [
            {
              id: "latte",
              name: "Caffè Latte",
              description: "Rich, full-bodied espresso with bittersweet milk and steamed milk foam.",
              price: "€3.95",
              image: "/placeholder.svg",
            },
            {
              id: "cappuccino",
              name: "Cappuccino",
              description: "Espresso with steamed milk, topped with a deep layer of foam.",
              price: "€3.95",
              image: "/placeholder.svg",
            },
            {
              id: "americano",
              name: "Americano",
              description: "Espresso shots topped with hot water to produce a light layer of crema.",
              price: "€3.45",
              image: "/placeholder.svg",
            },
          ],
        },
        {
          category: "Cold Coffee",
          items: [
            {
              id: "iced-latte",
              name: "Iced Caffè Latte",
              description: "Espresso, milk, and ice, creating the perfect balance of creamy and cool.",
              price: "€4.45",
              image: "/placeholder.svg",
            },
            {
              id: "frappuccino",
              name: "Caramel Frappuccino",
              description:
                "Caramel syrup, coffee, milk and ice blended together and topped with whipped cream and caramel sauce.",
              price: "€5.45",
              image: "/placeholder.svg",
            },
          ],
        },
      ],
    },
    {
      id: "sushi-express",
      name: "Sushi Express",
      category: "Restaurants",
      rating: "4.7",
      deliveryTime: "25-40 min",
      deliveryFee: "€2.90",
      discount: "20% OFF",
      image: "/placeholder.svg",
      menu: [
        {
          category: "Sushi Sets",
          items: [
            {
              id: "california-set",
              name: "California Set (12 pcs)",
              description: "California rolls with crab, avocado and cucumber.",
              price: "€12.99",
              image: "/placeholder.svg",
            },
            {
              id: "salmon-set",
              name: "Salmon Lover Set (10 pcs)",
              description: "Assorted salmon sushi including nigiri and rolls.",
              price: "€15.99",
              image: "/placeholder.svg",
            },
          ],
        },
        {
          category: "Sashimi",
          items: [
            {
              id: "salmon-sashimi",
              name: "Salmon Sashimi (6 pcs)",
              description: "Fresh slices of premium salmon.",
              price: "€8.99",
              image: "/placeholder.svg",
            },
            {
              id: "tuna-sashimi",
              name: "Tuna Sashimi (6 pcs)",
              description: "Fresh slices of premium tuna.",
              price: "€9.99",
              image: "/placeholder.svg",
            },
          ],
        },
      ],
    },
    {
      id: "pharmacy-direct",
      name: "Pharmacy Direct",
      category: "Pharmacy",
      rating: "4.8",
      deliveryTime: "30-45 min",
      deliveryFee: "€2.50",
      image: "/placeholder.svg",
      menu: [
        {
          category: "Health",
          items: [
            {
              id: "painkillers",
              name: "Paracetamol (500mg, 16 tablets)",
              description: "For relief of mild to moderate pain and fever.",
              price: "€3.99",
              image: "/placeholder.svg",
            },
            {
              id: "cold-medicine",
              name: "Cold & Flu Relief",
              description: "Relieves symptoms of cold and flu including headache, fever and blocked nose.",
              price: "€5.99",
              image: "/placeholder.svg",
            },
          ],
        },
        {
          category: "Personal Care",
          items: [
            {
              id: "toothpaste",
              name: "Toothpaste (100ml)",
              description: "Fluoride toothpaste for cavity protection.",
              price: "€2.99",
              image: "/placeholder.svg",
            },
            {
              id: "shampoo",
              name: "Shampoo (250ml)",
              description: "For normal hair, with natural extracts.",
              price: "€4.49",
              image: "/placeholder.svg",
            },
          ],
        },
      ],
    },
  ]
  
  