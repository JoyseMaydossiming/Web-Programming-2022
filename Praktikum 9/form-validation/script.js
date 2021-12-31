function onSubmit() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const time = document.getElementById("time");
  const destination = document.getElementById("destination");
  const tiket = document.getElementById("tiket");
  const form = document.getElementById("form");

  //error
  const errorNameElement = document.getElementById("nameerror");
  const errorEmailElement = document.getElementById("emailerror");
  const errorTimeElement = document.getElementById("timeerror");
  const errorDestinationElement = document.getElementById("desterror");
  const errorTiketElement = document.getElementById("tiketerror");

  //valid
  const validName = document.getElementById("namevalid");
  const validEmail = document.getElementById("emailvalid");
  const validTime = document.getElementById("timevalid");
  const validDestination = document.getElementById("destvalid");
  const validTiket = document.getElementById("tiketvalid");

  function validasiNama(e) {
    //validasi nama
    if (name.value.length < 1) {
      errorNameElement.innerText = "Name cannot be empty";
      return false;
    } else {
      if (name.value.length > 30) {
        errorNameElement.innerText = "Maximum 30 characters";
        return false;
      } else {
        errorNameElement.innerText = "";
        return true;
      }
    }
  }

  function validasiEmail(e) {
    //validasi email
    if (email.value.length < 1) {
      errorEmailElement.innerText = "Email cannot be empty";
      return false;
    } else {
      var emval = email.value;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emval.match(mailformat)) {
        errorEmailElement.innerText = "";
        return true;
      } else {
        errorEmailElement.innerText = "Invalid email";
        return false;
      }
    }
  }

  function validasiJam(e) {
    //validasi waktu
    if (time.value.length < 1) {
      errorTimeElement.innerText = "Departure hours cannot be empty";
      return false;
    } else {
      var tv = time.value;
      errorTimeElement.innerText = "";
      return true;
    }
  }

  function validasiDestinasi(e) {
    //validasi destinasi
    if (destination.value.length < 1) {
      errorDestinationElement.innerText = "Departure Destination cannot be empty";
      return false;
    } else {
      errorDestinationElement.innerText = "";
      return true;
    }
  }

  function validasiTiket(e) {
    //validasi destinasi
    if (tiket.value.length < 1) {
      errorTiketElement.innerText = "The number of tickets cannot be empty";
      return false;
    } else {
      const tv = tiket.value;
      if (isNaN(tv)) {
        errorTiketElement.innerText = "The number of tickets exceeds the limit!, maximum 10";
        return false;
      } else {
        if (tv > 0 && tv <= 10) {
          errorTiketElement.innerText = "";
          return true;
        } else {
          errorTiketElement.innerText = "Maximum 10";
          return false;
        }
      }
    }
  }

  function validationForm() {
    if (
      validasiNama() &&
      validasiEmail() &&
      validasiJam() &&
      validasiDestinasi() &&
      validasiTiket()
    ) {
      validName.innerText = "Customer's Name : " + name.value;
      validEmail.innerText = "Email : " + email.value;
      validTime.innerText = "Hours of Departure : " + time.value;
      validDestination.innerText =
        "Departure Destination : " + destination.value;
      validTiket.innerText = "Number of Tickets : " + tiket.value;
    }
  }

  validasiNama();
  validasiEmail();
  validasiJam();
  validasiDestinasi();
  validasiTiket();
  validationForm();

  return false;
}
