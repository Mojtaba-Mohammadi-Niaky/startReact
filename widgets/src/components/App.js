/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
// import Accordion from "./Accordion";
// import Search from './Search';
// import DropDown from "./DropDown";
import Translate from "./Translate";

// const items = [
//     {
//         title:'Whay is React?',
//         content:'React is front end javascript framework'
//     },
//     {
//         title:'Why use React?',
//         content:'React is a favorite JS library among engineers'
//     },
//     {
//         title:'How do you use React',
//         content:'You use React by creating components'
//     }
// ]

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade Of Blue",
    value: "blue",
  },
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div> 
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}

      {/* <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle Dropdown
      </button>
      {showDropDown ? (
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} */}


      <Translate />
    </div>
  );
};
