/* eslint-disable import/no-anonymous-default-export */
import React from "react";
// import Accordion from "./Accordion";
import Search from './Search';

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

export default () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
};
