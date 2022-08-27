import { AiFillStar } from 'react-icons/ai';
import { useAnimeContext } from '../hooks/useAnimeContext';

const TrendingCard = ({ anime,setCurrentAnime,currentAnime }) => {

    // If the card is one piece, don't display rating
    // just did this for clearer reading of code
    const isOnePiece = anime.title === 'One Piece' ? 'none' : '';

    // get the isOpen value in the anime context and then also get dispatch to create an action
    const { isOpen,dispatch } = useAnimeContext();  

    // create a variable to hide two animes when something is clicked
    // if the clicked card is not equal to the initial card, hide those initial cards 
    const hideTwoAnime = anime.title !== currentAnime && isOpen ? "none" : '';

    // create a function for showing seasons
    const showSeasons = () => {
        // disabling other cards when not attack on titan
        if(anime.title === 'Attack on Titan') {
            dispatch({ type: 'SHOW_SEASON',payload: !isOpen });
            setCurrentAnime(anime.title)
        }
    }

    return (
        <>
            <div onClick={showSeasons} 
                    className={`${anime.title === 'Attack on Titan' ? 'attack-on-titan' : anime.title === 'Jujutsu Kaisen' ? 'jujutsu-kaisen' : 'one-piece'} trend__card ${anime.title === 'Attack on Titan' && isOpen ? 'attack-on-titan-open' : ''}`}
                    style={{display: hideTwoAnime}}
                >
                <div className="trend__about">
                    <div className="trend__title">
                        <h1 className="trend__name">{anime.title}</h1>
                        <span className="trend__category">Category: {anime.categories.map(category => category).join(', ')}</span>
                    </div>
                    <div className="trend__rating" style={{ display: isOnePiece }}>
                        <span className="trend__rate"><AiFillStar className="trend__star" /> {anime.rating}</span>
                    </div>
                </div>
            </div>
            {/* if the title is attack on titan and it is open show this text */}
            { anime.title === 'Attack on Titan' && isOpen ?  
                <p className="open-desc">When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…</p> : ''
            }
        </>
    )
}

export default TrendingCard;