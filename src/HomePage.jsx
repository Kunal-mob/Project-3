// import React from "react";

const HomePage = ({ togglefunc }) => {
  return (
    <div className="flex items-center mt-20 max-w-6xl gap-8 m-auto">
      <img
        style={{ height: "410px" }}
        src="../public/Dices.png"
        alt=""
      />
      <div className="flex min-w-56 flex-col gap-5 items-end">
        <h1 className=" text-center rounded  text-8xl font-bold whitespace-nowrap">
          DICE GAME
        </h1>
        <button
          onClick={togglefunc}
          style={{ fontSize: "16px" }}
          className="w-56 border-none hover:bg-white hover:border-black hover:border-y-2 hover:border-x-2 hover:border-solid hover:text-black text-center rounded py-3 px-5 bg-black text-white "
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
