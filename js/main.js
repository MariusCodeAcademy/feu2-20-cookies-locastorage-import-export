'use strict';
console.log('main.js');

const set1El = document.getElementById('set1');
const set2El = document.getElementById('set2');
const get1El = document.getElementById('get1');
const get2El = document.getElementById('get2');

const user1Id = 'u587sdasdasdasdsadsad';

const todoArr = [
  { title: 'do sports', done: false },
  { title: 'buy bananas', done: true },
  { title: 'see birds', done: false },
];

// console.log(JSON.stringify(todoArr, null, 2));

set1El.addEventListener('click', () => {
  document.cookie = `user=${user1Id};`;
  console.log(`user=${user1Id};`.length);
});

let toShowAdd = true;
set2El.onclick = function () {
  // toShow=true; expires=<trys dienos> UTC string
  const now = new Date();
  const in3Days = new Date('2022-11-12');
  // console.log('now ===', now);
  // console.log('typeof now ===', typeof now);
  // console.log('Number(now) ===', Number(now));
  console.log('in3Days UTC ===', in3Days.toUTCString());
  const in3DaysUtc = in3Days.toUTCString();
  let cookieString = `toShow=true; expires=${in3DaysUtc};`;
  console.log('cookieString ===', cookieString);
  document.cookie = cookieString;
};
