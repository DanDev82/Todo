const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionBtn = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemBtn = document.querySelector('button.addItemButton');
const removeBtn = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

// hide list div when button is clicked (change button text to show/hide)
toggleList.addEventListener('click', () => {
  if(listDiv.style.display == 'none'){
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

// change description on button click
descriptionBtn.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

// add item to list when input is filled in and button is clicked
addItemBtn.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

// remove the last li element in the list
removeBtn.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});