var d = new Date();
var time = d.getHours();

if (time < 12) {
  document.write("<b>Good Morning!</b>");
}
if (time > 12) {
  document.write("<b>Good Afternoon!</b>");
}
if (time == 12) {
  document.writeln("<b>Good Noon!</b>");
}
document.write('<span style = "color: red; font-size: 24px">' + ("<br>Welcome to this Page!") + '</ span> <br/>');
document.write("This is a Greeting from an external JS file.")