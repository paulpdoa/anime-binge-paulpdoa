import { AiFillStar,AiFillHeart } from 'react-icons/ai';
import { IoMdPlay } from 'react-icons/io';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Just created this variants for more readable code using framer motion
const titleVar = {
    hidden: {
        opacity: 0,
        y:'5vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const rateVar = {
    hidden: {
        x: '3vh',
        opacity: 0
    },
    visible: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.2
        }
    }
}

const btnVar = {
    hidden: {
        scale:0
    },
    visible: {
        scale: 1,
        transition: {
            duration: 1,
            delay:0.4
        }
    }
}

const Hero = () => {

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
        <section ref={ref} className="hero">
            <div className="hero__contents">
                <article>
                    <motion.h1 className="hero__title"
                        initial="hidden"
                        animate={animation}
                        variants={titleVar}
                    >Kimetsu no Yaiba</motion.h1>
                    <motion.div className="hero__anime"
                        variants={rateVar}
                        animate={animation}
                        initial="hidden"
                    >
                        <span className="hero__rating"><AiFillStar className="hero__star" /> 5.0</span>
                        <span className="hero__categories">Category: Adventure fiction, Dark fantasy, Martial Arts</span>
                    </motion.div>
                    <motion.p className="hero__description"
                        variants={rateVar}
                        animate={animation}
                        initial="hidden"
                    >Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.</motion.p>
                </article>
                <motion.div className="hero__btns"
                    variants={btnVar}
                    animate={animation}
                    initial="hidden"
                >
                    <button className="hero__watch"><IoMdPlay />Watch Now!</button>
                    <button className="hero__favorite"><AiFillHeart className="hero__heart"/></button>
                </motion.div>
                <div className="hero__navigation">
                    <ul className="hero__pages">
                        <li className="hero__active">Overview</li>
                        <li>Episodes</li>
                        <li>Details</li>
                    </ul>
                    <div className="hero__current">
                        <div className="current__active current--page"></div>
                        <div className="current__active"></div>
                        <div className="current__active"></div>
                        <div className="current__active"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;