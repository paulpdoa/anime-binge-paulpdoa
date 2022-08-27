import ThrowbackCard from "./ThrowbackCard";
import { useInView } from 'react-intersection-observer';
import { motion,useAnimation } from 'framer-motion';
import { useEffect } from 'react';

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

const Throwback = () => {

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
        <div ref={ref} className="throwback">
            <motion.h1 className="throwback__title"
                variants={titleVar}
                animate={animation}
                initial="hidden"
            >Throwback Anime!</motion.h1>
            <motion.div className="tb"
                variants={cardVar}
                animate={animation}
                inital="hidden"
            >
                <ThrowbackCard bgClass='ghost-fighter'/>
                <ThrowbackCard bgClass='slam-dunk' />
                <ThrowbackCard bgClass='flame-of-recca' />
            </motion.div>
        </div>
    )
}
export default Throwback;