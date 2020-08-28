import React from "react";
import "./App.css";
import UnderlinedParagraph from "./components/UnderlinedParagraph";
import ColoredSpan from "./components/ColoredSpan";
import { Monogram, FlexContainer } from "./components";

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
      <FlexContainer width="80%">
        <Monogram>ah</Monogram>
      </FlexContainer>
    </div>
  );
};

export default App;
