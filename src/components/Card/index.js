import React from 'react'
import propTypes from 'prop-types'
import './card.css'


export default function Card({ handleClick, id, type, flipped, height, width }) {
  return <div
    className={`flip-container ${flipped ? 'flipped' : ''}`} 
    style={{
      width, height
    }}
    onClick={() => handleClick(id)}
    >
    <div className="flipper">
      <img alt=""
        style={{
          height, width
        }}
        className={flipped ? 'front' : 'back'}
        src={flipped ? `/img/${type}.png` : `/img/cat2.jpeg`}
        />
      
    </div>
  </div>
}

Card.propTypes = {
  handleClick: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  flipped: propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
  height: propTypes.number.isRequired,
  width: propTypes.number.isRequired
}