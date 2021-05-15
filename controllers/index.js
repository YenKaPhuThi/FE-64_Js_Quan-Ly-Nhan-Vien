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
  getMyEleId("btnAddEmployee").addEventListener("click", function () {
    var employee = new Employee();

    var title = getMyEleSelector("#title");
    var titleSelected = title[title.selectedIndex];

    // Assigne value's getted from dom to employee
    employee.code = getMyEleSelector("#code").value;
    employee.name = getMyEleSelector("#name").value;
    employee.title = titleSelected.innerHTML;
    employee.salary = getMyEleSelector("#salary").value;
    employee.indexTitle = getMyEleSelector("#title").value;
    employee.timeWork = document.querySelector("#timeWork").value;

    console.log(employee.code);
    console.log(employee.name);
    console.log(employee.title);
    console.log(employee.salary);
    console.log(employee.indexTitle);
    console.log(employee.timeWork);
  });
}

handleAddEmpoyee();
