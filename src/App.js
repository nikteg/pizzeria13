import React from 'react';
import logo from './logo.svg';
import './App.css';

import { pizzas, mapIngredient } from "./data/items"

function App() {
  return (
    <div className="App">
      {pizzas.map(({ name, price, ingredients }) => <p>{name}: {price} kr ({ingredients.map(mapIngredient).join(", ")})</p>)}
    </div>
  );
}

export default App;
