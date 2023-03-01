var saveData = document.querySelector('[aria-label="save"]');
var dayBox = document.getElementById("currentDay");
// var hourId = document.querySelectorAll('#hour-9,#hour-10,#hour-11,#hour-12,#hour-13,#hour-14,#hour-15,#hour-16,#hour-17');
var inputData = document.querySelector("#hour-11");
// var hourArray = [...hourId];

var current = dayjs();
var weekDay = current.format('dddd');
var currentHour = new Date().getHours();

var input = localStorage.getItem("data");

var selectTime = function () {
var time = hourArray.split('-')[1];
 var time =document.getElementById("hour-10").style.backgroundColor;
if (time == currentHour)
  document.getElementById("hour-10").classList.add("present");
}


//  hourArray.forEach(hour => {
  // console.log(hour);
// })

 saveData.addEventListener("click",function(event) {
    event.preventDefault();

    var input = document.getElementByClass("#hour-11").value;

    if (input == true) {
      inputData.textContent = input;
    localStorage.setItem("data",input);
    }
  });

 
 
  
// function getElementByName(hourArray){hourId.substr(5,2)};
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  $(dayBox).text(weekDay);

 
  
function loadAppointments () {

}  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  