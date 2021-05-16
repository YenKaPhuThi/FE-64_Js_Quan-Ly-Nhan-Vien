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
}
