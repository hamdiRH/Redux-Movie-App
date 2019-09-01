import React from "react";
import { connect } from "react-redux";
import { filterByName } from "../actions/index";
import "../styles.css";

class find extends React.Component {
  render() {
    return (

      <div class="search-block">
        <input type="search"
          placeholder="type a movie name "
          onChange={e => {
            this.props.filterByName(e.target.value);
          }}></input>
        <div class="icon"></div>
      </div>
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
