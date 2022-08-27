import trending from '.././data/trending.json';
import TrendingCard from './TrendingCard';
import { useInView } from 'react-intersection-observer';
import { motion,useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useAnimeContext } from '../hooks/useAnimeContext';
import Season from './home/Season';

const titleVar = {
    hidden: {
        opacity: 0,
        scale:0
    },
    visible: {
        opacity: 1,
        scale:1,
        transition: {
            delay: 0.3,
            duration: 1   
        }
    }
}

const cardVar = {
    hidden: {
        x:'-20vh',
        opacity:0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
            delay:0.1,
            stiffness: 800,

        }
    }
}

const Trending = () => {

    const { isOpen } = useAnimeContext();
    const { ref, inView } = useInView({
        threshold: 0.3
    });
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start('visible')
        } else {
            animation.start('hidden');
        }
    },[inView,animation])

    return (
        <div ref={ref} className="trending">
            <motion.h1 className="trending__title"
                variants={titleVar}
                animate={animation}
                initial="hidden"
            >Trending <span>this week</span></motion.h1>
            <motion.div className="trend"
                initial="hidden"
                animate={animation}
                variants={cardVar}
            >
                { trending.map(anime => (
                    <div key={anime.id} className={anime.title === 'Attack on Titan' && isOpen ? 'trend-season' : ''}>
                        <TrendingCard anime={anime} />
                        { anime.title === 'Attack on Titan' && isOpen ? <Season /> : '' }
                    </div>
                )) }
            </motion.div>
        </div>
    )
}

export default Trending;