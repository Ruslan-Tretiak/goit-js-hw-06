// const item = document.querySelector('.item');
// console.log(item);
// [...item.children] .forEach(item => {console.log(item);
// });

const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);


items.forEach(item => {
    const itemsCount = item.querySelector('h2').textContent;
    const title = item.querySelectorAll('li').length;

    console.log(`Category: ${itemsCount}`);
    console.log(`Elements: ${title}`)
});




























