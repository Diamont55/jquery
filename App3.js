$(document).on("keyup",
function(e){
console.log(e.which);
var tarea =$("#new-task").val();
if(e.which=="13"){   
$(".todo").append("<li>" + tarea + "</li>")
}
});