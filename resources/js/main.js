// Variable Declarations
const localDay = document.getElementById('day');
const localDate = document.getElementById('date');
const todoInput = document.querySelector('input');
const ul = document.getElementById('todoList');
const deleteAll = document.createElement('button');
deleteAll.className = 'deleteAllBtn';
const counter = document.createElement('span');
let count = 0; // Global counter Variable for todo count tracking
let ulChilds = ul.children;
const listFooter = document.createElement('div');

// Function to display date and time using Date() objecy
function showDate () {
  var dt = new Date();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear();
}
function showDay () {
  var dy = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dy.getDay()];
}
localDay.innerHTML = showDay();
localDate.innerHTML = showDate();

/*
  EventListener on input to get user input
  Gets input from user and output the list element
*/
todoInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const button = document.createElement('button');

    const text = todoInput.value;
    todoInput.value = '';

    label.textContent = text;
    li.appendChild(label);

     // increment count if new todo is added

    button.className = 'deleteButton';
    li.appendChild(button);

    listFooter.className = 'listFooter';

    count++;
    counter.innerHTML = count + ' items left';
    listFooter.appendChild(counter);

    deleteAll.textContent = 'Clear Completed';
    if (count === 0) 
    deleteAll.style.visibility = 'hidden';
    listFooter.appendChild(deleteAll);

    ul.appendChild(li);
    ul.appendChild(listFooter);
  }
});

/*
  Event listeners on the todo items
*/
ul.addEventListener('click', function (e) {
  // on the todo text, to toggle done
  if (e.target.tagName === 'LABEL') {
    e.target.parentNode.classList.toggle('done');

    // decrement or increment, depending on toggle class
    if (e.target.parentNode.className === 'done') {
      count--;
    } else {
      count++;
    }

    if (count === 0) {
      counter.innerHTML = 'All tasks done';
    } else {
      counter.innerHTML = count + ' items left';
    }

    listFooter.appendChild(counter);

    deleteAll.textContent = 'Clear Completed';
    deleteAll.style.visibility = 'visible';
    listFooter.appendChild(deleteAll);

    ul.appendChild(listFooter);
  }

  // on the delete button, to delete individual todo
  if (e.target.className === 'deleteButton') {
    const button = e.target;
    const list = button.parentNode;
    const mainLi = list.parentNode;

    // if done, then decrement
    if (list.className !== 'done') {
      count--;
    }
    mainLi.removeChild(list);
  }
});

// on the clear Completed button, to clear all Completed todos
deleteAll.addEventListener('click', function () {
  for (let i = 0; i < ulChilds.length - 1; i++) {
    let listElem = ulChilds[i];
    if (listElem.className === 'done') {
      ul.removeChild(listElem);
    }
  }
});
