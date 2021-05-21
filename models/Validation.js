// Get element by Id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Handle Validation
function Validation() {
  this.checkEmpty = function (value, field, name) {
    if (value.trim() !== "") {
      getEleById(field).style.display = "none";

      return true;
    } else {
      getEleById(field).style.display = "block";
      getEleById(field).innerHTML = name + " không được bỏ trống!";

      return false;
    }
  };

  this.checkNumber = function (value, field, name) {
    var regexNumber = /^[0-9]+$/;

    if (value.trim() == "") {
      getEleById(field).style.display = "block";
      getEleById(field).innerHTML = name + " không được bỏ trống!";

      return null;
    }

    if (regexNumber.test(value)) {
      getEleById(field).style.display = "none";

      return true;
    } else {
      getEleById(field).style.display = "block";
      getEleById(field).innerHTML = name + " phải nhập từ 0 đến 9!";

      return false;
    }
  };

  this.checkLength = function (value, field, minLength, maxLength, name) {
    if (value.trim() == "") {
      getEleById(field).style.display = "block";
      getEleById(field).innerHTML = name + " không được bỏ trống!";

      return null;
    }

    if (value.length < minLength || value.length > maxLength) {
      getEleById(field).style.display = "block";
      getEleById(field).innerHTML =
        name + " nhập từ " + minLength + " đến " + maxLength + " kí tự!";

      return false;
    } else {
      getEleById(field).style.display = "none";

      return true;
    }
  };
}
