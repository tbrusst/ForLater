

// bmr Local Storage
//

var taskArray = new Array();  //creating arrays to store the data into

var checkedArray = new Array();

var funcs = [];

function selectTask(whichOne) {
  

  updateCheckData(whichOne);



};

function editTaskStore(whichtask){

  updateTaskData(whichtask);
  
};









var mainNdx = 0;

function readData() {


  // Does this browser support local storage?
  if (typeof (Storage) !== "undefined") {



    var taskTemplate = document.getElementById('taskTemplate');



    // Read data from local storage
    tasksStr = localStorage.bmr_tasks;

    checkedStr = localStorage.bmr_checked;


    ndxStr = localStorage.bmr_Ndx;

    console.log("tasksStr is .. " + tasksStr);

    console.log("checkedStr is .. " + checkedStr);



    console.log("ndxStr is .. " + ndxStr);





    if (typeof (tasksStr) !== "undefined") {


      // Convert data string into array
      taskArray = tasksStr.split(",");

      checkedArray = checkedStr.split(",");

      // Convert Ndx string into integer
      mainNdx = parseInt(ndxStr);

      // Display data screen
      task.value = taskArray[mainNdx];

      // checked.value = checkedArray[mainNdx];  //first name value is from input field






      
      for (var i = 0; i < (taskArray.length); i++) {

        var textNode = document.getElementsByClassName("textNode");
        var cloneCheck = document.getElementsByClassName("taskcheckbox");
        var taskList = document.getElementById("tasklist");
        




        var clone = taskTemplate.content.cloneNode(true);
        taskTemplate.parentNode.appendChild(clone);





        textNode[i].innerHTML = taskArray[i];


        (function () {
            var k = i;


            cloneCheck[i].addEventListener("click", function() { selectTask(k); }, false);

        }()); // immediate invocation


        if (checkedArray[i] == 'true') {
          console.log(i);
          cloneCheck[i].checked = true;

        }else{
          cloneCheck[i].checked = false;
        }





      };

      ////////////////////////////////
      
      for (var i = 0; i < (taskArray.length); i++) {
        
        var taskText = document.getElementsByClassName("taskText textNode");
        
      
      
      
      
        (function () {
            var k = i;
      
      
            taskText[k].addEventListener("blur", function() { editTaskStore(k); }, false);
      
        }()); // immediate invocation

  
      };






      // ndx_result.value = mainNdx;

    } else {
      // Initize data if it is empty/invalid
      task.value = "";

      mainNdx = 0;
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }



}









function writeData() {
  console.log("writeData called");
  if (typeof (Storage) !== "undefined") {

    // Add data to array
    taskArray.push(addInput.value);

    checkedArray.push(false);

    // Increment array index number
    mainNdx = taskArray.length - 1;
    // Convert array into data string
    tasksStr = taskArray.join();

    checkedStr = checkedArray.join();

    // save data string to local storage
    localStorage.bmr_tasks = tasksStr;

    localStorage.bmr_checked = checkedStr;

    localStorage.bmr_Ndx = mainNdx;
    //
    // ndx_result.value = mainNdx;



  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

function updateCheckData(whichOne) {

  if (typeof (Storage) !== "undefined") {
    // Add data to array

    

    if(checkedArray[whichOne] == 'true'){
      checkedArray.splice(whichOne, 1, 'false');


      // Convert array into data string


      checkedStr = checkedArray.join();

      



      // save data string to local storage



      localStorage.bmr_checked = checkedStr;

    }else{
      checkedArray.splice(whichOne, 1, 'true');

      // Convert array into data string


      checkedStr = checkedArray.join();



      // save data string to local storage



      localStorage.bmr_checked = checkedStr;
    }






    // Convert array into data string


    checkedStr = checkedArray.join();



    // save data string to local storage



    localStorage.bmr_checked = checkedStr;



  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
};


function updateTaskData(whichtask) {

  if (typeof (Storage) !== "undefined") {
    // Add data to array
  

    var taskText = document.getElementsByClassName("taskText textNode");
    
      var newText = taskText[whichtask].innerHTML;
    

    

      taskArray.splice(whichtask, 1, newText);


      // Convert array into data string


      taskStr = taskArray.join();

      



      // save data string to local storage



      localStorage.bmr_tasks = taskStr;







    // Convert array into data string


    taskStr = taskArray.join();



    // save data string to local storage



    localStorage.bmr_tasks = taskStr;



  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
};

svgTrash.addEventListener('click', removeData);
function removeData() {
  console.log("removeData called");
  if (typeof (Storage) !== "undefined") {

    var isChecked = checkedArray.filter(word => word.length < 5);
    console.log(isChecked);
    if (isChecked.length != checkedArray.length){
      console.log('not all selected');

      for (var i = checkedArray.length - 1; i >= 0; i--){
      
        if (checkedArray[i] == 'true') {
          
          checkedArray.splice(i, 1);
          taskArray.splice(i, 1);
          // Increment array index number
          mainNdx = mainNdx - 1;
  
  
        }
        
      }
      tasksStr = taskArray.join();
  
      checkedStr = checkedArray.join();
  
      // save data string to local storage
      localStorage.bmr_tasks = tasksStr;
  
      localStorage.bmr_checked = checkedStr;
  
      localStorage.bmr_Ndx = mainNdx;
      
      
      
      location.reload();
      
    }else{
      
      removeAllData();
      console.log('all selected');
    };
    
    



    






  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}


function removeAllData() {
  console.log("removeAllData called");
  if (typeof (Storage) !== "undefined") {
    if (confirm('Are you sure you want to remove ALL records?')) {
      localStorage.removeItem("bmr_tasks");
      localStorage.removeItem("bmr_checked");
      localStorage.removeItem("bmr_Ndx");
      // Initize data if it is empty/invalid
      task.value = "";
      // check.value = 0;
      mainNdx = 0;


      location.reload();
      
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}



if (localStorage.bmr_tasks){
  console.log(localStorage.bmr_tasks);
  
  var introText = document.getElementsByClassName('introText');


  for (var i = 0; i < (introText.length); i++) {
    introText[i].style.display = 'none'; //not displaying text

  };
  
  


}else{
  
  var introText = document.getElementsByClassName('introText');


  for (var i = 0; i < (introText.length); i++) {
    introText[i].style.display = 'block'; //displaying text

  };
}
