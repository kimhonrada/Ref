import React from 'react';

const Food = (props) => {

  const foodBlocks = props.food.map((food) =>
    // <div key={food.id} className="food"><img src={food.url} alt={food.name}></img></div>
    <img className="food" src={food.picture} alt={food.name} key={food.id}></img>
  )

  return (
    <React.Fragment>
      {foodBlocks}
    </React.Fragment>
  )
}

export default Food;