import React, { Component } from "react";
import react from '../../../images/react.png'
import Board from '../../Board/Board'
import cardTop from '../../../images/blank.png'
import cat from '../../../images/cat.jpg'
import Timer from './timer'


// import "./styles.css";
function setupCards() {
  let id = 1
  function importAll(r) {
    return r.keys().map(r);
  }

  const imagesPoke = importAll(require.context('../themes/images/pokemon-images', false, /\.(png|jpe?g|svg)$/));
  const imagesSuper = importAll(require.context('../themes/images/superhero-images', false, /\.(png|jpe?g|svg)$/));

  const themes = {
    "default": [{
      type: 'react',
      cardImage: react
    }, {
      type: 'cat',
      cardImage: cat
    }]
  }

  themes['pokemon'] = Object.keys(imagesPoke).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      cardTop,
      cardImage: imagesPoke[item],
      flipped: false,
    })
    // console.log(getCard())
    return [...result, getCard()]
  })
  id = 0;
  themes['super'] = Object.keys(imagesSuper).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      cardTop,
      cardImage: imagesSuper[item],
      flipped: false,
    })
    // console.log(getCard())
    return [...result, getCard()]
  })
  const cards = []
  id = 0;
  themes['super'].forEach(image => {
    let card = {
      id: id,
      type: image.type,
      cardTop,
      cardImage: image.cardImage,
      flipped: false
    }
    id++;
    cards.push(card)
    console.log(card)
    card = JSON.parse(JSON.stringify(card))
    card.id = id
    cards.push(card)
    id++
  });
  return suffle(cards)
}


function suffle(cardList) {
  let len = cardList.length
  for (let i = 0; i < len; i++) {
    let randomCard = Math.floor(Math.random() * len)
    let copyCurrent = cardList[i]
    let copyRandom = cardList[randomCard]
    cardList[i] = copyRandom
    cardList[randomCard] = copyCurrent
  }

  return cardList
}

export default class index extends Component {
  render() {
    const cards = setupCards()
    return (
      <div className="App">
        <Timer active={true} />
        <Board cards={cards} />
      </div>
    )
    // return <div>Main Game!</div>;
  }
}




