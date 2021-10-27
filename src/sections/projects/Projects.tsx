import React, {useEffect, useState} from 'react';
import {buildPoints} from "./util";
import {Curve, ProjectsWrapper, ProjectTiles} from "./Projects.styles";
import WavyBackground from "../../assets/wavy-background";
import ImageTile from "../../components/image-tile";
import {IMG_BASE_PATH} from "../../constants";

const Projects = () => {
    const [points, setPoints] = useState<number[][]>([]);
    const [duration, setDuration] = useState(10);
    
    const data = [
        {
            url: `${IMG_BASE_PATH}/carvana.png`,
            content: 'Carvana'
        },
        {
            url: `${IMG_BASE_PATH}/carvana.png`,
            content: "Siemens"
        },
        {
            url: `${IMG_BASE_PATH}/manh-ulc.jpeg`,
            content: "Manhattan Associates"
        },
        {
            url: `${IMG_BASE_PATH}/carvana.png`,
            content: "Revamped Denim"
        }
    ];
    
    const imageTiles = data.map(dat => <ImageTile imgUrl={dat.url} content={dat.content} />);
    
    return(
        <ProjectsWrapper>
            <ProjectTiles>
                {imageTiles}
            </ProjectTiles>
        </ProjectsWrapper>
)};
export default Projects;
