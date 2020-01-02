import React, { useState } from "react"

import { mapType, mapIngredient, types, ofType, withIngredients } from "./data/items"
import { useLocalStorage } from "./hooks/localStorage"

function MenuItem({ item, isFavorite, onFavoriteClick, onIngredientClick }) {
  const { number, name, price, ingredients } = item

  return (
    <div className="Item">
      <div className="Item__top">
        <span className="Item__name">
          {number ? number + ". " + name : name}{" "}
          <span
            className={"Item__favorite" + (isFavorite ? " favorite" : "")}
            onClick={() => onFavoriteClick(item)}></span>
        </span>
        <span className="Item__price">{price} kr</span>
      </div>
      <span className="Item__ingredients">
        {ingredients &&
          ingredients.map(ingredient => {
            const name = mapIngredient(ingredient)

            return (
              <span
                key={name}
                className="Item__ingredient"
                onClick={() => onIngredientClick(ingredient)}
                title={"Filtrera på " + name}>
                {name}
              </span>
            )
          })}
      </span>
    </div>
  )
}

function App() {
  const [{ filtered_ingredients }, setState] = useState({ filtered_ingredients: [] })
  const [favorites, setFavorites] = useLocalStorage("favorites", [])

  const addIngredient = ingredient => {
    if (!filtered_ingredients.includes(ingredient)) {
      setState({ filtered_ingredients: filtered_ingredients.concat(ingredient) })
    }
  }

  const removeIngredient = ingredient => {
    setState({ filtered_ingredients: filtered_ingredients.filter(i => i !== ingredient) })
  }

  const toggleFavorite = item => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter(i => i !== item))
    } else {
      setFavorites(favorites.concat(item))
    }
  }

  const isFavorite = item => {
    return favorites.includes(item)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Pizzeria 13</h1>
        <div>
          Telefon: <a href="tel://031138747">031-13 87 47</a>
        </div>
        <div>Chalmersgatan 13, 411 35 Göteborg</div>
        <div>Måndag – Fredag 11.00 – 22.00</div>
        <div>Lördag – Söndag 12.00 – 22.00</div>
      </div>
      {filtered_ingredients.length > 0 && (
        <div className="filters">
          <h3>Ingrediensfilter</h3>
          <div className="Item__ingredients">
            {filtered_ingredients.map(ingredient => {
              const name = mapIngredient(ingredient)
              return (
                <span
                  key={name}
                  className="Item__ingredient"
                  onClick={() => removeIngredient(ingredient)}
                  title={"Ta bort " + name + " från filter"}>
                  &times; {name}
                </span>
              )
            })}
          </div>
        </div>
      )}
      {favorites.length > 0 && (
        <div>
          <h2>Favoriter</h2>
          {withIngredients(favorites, filtered_ingredients).map(item => (
            <MenuItem
              key={item.name}
              item={item}
              onIngredientClick={addIngredient}
              isFavorite
              onFavoriteClick={toggleFavorite}
            />
          ))}
        </div>
      )}
      <div>
        <h2>{mapType(types.pizza)}</h2>
        {withIngredients(ofType(types.pizza), filtered_ingredients).map(item => (
          <MenuItem
            key={item.name}
            item={item}
            onIngredientClick={addIngredient}
            isFavorite={isFavorite(item)}
            onFavoriteClick={toggleFavorite}
          />
        ))}
      </div>
      <div>
        <h2>{mapType(types.inbakad_pizza)}</h2>
        {withIngredients(ofType(types.inbakad_pizza), filtered_ingredients).map(item => (
          <MenuItem
            key={item.name}
            item={item}
            onIngredientClick={addIngredient}
            isFavorite={isFavorite(item)}
            onFavoriteClick={toggleFavorite}
          />
        ))}
      </div>
      <div>
        <h2>{mapType(types.de_luxe_special)}</h2>
        {withIngredients(ofType(types.de_luxe_special), filtered_ingredients).map(item => (
          <MenuItem
            key={item.name}
            item={item}
            onIngredientClick={addIngredient}
            isFavorite={isFavorite(item)}
            onFavoriteClick={toggleFavorite}
          />
        ))}
      </div>
      <div>
        <h2>{mapType(types.kebab)}</h2>
        {withIngredients(ofType(types.kebab), filtered_ingredients).map(item => (
          <MenuItem
            key={item.name}
            item={item}
            onIngredientClick={addIngredient}
            isFavorite={isFavorite(item)}
            onFavoriteClick={toggleFavorite}
          />
        ))}
      </div>
      <div>
        <h2>{mapType(types.lasagne)}</h2>
        {withIngredients(ofType(types.lasagne), filtered_ingredients).map(item => (
          <MenuItem
            key={item.name}
            item={item}
            onIngredientClick={addIngredient}
            isFavorite={isFavorite(item)}
            onFavoriteClick={toggleFavorite}
          />
        ))}
      </div>
      <div>
        <h2>{mapType(types.sallad)}</h2>
        {withIngredients(ofType(types.sallad), filtered_ingredients).map(item => (
          <MenuItem
            key={item.name}
            item={item}
            onIngredientClick={addIngredient}
            isFavorite={isFavorite(item)}
            onFavoriteClick={toggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default App
