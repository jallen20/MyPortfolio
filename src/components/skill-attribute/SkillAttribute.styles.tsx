import styled from 'styled-components';

const SkillAttributeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const IconWrapper = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid;
    border-radius: 50px;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-weight: 700;
    font-style: normal;
`;
const Description = styled.p`
    font-weight: 400;
    font-style: normal;
`;

export {
    SkillAttributeWrapper,
    IconWrapper,
    Title,
    Description
}