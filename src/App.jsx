import { Component } from "react";
import { useState } from 'react';
import { StickersList } from "./components/StickersList/StickersList.jsx";
import { Choice } from "./components/Choice/Choice.jsx";
import stickers from "./data/stickers.json";
import './App.css';

class App extends Component {
  state = {
    stiker: "",
  }

  choiceStiker = (newStiker) => {
    this.setState({stiker: {newStiker},})
  }

  render() {
    return (<>
    <Choice newStiker={this.state.stiker}/>
      <StickersList choicedStiker={this.choiceStiker} stickers={stickers}/>
    </>)
  }
}

export default App