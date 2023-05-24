import { useEffect } from "react";

const data = [
  { name: "sandeep", age: 22, friends: "100+", clients: 2 },
  { name: "sanjay", age: 22, friends: "100+", clients: 4 },
  { name: "dhanush", age: 24, friends: "150+", clients: 3 },
  { name: "vikram", age: 25, friends: "150+", clients: 7 },
  { name: "jacob", age: 21, friends: "150+", clients: 12 },
];

function Table() {
  useEffect(() => {});

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Friends</th>
        <th>Clients</th>
      </tr>
      {data.map((dat) => (
        <tr>
          <td>{dat.name}</td>
          <td>{dat.age}</td>
          <td>{dat.friends}</td>
          <td>{dat.clients}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
