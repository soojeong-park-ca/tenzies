import { nanoid } from "nanoid";

export default function Die(props) {
  const styles = {
    background: props.isHeld ? "#59E391" : "black",
    color: props.isHeld ? "black" : "white",
  };

  function returnDots(num) {
    const dotsArr = [];
    for (let i = 0; i < num; i++) {
      dotsArr.push(
        <span key={nanoid()} className="dot">
          •
        </span>
      );
    }
    return dotsArr;
  }

  function displayDice() {
    return returnDots(props.value);
  }

  return (
    <div
      className="die-face"
      id={props.id}
      onClick={props.holdDice}
      style={styles}
    >
      {displayDice()}
    </div>
  );
}
