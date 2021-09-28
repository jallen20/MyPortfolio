import styled from 'styled-components';

const AboutWrapper = styled.div`
    text-align: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
`;

const Skills = styled.div`
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
`;

const Title = styled.h2`
    color: #252934;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 40px;
    font-style: normal;
    position: relative;
`;

const BioWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 40px;
`;

export {
    AboutWrapper,
    Skills,
    Title,
    BioWrapper
}