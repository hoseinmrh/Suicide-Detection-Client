import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ITextAnimationProps{
    text: string
}
const TextAnimation = ({text}: ITextAnimationProps) => {
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
        tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to(textRef.current, { opacity: 0, duration: 2 }, '+=1');
    }, []);

    return (
        <h1 ref={textRef} className={`text-center text-4xl mt-12 ${text === "SUICIDE" ? "text-red-500" : "text-green-600"}`}>
            {text}
        </h1>
    );
};

export default TextAnimation;