function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "joyse2021" && password == "integrity") {
    alert("Login Success");
    window.location = "success.html"; // Redirecting to other page.
    return false;
  } else {
    alert("Sorry, there was an error");
  }
}

