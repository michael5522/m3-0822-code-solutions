// console.log('ola');

// async function getData (){
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonData = await response.json();
//   console.log('data',jsonData);
// }

// getData();

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));
