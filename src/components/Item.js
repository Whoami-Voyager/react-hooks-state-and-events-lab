import React, { useState } from "react";



function Item({ name, category }) {

  const [item, shopping] = useState(false)

  const listClass = item ? "in-cart" : ""
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={item ? "remove" : "add"} onClick={() => shopping(!item)}>
        {item ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}





export default Item;
