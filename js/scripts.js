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

// $(".col-md-3").hover(function () {
//     $(this).children(".card-1").slideToggle();
//   });
  

  function validate(event) {
    var{name,email,message} = document.contactForm;
    if( name.value == "") {
       alert( "enter name!" );
       name.focus() ;
       return false;
    }
    else if( email.value ==""){
       alert( "Enter email!" );
       email.focus() ;
       return false;
    }
    else if( message.value =="") {
       alert( "write a message!" );
       message.focus() ;
       return false;
    }else{
        alert(name.value +" "+ "we have received your message. Thank you for reaching out to us.")
        return true;
    }
    event.preventDefault();
    
}






