const recipeList = document.getElementById("recipe-list");
const categoriesButtons = document.querySelectorAll(".category-buttons button");
const searchInput = document.getElementById("search");
const themeToggleBtn = document.getElementById("theme-toggle");
const recipeForm = document.getElementById("recipe-form");
const recipeFormContainer = document.getElementById("recipe-form-container");
const recipeModal = document.getElementById("recipe-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModalBtn = document.querySelector(".close-btn");
const modalIngredients = document.getElementById("modal-ingredients");
const modalPreparation = document.getElementById("modal-preparation");


const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      category: "Lunch",
      image: "images/Spaghetti Carbonara.jpeg",
      ingredients: [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g pecorino cheese",
        "50g parmesan",
        "2 plump garlic cloves, peeled and left whole",
        "50g unsalted butter",
        "Sea salt and freshly ground black pepper"
      ],
      preparation: [
        "Put a large saucepan of water on to boil.",
        "Finely chop the pancetta, having first removed any rind.",
        "Finely grate both cheeses and mix them together.",
        "Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside.",
        "Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).",
        "Squash the garlic with the blade of a knife, just to bruise it.",
        "While the spaghetti is cooking, fry the pancetta with the garlic.",
        "Drop the butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.",
        "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp.",
        "The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.",
        "Keep the heat under the pancetta on low.",
        "When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta.",
        "Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.",
        "Take the pan of spaghetti and pancetta off the heat.",
        "Quickly pour in the eggs and cheese.",
        "Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.",
        "Add extra pasta cooking water to keep it saucy (several tablespoons should do it).",
        "You don’t want it wet, just moist. Season with a little salt, if needed.",
        "Use a long-pronged fork to twist the pasta on to the serving plate or bowl.",
        "Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper."
      ]
    },
    {
      id: 2,
      title: "Pancakes",
      category: "Breakfast",
      image: "images/Pancakes.jpeg",
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "3 1/2 teaspoons baking powder",
        "1 teaspoon salt",
        "1 tablespoon white sugar",
        "1 1/4 cups milk",
        "1 egg",
        "3 tablespoons butter, melted"
      ],
      preparation: [
        "In a large bowl, sift together the flour, baking powder, salt, and sugar.",
        "Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.",
        "Heat a lightly oiled griddle or frying pan over medium-high heat.",
        "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
        "Brown on both sides and serve hot."
      ]
    },
    {
      id: 3,
      title: "Grilled Chicken",
      category: "Dinner",
      image: "images/Grilled Chicken.jpeg",
      ingredients: [
        "4 boneless, skinless chicken breasts",
        "1/4 cup olive oil",
        "2 tablespoons lemon juice",
        "2 cloves garlic, minced",
        "1 teaspoon dried oregano",
        "Salt and freshly ground black pepper to taste"
      ],
      preparation: [
        "In a small bowl, whisk together olive oil, lemon juice, garlic, oregano, salt, and pepper.",
        "Place chicken breasts in a shallow dish and pour the marinade over them.",
        "Cover and refrigerate for at least 30 minutes.",
        "Preheat the grill to medium-high heat.",
        "Grill chicken for 6-8 minutes per side, or until the internal temperature reaches 165°F (74°C).",
        "Remove from grill and let rest for 5 minutes before serving."
      ]
    },
    {
      id: 4,
      title: "Fruit Salad",
      category: "Snacks",
      image: "images/Fruit Salad.jpeg",
      ingredients: [
        "1 cup strawberries, hulled and sliced",
        "1 cup blueberries",
        "1 cup pineapple chunks",
        "1 cup kiwi, peeled and sliced",
        "1 cup grapes, halved",
        "2 tablespoons honey",
        "1 tablespoon fresh lime juice",
        "1 tablespoon chopped fresh mint (optional)"
      ],
      preparation: [
        "In a large bowl, combine strawberries, blueberries, pineapple, kiwi, and grapes.",
        "In a small bowl, whisk together honey and lime juice.",
        "Drizzle the honey-lime dressing over the fruit and gently toss to combine.",
        "Garnish with fresh mint if desired.",
        "Serve immediately or refrigerate until ready to serve."
      ]
    },
    {
      id: 5,
      title: "Avocado Toast",
      category: "Breakfast",
      image: "images/Avocado Toast.jpeg",
      ingredients: [
        "2 ripe avocados",
        "4 slices of bread, toasted",
        "1 tablespoon lemon juice",
        "Salt and freshly ground black pepper to taste",
        "Red pepper flakes (optional)",
        "Olive oil for drizzling (optional)"
      ],
      preparation: [
        "In a medium bowl, mash the avocados with a fork.",
        "Add lemon juice, salt, and pepper to taste; mix until combined.",
        "Spread the avocado mixture evenly onto the toasted bread slices.",
        "Sprinkle with red pepper flakes and drizzle with olive oil if desired.",
        "Serve immediately."
      ]
    },
    {
      id: 6,
      title: "Caesar Salad",
      category: "Lunch",
      image: "images/Caesar Salad.jpeg",
      ingredients: [
        "1 large head romaine lettuce, chopped",
        "1/2 cup croutons",
        "1/4 cup grated Parmesan cheese",
        "1/3 cup Caesar dressing",
        "Optional: Grilled chicken, shrimp, or salmon for added protein"
      ],
      preparation: [
        "In a large bowl, combine chopped romaine lettuce, croutons, and grated Parmesan cheese.",
        "Drizzle with Caesar dressing and toss to coat evenly.",
        "Top with grilled chicken, shrimp, or salmon if desired.",
        "Serve immediately."
      ]
    },
    {
      id: 7,
      title: "Burgers",
      category: "Dinner",
      image: "images/Burgers.jpeg",
      ingredients: [
        "1 pound ground beef",
        "1/2 teaspoon salt",
        "1/4 teaspoon freshly ground black pepper",
        "4 hamburger buns",
        "Lettuce, tomato slices, onion slices, pickles, and condiments of choice"
      ],
      preparation: [
        "In a medium bowl, gently mix ground beef with salt and pepper.",
        "Divide the mixture into four equal portions and shape into patties.",
        "Preheat a grill or skillet over medium-high heat.",
        "Cook the patties for 3-4 minutes per side, or until desired doneness.",
        "Toast the hamburger buns lightly on the grill or in a toaster.",
        "Assemble the burgers by placing each patty on a bun and adding desired toppings and condiments.",
        "Serve immediately."
      ]
    },
    {
      id: 8,
      title: "Muffins",
      category: "Breakfast",
      image: "images/Muffins.jpeg",
      ingredients: [
        "2 cups all-purpose flour",
        "1/2 cup sugar",
        "1 tablespoon baking powder",
        "1/2 teaspoon salt",
        "1 cup milk",
        "1/2 cup vegetable oil",
        "2 large eggs",
        "1 teaspoon vanilla extract",
        "1 cup fresh or frozen berries, chocolate chips, or other mix-ins"
      ],
      preparation: [
        "Preheat oven to 400°F (200°C).",
        "Grease a 12-cup muffin tin or line with paper liners.",
        "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
        "In another bowl, whisk together milk, oil, eggs, and vanilla extract.",
        "Pour the wet ingredients into the dry ingredients and stir until just combined.",
        "Fold in the berries, chocolate chips, or other mix-ins.",
        "Divide the batter evenly among the muffin cups.",
        "Bake for 18-20 minutes, or until a toothpick inserted into the center comes out clean.",
        "Allow muffins to cool in the tin for 5 minutes before transferring to a wire rack to cool completely."
      ]
    },
    {
      id: 9,
      title: "Chocolate Cake",
      category: "Snacks",
      image: "images/Chocolate Cake.jpeg",
      ingredients: [
        "1 ¾ cups all-purpose flour",
        "2 cups granulated sugar",
        "¾ cup cocoa powder",
        "2 teaspoons baking powder",
        "1 teaspoon baking soda",
        "½ teaspoon salt",
        "2 eggs",
        "1 cup milk",
        "½ cup vegetable oil",
        "2 teaspoons vanilla extract",
        "1 cup boiling water"
      ],
      preparation: [
        "Preheat the oven to 350°F (175°C) and grease two 9-inch cake pans.",
        "In a large bowl, whisk together flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
        "Add eggs, milk, vegetable oil, and vanilla extract. Mix until well combined.",
        "Gradually add boiling water while stirring until the batter is smooth.",
        "Pour the batter evenly into the prepared cake pans.",
        "Bake for 30-35 minutes or until a toothpick inserted in the center comes out clean.",
        "Let the cakes cool before removing them from the pans and frosting as desired."
      ]
    },
    {
      id: 10,
      title: "Tacos",
      category: "Lunch",
      image: "images/Tacos.jpeg",
      ingredients: [
        "1 lb ground beef or chicken",
        "1 tablespoon olive oil",
        "1 small onion, diced",
        "2 cloves garlic, minced",
        "1 teaspoon chili powder",
        "1 teaspoon cumin",
        "½ teaspoon paprika",
        "½ teaspoon salt",
        "8 small corn or flour tortillas",
        "1 cup shredded lettuce",
        "½ cup diced tomatoes",
        "½ cup shredded cheese",
        "¼ cup sour cream",
        "¼ cup salsa"
      ],
      preparation: [
        "Heat olive oil in a pan over medium heat.",
        "Add diced onions and garlic, sauté until soft.",
        "Add ground beef or chicken and cook until browned.",
        "Stir in chili powder, cumin, paprika, and salt. Cook for another 2-3 minutes.",
        "Warm the tortillas in a dry pan or microwave.",
        "Assemble tacos by filling tortillas with the cooked meat, lettuce, tomatoes, cheese, sour cream, and salsa.",
        "Serve immediately and enjoy!"
      ]
    },
    {
      id: 11,
      title: "Grilled Salmon",
      category: "Dinner",
      image: "images/Grilled Salmon.jpeg",
      ingredients: [
        "2 salmon fillets",
        "1 tablespoon olive oil",
        "1 teaspoon lemon juice",
        "1 teaspoon garlic powder",
        "½ teaspoon salt",
        "½ teaspoon black pepper",
        "1 teaspoon dried oregano"
      ],
      preparation: [
        "Preheat grill to medium-high heat.",
        "Rub salmon fillets with olive oil, lemon juice, garlic powder, salt, pepper, and oregano.",
        "Place salmon on the grill and cook for 4-5 minutes per side until cooked through.",
        "Serve with steamed vegetables or rice."
      ]
    },
    {
      id: 12,
      title: "Smoothie Bowl",
      category: "Breakfast",
      image: "images/Smoothie Bowl.jpeg",
      ingredients: [
        "1 banana",
        "½ cup frozen berries",
        "½ cup Greek yogurt",
        "¼ cup milk",
        "1 tablespoon honey",
        "¼ cup granola",
        "1 tablespoon chia seeds"
      ],
      preparation: [
        "Blend banana, frozen berries, Greek yogurt, milk, and honey until smooth.",
        "Pour into a bowl and top with granola and chia seeds.",
        "Serve immediately."
      ]
    },
    {
      id: 13,
      title: "Chicken Wraps",
      category: "Lunch",
      image: "images/Chicken Wraps.jpeg",
      ingredients: [
        "2 large tortillas",
        "1 cup cooked shredded chicken",
        "½ cup lettuce, chopped",
        "¼ cup diced tomatoes",
        "¼ cup shredded cheese",
        "2 tablespoons mayonnaise or yogurt",
        "1 teaspoon mustard"
      ],
      preparation: [
        "Mix chicken, mayonnaise, and mustard in a bowl.",
        "Lay out tortillas and add lettuce, tomatoes, chicken mixture, and cheese.",
        "Wrap tightly and slice in half before serving."
      ]
    },
    {
      id: 14,
      title: "Pizza",
      category: "Dinner",
      image: "images/Pizza.jpeg",
      ingredients: [
        "1 pre-made pizza dough",
        "½ cup pizza sauce",
        "1 cup shredded mozzarella cheese",
        "½ cup sliced pepperoni",
        "½ teaspoon dried oregano"
      ],
      preparation: [
        "Preheat oven to 450°F (230°C).",
        "Roll out pizza dough and place on a baking tray.",
        "Spread pizza sauce evenly, add cheese, and top with pepperoni.",
        "Sprinkle oregano and bake for 12-15 minutes until cheese is melted and crust is golden."
      ]
    },
    {
      id: 15,
      title: "Churros",
      category: "Snacks",
      image: "images/Churros.jpeg",
      ingredients: [
        "1 cup water",
        "2 tablespoons sugar",
        "2 tablespoons butter",
        "1 cup all-purpose flour",
        "1 egg",
        "½ teaspoon cinnamon",
        "Vegetable oil for frying",
        "½ cup sugar for coating"
      ],
      preparation: [
        "Boil water, sugar, and butter in a pan.",
        "Stir in flour and mix until a dough forms.",
        "Let cool, then add egg and mix well.",
        "Heat oil in a pan and pipe the dough into the hot oil.",
        "Fry until golden brown, then roll in sugar and cinnamon."
      ]
    },
    {
      id: 16,
      title: "Croissants",
      category: "Breakfast",
      image: "images/Croissants.jpeg",
      ingredients: [
        "2 cups all-purpose flour",
        "1 tablespoon sugar",
        "½ teaspoon salt",
        "½ cup butter, cold and cubed",
        "½ cup milk",
        "1 egg yolk"
      ],
      preparation: [
        "Mix flour, sugar, and salt in a bowl.",
        "Cut in butter until crumbly, then add milk and mix until dough forms.",
        "Roll out and fold multiple times, then cut into triangles and roll into croissant shapes.",
        "Brush with egg yolk and bake at 375°F (190°C) for 20 minutes until golden."
      ]
    },
    {
      id: 17,
      title: "Vegetable Stir-fry",
      category: "Lunch",
      image: "images/Vegetable Stir-fry.jpeg",
      ingredients: [
        "1 cup broccoli florets",
        "1 carrot, sliced",
        "1 bell pepper, sliced",
        "1 tablespoon soy sauce",
        "1 tablespoon olive oil",
        "1 teaspoon garlic, minced"
      ],
      preparation: [
        "Heat olive oil in a pan over medium heat.",
        "Add garlic and sauté for 30 seconds.",
        "Add vegetables and stir-fry for 5-7 minutes.",
        "Drizzle with soy sauce and serve with rice."
      ]
    },
    {
      id: 18,
      title: "Steak",
      category: "Dinner",
      image: "images/Steak.jpeg",
      ingredients: [
        "2 ribeye steaks",
        "1 tablespoon olive oil",
        "1 teaspoon salt",
        "½ teaspoon black pepper",
        "1 teaspoon garlic powder",
        "1 teaspoon butter"
      ],
      preparation: [
        "Rub steaks with olive oil, salt, pepper, and garlic powder.",
        "Heat a pan to high and cook steaks for 3-4 minutes per side for medium-rare.",
        "Add butter to pan and baste steak for an extra minute.",
        "Let rest for 5 minutes before serving."
      ]
    },
    {
      id: 19,
      title: "Ice Cream Sundae",
      category: "Snacks",
      image: "images/Ice Cream Sundae.jpeg",
      ingredients: [
        "2 scoops vanilla ice cream",
        "¼ cup chocolate syrup",
        "¼ cup chopped nuts",
        "1 cherry",
        "Whipped cream"
      ],
      preparation: [
        "Scoop ice cream into a bowl.",
        "Drizzle with chocolate syrup.",
        "Top with whipped cream, nuts, and a cherry."
      ]
    },
    {
      id: 20,
      title: "Omelette",
      category: "Breakfast",
      image: "images/Omelette.jpeg",
      ingredients: [
        "2 eggs",
        "¼ cup diced bell peppers",
        "¼ cup diced onions",
        "¼ cup shredded cheese",
        "1 teaspoon butter",
        "Salt and pepper to taste"
      ],
      preparation: [
        "Beat eggs with salt and pepper.",
        "Heat butter in a pan and add eggs.",
        "Add bell peppers, onions, and cheese on top.",
        "Cook for 3-4 minutes, then fold in half and serve."
      ]
    },
    {
      id: 21,
      title: "Burrito Bowl",
      category: "Lunch",
      image: "images/Burrito Bowl.jpeg",
      ingredients: [
        "1 cup cooked rice",
        "½ cup black beans",
        "½ cup cooked chicken, shredded",
        "¼ cup salsa",
        "¼ cup shredded cheese",
        "1 tablespoon sour cream"
      ],
      preparation: [
        "Layer rice, black beans, and chicken in a bowl.",
        "Top with salsa, cheese, and sour cream before serving."
      ]
    },
    {
      id: 22,
      title: "Lobster Tail",
      category: "Dinner",
      image: "images/Lobster Tail.jpeg",
      ingredients: [
        "2 lobster tails",
        "2 tablespoons butter",
        "1 teaspoon garlic, minced",
        "1 teaspoon lemon juice",
        "Salt and pepper to taste"
      ],
      preparation: [
        "Preheat oven to 375°F (190°C).",
        "Cut the top shell of the lobster and lift the meat slightly.",
        "Mix butter, garlic, and lemon juice, then spread over lobster meat.",
        "Bake for 12-15 minutes until cooked through."
      ]
    },
    {
      id: 23,
      title: "Nachos",
      category: "Snacks",
      image: "images/Nachos.jpeg",
      ingredients: [
        "1 bag tortilla chips",
        "½ cup shredded cheese",
        "¼ cup salsa",
        "¼ cup sour cream",
        "¼ cup sliced jalapeños"
      ],
      preparation: [
        "Preheat oven to 350°F (175°C).",
        "Spread tortilla chips on a baking sheet.",
        "Top with cheese and bake for 5 minutes until melted.",
        "Serve with salsa, sour cream, and jalapeños."
      ]
    },
    {
      id: 24,
      title: "French Toast",
      category: "Breakfast",
      image: "images/French Toast.jpeg",
      ingredients: [
        "2 slices bread",
        "1 egg",
        "¼ cup milk",
        "1 teaspoon vanilla extract",
        "1 teaspoon cinnamon",
        "1 tablespoon butter"
      ],
      preparation: [
        "Whisk egg, milk, vanilla, and cinnamon in a bowl.",
        "Dip bread in mixture and cook on a buttered pan for 2-3 minutes per side.",
        "Serve with syrup."
      ]
    }
    
  ];  

const displayRecipes = (recipes) => {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
    `;
    recipeCard.addEventListener("click", () => openRecipeModal(recipe));
    recipeList.appendChild(recipeCard);
  });
};

const openRecipeModal = (recipe) => {
  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;

  // Clear previous content
  modalIngredients.innerHTML = "";
  modalPreparation.innerHTML = "";

  // Populate ingredients
  recipe.ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    modalIngredients.appendChild(li);
  });

  // Populate preparation steps
  recipe.preparation.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    modalPreparation.appendChild(li);
  });

  recipeModal.style.display = "block";
};


closeModalBtn.addEventListener("click", () => {
  recipeModal.style.display = "none";
});

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

categoriesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const filteredRecipes = category === "All" ? recipes : recipes.filter(recipe => recipe.category === category);
    displayRecipes(filteredRecipes);
  });
});

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
  displayRecipes(filteredRecipes);
});

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newRecipe = {
    title: recipeForm["recipe-title"].value,
    category: recipeForm["recipe-category"].value,
    image: recipeForm["recipe-image"].value,
  };
  recipes.push(newRecipe);
  displayRecipes(recipes);
  recipeForm.reset();
});

displayRecipes(recipes);
