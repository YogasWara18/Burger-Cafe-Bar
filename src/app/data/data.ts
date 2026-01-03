export const navs = [
    {
        id: 1,
        name: 'Home',
        target: 'hero',
        active: true,
    },
    {
        id: 2,
        name: 'About',
        target: 'about',
        active: false,
    },
    {
        id: 3,
        name: 'Menu',
        target: 'menu',
        active: false,
    },
    {
        id: 4,
        name: 'Specials',
        target: 'specials',
        active: false,
    },
    {
        id: 5,
        name: 'Events',
        target: 'events',
        active: false,
    },
    {
        id: 6,
        name: 'Chef',
        target: 'chefs',
        active: false,
    },
    {
        id: 7,
        name: 'Gallery',
        target: 'target',
        active: false,
    },
    {
        id: 8,
        name: 'Contact',
        target: 'contact',
        active: false,
    }
]


export const menu = [
  // 🍔 Burgers
  { id: 1, name: "Classic Burger", price: 5.00, preview: "/Menu-burger-1.jpg", ingredients: "Beef, lettuce, tomato", category: "Burgers", description: "Juicy and tasty" },
  { id: 2, name: "Cheese Burger", price: 6.00, preview: "/Menu-burger-2.jpg", ingredients: "Beef, cheese, pickles", category: "Burgers", description: "Cheesy delight" },
  { id: 3, name: "Veggie Burger", price: 5.50, preview: "/Menu-burger-3.jpg", ingredients: "Vegetables, lettuce, sauce", category: "Burgers", description: "Healthy and fresh" },

  // ☕ Cafe
  { id: 4, name: "Espresso", price: 3.00, preview: "/Menu-cafe-4.jpg", ingredients: "Arabica beans", category: "Cafe", description: "Strong and aromatic" },
  { id: 5, name: "Cappuccino", price: 3.50, preview: "/Menu-cafe-5.jpg", ingredients: "Espresso, milk foam", category: "Cafe", description: "Smooth and creamy" },
  { id: 6, name: "Latte", price: 4.00, preview: "/Menu-cafe-6.jpg", ingredients: "Espresso, steamed milk", category: "Cafe", description: "Mild and milky" },

  // 🍸 Bar
  { id: 7, name: "Mojito", price: 7.00, preview: "/Menu-bar-7.jpg", ingredients: "Rum, mint, lime", category: "Bar", description: "Refreshing cocktail" },
  { id: 8, name: "Martini", price: 8.00, preview: "/Menu-bar-8.jpg", ingredients: "Gin, vermouth", category: "Bar", description: "Classic and elegant" },
  { id: 9, name: "Whiskey Sour", price: 7.50, preview: "/Menu-bar-9.jpg", ingredients: "Whiskey, lemon, sugar", category: "Bar", description: "Sweet and sour balance" },

  // 🍕 Specials
  { id: 10, name: "Margherita Pizza", price: 9.00, preview: "/Menu-pizza-10.jpg", ingredients: "Tomato, mozzarella, basil", category: "Specials", description: "Italian classic" },
  { id: 11, name: "Seafood Pasta", price: 12.00, preview: "/Menu-seafood-11.jpg", ingredients: "Shrimp, squid, tomato sauce", category: "Specials", description: "Rich and savory" },
  { id: 12, name: "Grilled Salmon", price: 15.00, preview: "/Menu-salmon-12.jpg", ingredients: "Salmon, lemon, herbs", category: "Specials", description: "Fresh and healthy" },
];


export const filters = [
    {
        id: 1,
        name: 'All',
        category: 'all',
        active: true,
    },
    {
        id: 2,
        name: 'Burgers',
        category: 'Burgers',
        active: false,
    },
    {
        id: 3,
        name: 'Cafe',
        category: 'cafe',
        active: false,
    },
    {
        id: 4,
        name: 'Bar',
        category: 'bar',
        active: false,
    },
];