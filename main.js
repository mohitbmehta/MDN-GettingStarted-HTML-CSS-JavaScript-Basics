//onclick image change

var myImage = document.querySelector('img');
myImage.onclick = function(){  //this is anonymous function because it doesn' have name.
      var mySrc = myImage.getAttribute('src');//src is a attribute of image element
      if (mySrc === 'images/firefox.png'){
        myImage.setAttribute('src','images/firefox2.png');
      }
      else {
        myImage.setAttribute('src','images/firefox.png');
      }
    }

//Change user name code

var myButton = document.querySelector('button');
var myHeader = document.querySelector('h1');

function setName(){
  var newName = prompt('Enter Your Name');
  /* we call on an API called localStorage, which allows us to store data in the browser and later retrieve it. We use localStorage's setItem()
  function to create and store a data item called 'name', setting its value to the myName variable which contains the data the user entered.*/
  localStorage.setItem ('name',newName);
  myHeader.textContent = "Mozila is cool, " + newName;
}
  if(!localStorage.getItem('name')){
      setName();
  }
  else {
    var newUser = localStorage.getItem('name');
    myHeader.textContent ="Mozila is cool, " + newUser;
  }
  myButton.onclick = function(){
  setName();
}
