import { useEffect, useState } from 'react'
import './App.css'
import { PokemonCard } from './components/PokemonCard/PokemonCard'



function App() {
  // pokemon = variable que almacena los pokemon
  // setPokemon = es el setter (función) que modifica a pokemon
  // el valor useState([]) indica que se inicializa como un array vacío []

  // para loading se define que será un valor booleano cuando esté cargando
  // será true y cuando ya haya cargado la información será falso

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true)

      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await res.json()

      // hacer fetch de los detalles de cada pokemón
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url)
          return res.json()
        })
      )
      setPokemon(detailedData)
      setLoading(false)
    }
    fetchPokemon()
  }, [])

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
