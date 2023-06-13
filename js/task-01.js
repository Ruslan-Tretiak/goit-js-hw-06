// const item = document.querySelector('.item');
// console.log(item);
// [...item.children] .forEach(item => {console.log(item);
// });

const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);


items.forEach(item => {
    const itemsNumber = item.querySelector('h2').textContent;
    const name = item.querySelectorAll('li').length;

    console.log(`Category: ${itemsNumber}`);
    console.log(`Elements: ${name}`)
});




























