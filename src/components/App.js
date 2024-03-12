import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, changeMode] = useState(false);
  const appClass = mode ? "App dark" : "App light"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => changeMode(!mode)}>{!mode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
