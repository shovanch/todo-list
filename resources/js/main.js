// Variable Declarations
const localDay = document.getElementById('day');
const localDate = document.getElementById('date');
const todoInput = document.querySelector('input');
const ul = document.getElementById('todoList');
const li = document.querySelector('ul');

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

// Gets input from user and output the list element
todoInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    const li = document.createElement('li');
    const text = todoInput.value;
    todoInput.value = '';
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    const button = document.createElement('button');
    button.textContent = 'Done?';
    li.appendChild(button);
    ul.appendChild(li);
  }
});

// toggle done and delete todo
li.addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN') {
    e.target.classList.toggle('done');
  }
  if (e.target.tagName === 'BUTTON') {
    const list = e.target.parentNode;
    const ul = list.parentNode;
    ul.removeChild(list);
  }
  // prints out number of done todos
  const lis = li.children.children;
  let count = 0;
  for (let i = 0; i < lis.length; i++) {
    let lists = lis[i];
    if (lists.className === 'done') {
      count++;
    }
  }
  console.log(count);
}, false);
