import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import ParallaxContainer from "./ParallaxContainer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      {/*
        Available props:
          backgroundImage - Ex: import backgroundImage from "./assets/background.jpg",
          layers - Ex: const layers = [
                        {
                          name: "text",
                          image: import textImage from "./assets/text.png,
                          dataDepth: "0.1"
                        },
                        {
                          name: "astronaut",
                          image: import astronautImage from "./assets/astronaut.png,
                          dataDepth: "2"
                        }
                      ];
      */}
      <ParallaxContainer />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
