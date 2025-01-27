// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Lunch",
    image: "https://source.unsplash.com/400x300/?spaghetti",
  },
  {
    id: 2,
    title: "Pancakes",
    category: "Breakfast",
    image: "https://source.unsplash.com/400x300/?pancakes",
  },
  {
    id: 3,
    title: "Grilled Chicken",
    category: "Dinner",
    image: "https://source.unsplash.com/400x300/?chicken",
  },
  {
    id: 4,
    title: "Fruit Salad",
    category: "Snacks",
    image: "https://source.unsplash.com/400x300/?fruit",
  },
  {
    id: 5,
    title: "Avocado Toast",
    category: "Breakfast",
    image: "https://source.unsplash.com/400x300/?avocado",
  },
];

// DOM Elements
const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");
const categoryButtons = document.querySelectorAll(".category-buttons button");

// Function to display recipes
function displayRecipes(recipesToDisplay) {
  recipeList.innerHTML = ""; // Clear the list
  recipesToDisplay.forEach((recipe) => {
    const recipeCard = `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
      </div>
    `;
    recipeList.innerHTML += recipeCard;
  });
}

// Initial display of all recipes
displayRecipes(recipes);
