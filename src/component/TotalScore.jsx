import styled from "styled-components";

const TotalScore = ({ Score }) => {
  return (
    <Scorediv>
      <h1>{Score}</h1>
      <p>Total Score</p>
    </Scorediv>
  );
};
export default TotalScore;

const Scorediv = styled.div`
  text-align: center;
  max-width: 200px;
  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 700;
  }
  p {
    font-weight: 500;
    font-size: 24px;
  }
`;
