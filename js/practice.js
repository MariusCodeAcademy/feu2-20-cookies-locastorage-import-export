'use strict';
console.log('practice.js');

const nameInputEl = document.getElementById('nameInput');
const nameChangeBtnEl = document.getElementById('nameChangeBtn');

nameChangeBtnEl.addEventListener('click', () => {
  console.count('click');
  const inputElValue = nameInputEl.value.trim();
  // add to local storage as name
  localStorage.setItem('name', inputElValue);
});
