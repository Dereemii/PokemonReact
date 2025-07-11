## React Pokedex App

A simple and interactive web application that fetches and displays Pokémon data from the PokeAPI. This project demonstrates the use of React functional components, custom hooks, and basic styling to create a responsive user interface.

### ✨ Features
Displays a list of Pokémon with their images and names.

Shows a loading indicator while fetching data.

Utilizes a custom hook (usePokemonData) for data fetching logic.

Modular component structure (PokemonCard).

### 🚀 Technologies Used
This project is built with:

React 19: A JavaScript library for building user interfaces.

Vite: A fast build tool that provides a lightning-fast development experience.

PokeAPI: The RESTful API used to retrieve Pokémon data.

HTML, CSS: For structuring and styling the application.

ESLint: For linting and maintaining code quality.

🛠️ Installation
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (LTS version recommended)

npm or yarn

Steps
Clone the repository:

git clone <your-repository-url>
cd pokemon-react

(Replace <your-repository-url> with the actual URL of your Git repository.)

Install dependencies:
```
npm install

# or
# yarn install
```

Run the development server:
```
npm run dev
# or
# yarn dev
```

This will start the development server, usually at http://localhost:5173. Open your browser and navigate to this address to see the application.

💡 Usage
Once the application is running, you will see a list of Pokémon displayed on the screen. A "Cargando Pokemon ...." message will appear while the data is being fetched. Each Pokémon is presented in a card format showing its image and name.

📂 Project Structure
The key files and directories in this project are:

```
pokemon-react/
├── public/
├── src/
│   ├── assets/           # Static assets (e.g., images)
│   ├── components/
│   │   └── PokemonCard/  # Component for displaying individual Pokémon
│   │       ├── PokemonCard.jsx
│   │       └── PokemonCard.css
│   ├── hooks/
│   │   └── usePokemonData.js # Custom hook for fetching Pokémon data
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global application styles
│   ├── main.jsx          # Entry point of the React application
│   └── index.css         # Base styles
├── .gitignore            # Specifies intentionally untracked files to ignore
├── index.html            # Main HTML file
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This README file
```


