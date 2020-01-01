export const types = Object.freeze({
  "pizza": 1,
  "de_luxe_special": 2,
  "inbakad_pizza": 3,
  "kebab": 4,
  "lasagne": 5,
  "sallad": 6,
})

export const ingredients = Object.freeze({
  "tomat": 1,
  "ost": 2,
  "champinjoner": 3,
  "skinka": 4,
  "paprika": 5,
  "tonfisk": 6,
  "sallad": 7,
  "gurka": 8,
  "ananas": 9,
  "lok": 10,
  "citron": 11,
  "kyckling": 12,
  "oliver": 13,
  "farost": 14,
  "rakor": 15,
  "pitabrod": 16,
  "peperoni": 17,
  "starksas": 18,
  "kott": 19,
  "tunnbrod": 20,
  "oxfile": 21,
  "vitlok": 22,
  "bearnaisesas": 23,
  "gorgonzola": 24,
  "mozzarella": 25,
  "valnotter": 26,
  "ruccola": 27,
  "honung": 28,
  "oregano": 29,
})

const typeMap = {
  [types.pizza]: "Pizzor",
  [types.inbakad_pizza]: "Inbakade pizzor",
  [types.de_luxe_special]: "De Luxe Special",
  [types.kebab]: "Kebab",
  [types.lasagne]: "Lasagne",
  [types.sallad]: "Sallad",
}

export function mapType(type) {
  return typeMap[type] || ""
}

const ingredientMap = {
  [ingredients.lok]: "lök",
  [ingredients.farost]: "fårost",
  [ingredients.rakor]: "räkor",
  [ingredients.pitabrod]: "pitabröd",
  [ingredients.tunnbrod]: "tunnbröd",
  [ingredients.starksas]: "stark sås",
  [ingredients.kott]: "kött",
  [ingredients.oxfile]: "oxfilé",
  [ingredients.vitlok]: "vitlök",
  [ingredients.bearnaisesas]: "bearnaisesås",
  [ingredients.valnotter]: "valnötter",
}

export function mapIngredient(ingredient) {
  return ingredientMap[ingredient] || Object.keys(ingredients).find((name) => ingredients[name] === ingredient)
}

const items = [

  // Pizzor
  { name: "Margerita", type: types.pizza, price: 70, ingredients: [ingredients.tomat, ingredients.ost] },
  { name: "Funghi", type: types.pizza, price: 75, ingredients: [ingredients.tomat, ingredients.ost, ingredients.champinjoner] },
  { name: "Prosciuotto", type: types.pizza, price: 75, ingredients: [ingredients.tomat, ingredients.ost, ingredients.skinka] },
  { name: "Vesuvio", type: types.pizza, price: 80, ingredients: [ingredients.tomat, ingredients.ost, ingredients.skinka, ingredients.paprika] },
  { name: "Venezia", type: types.pizza, price: 80, ingredients: [ingredients.tomat, ingredients.ost, ingredients.skinka, ingredients.tonfisk] },

  { name: "Chèvre & Päron", type: types.de_luxe_special, price: 110, ingredients: [ingredients.tomat, ingredients.mozzarella, ingredients.valnotter, ingredients.ruccola, ingredients.honung, ingredients.oregano] },
  
  // Inbakade pizzor
  { name: "Calzone", type: types.inbakad_pizza, price: 80, ingredients: [ingredients.tomat, ingredients.ost, ingredients.skinka] },
  { name: "Ciao-Ciao", type: types.inbakad_pizza, price: 90, ingredients: [ingredients.tomat, ingredients.ost, ingredients.champinjoner, ingredients.lok, ingredients.oxfile, ingredients.vitlok] },
  { name: "Da Vinci", type: types.inbakad_pizza, price: 90, ingredients: [ingredients.tomat, ingredients.ost, ingredients.oxfile, ingredients.bearnaisesas, ingredients.gorgonzola] },
  
  // Kebab
  { name: "Mexicana", type: types.kebab, price: 85, ingredients: [ingredients.pitabrod, ingredients.kott, ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.lok, ingredients.peperoni, ingredients.starksas] },
  { name: "Kebabrulle", type: types.kebab, price: 85, ingredients: [ingredients.tunnbrod, ingredients.kott, ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.lok, ingredients.peperoni, ingredients.starksas] },

  // Lasagne
  { name: "Lasagne al Forno", type: types.lasagne, price: 85 },
  
  // Sallad
  { name: "Amerikansk Sallad", type: types.sallad, price: 85, ingredients: [ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.skinka, ingredients.ost, ingredients.ananas] },
  { name: "Tonfisksallad", type: types.sallad, price: 85, ingredients: [ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.tonfisk, ingredients.lok, ingredients.citron] },
  { name: "Kycklingsallad", type: types.sallad, price: 85, ingredients: [ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.kyckling, ingredients.lok, ingredients.paprika] },
  { name: "Grekisk Sallad", type: types.sallad, price: 85, ingredients: [ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.lok, ingredients.oliver, ingredients.paprika, ingredients.farost] },
  { name: "Vegetarisk Sallad", type: types.sallad, price: 85, ingredients: [ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.lok, ingredients.oliver, ingredients.champinjoner, ingredients.ananas] },
  { name: "Räksallad", type: types.sallad, price: 85, ingredients: [ingredients.sallad, ingredients.tomat, ingredients.gurka, ingredients.rakor, ingredients.citron] },
]

export function ofType(type) {
  return items.filter((item) => item.type === type)
}

export function withIngredients(items, ingredients) {
  if (ingredients.length === 0) {
    return items
  }

  return items.filter((item) => item.ingredients && ingredients.every((ingredient) => item.ingredients.includes(ingredient)))
}

export default items