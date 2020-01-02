import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { mapType, mapIngredient, types, ofType, withIngredients, ingredients } from "./data/items"

function MenuItem({ item: { name, price, ingredients }, onIngredientClick }) {
  return <div className="Item">
    <span className="Item__name">{name}</span>
    <span className="Item__ingredients">
      {ingredients && ingredients.map((ingredient) => {
        const name = mapIngredient(ingredient)
        const className = name.replace("å", "a").replace("ä", "a").replace("ö", "o").replace(" ", "")

        return <span key={name} className={"Item__ingredient " + className} onClick={() => onIngredientClick(ingredient)}>{name}</span>
      })}
    </span>
    <span className="Item__price">{price} kr</span>
  </div>
}

function App() {

  const [{ filtered_ingredients }, setState] = useState({ filtered_ingredients: [] })

  const addIngredient = (ingredient) => {
    if (!filtered_ingredients.includes(ingredient)) {
      setState({ filtered_ingredients: filtered_ingredients.concat(ingredient) })
    }
  }

  const removeIngredient = (ingredient) => {
    setState({ filtered_ingredients: filtered_ingredients.filter((i) => i !== ingredient) })
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Pizzeria 13</h1>
        <div>Telefon: <a href="tel://031138747">031-13 87 47</a></div>
        <div>Chalmersgatan 13, 411 35 Göteborg</div>
        <div>Måndag – Fredag 11.00 – 22.00</div>
        <div>Lördag – Söndag 12.00 – 22.00</div>
      </div>
      {filtered_ingredients.length > 0 && (
        <div className="filters">
          <h3>Ingrediensfilter</h3>
          <div className="Item__ingredients">
            {filtered_ingredients.map((ingredient) => {
              const name = mapIngredient(ingredient)
              return <span key={name} className={"Item__ingredient " + name} onClick={() => removeIngredient(ingredient)}>&times; {name}</span>
            })}
          </div>
        </div>
      )}
      <h2>{mapType(types.pizza)}</h2>
      {withIngredients(ofType(types.pizza), filtered_ingredients).map((item, index) => <MenuItem key={index} item={item} onIngredientClick={addIngredient} />)}
      <h2>{mapType(types.de_luxe_special)}</h2>
      {withIngredients(ofType(types.de_luxe_special), filtered_ingredients).map((item, index) => <MenuItem key={index} item={item} onIngredientClick={addIngredient} />)}
      <h2>{mapType(types.inbakad_pizza)}</h2>
      {withIngredients(ofType(types.inbakad_pizza), filtered_ingredients).map((item, index) => <MenuItem key={index} item={item} onIngredientClick={addIngredient} />)}
      <h2>{mapType(types.kebab)}</h2>
      {withIngredients(ofType(types.kebab), filtered_ingredients).map((item, index) => <MenuItem key={index} item={item} onIngredientClick={addIngredient} />)}
      <h2>{mapType(types.lasagne)}</h2>
      {withIngredients(ofType(types.lasagne), filtered_ingredients).map((item, index) => <MenuItem key={index} item={item} onIngredientClick={addIngredient} />)}
      <h2>{mapType(types.sallad)}</h2>
      {withIngredients(ofType(types.sallad), filtered_ingredients).map((item, index) => <MenuItem key={index} item={item} onIngredientClick={addIngredient} />)}
    </div>
  );
}

export default App;
