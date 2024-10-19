import { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
function App() {
  const [showPage, setshowPage] = useState(false);
  const togglePage = () => {
    setshowPage((prev) => !prev);
  };
  return <>{showPage ? <GamePage /> : <HomePage togglefunc={togglePage} />}</>;
}

export default App;
