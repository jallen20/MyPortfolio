import React from 'react';
import {AboutWrapper, BioWrapper, Skills, Title} from "./About.styles";
import DescriptiveImage from "../../components/descriptive-image";
import {BrainIcon, DataIcon, FastIcon, ResponsiveIcon, SlideInUnderLine} from "../../assets";
import SkillAttribute from "../../components/skill-attribute";
import SkillChart from "../../components/skill-chart";

const About = (props: {
    id?: string
}) => {
    const { id } = props;
    const bioDescription = `I'm a full stack developer at Carvana in Atlanta,Ga. I have a serious passion for development on both the front end as well as the business layer. Lets make something special`;
    
    return (
        <AboutWrapper id={id}>
            <Title>
                About
                <SlideInUnderLine/>
            </Title>
            <BioWrapper>
                <Skills>
                    <SkillAttribute
                        skillName='Fast'
                        description='Fast load times and lag free interaction, my highest priority.'
                        icon={<FastIcon width={60} height={60}/>}/>
                    <SkillAttribute
                        skillName='Responsive'
                        description='My layouts will work on any device, big or small.'
                        icon={<ResponsiveIcon width={60} height={60}/>}/>
                    <SkillAttribute
                        skillName='Problem Solver'
                        description='I will deliver elegant solutions to complex problems'
                        icon={<BrainIcon width={60} height={60}/>}/>
                    <SkillAttribute
                        skillName='Data Driven'
                        description="Websites don't have to be static, I love making pages come to life."
                        icon={<DataIcon width={60} height={60}/>}/>
                </Skills>
                <DescriptiveImage 
                    description={bioDescription}
                    imageUrl='assets/images/selfie.jpg'/>
            </BioWrapper>
        </AboutWrapper>
    )
}
export default About;