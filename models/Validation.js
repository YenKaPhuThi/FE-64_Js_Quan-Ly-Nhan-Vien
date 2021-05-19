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

  this.checkMinLength = function (value, field, minLength, name) {
    if (value.trim() == "") {
      getEleById(field).style.display = "block";
      getEleById(field).innerHTML = name + " không được bỏ trống!";

      return null;
    }

    if (value.length < minLength) {
      getEleById(field).style.display = "block";
      getEleById(field).innerHTML =
        name + " nhập ít nhất" + minLength + " kí tự!";

      return false;
    } else {
      getEleById(field).style.display = "none";

      return true;
    }
  };
}
