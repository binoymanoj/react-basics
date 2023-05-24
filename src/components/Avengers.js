function Ironman({ IronManObject }) {
  //   const { name } = props;
  return (
    <div>
      {IronManObject.name}-{IronManObject.realName}
    </div>
  );
}

function BlackWidow(props) {
  const { name } = props;
  return <div>{name}</div>;
}

function Hulk() {
  return <div>Hulk</div>;
}

function Avenge() {
  return <div>This is a default export</div>;
}

const MyString = "This is an exported string...";

export { Ironman, BlackWidow, Hulk, MyString };

export default Avenge;
