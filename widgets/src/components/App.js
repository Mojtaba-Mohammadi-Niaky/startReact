/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import DropDown from "./DropDown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "Whay is React?",
    content: "React is front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropedown">
        <DropDown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
