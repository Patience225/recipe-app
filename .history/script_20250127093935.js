/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #efebe9, #d7ccc8); /* Light coffee gradient */
  color: #4e342e;
  line-height: 1.6;
}

header {
  background: linear-gradient(135deg, #795548, #3e2723); /* Dark coffee gradient */
  text-align: center;
  color: #fff;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-size: 2.5rem;
  font-weight: 600;
}

header input {
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 80%;
  max-width: 400px;
  background: #efebe9; /* Light coffee */
  color: #4e342e;
}

header #theme-toggle {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background: #d7ccc8; /* Light coffee */
  color: #3e2723;
  border-radius: 20px;
  cursor: pointer;
}

.hero {
  background: linear-gradient(135deg, rgba(121, 85, 72, 0.9), rgba(62, 39, 35, 0.9)); /* Blend of light and dark coffee */
  color: #efebe9; /* Light coffee text */
  text-align: center;
  padding: 3rem 2rem;
  margin-top: -1rem;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero button {
  padding: 0.8rem 1.5rem;
  background-color: #5d4037; /* Medium coffee */
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
}

.hero button:hover {
  background-color: #4e342e; /* Darker tone for hover effect */
}

#categories {
  margin: 2rem auto;
  text-align: center;
}

.category-buttons button {
  margin: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #8d6e63; /* Light-medium coffee */
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.category-buttons button:hover {
  background-color: #6d4c41; /* Darker coffee */
}

#recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem;
}

.recipe-card {
  background: rgba(236, 224, 216, 0.8); /* Light coffee tone */
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  overflow: hidden;
}

.recipe-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.recipe-card h3 {
  padding: 1rem;
  font-size: 1.2rem;
  color: #4e342e; /* Dark coffee text */
}

.recipe-card:hover {
  transform: scale(1.05);
}

footer {
  text-align: center;
  padding: 1.5rem;
  background: #3e2723; /* Dark coffee */
  color: white;
  margin-top: 2rem;
}

/* Dark Theme Styles */
body.dark-theme {
  background: #212121;
  color: white;
}

body.dark-theme header {
  background: linear-gradient(135deg, #4e342e, #3e2723); /* Rich dark coffee tones */
}

body.dark-theme .hero {
  background: linear-gradient(135deg, rgba(62, 39, 35, 0.9), rgba(33, 33, 33, 0.9));
}

body.dark-theme .recipe-card {
  background: rgba(62, 39, 35, 0.8); /* Dark coffee */
}

body.dark-theme footer {
  background: #3e2723;
}

/* Recipe Submission Form Styles */
#recipe-form-container {
  margin: 20px 0;
  padding: 20px;
  background-color: #efebe9; /* Light coffee */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#recipe-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#recipe-form input,
#recipe-form select,
#recipe-form button {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #d7ccc8; /* Light coffee border */
  border-radius: 5px;
}

#recipe-form button {
  background-color: #6d4c41; /* Medium coffee */
  color: white;
  cursor: pointer;
  border: none;
}

#recipe-form button:hover {
  background-color: #5d4037; /* Darker coffee */
}
