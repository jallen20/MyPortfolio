import React, {useEffect, useState} from 'react';
import { useSpring, animated, config } from 'react-spring';
import {default as Paths} from './wavy-paths';
import {PathWrapper, WavyBackgroundWrapper, WavyPath} from "./WavyBackground.styles";
import {buildPoints} from "../../sections/projects/util";

const WavyBackground = () => {
    const [active, setActive] = useState(false);
    const { x } = useSpring({  x: active ? 1 : 0 });

    useEffect(() => {
        const id = setTimeout(() => {
            setActive(!active);
        }, 2000);

        return () => clearTimeout(id);
    }, [active]);

    useEffect(() => {
        setActive(true);
    }, []);
    const paths =  (
        <PathWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" onClick={() => setActive(true)}>
                <defs>
                    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="black"/>
                        <stop offset="100%" stopColor="white"/>
                    </linearGradient>
                </defs>
                <polyline fill='url(#Gradient2)' points={buildPoints(40, false).join(' ')}/>
            </svg>
        </PathWrapper>
    );
    
    return (
        <WavyBackgroundWrapper>
            {paths}
        </WavyBackgroundWrapper>
    )
};
export default WavyBackground;
