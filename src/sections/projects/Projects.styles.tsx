import styled from 'styled-components';

const ProjectsWrapper = styled.div`
.shadow {
  -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  /* Similar syntax to box-shadow */
}
`;

const Curve = styled.polyline`
filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
`;

const ProjectTiles = styled.div`
	display: flex;
	width: 100%;
	padding: 40px;
	justify-between: space-around;
`;

export {
	ProjectsWrapper,
	Curve,
	ProjectTiles
}
