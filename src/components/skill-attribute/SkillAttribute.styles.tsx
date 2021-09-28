import styled from 'styled-components';

const SkillAttributeWrapper = styled.div`
    display: block;
    height: auto;
    align-items: center;
    text-align: center;
    padding: 10px;
    width: 220px;
    height: 300px;
    position: relative;
    margin: 0 40px;
`;

const IconWrapper = styled.div`
    width: 150px;
    height: 150px;
    border: 1px solid;
    border-color: transparent;
    border-radius: 100%;
    background: #00d5aa;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

const Title = styled.h2`
    color: #252934;
    font-weight: 700;
    font-size: 24px;
    font-style: normal;
    position: relative;
    margin: 5px 0;
`;
const Description = styled.p`
    color: #252934;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    width: 200px;
    position: relative;
    margin: auto;
`;

export {
    SkillAttributeWrapper,
    IconWrapper,
    Title,
    Description
}