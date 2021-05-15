// Get element by id
function getMyEleId(ele) {
  return document.getElementById(ele);
}

// Get element by selector
function getMyEleSelector(ele) {
  return document.querySelector(ele);
}

// Handle add employee
function handleAddEmpoyee() {
  getMyEleId("btnAddEmployee").addEventListener("click", function () {});
}

handleAddEmpoyee();
