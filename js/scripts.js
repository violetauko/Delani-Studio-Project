$(document).ready(function(){
  $(".design").click(function() {
     $("#design, .design").toggle("slow");
});
  $("#design").click(function() {
    $(".design, #design").toggle("slow");
});
  $(".development").click(function() {
    $("#development, .development").toggle("slow");
});
  $("#development").click(function() {
    $(".development, #development").toggle("slow");
});
  $(".product-mgt").click(function() {
    $("#product-mgt, .product-mgt").toggle("slow");
});
  $("#product-mgt").click(function() {
    $(".product-mgt, #product-mgt").toggle("slow");
   });
});

$(".col-md-3").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });
  

  $("button").click(function (event) {
    var client = document.getElementById('name').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successfuly. ' + ' Feel free to reach out to us anytime');
    event.preventDefault();
  });







