import React from "react";
import AddMovie from "./AddMovie";
import { connect } from "react-redux";

import "../styles.css";

const getVisibleMovies = (Films, Findbyname, Findbyrating) => {
  return Films.filter(
    el =>
      el.title.toLowerCase().includes(Findbyname.toLowerCase()) &&
      el.stars >= Findbyrating
  );
};

let Rate = stars => {
  let starsRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starsRating.push(
        <i key={i} className="fas fa-star" style={{ color: "red" }} />
      );
    } else {
      starsRating.push(
        <i key={i} className="fas fa-star" style={{ color: "black" }} />
      );
    }
  }
  return <div>{starsRating}</div>;
};

const MovieList = ({ Films, Findbyrating, Findbyname }) => {
  return (
    <div className="filmlist">
      {getVisibleMovies(Films, Findbyname, Findbyrating).map(films => (
        <div key={films.id} className="filmborder border border-primary">
          <div>
            <img className="imgfilm" src={films.img} />
            <div className="filmrate border border-primary">
              {Rate(films.stars)}
            </div>
          </div>
          <div className="filmName">
            {films.title} - {films.year}
          </div>
        </div>
      ))}
      <div>
        <AddMovie />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    Films: state.arr,
    Findbyrating: state.Findbyrating,
    Findbyname: state.Findbyname
  };
};

const List = connect(
  mapStateToProps,
  null
)(MovieList);
export default List;
