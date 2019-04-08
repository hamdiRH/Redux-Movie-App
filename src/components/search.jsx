import React from "react";
import { filterByName } from "../actions/index";
import { connect } from "react-redux";

import "../styles.css";

class find extends React.Component {
  render() {
    return (
      <input
        className="mr-5 w-50"
        type="text"
        placeholder="type a movie name to search"
        onChange={e => {
          this.props.filterByName(e.target.value);
        }}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterByName: film => dispatch(filterByName(film))
  };
}

const Findd = connect(
  null,
  mapDispatchToProps
)(find);
export default Findd;
