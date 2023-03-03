var saveData = document.querySelector('.btn');
var dayBox = document.getElementById("currentDay");


var current = dayjs();
var weekDay = current.format('dddd');
var currentHour = new Date().getHours();





 
$(function () {

  $(".saveBtn").on("click",function(){
  var value = ($(this).siblings(".description").val())
  var time = $(this).parent().attr("id")

  localStorage.setItem(time,value)
})

function displayStorage() {
  for(i=9; i<18; i++){
    $("#hour-"+i+" .description").val(localStorage.getItem("hour-"+i))
  }
}
displayStorage()
 
  $(".time-block").each(function() {
  var hour = parseInt($(this).attr("id").split("-")[1])
  var currentHour = dayjs().hour()
  if (hour<currentHour){
    $(this).addClass("past")
    } else if (hour===currentHour) {
      $(this).addClass("present")
      $(this).removeClass("past")
    } else {
      $(this).addClass("future")
      $(this).removeClass("past")
      $(this).removeClass("present")
    }
})
 

    
     $(dayBox).text(weekDay);
  });
  