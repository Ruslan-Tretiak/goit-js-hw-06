const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const items = ingredients.map((ingredients) => {
  const ingredEl = document.createElement('li');
  ingredEl.classList.add('item');
  ingredEl.textContent = ingredients;
  return ingredEl;
 });
const addList = document.getElementById('ingredients');
addList.append(...items)

console.log(items)

