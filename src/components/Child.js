import React from 'react'

function Child({ props }) {
  return props.map (({ id, name, price, image, quantity }) =>(
    <div key={id}>
        <ol>
            <h4>Name = {name}</h4>
            <p>Price = ${price}</p>
            <img src={image} />
            <p>quantity = {quantity}</p>
        </ol>
    </div>
  ));
}

export default Child