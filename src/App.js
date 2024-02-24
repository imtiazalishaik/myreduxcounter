import React from "react";
import { connect } from "react-redux";
import { IncAction, DecAction, ZeroAction } from "./actions";

const App = ({ local_variable, IncAction, DecAction, ZeroAction }) => {
  return (
    <center>
      <h1>{local_variable}</h1>
      <button onClick={() => IncAction(1)}>Increment</button>
      <button onClick={() => ZeroAction(0)}>Zero</button>
      <button onClick={() => DecAction(1)}>Decrement</button>
    </center>
  );
};

const mapStateToProps = (state) => ({
  local_variable: state,
});
export default connect(mapStateToProps, { IncAction, DecAction, ZeroAction })(
  App
);
