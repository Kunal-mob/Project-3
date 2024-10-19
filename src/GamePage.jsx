// import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./component/TotalScore";
import NumberSelector from "./component/NumberSelector";
import RollDice from "./component/RollDice";
import Rules from "./component/Rules";
const GamePage = () => {
  const [error, setError] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [Score, setScore] = useState(0);
  const [diceFace, setdiceFace] = useState(0);
  const [showRule, setshowRule] = useState(false);

  const resetScore = () => {
    setScore(0);
    setSelectedNumber();
    setError();
  };
  const rollTheDice = () => {
    if (!selectedNumber) {
      setError("You Have Not Selected Any Number");
    } else {
      let num = Math.floor(Math.random() * 6);
      setdiceFace(num);
      console.log(num + 1);

      if (num + 1 == selectedNumber) {
        setScore(Score + selectedNumber);
      } else {
        setScore(Score - num-1);
      }
      setSelectedNumber(undefined);
    }
  };

  return (
    <Maincontainer>
      <div className="top_section">
        <TotalScore Score={Score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div>
        <RollDice
        showRule={showRule}
        setshowRule={setshowRule}
        resetScore={resetScore}
          setScore={setScore}
          setdiceFace={setdiceFace}
          diceFace={diceFace}
          rollTheDice={rollTheDice}
        />
      { showRule && <Rules/> }
      </div>
    </Maincontainer>
  );
};
export default GamePage;

const Maincontainer = styled.div`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    padding-top: 40px;
  }
`;
