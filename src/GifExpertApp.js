import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categorries = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((categories) => {
          return <GifGrid key={categories} category={categories}/>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
