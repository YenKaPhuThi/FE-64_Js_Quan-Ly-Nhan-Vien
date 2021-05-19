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
function renderEmployeeTable(arrEmployee) {
  var contentTable = "";

  for (var i = 0; i < arrEmployee.length; i++) {
    var employee = arrEmployee[i];
    contentTable += `<tr>
      <td>${employee.code}</td>
      <td>${employee.name}</td>
      <td>${employee.title}</td>
      <td>${employee.salary}</td>
      <td>${employee.timeWork}</td>
      <td>${employee.handleCaculateSalary()}</td>
      <td>${employee.handleArrangeLevel()}</td>
      <td>
        <button class="btn btn-danger">Xoá</button>
        <button class="btn btn-primary">Sửa</button>
      </td>
    </tr>`;
  }

  getMyEleId("employeeTableBody").innerHTML = contentTable;
}

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

    // Init renderEmployeeTable();
    renderEmployeeTable(arrEmployee);

    handleSaveDataStorage(employee);
  });
}

handleAddEmpoyee();
