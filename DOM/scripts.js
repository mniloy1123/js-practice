//Elements by ID
const demoId = document.getElementById('demo');
demoId.style.border = '1px solid purple'
console.log(demoId);

//Elements by Class
const demoClass = document.getElementsByClassName('demo');
//doesn’t work because instead of just getting one element, 
//you have an array-like object of elements.
//demoClass.style.border = '1px solid red' 
console.log(demoClass)  //(2) [div.demo, div.demo]
/* demoClass[0].style.border = '1px solid red';
demoClass[1].style.border = '1px solid blue'; */

//if we wanted to apply a change to all the elements
for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '1px solid orange';
}

//Elements by Tag
const demoTag = document.getElementsByTagName('article');
//Just like accessing an element by its class, getElementsByTagName() 
//will return an array-like object of elements, and you can modify every 
//tag in the document with a for loop.
for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = '2px solid blue';
}

//Query Selectors
const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '2px solid black';


const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach(query => {
    query.style.border = '1px solid green';
})

