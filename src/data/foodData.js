// Static array of food item objects (id, name, price, category, etc.)
// This plays the same role as an API response would in a real app.
export const foodItems = [
  {
    id: 1,
    name: "Paneer Tikka Wrap",
    category: "Wraps",
    restaurant: "Wrap It Up",
    price: 149,
    rating: 4.5,
    deliveryTime: "20-25 mins",
    description:
      "Smoky grilled paneer cubes rolled in a soft tortilla with mint chutney and crunchy salad.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
  },
  {
    id: 2,
    name: "Chicken Seekh Roll",
    category: "Wraps",
    restaurant: "Wrap It Up",
    price: 179,
    rating: 4.6,
    deliveryTime: "20-25 mins",
    description:
      "Spiced chicken seekh kebab wrapped with onions and tangy sauces in a warm paratha.",
    image:
      "https://www.greenchickchop.in/cdn/shop/files/ChickenSeekhRoll_result.webp?v=1786363940",
  },
  {
    id: 3,
    name: "Butter Chicken Bowl",
    category: "Curries",
    restaurant: "Spice Route Kitchen",
    price: 259,
    rating: 4.8,
    deliveryTime: "30-35 mins",
    description:
      "Creamy tomato-based butter chicken served over steamed rice, a TastyBite favourite.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500",
  },
  {
    id: 4,
    name: "Dal Makhani Combo",
    category: "Combos",
    restaurant: "Spice Route Kitchen",
    price: 219,
    rating: 4.5,
    deliveryTime: "30-35 mins",
    description:
      "Slow-cooked black lentils in a buttery gravy, served with jeera rice and papad.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500",
  },
  {
    id: 5,
    name: "Margherita Pizza",
    category: "Pizza",
    restaurant: "Urban Crust Pizzeria",
    price: 279,
    rating: 4.4,
    deliveryTime: "25-30 mins",
    description:
      "Classic wood-fired pizza with mozzarella, fresh basil and a tangy tomato base.",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500",
  },
  {
    id: 6,
    name: "Farmhouse Pizza",
    category: "Pizza",
    restaurant: "Urban Crust Pizzeria",
    price: 319,
    rating: 4.5,
    deliveryTime: "25-30 mins",
    description:
      "Loaded with capsicum, onion, mushroom and sweet corn on a crispy thin crust.",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500",
  },
  {
    id: 7,
    name: "Classic Cheese Burger",
    category: "Combos",
    restaurant: "Grill & Bun Co.",
    price: 199,
    rating: 4.3,
    deliveryTime: "20-25 mins",
    description:
      "Juicy grilled patty, melted cheddar and house sauce stacked in a toasted bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 8,
    name: "Peri Peri Fries Combo",
    category: "Combos",
    restaurant: "Grill & Bun Co.",
    price: 159,
    rating: 4.2,
    deliveryTime: "15-20 mins",
    description:
      "Crispy fries tossed in peri peri seasoning, served with a cheesy dip.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
  },
  {
    id: 9,
    name: "Veg Hakka Noodles",
    category: "Asian",
    restaurant: "Noodle Bar Express",
    price: 189,
    rating: 4.4,
    deliveryTime: "25-30 mins",
    description:
      "Stir-fried noodles tossed with fresh vegetables and a smoky soy-based sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500",
  },
  {
    id: 10,
    name: "Gulab Jamun Bowl",
    category: "Desserts",
    restaurant: "Sweet Ending Desserts",
    price: 99,
    rating: 4.6,
    deliveryTime: "20-25 mins",
    description:
      "Soft, syrup-soaked milk dumplings served warm — the perfect way to end a meal.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
  },
  {
    id: 11,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    restaurant: "Sweet Ending Desserts",
    price: 149,
    rating: 4.7,
    deliveryTime: "20-25 mins",
    description:
      "A warm chocolate cake with a gooey molten centre, served with vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500",
  },
  {
    id: 12,
    name: "Cold Coffee Frappe",
    category: "Beverages",
    restaurant: "Brew & Bites",
    price: 129,
    rating: 4.3,
    deliveryTime: "15-20 mins",
    description:
      "Chilled, frothy coffee blended with milk and ice — just the pick-me-up you need.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
  },
  {
    id: 13,
    name: "Mango Lassi",
    category: "Beverages",
    restaurant: "Brew & Bites",
    price: 99,
    rating: 4.5,
    deliveryTime: "15-20 mins",
    description:
      "Thick and creamy yogurt-based mango drink, sweet and refreshing.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500",
  },
  {
    id: 14,
    name: "Masala Chaas",
    category: "Beverages",
    restaurant: "Brew & Bites",
    price: 69,
    rating: 4.1,
    deliveryTime: "15-20 mins",
    description:
      "Spiced buttermilk with roasted cumin and curry leaves — light and cooling.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500",
  },
];

// Category list used to build the filter buttons on the Home page
export const categories = [
  "All",
  "Wraps",
  "Curries",
  "Combos",
  "Pizza",
  "Asian",
  "Desserts",
  "Beverages",
];
