import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <div className="flex justify-center">
      <Rule>
        <h1>How To Play Game</h1>
        <p>Select Any Number</p>
        <p>Click On Dice</p>
        <p>
          If Your Selected Number Come On Dice, You Get Point Equal To Your
          Selected Number{" "}
        </p>
        <p>But In Opposite Case You Will Loose Point Equal to Dice Number</p>
      </Rule>
    </div>
  );
};

export default Rules;
const Rule = styled.div`
  margin-top: 12px;
  max-width: 800px;
  background-color: #fbf1f1;
  padding: 20px;
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 14px;
  }
`;
