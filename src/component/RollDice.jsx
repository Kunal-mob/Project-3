import styled from "styled-components";
import { useState } from "react";
const RollDice = ({showRule ,resetScore, diceFace, rollTheDice, setshowRule }) => {
  const Dices = [
    "https://game-icons.net/icons/000000/transparent/1x1/delapouite/dice-six-faces-one.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_2-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_3-1024.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_4-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png",
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_6-512.png",
  ];
  return (
    <DiceContainer>
      <div
        className="Dice"
        onClick={() => {
          rollTheDice();
        }}
      >
        <img src={Dices[diceFace]} alt="" />
      </div>
      <p>click on Dice to roll</p>
      <div className="flex flex-col gap-4 mt-5">
        <button
          onClick={resetScore}
          style={{
            fontSize: "16px",
            transition: "0.4s background ease-in ",
            hover: "0.3s background ease-in",
          }}
          className="w-56  hover:bg-black border-black border-y-2 border-x-2 border-solid hover:text-white text-center rounded py-3 px-5 bg-white text-black "
        >
          Reset Game
        </button>
        <button
        onClick={()=>{setshowRule((prev)=>!prev)}}
          style={{
            fontSize: "16px",
            transition: "0.4s background ease-in ",
            hover: "0.3s background ease-in",
          }}
          className="w-56 border-none hover:bg-white hover:border-black hover:border-y-2 hover:border-x-2 hover:border-solid hover:text-black text-center rounded py-3 px-5 bg-black text-white "
        >
          {showRule?"Hide":"Show"} Rule
        </button>
      </div>
     
    
      
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  div > img {
    height: 200px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
  }
  .Dice {
    cursor: pointer;
  }
`;

