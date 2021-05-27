function Employee(code, name, title, salary, timeWork, indexTitle) {
  this.code = code;
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.timeWork = timeWork;
  this.indexTitle = indexTitle;
  this.handleCaculateSalary = function () {
    var salary = this.salary * this.indexTitle;

    return salary;
  };
  this.handleArrangeLevel = function () {
    var level = "";

    if (this.timeWork >= 120) {
      level = "Nhân viên xuất sắc";
    } else if (100 <= this.timeWork && this.timeWork < 120) {
      level = "Nhân viên giỏi";
    } else if (75 <= this.timeWork && this.timeWork < 100) {
      level = "Nhân viên khá";
    } else {
      level = "Nhân viên trung bình";
    }

    return level;
  };
}
