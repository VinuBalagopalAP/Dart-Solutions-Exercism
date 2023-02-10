/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

  export function cookingStatus(remaingTime){
    if(remaingTime==0){
      return 'Lasagna is done.';
    }else if(remaingTime>0){
      return 'Not done, please wait.';
    }
    else {
      return 'You forgot to set the timer.'
    }
  }

  export function preparationTime(layers, avgPrepTime=2 ){
    return layers.length * avgPrepTime;
  }

  export function quantities(layers){
    let noodles = 0, sauce = 0;
    for(let layer of layers){
      if(layer === 'noodles') {
          noodles +=50;
      }
      if (layer === 'sauce'){
        sauce += 0.2;
      }
    }
   return {
     noodles: noodles,
     sauce: sauce,
   }
  }

  export function addSecretIngredient(friendsList, myList){
     myList.push(friendsList.slice(-1)[0]);
  }

  export function scaleRecipe(recipe,portion){
    let newRecipe = {};
    for (let ingredient in recipe) {
      newRecipe[ingredient] = recipe[ingredient] * portion / 2;
    }
    return newRecipe;
  }

