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
const closeModalBtn = document.querySelector(".close-btn");const modalIngredients = document.getElementById("modal-ingredients");
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
    },
    {
      id: 3,
      title: "Grilled Chicken",
      category: "Dinner",
      image: "images/Grilled Chicken.jpeg",
    },
    {
      id: 4,
      title: "Fruit Salad",
      category: "Snacks",
      image: "images/Fruit Salad.jpeg",
    },
    {
      id: 5,
      title: "Avocado Toast",
      category: "Breakfast",
      image: "images/Avocado Toast.jpeg",
    },
    {
      id: 6,
      title: "Caesar Salad",
      category: "Lunch",
      image: "images/Caesar Salad.jpeg",
    },
    {
      id: 7,
      title: "Burgers",
      category: "Dinner",
      image: "images/Burgers.jpeg",
    },
    {
      id: 8,
      title: "Muffins",
      category: "Breakfast",
      image: "images/Muffins.jpeg",
    },
    {
      id: 9,
      title: "Chocolate Cake",
      category: "Snacks",
      image: "images/Chocolate Cake.jpeg",
    },
    {
      id: 10,
      title: "Tacos",
      category: "Lunch",
      image: "images/Tacos.jpeg",
    },
    {
      id: 11,
      title: "Grilled Salmon",
      category: "Dinner",
      image: "images/Grilled Salmon.jpeg",
    },
    {
      id: 12,
      title: "Smoothie Bowl",
      category: "Breakfast",
      image: "images/Smoothie Bowl.jpeg",
    },
    {
      id: 13,
      title: "Chicken Wraps",
      category: "Lunch",
      image: "images/Chicken Wraps.jpeg",
    },
    {
      id: 14,
      title: "Pizza",
      category: "Dinner",
      image: "images/Pizza.jpeg",
    },
    {
      id: 15,
      title: "Churros",
      category: "Snacks",
      image: "images/Churros.jpeg",
    },
    {
      id: 16,
      title: "Croissants",
      category: "Breakfast",
      image: "images/Croissants.jpeg",
    },
    {
      id: 17,
      title: "Vegetable Stir-fry",
      category: "Lunch",
      image: "images/Vegetable Stir-fry.jpeg",
    },
    {
      id: 18,
      title: "Steak",
      category: "Dinner",
      image: "images/Steak.jpeg",
    },
    {
      id: 19,
      title: "Ice Cream Sundae",
      category: "Snacks",
      image: "images/Ice Cream Sundae.jpeg",
    },
    {
      id: 20,
      title: "Omelette",
      category: "Breakfast",
      image: "images/Omelette.jpeg",
    },
    {
      id: 21,
      title: "Burrito Bowl",
      category: "Lunch",
      image: "images/Burrito Bowl.jpeg",
    },
    {
      id: 22,
      title: "Lobster Tail",
      category: "Dinner",
      image: "images/Lobster Tail.jpeg",
    },
    {
      id: 23,
      title: "Nachos",
      category: "Snacks",
      image: "images/Nachos.jpeg",
    },
    {
      id: 24,
      title: "French Toast",
      category: "Breakfast",
      image: "images/French Toast.jpeg",
    },
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
