import React from "react";
// import BlackWidow from "./components/BlackWidow";
// import Ironman from "./components/Ironman";
// import Hulk from "./components/Hulk";
import Avenge, {
  BlackWidow,
  Ironman,
  Hulk,
  MyString,
} from "./components/Avengers";
import Counter from "./components/Counter";
import Table from "./components/Table";
import Memo from "./components/Memo";
import CounterRed from "./components/CounterRed";
import useReact from "./components/hooks/useReact";
import MyInput from "./components/MyInput";

const greet = "hello react user";

const IronManObject = {
  name: "Iron man",
  realName: "RDJ",
};

function App() {
  const { useState, useEffect } = useReact();
  const [state, setstate] = useState("Sandeep");

  console.log(state);
  useEffect(() => {
    setstate("Honey");
  }, []);

  return (
    <div>
      <h1>{greet}</h1>
      <Ironman IronManObject={IronManObject} />
      <BlackWidow name="Iam Black Widow" />
      <Hulk />
      <Avenge />
      <h2>{MyString}</h2>
      <Counter />
      <Table />
      <Memo />
      <CounterRed />
      <h1>{state}</h1>
      <h1>custom hooks</h1>
      <MyInput />
    </div>
  );
}

export default App;
