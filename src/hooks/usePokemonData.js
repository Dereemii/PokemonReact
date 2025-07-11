import { useEffect, useState } from 'react'

const usePokemonData = (limit = 20) => {
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

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            const data = await res.json()

            // hacer fetch de los detalles de cada pokemón
            // hace un mapeo dentro de la primera url que es de cada pokemon
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
    return { pokemon, loading }
}

export default usePokemonData