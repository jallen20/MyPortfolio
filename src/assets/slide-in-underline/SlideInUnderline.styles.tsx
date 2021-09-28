import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
    0% {
        transform: translateX(-1000%);
    }
    1% {
        opacity: 1;
    }
    80% {
        opacity: 1;
        transform: translateX(50%);
    }
    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`;
const SlideInWrapper = styled.div`
    width: 60px;
    height: 3px;
    margin: 10px auto;
    background: #252934;
    animation: ${slideIn} .5s ease-out;
    animation-delay: 2s;
    opacity: 0;
    animation-fill-mode: forwards;
`;

export {
    SlideInWrapper
}
