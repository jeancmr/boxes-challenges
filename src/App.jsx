import React from "react";
import { useState } from "react";
import boxes from "./assets/boxes";
import Box from "./Box";

function App() {
  const [allSquares, setAllSquare] = useState(boxes);
  console.log(allSquares);

  const boxElements = allSquares.map((item) => (
    // <div className="box" key={item.id}></div>
    <Box on={item.on} key={item.id} />
  ));

  return <main>{boxElements}</main>;
}

export default App;
