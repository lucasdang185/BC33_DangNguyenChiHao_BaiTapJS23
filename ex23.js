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

/**Bài 3: Quy đổi tiền tệ
 * 
 * input: nhập số tiền usd
 * process: 
 * 1: lấy input 
 * 2: giá trị tiền vn = tiền usd * 23500;
 * 3: in kết quả ra màn hình
 * 
 * output: số tiền vn sau khi quy đổi
*/

function ex3(){
  var num = parseInt(document.getElementById("txtNumberUSD").value);
  if(num < 0 ){
    return document.getElementById("rs3").innerHTML = "Kiểm tra số USD vừa nhập!"
  }
  var rs = num * 23500;
  document.getElementById("rs3").innerHTML= rs;
}

/**Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * input: nhập chiều dài + rộng
 * process: 
 * 1: lấy input 
 * 2: chu vi = (dài + rộng) * 2
 * 3: diện tích = dài * rộng
 * 4: in kết quả ra màn hình
 * 
 * output: diện tích, chu vi hình chữ nhật
*/

function ex4(){
  var num1 = parseInt(document.getElementById("txtDai").value);
  var num2 = parseInt(document.getElementById("txtRong").value);

  if(num1 < 0 || num2 < 0){
    return document.getElementById("rs3").innerHTML = "Kiểm tra kích thước vừa nhập!"
  }
  var p =(num1+num2) * 2;
  var s = num1 * num2;
  document.getElementById("rs4").innerHTML= p;
  document.getElementById("rs5").innerHTML=s ;
}

/**Bài 5: Tính tổng 2 ký số
 * 
 * input: Nhập số có 2 chữ số
 * process: 
 * 1: lấy input 
 * 2: lấy hàng đơn vị = n % 2
 * 3: lấy hàng chục = n / 10
 * 4: tổng 2 ký số = hàng đơn vị + hàng chục 
 * 4: in kết quả ra màn hình
 * 
 * output: tổng 2 ký số
*/
function ex5(){
  var num = parseInt(document.getElementById("txtNumber").value);
  var tens = Math.floor(num/10);
  var units = num%10;
  var rs = tens + units;
  document.getElementById("rs6").innerHTML=rs ;
  

}
