import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const nums = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);

  return (
    <div>
      <p className="text-red-600 font-medium text-xl text-end h-7">{error}</p>
      <div className="flex mt-2 gap-6">
        {nums.map((val, idx) => (
          <Box
            isSelected={val === selectedNumber}
            onClick={() => {
              setSelectedNumber(val);
              setError("");
            }}
            key={idx}
          >
            {val}
          </Box>
        ))}
      </div>
      <p className="text-end text-2xl font-semibold mt-4"> NumberSelector</p>
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  cursor: pointer;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
