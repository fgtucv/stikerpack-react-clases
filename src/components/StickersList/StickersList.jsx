import { Component } from "react";
import { StickerListStyle } from "./StykersList.styled.js";
import { Sticker } from "../Sticker/Sticker.jsx";

export class StickersList extends Component {
  changedStiker = (newStiker) => {
    this.props.choicedStiker(newStiker)
  }

  render() {
    const { stickers } = this.props;
    return (
      <StickerListStyle>
        {stickers.map((sticker) => (
          <Sticker key={sticker.img} sticker={sticker} onClickFunction={this.changedStiker}/>
        ))}
      </StickerListStyle>
    );
  }
}