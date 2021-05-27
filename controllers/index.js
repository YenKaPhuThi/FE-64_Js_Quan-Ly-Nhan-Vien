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
    // Get each Employee from array
    var el = arrEmployee[i];
    var employee = new Employee(
      el.code,
      el.name,
      el.title,
      el.salary,
      el.timeWork,
      el.indexTitle
    );

    // From Employee create tr string
    tableRow += `<tr>
      <td>${employee.code}</td>
      <td>${employee.name}</td>
      <td>${employee.title}</td>
      <td>${employee.salary}</td>
      <td>${employee.timeWork}</td>
      <td>${employee.handleCaculateSalary()}</td>
      <td>${employee.handleArrangeLevel()}</td>
      <td>
      <button class="btn btn-danger" onclick="handleDeleteEmployee('${
        employee.code
      }')">Xoá</button>
        <button class="btn btn-primary" onclick="handleEditEmployee('${
          employee.code
        }')">Sửa</button>
      </td>
    </tr>`;
  }

  getEleById("employeeTableBody").innerHTML = tableRow;
}

// Handle delete employee from array
function handleDeleteEmployee(employeeCode) {
  for (var i = arrEmployee.length - 1; i >= 0; i--) {
    var employee = arrEmployee[i];

    if (employee.code == employeeCode) {
      arrEmployee.splice(i, 1);
    }
  }
  renderTableRow(arrEmployee);
}

// Handle edit employee from array
function handleEditEmployee(employeeCode) {
  for (var i = 0; i < arrEmployee.length; i++) {
    var employee = arrEmployee[i];

    if (employee.code == employeeCode) {
      getEleBySelector("#code").value = employee.code;
      getEleBySelector("#name").value = employee.name;
      getEleBySelector("#salary").value = employee.salary;
      getEleBySelector("#title").value = employee.indexTitle;
      getEleBySelector("#timeWork").value = employee.timeWork;
    }
  }
}

// Handle save data to storage
function handleSaveDataStorage() {
  // Convert employee array to string before saving
  var sArrEmployee = JSON.stringify(arrEmployee);
  localStorage.setItem("arrEmployee", sArrEmployee);
}

// Handle get data from storage
function handleGetDataStorage() {
  // Check there is any data in storage
  if (localStorage.getItem("arrEmployee")) {
    // Get data from local storage
    var sArrEmployee = localStorage.getItem("arrEmployee");

    // Convert data to array and assign to Employee
    arrEmployee = JSON.parse(sArrEmployee);

    // Init render table row
    renderTableRow(arrEmployee);
  }
}

// Handle add employee
function handleAddEmployee() {
  getEleById("btnAddEmployee").addEventListener("click", function () {
    var employee = new Employee();

    // Assigne value's getted from dom to Employee
    var title = getEleBySelector("#title");
    var titleSelected = title[title.selectedIndex];

    employee.title = titleSelected.innerHTML;
    employee.code = getEleBySelector("#code").value;
    employee.name = getEleBySelector("#name").value;
    employee.salary = getEleBySelector("#salary").value;
    employee.indexTitle = getEleBySelector("#title").value;
    employee.timeWork = getEleBySelector("#timeWork").value;

    // Check validation if it pass then push Employee to array
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

    valid &= validator.checkLength(
      employee.code,
      "codeErorr",
      4,
      6,
      "Mã nhân viên"
    );

    if (!valid) {
      return null;
    }

    // Push each Employee to array when click on btn
    arrEmployee.push(employee);

    // Init render table row
    renderTableRow(arrEmployee);

    // Init save data into storage
    handleSaveDataStorage();
  });
}

// Handle save employee
function handleSaveEmployee() {
  getEleById("btnSaveEmployee").addEventListener("click", function () {
    var employee = new Employee();

    // Assigne value's getted from dom to Employee
    var title = getEleBySelector("#title");
    var titleSelected = title[title.selectedIndex];

    employee.title = titleSelected.innerHTML;
    employee.code = getEleBySelector("#code").value;
    employee.name = getEleBySelector("#name").value;
    employee.salary = getEleBySelector("#salary").value;
    employee.indexTitle = getEleBySelector("#title").value;
    employee.timeWork = getEleBySelector("#timeWork").value;
    console.log(employee);

    for (var i = 0; i < arrEmployee.length; i++) {
      var elUpdate = arrEmployee[i];

      if (elUpdate.code === employee.code) {
        elUpdate.code = employee.code;
        elUpdate.name = employee.name;
        elUpdate.title = employee.title;
        elUpdate.salary = employee.salary;
        elUpdate.timeWork = employee.timeWork;
      }
    }

    // Init render table row
    renderTableRow(arrEmployee);
  });
}

handleAddEmployee();
handleSaveEmployee();
handleGetDataStorage();
