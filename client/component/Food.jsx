import React from 'react';

const Food = (props) => {

  const foodBlocks = props.food.map((food) =>
    <div key={food.id} className="food">{food.name}</div>
  )

  return (
    <React.Fragment>
      {foodBlocks}
    </React.Fragment>
  )
}

export default Food;