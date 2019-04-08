import React from "react";
import "../styles.css";
import FindRating from "./FindRating";
import Search from "./search";
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
