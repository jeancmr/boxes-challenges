import React from "react";
import { useState } from "react";
import boxes from "./assets/boxes";
import Box from "./Box";

function App() {
  const [allSquares, setAllSquare] = useState(boxes);
  console.log(allSquares);

  function toggle(id) {
    setAllSquare((prevState) => {
      const newSquares = [];

      for (let i = 0; i < prevState.length; i++) {
        const currentSquare = prevState[i];

        if (id === currentSquare.id) {
          const updateSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updateSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }

      return newSquares;
    });
  }

  const boxElements = allSquares.map((item) => (
    // <div className="box" key={item.id}></div>
    <Box on={item.on} key={item.id} toggle={() => toggle(item.id)} />
  ));

  return <main>{boxElements}</main>;
}

export default App;
