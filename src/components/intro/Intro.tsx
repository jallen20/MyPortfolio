import React, {useEffect, useState} from 'react';
import {
    IntroWrapper,
    ImageWrapper, Image, IntroTextWrapper, Name, Engineer, Designer, Photographer, ContactLinkWrapper, ContactLink
} from "./Intro.styles";
import {IMG_BASE_PATH} from "../../constants";

const Intro = (props: {
    id?: string
}) => {
    const { id } = props;
    const [position, setPosition] = useState('');
    const [opacity, setOpacity] = useState('0');
    
    const style = {
        transform: `translateX(${position}px)`,
        opacity: opacity
    };
    
    useEffect(() => {
        setPosition('0');
        setOpacity('1')
    }, []);
    
    return (
        <>
            <IntroWrapper id={id}>
                <ImageWrapper style={style}>
                    <Image src={`${IMG_BASE_PATH}/hand.jpg`}/>
                </ImageWrapper>
                <IntroTextWrapper>
                    <Name>justin allen</Name>
                    <Engineer>software engineer</Engineer>
                    <Designer>web designer</Designer>
                    <Photographer>photographer</Photographer>
                </IntroTextWrapper>
            </IntroWrapper>
            <ContactLinkWrapper>
                <ContactLink to={'/'}>
                    lets build something great
                </ContactLink>
            </ContactLinkWrapper>
        </>
        
    )
}
export default Intro;