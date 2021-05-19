// Variables
var arrEmployee = [];
var validator = new Validation();

// Get element by Id
function getEleById(ele) {
  return document.getElementById(ele);
}

// Get element by query selector
function getEleBySelector(ele) {
  return document.querySelector(ele);
}

// Render table row
function renderTableRow(arrEmployee) {
  var tableRow = "";

  for (var i = 0; i < arrEmployee.length; i++) {
    var employee = arrEmployee[i];

    tableRow += `<tr>
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

  getEleById("employeeTableBody").innerHTML = tableRow;
}

// Handle save data to storage
function handleSaveDataStorage(employee) {
  var arrEmployee = JSON.stringify(employee);

  localStorage.setItem("employee", arrEmployee);
}

function handleAddEmployee() {
  getEleById("btnAddEmployee").onclick = function () {
    var employee = new Employee();

    var title = getEleBySelector("#title");
    var titleSelected = title[title.selectedIndex];

    // Assigne value's getted from dom to employee
    employee.title = titleSelected.innerHTML;
    employee.code = getEleBySelector("#code").value;
    employee.name = getEleBySelector("#name").value;
    employee.salary = getEleBySelector("#salary").value;
    employee.indexTitle = getEleBySelector("#title").value;
    employee.timeWork = getEleBySelector("#timeWork").value;

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

    // Push employees to array
    arrEmployee.push(employee);

    // Init table
    renderTableRow(arrEmployee);

    // Init save data into storage
    handleSaveDataStorage(employee);
  };
}

handleAddEmployee();
