import React from 'react';
import {ViewWorkLink, IntroWrapper, LinkText} from "./Intro.styles";
import Header from "./header";
import ArrowRight from "../../assets/arrow-right";

const Intro = (props: {
    id?: string
}) => {
    const { id } = props;
    return (
        <IntroWrapper id={id}>
            <Header/>
            <ViewWorkLink>
                <LinkText>View my Work</LinkText>
                <ArrowRight width={24} height={24}/>
            </ViewWorkLink>
        </IntroWrapper>
    )
}
export default Intro;