import { Component } from "react";
import { StickerStyle } from "./Sticker.styled.js";
import { Choice } from "../Choice/Choice.jsx"

export class Sticker extends Component {
  render() {
    const { img, label } = this.props.sticker;

    return (
      <StickerStyle onClick={() => {this.props.onClickFunction(label)}}>
        <img src={img} alt={label} />
        <h3>{label}</h3>
      </StickerStyle>
    );
  }
}