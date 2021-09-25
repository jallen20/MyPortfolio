import React from 'react';
import {Description, IconWrapper, SkillAttributeWrapper, Title} from "./SkillAttribute.styles";

const SkillAttribute = (props: {
    skillName: string,
    description: string,
    icon?: JSX.Element
}) => {
    const { skillName, description, icon } = props;
    
    return (
        <SkillAttributeWrapper>
            <IconWrapper>
                {icon}
            </IconWrapper>
            <Title>{skillName}</Title>
            <Description>{description}</Description>
        </SkillAttributeWrapper>
    )
};
export default SkillAttribute;