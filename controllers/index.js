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

// Define global variables
var arrEmployee = [];

// Render employee table

// Handle delete employee
function handleDeleteEmployee(btnEle) {
  btnEle.onclick = function () {
    var rowParrent = btnEle.closest("tr");
    rowParrent.remove();
  };
}

// Handle save data to storage
function handleSaveDataStorage(object) {
  var arrEmployee = JSON.stringify(object);

  localStorage.setItem("employee", arrEmployee);
}

// Handle add employee
function handleAddEmpoyee() {
  getMyEleId("btnAddEmployee").addEventListener("click", function () {
    var employee = new Employee();
    var validator = new Validation();

    var title = getMyEleSelector("#title");
    var titleSelected = title[title.selectedIndex];

    // Assigne value's getted from dom to employee
    employee.code = getMyEleSelector("#code").value;
    employee.name = getMyEleSelector("#name").value;
    employee.title = titleSelected.innerHTML;
    employee.salary = getMyEleSelector("#salary").value;
    employee.indexTitle = getMyEleSelector("#title").value;
    employee.timeWork = getMyEleSelector("#timeWork").value;

    // Create btn and handle delete
    var btnDelete = createEle("button");
    btnDelete.innerHTML = "Xoá";
    btnDelete.className = "btn btn-danger";

    // Create td tags
    var cellCode = createEle("td");
    cellCode.innerHTML = employee.code;

    var cellName = createEle("td");
    cellName.innerHTML = employee.name;

    var cellTitle = createEle("td");
    cellTitle.innerHTML = employee.title;

    var cellSalary = createEle("td");
    cellSalary.innerHTML = employee.salary;

    var cellSumSalary = createEle("td");
    cellSumSalary.innerHTML = employee.handleCaculateSalary();

    var cellTimeWork = createEle("td");
    cellTimeWork.innerHTML = employee.timeWork;

    var cellLevel = createEle("td");
    cellLevel.innerHTML = employee.handleArrangeLevel();

    var cellAction = createEle("td");
    cellAction.appendChild(btnDelete);

    // Create tr tags
    var row = createEle("tr");
    row.appendChild(cellCode);
    row.appendChild(cellName);
    row.appendChild(cellTitle);
    row.appendChild(cellSalary);
    row.appendChild(cellSumSalary);
    row.appendChild(cellSumSalary);
    row.appendChild(cellTimeWork);
    row.appendChild(cellLevel);
    row.appendChild(cellAction);

    // Check validation
    var valid = true;

    valid &=
      validator.checkEmpty(employee.code, "codeErorr", "Mã nhân viên") &
      validator.checkEmpty(employee.name, "nameErorr", "Tên nhân viên") &
      validator.checkEmpty(employee.salary, "salaryErorr", "Lương cơ bản") &
      validator.checkEmpty(
        employee.timeWork,
        "timeWorkErorr",
        "Số giờ làm trong tháng"
      );

    valid &=
      validator.checkNumber(employee.salary, "salaryErorr", "Lương cơ bản") &
      validator.checkNumber(
        employee.timeWork,
        "timeWorkErorr",
        "Số giờ làm trong tháng"
      );

    valid &= validator.checkMinLength(
      employee.code,
      "codeErorr",
      4,
      "Mã nhân viên"
    );

    if (!valid) {
      return null;
    }

    // Push Employee into array
    arrEmployee.push(employee);

    console.log("arrEmployee", arrEmployee);

    // Append rows into table
    getMyEleSelector("#employeeTableBody").appendChild(row);

    handleDeleteEmployee(btnDelete);
    handleSaveDataStorage(employee);
  });
}

handleAddEmpoyee();
