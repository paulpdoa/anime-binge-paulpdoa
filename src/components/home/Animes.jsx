import Trending from "../Trending";
import Throwback from "../Throwback";

const Animes = () => {
    return (
        <section className="animes">
            <div className="animes__contents">
                <Trending />
                <Throwback />
            </div>
        </section>
    )
}

export default Animes;