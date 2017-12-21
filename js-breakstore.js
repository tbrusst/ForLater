

// bmr Local Storage
//





var timeArray = new Array();



function readData() {
  console.log("readData called");
  // Does this browser support local storage?
  if (typeof (Storage) !== "undefined") {





    // Read data from local storage



    timeStr = localStorage.bmr_time;






    console.log("timeStr is .. " + timeStr);




    if (typeof(timeStr) !== "undefined"){
      timeArray = timeStr;
    }
}
}





function writeData() {

  if (typeof (Storage) !== "undefined") {
    // Add data to array


    timeArray.splice(0, 1, count);



    // Convert array into data string


    timeStr = timeArray.join();



    // save data string to local storage



    localStorage.bmr_time = timeStr;



  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
};


// function removeAllData() {
//   console.log("removeData called");
//   if (typeof (Storage) !== "undefined") {
//     if (confirm('Are you sure you want to remove ALL records?')) {
//       localStorage.removeItem("jwt_FirstNames");
//       localStorage.removeItem("jwt_Ages");
//       localStorage.removeItem("jwt_Ndx");
//       // Initize data if it is empty/invalid
//       firstName.value = "";
//       age.value = 0;
//       mainNdx = 0;
//       ndx_result.value = mainNdx;
//     }
//   } else {
//     // Sorry! No Web Storage support..
//     alert('This browser does NOT support local storage');
//   }
// }
