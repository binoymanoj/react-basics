import { useState, useMemo } from "react";

function getRandomNumber() {
  let randomNumber = "";
  for (let index = 0; index < 1000000000; index++) {
    if (index === 999999999) {
      randomNumber = Math.random();
    }
  }
  return randomNumber;
}

function Memo() {
  const [reRender, setReRender] = useState();
  const [changeIt, setChangeIt] = useState();

  const randomNum = useMemo(() => getRandomNumber(), [changeIt]);

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={() => setReRender(Math.random())}>Rerender</button>
      <button onClick={() => setChangeIt(Math.random())}>Changeit</button>
    </div>
  );
}

export default Memo;
