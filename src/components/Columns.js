import React from "react";

function Columns() {
  const items = [
    {
      id: 1,
      title: "Nitin",
    },
    {
      id: 2,
      title: "Naveen",
    },
  ];
  return (
    <>
      {/* {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1> Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))} */}
      <td>name</td>
      <td>Nitin</td>
    </>
  );
}

export default Columns;
