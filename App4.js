$("form").on("submit",
function(e){
    e.preventDefault();
var n= $("#username").val();
if (n===""){
    $("#username").parent().addClass("has-error");
}
});