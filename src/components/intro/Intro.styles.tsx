import styled from 'styled-components';
import {Link} from "react-router-dom";

const IntroWrapper = styled.div`
    position: relative;
    margin: 0;
    width: 100vw;
    background: #fff;
    display: flex;
    align-items: center;
`;

const ImageWrapper = styled.div`
    width: 50%;
    height: auto;
    transform: translateX(-100%);
    opacity: 0;
    transition: all 1s ease-in-out;
`;

const Image = styled.img`
    width: 100%;
`;

const IntroTextWrapper = styled.div`
    width: 50%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 150px 10px 0px 10px;
`;

const Name = styled.h1`
    margin: 0;
    margin-bottom: 15px;
    font-size: 60px;
    font-family: utopia-std,serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 2px;
`;
const Engineer = styled.h2`
    margin: 10px;
    transform: translateX(150px);
    text-transform: uppercase;
    font-family: utopia-std,serif;
    font-weight: 400;
    font-style: light;
    letter-spacing: 2px;
    font-size: 16px;
`;
const Designer = styled.h2`
    margin: 10px;
    transform: translateX(250px);
    text-transform: uppercase;
    font-family: utopia-std,serif;
    font-weight: 400;
    font-style: light;
    letter-spacing: 2px;
    font-size: 16px;
`;
const Photographer = styled.h2`
    margin: 10px;
    transform: translateX(350px);
    text-transform: uppercase;
    font-family: utopia-std,serif;
    font-weight: 400;
    font-style: light;
    letter-spacing: 2px;
    font-size: 16px;
`;
const ContactLinkWrapper = styled.div`
    font-family: utopia-std,serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 2px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    padding: 25px;
`;
const ContactLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    color: black;
    transition: transform 5s ease;
    
    &:hover {
        transform: scale(1.1);
    }
`;

export {
    IntroWrapper,
    IntroTextWrapper,
    ImageWrapper,
    Image,
    Name,
    Engineer,
    Designer,
    Photographer,
    ContactLinkWrapper,
    ContactLink
}
