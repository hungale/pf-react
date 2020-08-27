import React from "react";
import "./App.css";
import UnderlinedParagraph from "./components/UnderlinedParagraph";
import ColoredSpan from "./components/ColoredSpan";
import { Monogram } from "./components";

const App = () => {
  return (
    <div className="App">
      <Monogram bg="seagreen">ah</Monogram>

      <UnderlinedParagraph color="white">
        nothing here at the moment.
      </UnderlinedParagraph>
      <UnderlinedParagraph color="white">
        expect something soon.
      </UnderlinedParagraph>
      <ColoredSpan bold color="seagreen">
        i'm blue, da bo dee da bo dah
      </ColoredSpan>
      <div className="flex-container">
        <Monogram>ah</Monogram>
      </div>
    </div>
  );
};

export default App;
