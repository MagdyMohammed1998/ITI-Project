function validate(){
  var getname = document.getElementById('uname').value;
  var getpass = document.getElementById('pass').value;
  var namepattern = /^[a-z]{4,}/i;
  var passpattern = /^[0-9]{2,}[a-z]{6,}[0-9]{2,}/i;
  var nameResult = namepattern.test(getname);
  var passResult = passpattern.test(getpass);
  console.log("Name:"+nameResult + ", Password:"+passResult);
  
  return false;
  }

  //**************

  
 //  let loginButton = document.getElementById("login");
 //  let logoutButton = document.getElementById("logout");
 //  let updateButton = document.getElementById("update");
 //  let getButton = document.getElementById("get");
 //  let message = document.getElementById("message");

 // loginButton.addEventListener("click", login);
 // logoutButton.addEventListener("click", logout);
 // updateButton.addEventListener("click", update);
 // getButton.addEventListener("click", get);

 function login() {
  let username = document.getElementById("uname");
  let password = document.getElementById("pass");
 // Add the username and password to cookies     // add form data to cookies to be deleted after 3 days
  document.cookie = `username=${username.value}; max-age=259200`;
  document.cookie = `password=${password.value}; max-age=259200`;

 }

//*****************


 function goTofacebook() {
  location.assign("https://www.facebook.com");
  }

 function goToGoogle() {
  location.assign("https://myaccount.google.com");
  }
      
      
  let currentUrl = window.location.search;
  console.log(currentUrl);
  let result = currentUrl.split('?')[1];
  let user_name = result.split('=')[1];
  var welcome_user ='welcom ' + user_name + ' !!!';
  console.log(welcome_user);
  document.write(welcome_user);