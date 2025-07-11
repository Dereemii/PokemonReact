import './PokemonCard.css';

/**
 * React component that displays a single Pokémon's image and name.
 *
 * @param {object} props - The component's props.
 * @param {object} props.singlePokemon - An object containing the data for a single Pokémon.
 * @param {string} props.singlePokemon.name - The name of the Pokémon.
 * @param {object} props.singlePokemon.sprites - The sprites object for the Pokémon.
 * @param {string} props.singlePokemon.sprites.front_default - The URL for the default front sprite of the Pokémon.
 *
 * @returns {JSX.Element} A div element representing the Pokémon card.
 */
export const PokemonCard = ({ singlePokemon }) => {
    return (
        <div className="card">
            <img
                src={singlePokemon.sprites.front_default}
                alt={singlePokemon.name}
                className='card-image'
            />
            <h3 className="card-title">{singlePokemon.name}</h3>
        </div>
    );
};
