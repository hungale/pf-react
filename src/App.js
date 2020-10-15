import React from "react";
import "./App.css";
import UnderlinedParagraph from "./components/UnderlinedParagraph";
import ColoredSpan from "./components/ColoredSpan";
import { Monogram, FlexContainer } from "./components";
import me from "./static/me.jpg";
import microblog from "./static/microblog.png";
import warbler from "./static/warbler.png";
import jobly from "./static/jobly.png";
import { ReactComponent as LILogo } from "./static/linkedin.svg";
import { ReactComponent as GHLogo } from "./static/github.svg";

const skillList = [
  "JavaScript (ES6)",
  "Python",
  "HTML & CSS",
  "React",
  "Express.js",
  "Flask",
  "Node.js",
  "PostgreSQL",
];

const renderList = (list) => list.map((el, idx) => <li key={idx}>→ {el}</li>);

const App = () => {
  return (
    <div className="App">
      <div className="hero break">
        <div className="grid">
          <div className="main-width">
            <Monogram>ah</Monogram>
            <FlexContainer>
              <ColoredSpan className="text">
                <p>
                  Hey there, I'm <ColoredSpan color="green">Alex</ColoredSpan>.
                </p>
                <p>I'm a full-stack developer.</p>
                <p>
                  I'm a graduate of
                  <a href="https://cse.ucsd.edu/"> UC San Diego </a>
                  and of
                  <a href="https://www.rithmschool.com/"> Rithm School</a>.
                </p>
              </ColoredSpan>
            </FlexContainer>
          </div>
          <img className="grid-img-sm" src={me} alt="me"></img>
        </div>
      </div>

      <div className="about break">
        <ColoredSpan className="title-text ">about</ColoredSpan>
        <div className="dividing-line"></div>
        <div className="blue circle"></div>
      </div>

      <div className="about text grid">
        <FlexContainer className="main-width">
          <ColoredSpan>
            <p>
              I'm really into data visualization and currently looking for
              <ColoredSpan color="green"> full-stack </ColoredSpan>
              and
              <ColoredSpan color="green"> frontend </ColoredSpan>
              developer opportunities.
            </p>
            <p>
              In my free time, I enjoy learning Japanese and playing video
              games.
            </p>
            <p>Below are some technologies I use:</p>
            <ul>{renderList(skillList)}</ul>
          </ColoredSpan>
        </FlexContainer>
      </div>

      <div className="project break">
        <ColoredSpan className="title-text">projects</ColoredSpan>
        <div className="dividing-line"></div>
        <div className="rotated-square"></div>
      </div>

      <div className="project text">
        <FlexContainer>
          <ColoredSpan>
            <p>Here are some projects I've worked on:</p>
          </ColoredSpan>
        </FlexContainer>
      </div>

      <div className="left-align">
        <div className="grid">
          <img className="grid-img-md" src={microblog} alt="microblog"></img>
        </div>
      </div>

      <div className="project text mt">
        <FlexContainer>
          <ColoredSpan>
            <UnderlinedParagraph className="title-text project-title">
              <a href="https://jobly.hungale.com/">Jobly</a>
            </UnderlinedParagraph>
            <div className="mt">→ React, HTML & CSS, Express.js, Node.js</div>
            <p>
              A small and simple anonymous personal blog site with simple CRUD
              functionality on posts. Includes the ability to rate posts and put
              comments on them.
            </p>
            <p>
              Frontend written in
              <ColoredSpan color="green"> React</ColoredSpan>, backend in
              <ColoredSpan color="green"> Express.js</ColoredSpan>,
              <ColoredSpan color="green"> Redux</ColoredSpan>, with thunks was
              used along with
              <ColoredSpan color="green"> Axios </ColoredSpan>
              to make calls to API endpoints on our backend.
            </p>
          </ColoredSpan>
        </FlexContainer>
      </div>

      <div className="left-align">
        <div className="grid">
          <img className="grid-img-md" src={warbler} alt="warbler"></img>
        </div>
      </div>

      <div className="project text mt">
        <FlexContainer>
          <ColoredSpan>
            <UnderlinedParagraph className="title-text project-title">
              Warbler
            </UnderlinedParagraph>
            <div className="mt">→ Python, Flask, SQLAlchemy, Jinja2</div>
            <p>A Twitter clone. Built with Python and SQLAlchemy.</p>
            <p>
              Routes and views written in Python Flask. Forms and validation
              with Flask WTForms. Uses Jinja2 templating to serve HTML via
              server-side rendering.
            </p>
          </ColoredSpan>
        </FlexContainer>
      </div>

      <div className="left-align">
        <div className="grid">
          <img className="grid-img-md" src={jobly} alt="jobly"></img>
        </div>
      </div>

      <div className="project text mt">
        <FlexContainer>
          <ColoredSpan>
            <UnderlinedParagraph className="title-text project-title">
              <a href="https://jobly.hungale.com/">Jobly</a>
            </UnderlinedParagraph>
            <div className="mt">→ React, PostgreSQL, Express</div>
            <p>
              A job board web application. Frontend written in React, backend
              with Node.js, Express.js and PostgreSQL.
            </p>
            <p>
              Authentication done with JSON Web Tokens. Responsible for writing
              the frontend. Wrote a different version of the backend in Express.
            </p>
          </ColoredSpan>
        </FlexContainer>
      </div>

      <div className="contact break">
        <ColoredSpan className="title-text">contact</ColoredSpan>
        <div className="dividing-line"></div>
        <div className="teal circle"></div>
      </div>

      <div className="about text">
        <FlexContainer>
          <ColoredSpan>
            <p>Thanks for visiting my site!</p>
            <p>
              Design: Alex+
              <a href="https://cdcom5.carterd.now.sh/">Carter Duong</a>
            </p>
            <p>You can also find me on GitHub and LinkedIn:</p>
          </ColoredSpan>
        </FlexContainer>
      </div>

      <div className="footer">
        <a href="https://github.com/hungale">
          <GHLogo></GHLogo>
        </a>
        <a href="https://www.linkedin.com/in/hungale/">
          <LILogo />
        </a>
      </div>
    </div>
  );
};

export default App;
