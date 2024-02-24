import React from "react";
import { connect } from "react-redux";
import { IncAction, DecAction } from "./actions";

const App = ({ local_variable, IncAction, DecAction }) => {
  return (
    <center>
      <h1>{local_variable}</h1>
      <button onClick={() => IncAction(1)}>Increment</button>
      <button onClick={() => DecAction(2)}>Decrement</button>
    </center>
  );
};

const mapStateToProps = (state) => ({
  local_variable: state,
});
export default connect(mapStateToProps, { IncAction, DecAction })(App);
