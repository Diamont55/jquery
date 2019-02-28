$("#append").on("click", function(){
    var cuadro = $(".square").first().clone();
    $(".squares").append(cuadro)
});
