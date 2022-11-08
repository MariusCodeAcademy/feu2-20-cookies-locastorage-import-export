'use strict';
console.log('main.js');

const set1El = document.getElementById('set1');
const get1El = document.getElementById('get1');

// const user1Id = 'u1234';

set1El.addEventListener('click', () => {
  console.log('paspaudei');
  // localStorage.setItem('user', user1Id);
});

get1El.addEventListener('click', () => {
  // iskonsolinti user1Id
});
