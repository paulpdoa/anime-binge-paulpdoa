import { useEffect, useState } from 'react';

const SeasonCard = ({episode}) => {

    const [imgIdx,setImgIdx] = useState(0);

    // created a useEffect whenever the state imgIdx changes, the component will re-render
    useEffect(() => {
        const imageInterval = setInterval(() => {
           if(imgIdx === 0) {
            setImgIdx(1);
           }  else {
            setImgIdx(0);
           }
        },1000)

        return () => clearInterval(imageInterval);
    },[imgIdx])

    return (
        <div className="episode__card">
            <img className="episode__image" src={episode.imgs[imgIdx]} alt={episode.title} />
            <article className="episode__about">
                <h1 className="episode__title">{episode.title}</h1>
                <p className="episode__desc">{episode.desc}</p>
            </article>
        </div>
    )
}

export default SeasonCard;