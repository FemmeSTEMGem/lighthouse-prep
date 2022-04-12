// The town festival is tomorrow and the organizers have only just realized that they've booked two bakeries to cater desserts, but only have one kitchen available. Instead of just choosing one bakery, let's help them figure out a way to work together.

// Both of the bakeries have a specialty, so they each have a stock of specific ingredients.

// Lucky for the festival organizers, we've found a recipe book in the town library with TONS of fusion recipes, unfortunately it's thousands of pages long and we don't have much time. Let's write a function that helps determine which recipes match the ingredients that both bakeries have in stock.

// We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

// We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

// Our chooseRecipe() function should return the name of the correct recipe.

// Note
// There will always be a single correct answer, and you will NOT need to consider special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

// Expected Output
// Persian Cheesecake
// Nima's Famous Dijon Raisins


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

bakeryC = ['potatoes', 'bay leaf', 'raisins'];
bakeryD = ['red bean', 'dijon mustard', 'apples'];
recipes2 = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];


const ingredientCheck = function(bakeryArray, recipes) {
  let matchingIngredients = []
  for (let b = 0; b < bakeryArray.length; b++) {
    for (let r = 0; r < recipes.length; r++) {
      for (let i = 0; i < recipes[r].ingredients.length; i++) {
        if (bakeryArray[b] === recipes[r].ingredients[i]) {
          matchingIngredients.push(recipes[r].ingredients[i])
        }
      }
    }
  }
  return matchingIngredients
}


const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let a = ingredientCheck(bakeryA, recipes);
  let b = ingredientCheck(bakeryB, recipes);
  let recipeMatch = []
  let tally = {}
  if (a && b) {
    for (let i = 0; i < recipes.length; i++) {
      for (let x = 0; x <= a.length; x++) {
        if (recipes[i].ingredients.includes(a[x])) {
          recipeMatch.push(recipes[i].name)
        }
        if (recipes[i].ingredients.includes(b[x])) {
          recipeMatch.push(recipes[i].name)
        }
      }
    }
  }
  recipeMatch.forEach(key => {
    tally[key] = tally[key] ? tally[key] + 1 : 1
  })
  return Object.keys(tally).find(key => tally[key] === 2)
}



console.log(chooseRecipe(bakeryA, bakeryB, recipes));
console.log(chooseRecipe(bakeryC, bakeryD, recipes2));