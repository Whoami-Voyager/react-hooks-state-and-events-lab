import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [catergory, setCategory] = useState("All")
  const filetredItems = items.filter((item) => {
    if (catergory === "All") {
      return true
    }
    return item.category === catergory
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => setCategory(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filetredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
