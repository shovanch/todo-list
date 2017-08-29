// Variable Declarations
const localDay = document.getElementById('day');
const localDate = document.getElementById('date');
const todoInput = document.querySelector('input');
const ul = document.getElementById('todoList');
const deleteAll = document.createElement('button');
deleteAll.className = 'deleteAllBtn';
const counter = document.createElement('span');
let count = 0; // Global counter Variable for todo count tracking

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
    const text = todoInput.value;
    todoInput.value = '';
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    const button = document.createElement('button');
    button.className = 'deleteButton';
    button.textContent = 'Done?';
    li.appendChild(button);
    ul.appendChild(li);

    // increment count if new todo is added
    count++;
    counter.innerHTML = 'You have ' + count + ' items to do';
    ul.appendChild(counter);

    // append the clear Completed button
    deleteAll.textContent = 'Clear Completed';
    ul.appendChild(deleteAll);
  }
});

/*
  Event listeners on the todo items
*/
ul.addEventListener('click', function (e) {
  // on the todo text, to toggle done
  if (e.target.tagName === 'SPAN') {
    const span = e.target;
    e.target.parentNode.classList.toggle('hey');
    span.classList.toggle('done');

    // decrement or increment, depending on toggle class
    if (e.target.parentNode.className === 'hey') {
      count--;
    } else {
      count++;
    }

    counter.innerHTML = 'You have ' + count + ' items to do';
    ul.appendChild(counter);
  }

  // on the delete button, to delete individual todo
  if (e.target.className === 'deleteButton') {
    const button = e.target;
    const list = button.parentNode;
    const mainLi = list.parentNode;

    // if done, then decrement
    if (list.className !== 'hey') {
      count--;
    }

    mainLi.removeChild(list);
    counter.innerHTML = 'You have ' + count + ' items to do';
    ul.appendChild(counter);
  }
});

// on the clear Completed button, to clear all Completed todos
deleteAll.addEventListener('click', function () {
  for (let i = 0; i < ul.children.length; i++) {
    let listElem = ul.children[i];
    if (listElem.className === 'hey') {
      ul.removeChild(listElem);
    }
  }
});
