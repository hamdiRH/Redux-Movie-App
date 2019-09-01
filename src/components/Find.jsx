import React from "react";

import FindRating from "./FindRating";
import Search from "./search";

import "../styles.css";

let find = () => {
  return (
    <div>
      <div className="serach">
        <Search />
        <FindRating />
      </div>
    </div>
  );
};

export default find;
