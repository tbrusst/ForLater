//Edit mode so the page wont change if you are editing
var editMode = false;

//Top bar
var editButton = document.getElementById("editButton"); //grabbing edit button
var addButton = document.getElementById("addButton"); //grabbing add button
var title = document.getElementById("title"); //grabbing title

var svgCancel = document.getElementById('svgCancel'); //grabbing svgCancel

var svgAdd = document.getElementById('svgAdd'); //grabbing svgAdd

var svgCheck = document.getElementById('svgCheck'); //grabbing svgCheck

var svgEdit = document.getElementById('svgEdit'); //grabbing svgEdit

var breakText = document.getElementById('Take_a_Break'); //break button text

svgAdd.addEventListener("click", addPopUp); //add event listener
svgCheck.addEventListener("click", checkTask); //add event listener
svgEdit.addEventListener("click", addEdit); //edit event listener
svgCancel.addEventListener("click", removeAddPopUp); //remove add event listener

var full = document.getElementById('full'); //grabbing parent
var addPop = document.createElement('div'); //create html
var addInput = document.createElement('input');

//Un select on x
var selected = document.getElementsByClassName("selected");

//Task deleting
var taskBody = document.getElementsByClassName("task");


var deleteTask = function() {

}

// svgTrash.addEventListener('click', removeData, false);


var checkBox = document.getElementsByClassName('taskcheck');
console.log(checkBox);

// for (var i = 0; i < checkBox.length; i++) {
//   checkBox[i].addEventListener('click', selectTask(), false);
//
// };
















//Pop up for adding tasks
function addPopUp() {
  svgCheck.addEventListener('click', writeData);

  var submit = document.createElement("INPUT");
  submit.setAttribute("type", "submit");


  addPop.className = "addPop"; //assign classes
  addInput.className = "addInput"
  addInput.setAttribute("type", "text"); //make input text
  addInput.setAttribute("name", "task"); //make input text
  // addInput.setAttribute("value", "task"); //make input text

  addPop.appendChild(addInput); //appending elements together
  full.insertBefore(addPop, full.firstElementChild); //placing into dom


  title.innerHTML = "Create Task";
  svgCancel.style.display = "block";
  svgAdd.style.display = "none";
  svgCheck.style.display = "block";
  svgEdit.style.display = "none";

}





function addEdit() {

  title.innerHTML = "Edit Tasks";
  svgCancel.style.display = "block";
  svgAdd.style.display = "none";
  svgTrash.style.display = "block";
  svgEdit.style.display = "none";
  breakText.innerHTML = "     Delete All";



  var taskText = document.getElementsByClassName("taskText");
  for (var i = 0; i < taskText.length; i++){
    taskText[i].contentEditable = "true";
  }




  editMode = true;
  

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

function checkTask(){
  if (editMode){
    breakText.innerHTML = "Take A Break"
    title.innerHTML = "Tasks";
    svgCancel.style.display = "none";
    svgAdd.style.display = "block";
    svgTrash.style.display = "none";
    svgEdit.style.display = "block";
    editMode = false;
    location.reload();





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
    location.reload();
  }

}







function jmp2LocalPage(whichPage) { //how to change pages
  if(editMode){


    removeAllData();
      



      

      }


   else{
    location.href = whichPage;
  }


}
