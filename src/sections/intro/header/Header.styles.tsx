import styled, {keyframes} from 'styled-components';

const move = keyframes`
     0% {background-position: right}
  50% {background-position: left}
  100% {background-position: right}
`;
const Title = styled.h1`
    background: -webkit-linear-gradient(164deg, rgba(224,255,44,0.9794292717086834) 1%, rgba(72,252,255,1) 49%, rgba(253,173,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${move} 25s linear infinite;
    animation-direction: alternate; 
    background-size: 300%;
    font-family: iskra, sans-serif;
    font-weight: 400;
    font-size: 32pt;
    font-style: normal;
`;

export {
    Title
}