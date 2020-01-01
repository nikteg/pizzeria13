const types = Object.freeze({
  "pizza": 1,
  "folded": 2,
  "kebab": 3,
  "lasange": 4,
  "sallad": 5,
})

const ingredients = Object.freeze({
  "tomat": 1,
  "ost": 2,
  "champinjoner": 3,
})

export function mapType(type) {
  
}

export function mapIngredient(ingredient) {
  return Object.keys(ingredients).find((name) => ingredients[name] === ingredient)
}

const items = [
  { name: "Margerita", type: types.pizza, price: 70, ingredients: [ingredients.tomat, ingredients.ost] },
  { name: "Funghi", type: types.pizza, price: 75, ingredients: [ingredients.tomat, ingredients.ost, ingredients.champinjoner] },
  { name: "Lasagne al Forno", type: types.lasange, price: 85 },
]

export const pizzas = items.filter((item) => item.type === types.pizza || item.type === types.folded)

export default items