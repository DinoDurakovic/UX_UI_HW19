








$("button1").on("mouseenter", function(){
$("button1").css("background-color", "grey")
});

$("button1").on("mouseleave", function(){
$("button1").css("background-color", "#30391A")
});



 
$("button2").on("mouseenter", function(){
  $("button2").css("background-color", "grey")
  });
  
  $("button2").on("mouseleave", function(){
  $("button2").css("background-color", "#30391A")
  });

  $("button2").on("mouseenter", function(){
    $("button2").css("cursor", "pointer")
    });
    
    $("button2").on("mouseleave", function(){
    $("button2").css("cursor", "#30391A")
    });


//
$("button3").on("mouseenter", function(){
  $("button3").css("background-color", "grey")
  });
  
  $("button3").on("mouseleave", function(){
  $("button3").css("background-color", "#30391A")
  });

  $("button3").on("mouseenter", function(){
    $("button3").css("cursor", "pointer")
    });
    
    $("button3").on("mouseleave", function(){
    $("button3").css("cursor", "#30391A")
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

