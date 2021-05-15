function Employee() {
  this.code = "";
  this.name = "";
  this.title = "";
  this.salary = "";
  this.timeWork = "";
  this.indexTitle = "";
  this.handleCaculateSalary = function () {
    var salary = this.salary * this.indexTitle;

    return salary;
  };
  this.handleArrangeLevel = function () {
    var level = "";

    if (this.timeWork >= 120) {
      level = "Xuất sắc";
    } else if (100 <= this.timeWork && this.timeWork < 120) {
      level = "Giỏi";
    } else if (75 <= this.timeWork && this.timeWork < 100) {
      level = "Khá";
    } else {
      level = "Trung bình";
    }

    return level;
  };
}
