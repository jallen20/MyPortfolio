import React from 'react';
import {AboutWrapper, BioWrapper, Skills, Title} from "./About.styles";


const About = (props: {
    id?: string
}) => {
    const { id } = props;
    const bioDescription = `I'm a full stack developer at Carvana in Atlanta,Ga. I have a serious passion for development on both the front end as well as the business layer. Lets make something special`;
    
    return (
        <AboutWrapper id={id}>
          Hi
        </AboutWrapper>
    )
}
export default About;