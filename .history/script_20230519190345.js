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
    document.write("&nbsp;&nbsp;");
  }
  for (let j = 5; j >= i; j--) {
    document.write("*");
  }
  document.write("<br>");
}
document.write("<br>");
//hinh 4
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("&nbsp;&nbsp;");
  }
  for (let j = i; j <= 5; j++) {
    document.write("*");
  }
  document.write("<br>");
}
