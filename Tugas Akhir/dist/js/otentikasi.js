function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "user" && password == "123123") {
    alert("Berhasil Masuk");
    window.location = "home.html"; // Redirecting to other page.
    return false;
  } else if (username == "admin" && password == "123456") {
    alert("Admin Berhasil Masuk");
    window.location = "index.html"; // Redirecting to other page.
    return false;
  } else {
    alert("Maaf terjadi kesalahan, silahkan cek kembali");
  }
}