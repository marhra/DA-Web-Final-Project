const data = require("./json/data.json");

const recipes = Object.values(data);

const breakfasts = recipes.filter(recipe => recipe.mealType.includes("breakfast"));

const lunches = recipes.filter(recipe => recipe.mealType.includes("lunch") || recipe.mealType.includes("dinner"));

//console.log(breakfasts.length);
//console.log(lunches.length);


//vybira nahodnou snidani
const breakfastIndex = Math.floor(Math.random() * (breakfasts.length - 1))

//console.log(breakfastIndex)

const breakfast = breakfasts[breakfastIndex]
//console.log(breakfast)

//vybira nahodny obed nebo veceri
const lunchIndex = Math.floor(Math.random() * (lunches.length - 1))

console.log(lunchIndex)

const lunch = lunches[lunchIndex]
console.log(lunch)