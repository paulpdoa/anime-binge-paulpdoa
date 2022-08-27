import SeasonCard from "../SeasonCard";
import episodes from '../../data/episodes.json';

const Season = () => {
    return (
        <div className="season">
            <div className="season__head">
                <h1 className="season__title">Episodes</h1>
                <h2 className="season__title">Season 1</h2>
            </div>
            <div className="season__episodes">
                {/* just mapping on the json i created for datas */}
                { episodes.map(episode => (
                    <SeasonCard key={episode.id} episode={episode} />
                )) }
            </div>
        </div>
    )
}

export default Season;