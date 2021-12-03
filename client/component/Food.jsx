import React from 'react';
import axios from 'axios';

const Food = (props) => {

  const eatFood = (e) => {
    axios.delete('/food', {
      data: {
        name: e.target.alt
      }
    })
      .then((result) => {
        console.log('deleted')
      }).catch((err) => {
        console.log(err)
      });
  }

  const foodBlocks = props.food.map((food) =>
    <img onClick={(e) => eatFood(e)} className="food" src={food.picture} alt={food.name} key={food.id}></img>
  )


  return (
    <React.Fragment>
      {foodBlocks}
    </React.Fragment>
  )
}

export default Food;