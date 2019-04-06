/*function myfontfamily() {
    var x = document.getElementById("fontfamily").value;
    document.getElementById("txt").style.fontFamily = x;
}*/

$(document).ready(function(){
    $("#fontfamily").change(function(){
         $("#txt").css("font-family" , $("#fontfamily").val());
       
    });
  });

/*function myfontsize() {
var y = document.getElementById("fontsize").value;
document.getElementById("txt").style.fontSize = y;
}*/

$(document).ready(function(){
$("#fontsize").change(function(){
    $("#txt").css("font-size" ,$("#fontsize").val());
});
});

/*function mybold() {
var a = document.getElementById("txt").style.fontWeight;
if (a == 'bold') {document.getElementById("txt").style.fontWeight = 'normal';}
else {document.getElementById("txt").style.fontWeight = 'bold';}
}*/

$(document).ready(function(){
$("#bold").click(function(){
    var a = $("#txt").css("font-weight");
    if (a == 400) { $("#txt").css("font-weight" , "bold");}
    else {$("#txt").css("font-weight" , "normal");}
});
});

/*function myitalic() {
var b = document.getElementById("txt").style.fontStyle;
if (b == 'italic') {document.getElementById("txt").style.fontStyle = 'normal';}
else {document.getElementById("txt").style.fontStyle = 'italic';}
}*/


$(document).ready(function(){
$("#italic").click(function(){

var b  = $("txt").css("font-style");
if (b == "italic") {$("#txt").css("font-style" , "normal");}
else {$("#txt").css("font-style" , "italic");}
});
});

/*
function myunderline() {
var b = document.getElementById("txt").style.textDecoration;
if (b == 'underline') {document.getElementById("txt").style.textDecoration = 'none';}
else {document.getElementById("txt").style.textDecoration = 'underline';}
}*/

$(document).ready(function(){
$("#underline").click(function(){
  var b  = $("#txt").css("text-decoration");
  console.log(b);
  if (b =='underline solid rgb(0, 0, 0)') {$("#txt").css("text-decoration" , "none");}
  else {$("#txt").css("text-decoration" , "underline");}
  });
});