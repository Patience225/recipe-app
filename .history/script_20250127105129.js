// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Lunch",
    image: "images/Spaghetti Carbonara.jpeg",
  },
  {
    id: 2,
    title: "Pancakes",
    category: "Breakfast",
    image: "images/pan",
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
  {
    id: 6,
    title: "Caesar Salad",
    category: "Lunch",
    image: "https://source.unsplash.com/400x300/?salad",
  },
  {
    id: 7,
    title: "Burgers",
    category: "Dinner",
    image: "https://source.unsplash.com/400x300/?burger",
  },
  {
    id: 8,
    title: "Muffins",
    category: "Breakfast",
    image: "https://source.unsplash.com/400x300/?muffins",
  },
  {
    id: 9,
    title: "Chocolate Cake",
    category: "Snacks",
    image: "https://source.unsplash.com/400x300/?cake",
  },
  {
    id: 10,
    title: "Tacos",
    category: "Lunch",
    image: "https://source.unsplash.com/400x300/?tacos",
  },
  {
    id: 11,
    title: "Grilled Salmon",
    category: "Dinner",
    image: "https://source.unsplash.com/400x300/?salmon",
  },
  {
    id: 12,
    title: "Smoothie Bowl",
    category: "Breakfast",
    image: "https://source.unsplash.com/400x300/?smoothie",
  },
  {
    id: 13,
    title: "Chicken Wraps",
    category: "Lunch",
    image: "https://source.unsplash.com/400x300/?wraps",
  },
  {
    id: 14,
    title: "Pizza",
    category: "Dinner",
    image: "https://source.unsplash.com/400x300/?pizza",
  },
  {
    id: 15,
    title: "Churros",
    category: "Snacks",
    image: "https://source.unsplash.com/400x300/?churros",
  },
  {
    id: 16,
    title: "Croissants",
    category: "Breakfast",
    image: "https://source.unsplash.com/400x300/?croissant",
  },
  {
    id: 17,
    title: "Vegetable Stir-fry",
    category: "Lunch",
    image: "https://source.unsplash.com/400x300/?stirfry",
  },
  {
    id: 18,
    title: "Steak",
    category: "Dinner",
    image: "https://source.unsplash.com/400x300/?steak",
  },
  {
    id: 19,
    title: "Ice Cream Sundae",
    category: "Snacks",
    image: "https://source.unsplash.com/400x300/?icecream",
  },
  {
    id: 20,
    title: "Omelette",
    category: "Breakfast",
    image: "https://source.unsplash.com/400x300/?omelette",
  },
  // Additional 7 items
  {
    id: 21,
    title: "Burrito Bowl",
    category: "Lunch",
    image: "https://source.unsplash.com/400x300/?burrito",
  },
  {
    id: 22,
    title: "Lobster Tail",
    category: "Dinner",
    image: "https://source.unsplash.com/400x300/?lobster",
  },
  {
    id: 23,
    title: "Nachos",
    category: "Snacks",
    image: "https://source.unsplash.com/400x300/?nachos",
  },
  {
    id: 24,
    title: "French Toast",
    category: "Breakfast",
    image: "https://source.unsplash.com/400x300/?frenchtoast",
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

// Initial display of all recipes
displayRecipes(recipes);

// Filter by category
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    if (category === "All") {
      displayRecipes(recipes); // Show all recipes
    } else {
      const filteredRecipes = recipes.filter(
        (recipe) => recipe.category === category
      );
      displayRecipes(filteredRecipes);
    }
  });
});

// Search recipes
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query)
  );
  displayRecipes(filteredRecipes);
});

// Toggle Light/Dark Mode
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleBtn.textContent = "🌞 Light Mode";
  } else {
    themeToggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Open modal with recipe details
const modal = document.getElementById("recipe-modal");
const closeBtn = document.querySelector(".close-btn");

function openModal(recipe) {
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");

  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalDescription.textContent = `A delicious recipe for ${recipe.title}. Category: ${recipe.category}`;

  modal.style.display = "block";
}

// Close the modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Add click event to recipe cards
document.addEventListener("click", (e) => {
  if (e.target.closest(".recipe-card")) {
    const recipeId = e.target.closest(".recipe-card").dataset.id;
    const recipe = recipes.find((r) => r.id == recipeId);
    openModal(recipe);
  }
});

// Handle Recipe Submission
const recipeForm = document.getElementById("recipe-form");

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("recipe-title").value;
  const category = document.getElementById("recipe-category").value;
  const image = document.getElementById("recipe-image").value;

  const newRecipe = {
    id: recipes.length + 1,
    title: title,
    category: category,
    image: image,
  };

  recipes.push(newRecipe);
  displayRecipes(recipes);
  recipeForm.reset();
});
