$("form").on("submit",
function(e){
    e.preventDefault();
var n= $("#password").val();
if (n===""){
    $("#password").parent().addClass("has-error");
}
});