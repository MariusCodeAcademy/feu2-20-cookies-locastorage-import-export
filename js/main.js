'use strict';
console.log('main.js');

const set1El = document.getElementById('set1');
const set2El = document.getElementById('set2');
const get1El = document.getElementById('get1');
const get2El = document.getElementById('get2');

const user1Id = 'u1234';

const todoArr = [
  { title: 'do sports', done: false },
  { title: 'buy bananas', done: true },
  { title: 'see birds', done: false },
];

console.log(JSON.stringify(todoArr, null, 2));
