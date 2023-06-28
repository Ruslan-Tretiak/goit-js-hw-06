const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map((ingredients) => {
  const elements = document.createElement(`li`);
  elements.classList.add('item');
  elements.textContent = ingredients;
  return elements;
})
const addForm = document.getElementById('ingredients');
addForm.append(...items)
console.log(items)




//  const items = ingredients.map((ingredients) => {
//   const ingredEl = document.createElement('li');
//   ingredEl.classList.add('item');
//   ingredEl.textContent = ingredients;
//   return ingredEl;
//  });
// const addList = document.getElementById('ingredients');
// addList.append(...items)

// console.log(items)

