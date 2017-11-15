










var editMode = false;




//Top bar
var editButton = document.getElementById("editButton"); //grabbing edit button
var addButton = document.getElementById("addButton"); //grabbing add button


var title = document.getElementById("title"); //grabbing title



var svgCancel = document.getElementById('svgCancel'); //grabbing svgCancel

var svgAdd = document.getElementById('svgAdd'); //grabbing svgAdd

var svgCheck = document.getElementById('svgCheck'); //grabbing svgCheck

var svgEdit = document.getElementById('svgEdit'); //grabbing svgEdit


var breakText = document.getElementById('Take_a_Break');



svgAdd.addEventListener("click", addPopUp); //add event listener
svgEdit.addEventListener("click", addEdit); //edit event listener
svgCancel.addEventListener("click", removeAddPopUp); //remove add event listener

var full = document.getElementById('full'); //grabbing parent
var addPop = document.createElement('div'); //create html
var addInput = document.createElement('input');

//Un select on x
var selected = document.getElementsByClassName("selected");


//Task deleting
var taskBody = document.getElementsByClassName("task");



var selectTask = function() {
  if(editMode){
    this.classList.toggle("selected");
  }

}


for (var i = 0; i < taskBody.length; i++) {

    taskBody[i].addEventListener('click', selectTask, false);

}

var deleteTask = function() {

  var taskList = document.getElementById("tasklist");


  while(selected.length > 0) {
      selected[0].parentNode.removeChild(selected[0]);
  }
}


svgTrash.addEventListener('click', deleteTask, false);





function addPopUp() {


  addPop.className = "addPop"; //assign classes
  addInput.className = "addInput"
  addInput.setAttribute("type", "text"); //make input text

  addPop.appendChild(addInput); //appending elements together
  full.insertBefore(addPop, full.firstElementChild); //placing into dom

  title.innerHTML = "Create Task";
  svgCancel.style.display = "block";
  svgAdd.style.display = "none";
  svgCheck.style.display = "block";
  svgEdit.style.display = "none";

}






// var taskText = document.getElementsByClassName(".taskText");
//
// var makeEditable = function(){
//   this.contentEditable = "true";
// }
//




function addEdit() {

  title.innerHTML = "Edit Tasks";
  svgCancel.style.display = "block";
  svgAdd.style.display = "none";
  svgTrash.style.display = "block";
  svgEdit.style.display = "none";
  breakText.innerHTML = "Delete Tasks";



  var taskText = document.getElementsByClassName("taskText");
  for (var i = 0; i < taskText.length; i++){
    taskText[i].contentEditable = "true"
  }




  editMode = true;
  console.log(editMode);

}

function removeAddPopUp(){
  if (editMode){
    breakText.innerHTML = "Take A Break"
    title.innerHTML = "Tasks";
    svgCancel.style.display = "none";
    svgAdd.style.display = "block";
    svgTrash.style.display = "none";
    svgEdit.style.display = "block";
    editMode = false;





      while(selected.length > 0) {
          selected[0].classList.toggle('selected');
      }



  } else {
    full.removeChild(full.firstElementChild);
    title.innerHTML = "Tasks";
    svgCancel.style.display = "none";
    svgAdd.style.display = "block";
    svgCheck.style.display = "none";
    svgEdit.style.display = "block";
  }

}


//Check toggling
var taskCheck = document.getElementsByClassName("theCheck");

var checkCheck = function() {
  this.classList.toggle("showCheck");
};

for (var i = 0; i < taskCheck.length; i++) {
    taskCheck[i].addEventListener('click', checkCheck, false);
}

function jmp2LocalPage(whichPage) { //how to change pages
  if(editMode){

      var taskList = document.getElementById("tasklist");
      console.log(taskList);

      while (taskList.hasChildNodes()) {
        taskList.removeChild(taskList.lastChild);
      }


  } else{
    location.href = whichPage;
  }


}
