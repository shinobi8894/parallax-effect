import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "./assets/background.jpg";

import textImage from "./assets/text.png";
import astronautImage from "./assets/astronaut.png";
import planet1Image from "./assets/planet1.png";
import planet2Image from "./assets/planet2.png";
import rocketImage from "./assets/rocket.png";

const layers = [
  {
    name: "text",
    image: textImage,
    dataDepth: "0.1"
  },
  {
    name: "astronaut",
    image: astronautImage,
    dataDepth: "2"
  },
  {
    name: "planet1",
    image: planet1Image,
    dataDepth: "1"
  },
  {
    name: "planet2",
    image: planet2Image,
    dataDepth: "-1"
  },
  {
    name: "rocket",
    image: rocketImage,
    dataDepth: "0.5"
  }
];

const Container = Styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;
	background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    <Container backgroundImage={backgroundImage}>
      <div id="scene">
        {layers.map((l, index) => (
          <img
            key={index}
            data-depth={l.dataDepth}
            src={l.image}
            alt={l.name}
          />
        ))}
      </div>
    </Container>
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string
    })
  )
};

ParallaxImagesContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers
};

export default ParallaxImagesContainer;
