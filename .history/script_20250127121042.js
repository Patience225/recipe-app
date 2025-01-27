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

let recipes = [
  {
    title: "Pancakes",
    category: "Breakfast",
    image: "images/pancakes.jpg",
    description: "Fluffy pancakes to start your day!"
  },
  {
    title: "Spaghetti Bolognese",
    category: "Lunch",
    image: "images/spaghetti.jpg",
    description: "A hearty and satisfying Italian meal."
  },
  {
    title: "Grilled Chicken",
    category: "Dinner",
    image: "images/chicken.jpg",
    description: "Juicy and flavorful grilled chicken served with sides."
  },
  {
    title: "Chocolate Cake",
    category: "Snacks",
    image: "images/cake.jpg",
    description: "A rich and decadent chocolate cake for dessert."
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
  modalDescription.textContent = recipe.description;
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
