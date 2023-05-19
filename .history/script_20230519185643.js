//hinh 1
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");
//hinh 2
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");
//hinh 3
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");
//hinh 4
let str4 = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 5; j >= i; j--) {
    str4 += " ";
  }
  for (let q = 1; q <= i; q++) {
    str4 += "*";
  }
  str4 += "<br/>";
}
document.write(str4 + "<br/>");
