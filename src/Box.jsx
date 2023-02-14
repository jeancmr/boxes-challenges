export default function Box({ on, toggle }) {
  const styles = {
    backgroundColor: on ? "#222" : "transparent",
  };

  return <div onClick={toggle} style={styles} className="box"></div>;
}
