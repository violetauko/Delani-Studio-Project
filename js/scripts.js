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

   $("#image1").hover(function() {
    $("#image1 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      }
);
  $("#image2").hover(function() {
    $("#image2 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      });
  $("#image3").hover(function() {
    $("#image3 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      });
  $("#image4").hover(function() {
    $("#image4 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      });
  $("#image5").hover(function() {
    $("#image5 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      });
  $("#image6").hover(function() {
    $("#image6 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      });
  $("#image7").hover(function() {
    $("#image7 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      });
  $("#image8").hover(function() {
    $("#image8 .middle").css({"opacity": "0.8","background-color": "#474343"});
      },function() {
        $(".middle").css({"opacity": "0"});
      });
});



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






