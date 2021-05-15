// Get element by id
function getMyEleId(ele) {
  return document.getElementById(ele);
}

// Get element by selector
function getMyEleSelector(ele) {
  return document.querySelector(ele);
}

// Create element
function createEle(ele) {
  return document.createElement(ele);
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
    employee.timeWork = getMyEleSelector("#timeWork").value;

    console.log(employee.code);
    console.log(employee.name);
    console.log(employee.title);
    console.log(employee.salary);
    console.log(employee.indexTitle);
    console.log(employee.timeWork);

    // Create td tags
    var cellCode = createEle("td");
    cellCode.innerHTML = employee.code;

    var cellName = createEle("td");
    cellName.innerHTML = employee.name;

    var cellTitle = createEle("td");
    cellTitle.innerHTML = employee.title;

    var cellSalary = createEle("td");
    cellSalary.innerHTML = employee.salary;

    var cellSummSalary = createEle("td");
    cellSummSalary.innerHTML = employee.handleCaculateSalary();

    var cellLevel = createEle("td");
    cellLevel.innerHTML = employee.handleArrangeLevel();

    var cellAction = createEle("td");
    cellAction.innerHTML = "";
  });
}

handleAddEmpoyee();
