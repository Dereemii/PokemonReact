import './PokemonCard.css';

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
