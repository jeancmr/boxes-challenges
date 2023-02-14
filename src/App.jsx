import React from "react";
import { useState } from "react";
import boxes from "./assets/boxes";
import Box from "./Box";

function App() {
  const [allSquares, setAllSquare] = useState(boxes);
  console.log(allSquares);

  function toggle(id) {
    setAllSquare((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const boxElements = allSquares.map((item) => (
    // <div className="box" key={item.id}></div>
    <Box on={item.on} key={item.id} toggle={() => toggle(item.id)} />
  ));

  return <main>{boxElements}</main>;
}

export default App;
