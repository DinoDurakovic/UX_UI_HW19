








$("button1").on("mouseenter", function(){
$("button1").css("background-color", "grey")
});

$("button1").on("mouseleave", function(){
$("button1").css("background-color", "#30391A")
});

$("buttonrs").on("mouseenter", function(){
  $("buttonrs").css("background-color", "grey")
  });
  
  $("buttonrs").on("mouseleave", function(){
  $("buttonrs").css("background-color", "#5B0F00")
  });
  



 
$(".view").on("mouseenter", function(){
  $(".view").css("background-color", "grey")
  });
  
  $(".view").on("mouseleave", function(){
  $(".view").css("background-color", "#30391A")
  });

  $(".view").on("mouseenter", function(){
    $(".view").css("cursor", "pointer")
    });
    
    $(".view").on("mouseleave", function(){
    $(".view").css("cursor", "#30391A")
    });


//
$(".view1").on("mouseenter", function(){
  $(".view1").css("background-color", "grey")
  });
  
  $(".view1").on("mouseleave", function(){
  $(".view1").css("background-color", "#30391A")
  });

  $(".view1").on("mouseenter", function(){
    $(".view1").css("cursor", "pointer")
    });
    
    $(".view1").on("mouseleave", function(){
    $(".view1").css("cursor", "#30391A")
    });


    $("button4").on("mouseenter", function(){
      $("button4").css("background-color", "grey")
      });
      
      $("button4").on("mouseleave", function(){
      $("button4").css("background-color", "#30391A")
      });
    
      $("button4").on("mouseenter", function(){
        $("button4").css("cursor", "pointer")
        });
        
        $("button4").on("mouseleave", function(){
        $("button4").css("cursor", "#30391A")
        });




console.log("hello world, it is I.");



// Get the modal
var modal = document.getElementById("popup1");

// Get the button that opens the modal
var btn = document.getElementById("contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
} 

