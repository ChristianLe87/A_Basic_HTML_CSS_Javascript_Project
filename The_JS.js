function Funcion_Alert() {
  alert("Congratulations, \nyou just press a button!!!");
  $(".To_Hide_A_Button").show();
}

function Function_Hide_this() {
  $(".To_Hide_A_Button").hide();
}



function previewFile() {
  var preview = document.querySelector('img'); //selects the query named img
  var file = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "";
  }
}

previewFile();  //calls the function named previewFile()
