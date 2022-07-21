/**Bài 1: Tính tiền lương nhân viên 
 * 
 * input: tiền lương 1 ngày và tổng số ngày làm
 * process: 
 * 1: lấy input 
 * 2: tiền lương = số ngày * tiền lương 1 ngày
 * 3: in kết quả ra màn hình
 * 
 * output: Tiền lương của nhân viên 
*/
function ex1() {
  var salaryPerDay = parseInt(document.getElementById("txtMoneyPerDay").value);
  var workDays = parseInt(document.getElementById("txtDays").value);

  if (salaryPerDay > 0 && workDays > 0) {
    var rs = salaryPerDay * workDays;
    return (document.getElementById("rs1").innerHTML = rs);
  }
  document.getElementById("rs1").innerHTML =
    "Kiểm tra lương và số ngày làm việc hợp lệ!";
}


/**Bài 2: Tính giá trị trung bình
 * 
 * input: nhập các số
 * process: 
 * 1: lấy input 
 * 2: giá trị trung bình = tổng giá trị các số / n 
 * 3: in kết quả ra màn hình
 * 
 * output: Giá trị trung bình của n số
*/

function ex2(){
  var num1 = parseInt(document.getElementById("txtNum1").value);
  var num2 = parseInt(document.getElementById("txtNum2").value);
  var num3 = parseInt(document.getElementById("txtNum3").value);
  var num4 = parseInt(document.getElementById("txtNum4").value);
  var num5 = parseInt(document.getElementById("txtNum5").value);

  var rs = (num1+num2+num3+num4+num5)/5;
  document.getElementById("rs2").innerHTML= rs;
}