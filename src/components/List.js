import React from "react";
import ChildList from "./ChildList";

function List() {
  const names = ["bruce", "Messi", "Rooney","bruce","Messi"];
  const personList = [
    {
      name: "Nitin",
      id: 10,
      city: "Madras",
    },
    {
      name: "KAka",
      id: 11,
      city: "Rio",
    },
    {
      name: "Messi",
      id: 12,
      city: "Barca",
    },
  ];

  const nameList = names.map((name, id) => <ChildList key={id} name={name} />);
  //   const persons = personList.map((person) => (
  //     <ChildList key={person.id} person={person} />
  //   ));

  return <div>{nameList}</div>;
}
export default List;
