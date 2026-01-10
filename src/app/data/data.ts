export const navs = [
  {
    id: 1,
    name: "Home",
    target: "hero",
    active: true,
  },
  {
    id: 2,
    name: "About",
    target: "about",
    active: false,
  },
  {
    id: 3,
    name: "Menu",
    target: "menu",
    active: false,
  },
  {
    id: 4,
    name: "Specials",
    target: "specials",
    active: false,
  },
  {
    id: 5,
    name: "Events",
    target: "events",
    active: false,
  },
  {
    id: 6,
    name: "Chef",
    target: "chefs",
    active: false,
  },
  {
    id: 7,
    name: "Gallery",
    target: "target",
    active: false,
  },
  {
    id: 8,
    name: "Contact",
    target: "contact",
    active: false,
  },
];

export const menu = [
  {
    id: 1,
    name: "Double Beef Burger",
    price: 7.5,
    preview: "/Menu-burger-1.jpg",
    ingredients: "Beef, lettuce, tomato",
    category: "Burgers",
    description:
      "A hearty burger with two juicy beef patties, fresh vegetables, and melted cheese.",
    steps: [
      "Season ground beef and shape into two patties.",
      "Grill patties over medium-high heat until cooked through.",
      "Toast sesame seed buns lightly for crunch.",
      "Layer lettuce and tomato slices on the bottom bun.",
      "Place the first patty, top with melted cheddar cheese.",
      "Add the second patty, again topped with cheese.",
      "Finish with the bun crown and serve hot.",
    ],
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 6.0,
    preview: "/Menu-burger-2.jpg",
    ingredients: "Beef, cheese, pickles",
    category: "Burgers",
    description:
      "A crispy breaded chicken patty layered with fresh vegetables and melted cheese in a sesame bun.",
    steps: [
      "Season chicken breast with salt, pepper, and spices.",
      "Coat chicken in seasoned breadcrumbs.",
      "Deep-fry until golden brown and crispy.",
      "Lightly toast sesame seed buns.",
      "Layer lettuce and tomato slices on the bottom bun.",
      "Place crispy chicken patty and top with melted cheese.",
      "Finish with the bun crown and serve hot.",
    ],
  },
  {
    id: 3,
    name: "Veggie Burger",
    price: 5.5,
    preview: "/Menu-burger-3.jpg",
    ingredients: "Vegetables, lettuce, sauce",
    category: "Burgers",
    description:
      "A vibrant plant-based burger stacked with fresh vegetables, beet hummus, and a multigrain sesame bun.",
    steps: [
      "Prepare a thick veggie patty from beans, grains, and vegetables, then pan-sear until golden.",
      "Lightly toast the multigrain sesame bun for aroma and crunch.",
      "Spread beet hummus on the bottom bun for color and flavor.",
      "Layer fresh arugula leaves, sliced red onions, and orange bell pepper.",
      "Add carrot ribbons for sweetness and texture.",
      "Place the hot veggie patty on top of the vegetables.",
      "Crown with the top bun and serve with scattered greens or peas for garnish.",
    ],
  },
  {
    id: 4,
    name: "Espresso",
    price: 3.0,
    preview: "/Menu-cafe-4.jpg",
    ingredients: "Arabica beans",
    category: "Cafe",
    description:
      "A strong and aromatic shot of espresso brewed from finely ground Arabica beans.",
    steps: [
      "Select high-quality Arabica coffee beans.",
      "Grind beans finely to achieve the right texture.",
      "Pack the ground coffee firmly into the portafilter.",
      "Brew under high pressure with hot water for 25–30 seconds.",
      "Serve immediately in a small cup with golden crema on top.",
      "Optionally garnish with cinnamon sticks or coffee beans for aroma.",
    ],
  },
  {
    id: 5,
    name: "Cappuccino",
    price: 3.5,
    preview: "/Menu-cafe-5.jpg",
    ingredients: "Espresso, milk foam",
    category: "Cafe",
    description:
      "A smooth and creamy cappuccino topped with frothy milk foam and a sprinkle of cocoa.",
    steps: [
      "Pull a fresh shot of espresso using finely ground coffee beans.",
      "Steam milk until hot and slightly frothy.",
      "Pour equal parts espresso and steamed milk into a cup.",
      "Top with a thick layer of milk foam.",
      "Sprinkle cocoa or cinnamon powder over the foam for garnish.",
      "Serve with sugar cubes and cinnamon sticks on the side.",
    ],
  },
  {
    id: 6,
    name: "Latte",
    price: 4.0,
    preview: "/Menu-cafe-6.jpg",
    ingredients: "Espresso, steamed milk, milk foam",
    category: "Cafe",
    description:
      "A warm and creamy coffee drink made with espresso and steamed milk, topped with a thin layer of foam.",
    steps: [
      "Pull a fresh shot of espresso using finely ground coffee beans.",
      "Steam milk until hot and slightly frothy.",
      "Pour the steamed milk over the espresso in a cup.",
      "Top with a thin layer of milk foam.",
      "Serve immediately while hot.",
    ],
  },
  {
    id: 7,
    name: "Mojito",
    price: 7.0,
    preview: "/Menu-bar-7.jpg",
    ingredients: "Rum, mint leaves, lime, sugar, soda water, ice",
    category: "Bar",
    description:
      "A refreshing cocktail made with rum, mint, lime, and soda water.",
    steps: [
      "Place fresh mint leaves and lime wedges into a glass.",
      "Add sugar and gently muddle to release flavors.",
      "Fill the glass with crushed ice.",
      "Pour in white rum and stir well.",
      "Top with soda water for a fizzy finish.",
      "Garnish with a lime wheel and a sprig of mint.",
      "Serve chilled on a coaster for presentation.",
    ],
  },
  {
    id: 8,
    name: "Martini",
    price: 8.0,
    preview: "/Menu-bar-8.jpg",
    ingredients: "Gin, dry vermouth, green olives",
    category: "Bar",
    description:
      "A timeless cocktail made with gin and dry vermouth, garnished with green olives.",
    steps: [
      "Fill a mixing glass with ice cubes.",
      "Pour in gin and dry vermouth.",
      "Stir gently until well chilled.",
      "Strain the mixture into a chilled martini glass.",
      "Skewer three green olives on a cocktail pick.",
      "Place the olive garnish across the rim of the glass.",
      "Serve immediately for a crisp and elegant experience.",
    ],
  },
  {
    id: 9,
    name: "Whiskey Sour",
    price: 7.5,
    preview: "/Menu-bar-9.jpg",
    ingredients: "Whiskey, lemon juice, sugar syrup, ice, orange peel",
    category: "Bar",
    description:
      "A classic cocktail with a perfect balance of sweet and sour, garnished with orange peel.",
    steps: [
      "Fill a shaker with ice cubes.",
      "Add whiskey, freshly squeezed lemon juice, and sugar syrup.",
      "Shake vigorously until well chilled.",
      "Strain the mixture into a short patterned glass filled with ice.",
      "Garnish with a curled orange peel skewered on a cocktail pick.",
      "Serve immediately for a refreshing citrus-forward cocktail.",
    ],
  },
  {
    id: 10,
    name: "Margherita Pizza",
    price: 9.0,
    preview: "/Menu-pizza-10.jpg",
    ingredients: "Tomato sauce, mozzarella, basil, pizza dough",
    category: "Specials",
    description:
      "A rustic wood-fired pizza topped with tomato sauce, mozzarella, and fresh basil.",
    steps: [
      "Prepare pizza dough and let it rise until soft and airy.",
      "Roll out the dough into a circular base.",
      "Spread a thin layer of tomato sauce evenly over the dough.",
      "Add dollops of mozzarella or ricotta cheese across the surface.",
      "Place fresh basil leaves on top for aroma and flavor.",
      "Bake in a wood-fired oven until the crust is golden and cheese is melted.",
      "Slice into eight equal pieces and serve hot.",
    ],
  },
  {
    id: 11,
    name: "Seafood Pasta",
    price: 12.0,
    preview: "/Menu-seafood-11.jpg",
    ingredients: "Spaghetti, shrimp, mussels, clams, tomato sauce, herbs",
    category: "Specials",
    description:
      "A rich and savory pasta dish with fresh seafood in tomato-based sauce.",
    steps: [
      "Boil spaghetti until al dente, then drain.",
      "Clean and prepare shrimp, mussels, and clams.",
      "Heat olive oil in a pan and sauté garlic until fragrant.",
      "Add seafood and cook until shrimp turn pink and shellfish open.",
      "Pour in tomato sauce and simmer with fresh herbs like parsley and basil.",
      "Toss the cooked spaghetti into the sauce until evenly coated.",
      "Serve hot on a plate, garnished with extra herbs for freshness.",
    ],
  },
  {
    id: 12,
    name: "Grilled Salmon",
    price: 15.0,
    preview: "/Menu-salmon-12.jpg",
    ingredients: "Salmon fillet, lemon, dill, asparagus, olive oil",
    category: "Specials",
    description:
      "A fresh and healthy grilled salmon fillet served with asparagus and charred lemon.",
    steps: [
      "Season salmon fillet with salt, pepper, olive oil, and fresh dill.",
      "Preheat grill to medium-high heat.",
      "Place salmon skin-side down and grill until cooked through with char marks.",
      "Grill asparagus spears alongside salmon until tender and slightly charred.",
      "Cut lemons in half and grill until caramelized for extra flavor.",
      "Arrange salmon on a platter with asparagus and charred lemon halves.",
      "Serve hot, garnished with fresh dill and paired with white wine.",
    ],
  },
  {
    id: 13,
    name: "Chicken Wings",
    price: 7.0,
    preview: "/Menu-cafe-13.jpg",
    ingredients: "Chicken wings, spicy sauce, herbs",
    category: "Specials",
    description:
      "Crispy chicken wings coated in spicy sauce and garnished with fresh herbs.",
    steps: [
      "Clean and pat dry chicken wings.",
      "Season with salt, pepper, and a touch of garlic powder.",
      "Deep-fry or bake wings until golden brown and crispy.",
      "Prepare spicy sauce with chili, butter, and seasoning.",
      "Toss cooked wings in the sauce until evenly coated.",
      "Arrange wings on a tray lined with parchment paper.",
      "Drizzle extra sauce on top and garnish with chopped herbs.",
      "Serve hot with dipping sauce on the side.",
    ],
  },
  {
    id: 14,
    name: "French Fries",
    price: 3.0,
    preview: "/Menu-cafe-14.jpg",
    ingredients: "Potatoes, oil, salt, parsley, ketchup",
    category: "Specials",
    description:
      "Golden crispy French fries served with ketchup and garnished with fresh parsley.",
    steps: [
      "Peel and cut potatoes into thin strips.",
      "Soak potato strips in cold water to remove excess starch.",
      "Heat oil in a deep fryer or pan.",
      "Fry potatoes until golden brown and crispy.",
      "Drain fries on paper towels to remove excess oil.",
      "Season with salt while still hot.",
      "Serve in a basket lined with parchment paper.",
      "Garnish with parsley and provide ketchup for dipping.",
    ],
  },
  {
    id: 15,
    name: "Onion Rings",
    price: 3.5,
    preview: "/Menu-cafe-15.jpg",
    ingredients: "Onions, flour, breadcrumbs, oil, parsley, ketchup",
    category: "Specials",
    description:
      "Crispy golden onion rings served with ketchup and garnished with fresh parsley.",
    steps: [
      "Slice onions into thick rings and separate them.",
      "Dip onion rings into flour to coat lightly.",
      "Prepare batter with flour, water, and seasoning.",
      "Dip onion rings into the batter, then coat with breadcrumbs.",
      "Heat oil in a deep fryer or pan.",
      "Fry onion rings until golden brown and crispy.",
      "Drain on paper towels to remove excess oil.",
      "Serve hot with ketchup and garnish with parsley.",
    ],
  },
  {
    id: 16,
    name: "Iced Americano",
    price: 3.5,
    preview: "/Menu-cafe-16.jpg",
    ingredients: "Espresso, cold water, ice cubes",
    category: "Cafe",
    description:
      "A refreshing iced version of the classic Americano, made with espresso, cold water, and ice.",
    steps: [
      "Pull a fresh shot of espresso using finely ground coffee beans.",
      "Let the espresso cool slightly to avoid melting the ice too quickly.",
      "Fill a tall glass with ice cubes.",
      "Pour the espresso over the ice.",
      "Add cold water to dilute the espresso to desired strength.",
      "Stir gently and serve immediately with a straw.",
    ],
  },
  {
    id: 17,
    name: "Mocha",
    price: 4.5,
    preview: "/Menu-cafe-17.jpg",
    ingredients: "Espresso, chocolate syrup, milk, ice cubes, whipped cream",
    category: "Cafe",
    description:
      "A chilled coffee drink blending espresso, chocolate, and milk over ice, topped with whipped cream.",
    steps: [
      "Pull a fresh shot of espresso.",
      "Mix espresso with chocolate syrup until well combined.",
      "Add cold milk to balance the flavors.",
      "Fill a tall glass with ice cubes.",
      "Pour the mocha mixture over the ice.",
      "Top with whipped cream for extra indulgence.",
      "Serve immediately with a straw.",
    ],
  },
  {
    id: 18,
    name: "Pina Colada",
    price: 8.0,
    preview: "/Menu-bar-18.jpg",
    ingredients:
      "White rum, coconut cream, pineapple juice, ice, pineapple slice",
    category: "Bar",
    description:
      "A tropical cocktail blending rum, coconut cream, and pineapple juice, served chilled with garnish.",
    steps: [
      "Fill a blender with ice cubes.",
      "Add white rum, coconut cream, and pineapple juice.",
      "Blend until smooth and creamy.",
      "Pour the mixture into a chilled glass.",
      "Garnish with a pineapple slice or wedge.",
      "Optionally add a cocktail umbrella for presentation.",
      "Serve immediately for a refreshing tropical experience.",
    ],
  },
  {
    id: 19,
    name: "Tequila Sunrise",
    price: 7.5,
    preview: "/Menu-bar-19.jpg",
    ingredients: "Tequila, orange juice, grenadine, ice, orange slice, cherry",
    category: "Bar",
    description:
      "A vibrant cocktail with layers of tequila, orange juice, and grenadine, resembling a sunrise.",
    steps: [
      "Fill a tall glass with ice cubes.",
      "Pour tequila over the ice.",
      "Add fresh orange juice and stir gently.",
      "Slowly pour grenadine down the side of the glass to create a layered effect.",
      "Garnish with an orange slice and a cherry on top.",
      "Serve immediately to showcase the sunrise gradient.",
    ],
  },
  {
    id: 20,
    name: "Caesar Salad",
    price: 6.5,
    preview: "/Menu-salad-20.jpg",
    ingredients:
      "Romaine lettuce, croutons, parmesan cheese, Caesar dressing, chicken",
    category: "Specials",
    description:
      "A fresh and crunchy salad with romaine lettuce, parmesan, croutons, and creamy Caesar dressing.",
    steps: [
      "Wash and chop romaine lettuce into bite-sized pieces.",
      "Prepare crunchy croutons by toasting bread cubes with olive oil and garlic.",
      "Grate fresh parmesan cheese.",
      "Mix lettuce, croutons, and parmesan in a large bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Optionally add grilled chicken slices for extra protein.",
      "Serve chilled on a plate, garnished with extra parmesan.",
    ],
  },
  {
    id: 21,
    name: "BBQ Ribs",
    price: 14.0,
    preview: "/Menu-ribs-21.jpg",
    ingredients: "Pork ribs, BBQ sauce, seasoning, herbs",
    category: "Specials",
    description:
      "Tender and juicy pork ribs coated in smoky BBQ sauce, grilled to perfection.",
    steps: [
      "Clean and prepare pork ribs, removing excess fat.",
      "Season ribs with salt, pepper, and garlic powder.",
      "Preheat grill or oven to medium heat.",
      "Slow-cook ribs until tender, basting with BBQ sauce regularly.",
      "Grill or bake ribs until caramelized and smoky.",
      "Arrange ribs on a tray and drizzle with extra BBQ sauce.",
      "Garnish with fresh herbs for presentation.",
      "Serve hot with dipping sauce or sides.",
    ],
  },
  {
    id: 22,
    name: "Tiramisu",
    price: 5.5,
    preview: "/Menu-tiramisu-22.jpg",
    ingredients: "Ladyfingers, espresso, mascarpone, eggs, sugar, cocoa powder",
    category: "Dessert",
    description:
      "A classic Italian dessert made with layers of coffee-soaked ladyfingers and creamy mascarpone, dusted with cocoa powder.",
    steps: [
      "Brew strong espresso and let it cool.",
      "Whisk egg yolks with sugar until pale and creamy.",
      "Fold mascarpone into the egg mixture until smooth.",
      "Dip ladyfingers briefly into espresso and arrange them in a dish.",
      "Spread a layer of mascarpone cream over the ladyfingers.",
      "Repeat layers until the dish is filled.",
      "Dust the top generously with cocoa powder.",
      "Chill in the refrigerator for several hours before serving.",
    ],
  },
  {
    id: 23,
    name: "Spicy Jalapeno Burger",
    price: 6.5,
    preview: "/Menu-burger-23.jpg",
    ingredients:
      "Beef patty, jalapeños, cheddar cheese, lettuce, tomato, spicy sauce, burger bun",
    category: "Burgers",
    description:
      "A fiery burger featuring juicy beef patty, melted cheddar, fresh veggies, and spicy jalapeños.",
    steps: [
      "Season beef patty with salt, pepper, and garlic powder.",
      "Grill or pan-sear the patty until cooked to desired doneness.",
      "Slice fresh jalapeños and sauté lightly for extra flavor.",
      "Toast burger buns until golden.",
      "Spread spicy sauce on the bottom bun.",
      "Layer lettuce, tomato, and the grilled beef patty.",
      "Top with cheddar cheese and jalapeños.",
      "Close with the top bun and serve hot.",
    ],
  },
  {
    id: 24,
    name: "Bacon Burger",
    price: 6.5,
    preview: "/Menu-burger-24.jpg",
    ingredients:
      "Beef patty, crispy bacon, cheddar cheese, lettuce, tomato, burger bun, sauce",
    category: "Burgers",
    description:
      "A hearty burger stacked with juicy beef patty, crispy bacon, melted cheddar, and fresh veggies.",
    steps: [
      "Season beef patty with salt and pepper.",
      "Grill or pan-sear the patty until cooked to desired doneness.",
      "Cook bacon strips until crispy.",
      "Toast burger buns lightly until golden.",
      "Spread sauce on the bottom bun.",
      "Layer lettuce, tomato, and the grilled beef patty.",
      "Top with melted cheddar cheese and crispy bacon.",
      "Close with the top bun and serve hot.",
    ],
  },
];

export const filters = [
  {
    id: 1,
    name: "All",
    category: "all",
    active: true,
  },
  {
    id: 2,
    name: "Burgers",
    category: "Burgers",
    active: false,
  },
  {
    id: 3,
    name: "Cafe",
    category: "Cafe",
    active: false,
  },
  {
    id: 4,
    name: "Bar",
    category: "Bar",
    active: false,
  },
  {
    id: 5,
    name: "Specials",
    category: "Specials",
    active: false,
  },
];

export const specials = [
  {
    id: 1,
    image: "./Menu-specials-1.png",
    title: "Golden Seared Salmon Symphony",
    subtitle: "A Harmony of Freshness, Color, and Flavor",
    content:
      "This dish showcases a perfectly seared salmon fillet with crisp, golden skin and delicate scoring that enhances both texture and presentation. Surrounding the fish are vibrant accents: juicy cherry tomatoes, charred lime slices, and fragrant sprigs of dill. A smooth yellow cream base ties the elements together, while a drizzle of balsamic reduction adds depth and contrast. The composition balances elegance and flavor, transforming a simple salmon fillet into a refined culinary masterpiece.",
    active: true,
  },
  {
    id: 2,
    image: "./Menu-specials-2.png",
    title: "Seared Salmon with Garden Harmony",
    subtitle: "A Celebration of Color, Texture, and Taste",
    content:
      "This gourmet plate features a beautifully seared salmon fillet with crisp skin, delicately garnished with fresh chives. Surrounding the salmon is a vibrant medley of seasonal vegetables baby carrots, asparagus spears, zucchini slices, and golden potato wedges each adding its own texture and flavor. A smooth yellow cream sauce is artfully spread across the plate, while a refreshing salad topped with green onions provides balance and contrast. Presented on a dark plate, the vivid colors and refined arrangement highlight the artistry of modern culinary design.",
    active: false,
  },
  {
    id: 3,
    image: "./Menu-specials-3.png",
    title: "Rustic Pepperoni & Basil Pizza",
    subtitle: "A Classic Reinvented with Fresh Vibrance",
    content:
      "This freshly baked pizza is sliced into eight generous portions, topped with savory pepperoni, juicy cherry tomatoes, and fragrant basil leaves. Melted cheese and rich tomato sauce create a comforting base, while the surrounding ingredients—whole tomatoes, purple heirloom slices, herbs, and spices emphasize the freshness and authenticity of the dish. Presented against a dark backdrop, the vibrant colors and rustic arrangement highlight both tradition and artistry, making this pizza a feast for the eyes as well as the palate.",
    active: false,
  },
  {
    id: 4,
    image: "./Menu-specials-4.png",
    title: "Herb Infused Steak Medley",
    subtitle: "A Fusion of Bold Flavors and Elegant Presentation",
    content:
      "This refined plate features tender slices of medium rare steak arranged in a graceful fan like display. Complementing the meat are vibrant accompaniments: roasted baby potatoes, cherry tomatoes in red and yellow hues, crisp red onion slices, and fragrant herbs such as rosemary and thyme. Microgreens and dark berries add freshness and a touch of sophistication, while the dark plate backdrop enhances the vivid colors and textures. The composition balances rustic heartiness with modern artistry, creating a dish that delights both the eye and the palate.",
    active: false,
  },
  {
    id: 5,
    image: "./Menu-specials-5.png",
    title: "Double Crispy Chicken Cheeseburger",
    subtitle: "Layers of Crunch, Melt, and Freshness",
    content:
      "This towering burger features two golden, crispy fried chicken patties stacked between a sesame seed bun. Melted cheddar cheese oozes luxuriously over the layers, creating a rich and indulgent appeal. Fresh green leaf lettuce and ripe tomato slices add balance and brightness, while the dramatic melt of the cheese highlights the irresistible, mouthwatering presentation. Bold, vibrant, and unapologetically indulgent, this burger is crafted to satisfy both the eyes and the appetite.",
    active: false,
  },
];

export const specialsFilters = [
  {
    id: 1,
    name: "Golden Seared Salmon Symphony",
    active: true,
  },
  {
    id: 2,
    name: "Seared Salmon with Garden Harmony",
    active: false,
  },
  {
    id: 3,
    name: "Rustic Pepperoni & Basil Pizza",
    active: false,
  },
  {
    id: 4,
    name: "Herb Infused Steak Medley",
    active: false,
  },
  {
    id: 5,
    name: "Double Crispy Chicken Cheeseburger",
    active: false,
  },
];

export const events = [
  {
    id: 1,
    image: "./Event-1.jpg",
    title: "Burgers Party",
    price: 550,
    content: `Classic cheeseburger with beef patty, cheddar cheese, lettuce, tomato, and red onion.`,
    details: [
      "Served on a soft sesame seed bun",
      "Fresh toppings: cucumber, cherry tomatoes, chives, sweet corn",
      "Condiments: ketchup, mustard, coarse sea salt",
    ],
    summary: `A special burger party menu combining fresh ingredients with authentic flavor.`,
  },
  {
    id: 2,
    image: "./Event-2.jpg",
    title: "Late Night Lounge Bash",
    price: 850,
    content: `A stylish lounge party with premium drinks, gourmet bites, and neon-lit vibes.`,
    details: [
      "Premium whiskey, wine, and cocktail selection",
      "Gourmet sliders and finger foods",
      "Neon lights, dance floor, and cozy seating areas",
    ],
    summary: `Perfect for those who love nightlife—mixing great food, drinks, and a lively bar scene.`,
  },
  {
    id: 3,
    image: "./Event-3.jpg",
    title: "Home Bar Celebration",
    price: 1200,
    content: `An elegant home bar party featuring premium spirits, mixers, and festive garnishes.`,
    details: [
      "Selection of spirits: Luxardo, Chartreuse, Nogino, Highside Gin, Goodness Sisters",
      "Cocktail tools: shaker, jigger, ice bucket with champagne",
      "Garnishes: lemon slices, apple slices, cinnamon sticks",
      "Glassware: red-tinted and gold-rimmed glasses for a stylish presentation",
    ],
    summary: `A refined bar experience at home, blending premium drinks, festive décor, and celebratory vibes.`,
  },
  {
    id: 4,
    image: "./Event-4.jpg",
    title: "Birthday Bash Celebration",
    price: 1000,
    content: `A joyful birthday party event filled with laughter, music, and delicious treats.`,
    details: [
      "Colorful decorations with balloons and streamers",
      "Birthday cake cutting ceremony",
      "Fun games and activities for guests",
      "Live music or DJ to set the mood",
      "Photo booth with party props",
    ],
    summary: `A festive birthday party experience that brings together friends and family with food, fun, and unforgettable memories.`,
  },

  {
    id: 5,
    image: "./Event-5.jpg",
    title: "Starry Night Celebration",
    price: 1200,
    content: `A cozy nighttime party with drinks, music, and glowing lights under the stars.`,
    details: [
      "Guests enjoying casual conversations and dancing",
      "Rustic outdoor setup with white tablecloth and refreshments",
      "Lanterns and string lights illuminating the night",
      "Perfect for holiday or weekend gatherings",
    ],
    summary: `An unforgettable evening of camaraderie, music, and glowing lights beneath the night sky.`,
  },
  {
    id: 6,
    image: "./Event-6.jpg",
    title: "Birthday Burger Buffet",
    price: 600,
    content: `A festive birthday party featuring a burger buffet with colorful toppings and fun vibes.`,
    details: [
      "Buffet-style burgers with fresh toppings and sides",
      "Birthday cake and celebratory decorations",
      "Fruit punch and wine pairing options",
      "Games and photo booth with neon props",
      "Memorable dining experience for friends and family",
    ],
    summary: `A lively birthday party where guests enjoy a burger buffet, drinks, and joyful celebration together.`,
  },
];

export const bookings = [
  {
    id: 1,
    details: {
      name: 'Example Name',
      email: 'Jhon@example.com',
      phone: '123456789',
      date: '2026-01-01',
      time: '11.30',
      people: 3,
      message: 'Table booked for 3 guests at 11:30 get ready for a delicious burger feast!',
    },
  },
];

export const testimonials = [
  {
    id: 1,
    content:
      "“Burger Café & Bar is the perfect spot for premium burgers. The patties are juicy, the buns soft, and the toppings fresh, making every bite feel special and satisfying. The cozy bar atmosphere, friendly staff, and attention to detail make the dining experience even better and truly memorable.”",
    avatar: "./Testimoni-1.jpg",
    client: "Richard Nelson",
    position: "CEO",
  },
  {
    id: 2,
    content:
      "“I’m impressed by the creativity of the menu at Burger Café & Bar. They don’t just serve classic burgers, but also unique variations with homemade sauces and seasonal ingredients. It’s the ideal place to hang out with friends, enjoy lively conversations, or simply unwind after a long day of work.”",
    avatar: "./Testimoni-2.jpg",
    client: "Sophia Martinez",
    position: "Marketing Director",
  },
  {
    id: 3,
    content:
      "“As a food enthusiast, I can say Burger Café & Bar sets a high standard. The portions are generous yet balanced, the flavors carefully crafted, and the staff welcoming and attentive. This place has quickly become my go-to destination for a relaxed dinner with family or a casual evening with close friends.”",
    avatar: "./Testimoni-3.jpg",
    client: "Emily Stark",
    position: "Food Blogger",
  },
  {
    id: 4,
    content:
      "“As a chef, I appreciate the attention to detail in every burger. The presentation appealing, and the taste consistently outstanding. Each dish reflects true craftsmanship and passion, making it a delightful experience every time. Highly recommended for anyone who values quality and flavor.”",
    avatar: "./Testimoni-4.jpg",
    client: "Edward Stanley",
    position: "Professional Chef",
  },
  {
    id: 5,
    content:
      "“Burger Café & Bar is more than just a restaurant it’s an experience worth sharing. Great food, and a warm atmosphere make me feel at home every visit. The combination of premium ingredients, creative recipes, and welcoming service ensures that every moment spent here is truly enjoyable.”",
    avatar: "./Testimoni-5.jpg",
    client: "Jessica Harlev",
    position: "Entrepreneur",
  },
];

export const gallery = [
  { id: 1, image: '/gallery-1.jpg' },
  { id: 2, image: '/gallery-2.jpg' },
  { id: 3, image: '/gallery-3.jpg' },
  { id: 4, image: '/gallery-4.jpg' },
  { id: 5, image: '/gallery-5.jpg' },
  { id: 6, image: '/gallery-6-v1.jpg' },
  { id: 7, image: '/gallery-7.jpg' },
  { id: 8, image: '/gallery-8.jpg' },
];