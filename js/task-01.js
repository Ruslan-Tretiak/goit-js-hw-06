// const item = document.querySelector('.item');
// console.log(item);
// [...item.children] .forEach(item => {console.log(item);
// });

// const items = document.querySelectorAll('.item')
// console.log('Number section: ${items.length}');

// items.forEach(item => {
//     const number = item.querySelector('h2').textContent;
//     const title = item.querySelectorAll('li').length;

//     console.log(`Category: ${number}`);
//     console.log(`Title: ${title}`);
// })


// const blabla = document.querySelectorAll('.item')
// console.log(`Numbers of categories: ${blabla.length}`);

// blabla.forEach(item => {
//     const itemsNumber = item.querySelector('h2').textContent;
//     const title = item.querySelectorAll('li').length;

//     console.log(`Categories: ${title}`);
//     console.log(`Title: ${itemsNumber}`)
// });

const items = document.querySelectorAll('.item')
console.log(`Numbers categorie ${items.length}`);

items.forEach(item => {
    const things = item.querySelector('ul').textContent;
    const title = item.querySelector('h2').textContent;
    console.log(`Categories: ${title}`);
    console.log(`Items: ${things}`);

});


// const items = document.querySelectorAll('.item');

// console.log(`Number of categories: ${items.length}`);


// items.forEach(item => {
//     const itemsNumber = item.querySelector('h2').textContent;
//     const title = item.querySelectorAll('li').length;

//     console.log(`Category: ${itemsNumber}`);
//     console.log(`Elements: ${title}`)
// });




























