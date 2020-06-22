const data = require("./json/data.json");

//vytvori funkce createMenu
function createMenu(value) {
  const recipes = Object.values(data).map(e => ({ ...e, caloriesPerPortion: e.calories / e.yield }));

  //vytvori konstanty userInput, ktera odpovida goalIntake z kalkulacky
  const userInput = value;

  //vyfilturuje vsechny snidane do jedne promenne, snidane musi byt mezi 10% a 44% z celkoveho goalIntake
  const breakfasts = recipes.filter(recipe => recipe.mealType === "Breakfast").filter(recipe => recipe.caloriesPerPortion > 0.1 * userInput && recipe.caloriesPerPortion < 0.44 * userInput);

  //vzfiltruje vsechny obedy/vecere do jedne promenne
  const lunches = recipes.filter(recipe => recipe.mealType === "Main dish");

  //vybira nahodnou snidani
  const breakfastIndex = Math.floor(Math.random() * (breakfasts.length - 1));
  const breakfast = breakfasts[breakfastIndex];

  //vybira nahodny obed nebo veceri
  const lunchIndex = Math.floor(Math.random() * (lunches.length - 1));
  const lunch = lunches[lunchIndex];

  // kaloricka hodnota bez vecere
  const caloriesWithoutDinner = breakfast.caloriesPerPortion + lunch.caloriesPerPortion;

  // kaloricka hodnota vecere nutna k doplneni goalIntake
  const missingCalories = userInput - caloriesWithoutDinner;

  const lunchesCalories = lunches.map(e => e.caloriesPerPortion);

  //vybere kalorickou hodnotu vecere z promenne lunches, aby byla co nejblizsi k missingCalories hodnote, zjisti jeji index a tim i label receptu
  for (var i = 0, currentClosestNum = 10000, currentClosestIndex = null; i < lunchesCalories.length; i++) {
    if (Math.abs(lunchesCalories[i] - missingCalories) < currentClosestNum) {
      currentClosestNum = Math.abs(lunchesCalories[i] - missingCalories);
      currentClosestIndex = i;
    }
  }

  // recept pro veceri
  const dinner = lunches[currentClosestIndex];
  const total = caloriesWithoutDinner + dinner.caloriesPerPortion;

  return { lunch, breakfast, dinner };
}

export default createMenu;