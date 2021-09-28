import styled, {keyframes} from 'styled-components';

const move = keyframes`
     0% {background-position: left}
     25% {background-size: 200%}
     50% {background-size: 100%}
     75% {background-size: 50%}
    100% {background-position: right; background-size: 1%}
`;

const IntroWrapper = styled.div`
    margin: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(37,41,52);
    background: radial-gradient(circle, rgba(37,41,52,1) 1%, rgba(9,119,121,1) 49%, rgba(250,0,255,1) 100%);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${move} 15s linear infinite;
    animation-direction: alternate; 
    background-size: 300%;
`;

const ViewWorkLink = styled.div`
    background: transparent;
    width: 200px;
    height: 60px;
    border: 2px solid;
    border-image: linear-gradient(to left,rgba(78,137,176,1)  1%, rgba(115,192,85,1)  100%) 100% 0 100% 0/2px 0 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 24px;
    transition: border 2s ease-in;
     
    &:hover {
        cursor: pointer;
        svg {
            transform: rotate(90deg);
        }
    }
`;

const LinkText = styled.span`
     background: -webkit-linear-gradient(164deg, rgba(224,255,44,0.9794292717086834) 1%, rgba(72,252,255,1) 49%, rgba(253,173,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${move} 10s linear infinite;
    background-size: 300%;
    font-family: iskra, sans-serif;
    font-weight: 400;
    font-size: 24px
    font-style: normal;
`;

export {
    IntroWrapper,
    ViewWorkLink,
    LinkText
}
