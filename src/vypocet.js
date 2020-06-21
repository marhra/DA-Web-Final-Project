const data = require("./json/data.json")

const recipes = Object.values(data).map(e => ({ ...e, caloriesPerPortion: e.calories / e.yield }));

const userInput = 1500;

const breakfasts = recipes.filter(recipe => recipe.mealType === "Breakfast").filter(recipe => recipe.caloriesPerPortion > 0.2 * userInput && recipe.caloriesPerPortion < 0.4 * userInput)

const lunches = recipes.filter(recipe => recipe.mealType === "Main dish")

//console.log(breakfasts.length);
//console.log(lunches.length);


//vybira nahodnou snidani
const breakfastIndex = Math.floor(Math.random() * (breakfasts.length - 1))

//console.log(breakfastIndex)

const breakfast = breakfasts[breakfastIndex]
//console.log(breakfast)

//vybira nahodny obed nebo veceri
const lunchIndex = Math.floor(Math.random() * (lunches.length - 1))

//console.log(lunchIndex)

const lunch = lunches[lunchIndex]
//console.log(lunch)

const caloriesWithoutDinner = breakfast.caloriesPerPortion + lunch.caloriesPerPortion;

const missingCalories = userInput - caloriesWithoutDinner;
//console.log(missingCalories)

const lunchesCalories = lunches.map(e => e.calories / e.yield)


for (var i = 0, currentClosestNum = 10000, currentClosestIndex = null; i < lunchesCalories.length; i++) {


  if (Math.abs(lunchesCalories[i] - missingCalories) < currentClosestNum) {
    currentClosestNum = Math.abs(lunchesCalories[i] - missingCalories);
    currentClosestIndex = i
  }
}

const dinner = lunches[currentClosestIndex];

// console.log(dinner)

//console.log(currentClosestIndex, currentClosestNum);

//console.log(lunches[currentClosestIndex], lunches[currentClosestIndex].calories / lunches[currentClosestIndex].yield, missingCalories)


const total = caloriesWithoutDinner + dinner.caloriesPerPortion;

console.log(total)
