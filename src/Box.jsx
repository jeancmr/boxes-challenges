import { useState } from "react";
export default function Box(props) {
  const [on, setOn] = useState(props.on);
  console.log(on);

  const styles = {
    backgroundColor: on ? "#222" : "transparent",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return <div onClick={toggle} style={styles} className="box"></div>;
}
