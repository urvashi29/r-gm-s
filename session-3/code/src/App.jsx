import React, { useState } from "react";
import Products from "./Products";

const App = () => {
  let count = 0;
  // [state variable, method to update it ] = useState("initial value")
  const [firstName, setFirstName] = useState("Alina");
  const [age, setAge] = useState(20);
  const [isVerfied, setIsVerified] = useState(true);
  const [obj, setObj] = useState(null);
  const [person, setPerson] = useState({
    userName: "alex",
    id: 2,
    city: "Banglore",
  });

  const [colors, setColors] = useState([
    "pink",
    "green",
    "red",
    "blue",
    "white",
  ]);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alaya",
    },
    {
      id: 2,
      name: "Alishka",
    },
  ]);

  const [add, setAdd] = useState(function () {});

  const handleUpdate = () => {
    setFirstName("Alaya");
    setPerson({ ...person, city: "Pune" });
    setColors([...colors, "orange"]);

    // update array of object
    let emps = [...employees];
    emps[1].name = "Harry";
    setEmployees(emps);

    count = 200;
    console.log(count);
  };

  return (
    <>
      {/* <p>{count}</p>
      <p>FirstName: {firstName}</p>
      <p>Age{age}</p>
      <p>
        {isVerfied} && {person.userName} {person.city}
      </p>
      <p>
        {colors.map((color) => (
          <p>{color}</p>
        ))}
      </p>

      <p>
        {employees.map((emp) => (
          <p>{emp.name}</p>
        ))}
      </p> */}

      <button onClick={() => setAge(30)}>Age</button>
      <button onClick={handleUpdate}>Update</button>
      <Products />
    </>
  );
};

export default App;

// Task (using function)
// create array of products: https://dummyjson.com/products and displat it in the form of cards.
// create name, age state variable. once name is updated: "display name is update" in toast message
