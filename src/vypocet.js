const data = require("./json/data.json");

function createMenu(value) {
  const recipes = Object.values(data).map(e => ({ ...e, caloriesPerPortion: e.calories / e.yield }));
  
  const userInput = value;
  
  const breakfasts = recipes.filter(recipe => recipe.mealType === "Breakfast").filter(recipe => recipe.caloriesPerPortion > 0.1 * userInput && recipe.caloriesPerPortion < 0.44 * userInput);
  
  const lunches = recipes.filter(recipe => recipe.mealType === "Main dish");
  
//vybira nahodnou snidani
  const breakfastIndex = Math.floor(Math.random() * (breakfasts.length - 1));
  const breakfast = breakfasts[breakfastIndex];

//vybira nahodny obed nebo veceri
  const lunchIndex = Math.floor(Math.random() * (lunches.length - 1));
  const lunch = lunches[lunchIndex];
  
  // kalorická hodnota bez večeře
  const caloriesWithoutDinner = breakfast.caloriesPerPortion + lunch.caloriesPerPortion;
  
  // kalorická hodnota večeře nutná k doplnění deního limitu
  const missingCalories = userInput - caloriesWithoutDinner;
  
  const lunchesCalories = lunches.map(e => e.calories / e.yield);
  
  for (var i = 0, currentClosestNum = 10000, currentClosestIndex = null; i < lunchesCalories.length; i++) {
    if (Math.abs(lunchesCalories[i] - missingCalories) < currentClosestNum) {
      currentClosestNum = Math.abs(lunchesCalories[i] - missingCalories);
      currentClosestIndex = i;
    }
  }
  
  // recept pro večeři
  const dinner = lunches[currentClosestIndex];
  const total = caloriesWithoutDinner + dinner.caloriesPerPortion;
  
  return {lunch, breakfast, dinner};
}

export default createMenu;