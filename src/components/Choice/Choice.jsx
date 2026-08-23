import { Component } from "react";
import { CohiceStyle } from "./Choice.styled.js";

export class Choice extends Component {
  render() {
    const { newStiker } = this.props.newStiker || {};

    return (
      <CohiceStyle>
        {newStiker || "Стікер не обрано"}
      </CohiceStyle>
    );
  }
}