// Variable Declaration
const localDay = document.getElementById('day');
const localDate = document.getElementById('date');
const todoInput = document.querySelector('input');
const ul = document.getElementById('todoList');

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
