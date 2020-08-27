import React from "react";
import "./App.css";
import UnderlinedParagraph from "./components/UnderlinedParagraph";
import ColoredSpan from "./components/ColoredSpan";

function App() {
  return (
    <div className="App">
      <UnderlinedParagraph color="white">nothing here at the moment.</UnderlinedParagraph>
      <UnderlinedParagraph color="white">expect something soon.</UnderlinedParagraph>
      <ColoredSpan bold color="white">
      i'm blue, da bo dee da bo dah
      </ColoredSpan>
    </div>
  );
}

export default App;
