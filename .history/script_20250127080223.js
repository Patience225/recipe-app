// Sample Recipes
const recipes = [
  { id: 1, title: "Pasta Carbonara", category: "Lunch", image: "https://via.placeholder.com/300x200?text=Pasta+Carbonara" },
  { id: 2, title: "Classic Pancakes", category: "Breakfast", image: "https://via.placeholder.com/300x200?text=Classic+Pancakes" },
  { id: 3, title: "Grilled Cheese", category: "Snack", image: "https://via.placeholder.com/300x200?text=Grilled+Cheese" }
];

const recipeList = document.getElementById("recipe-list");
const themeToggleBtn = document.getElementById("theme-toggle");
const recipeForm = document.getElementById("recipe-form");
const modal = document.getElementById("recipe-modal");
const closeBtn = document.querySelector(".close-btn");

// Display Recipes
function displayRecipes(recipesToDisplay) {
  recipeList.innerHTML = "";
  recipesToDisplay.forEach((recipe) => {
    const recipeCard = `
      <div class="recipe-card" data-id="${recipe.id}">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
        <div class="card-back">
          <p>Click for details!</p>
        </div>
        <h3>${recipe.title}</h3>
      </div>
    `;
    recipeList.innerHTML += recipeCard;
  });
}

// Open Modal with Recipe Details
function openModal(recipe) {
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");

  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalDescription.textContent = `A delicious recipe for ${recipe.title}. Category: ${recipe.category}`;

  modal.style.display = "block";
}

// Close Modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Handle Click on Recipe Card
document.addEventListener("click", (e) => {
  if (e.target.closest(".recipe-card")) {
    const recipeId = e.target.closest(".recipe-card").dataset.id;
    const recipe = recipes.find((r) => r.id == recipeId);
    openModal(recipe);
  }
});

// Handle Recipe Form Submission
recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("recipe-title").value;
  const category = document.getElementById("recipe-category").value;
  const image = document.getElementById("recipe-image").value;

  const newRecipe = { id: recipes.length + 1, title, category, image };
  recipes.push(newRecipe);
  displayRecipes(recipes);

  recipeForm.reset();
});

// Toggle Light/Dark Mode
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "🌞 Light Mode";
  } else {
    themeToggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Initial Recipe Display
displayRecipes(recipes);
