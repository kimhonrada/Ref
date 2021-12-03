import React from 'react';

const Food = (props) => {

  const eatFood = (e) => {
    console.log(`you clicked this ${e.target.alt}`)
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