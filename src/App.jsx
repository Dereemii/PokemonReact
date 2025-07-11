import './App.css'
import { PokemonCard } from './components/PokemonCard/PokemonCard'
import usePokemonData from './hooks/usePokemonData'

/**
 * The main application component for the React Pokedex.
 * This component fetches Pokémon data using the `usePokemonData` custom hook
 * and displays a list of `PokemonCard` components.
 *
 * @returns {JSX.Element} The main application UI.
 */
function App() {

  const { pokemon, loading } = usePokemonData()

  return (
    <>
      <div className='app-container'>
        <h1>React Pokedex</h1>

        {loading ? (
          <p> Cargando Pokemon ....</p>
        ) : (
          <div className='pokemon-list'>
            {
              pokemon.map((poke) => (
                <PokemonCard key={poke.id} singlePokemon={poke} />
              ))
            }
          </div>
        )}
      </div>
    </>
  )
}

export default App
