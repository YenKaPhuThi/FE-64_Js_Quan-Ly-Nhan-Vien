// Get element by selector
function getMyEleId(ele) {
  return document.querySelector(ele);
}

// Handle Validation
function Validation() {
  this.checkEmpty = function (value, field, name) {
    if (value.trim() !== "") {
      getMyEleId(field).style.display = "none";

      return true;
    } else {
      getMyEleId(field).style.display = "block";
      getMyEleId(field).innerHTML = name + " không được bỏ trống!";

      return false;
    }
  };

  this.checkNumber = function (value, field, name) {
    var regexNumber = /^[0-9]+$/;

    if (value.trim() == "") {
      getMyEleId(field).style.display = "block";
      getMyEleId(field).innerHTML = name + " không được bỏ trống!";

      return null;
    }

    if (regexNumber.test(value)) {
      getMyEleId(field).style.display = "none";

      return true;
    } else {
      getMyEleId(field).style.display = "block";
      getMyEleId(field).innerHTML = name + " phải nhập từ 0 đến 9!";

      return false;
    }
  };

  this.checkMinLength = function (value, field, minLength, name) {
    if (value.trim() == "") {
      getMyEleId(field).style.display = "block";
      getMyEleId(field).innerHTML = name + " không được bỏ trống!";

      return null;
    }

    if (value.length < minLength) {
      getMyEleId(field).style.display = "block";
      getMyEleId(field).innerHTML =
        name + " nhập ít nhất" + minLength + " kí tự!";

      return false;
    } else {
      getMyEleId(field).style.display = "none";

      return true;
    }
  };
}
