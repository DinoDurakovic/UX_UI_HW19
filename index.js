$(".project1").on("mouseenter", function(){
  $(".project1").css("background-color", "grey")
});

$(".project1").on("mouseleave", function(){
  $(".project1").css("background-color", "white")
});

$(".project2").on("mouseenter", function(){
  $(".project2").css("background-color", "grey")
});

$(".project2").on("mouseleave", function(){
  $(".project2").css("background-color", "white")
});

$(".project3").on("mouseenter", function(){
  $(".project3").css("background-color", "grey")
});

$(".project3").on("mouseleave", function(){
  $(".project3").css("background-color", "white")
});

$(".project4").on("mouseenter", function(){
  $(".project4").css("background-color", "grey")
});

$(".project4").on("mouseleave", function(){
  $(".project4").css("background-color", "white")
});


$(".card").on("mouseenter", function(){
  $(".card").css("background-color", "grey")
});

$(".card").on("mouseleave", function(){
  $(".card").css("background-color", "white")
});







$("button1").on("mouseenter", function(){
$("button1").css("background-color", "grey")
});

$("button1").on("mouseleave", function(){
$("button1").css("background-color", "#30391A")
});

$("button2").on("mouseenter", function(){
  $("button2").css("background-color", "grey", "border", "2px solid #30391A")
  });
  
  $("button2").on("mouseleave", function(){
  $("button2").css("background-color", "#30391A")
  });

  $("button2").on("mouseenter", function(){
    $("button2").css("border", "2px solid #30391A")
    });
    
    $("button2").on("mouseleave", function(){
    $("button2").css("border", "none")
    });

    $("button2").on("mouseenter", function(){
      $("button2").css("text-decoration", "underline")
      });
      
      $("button2").on("mouseleave", function(){
      $("button2").css("text-decoration", "none")
      });
  
      $("button2").on("mouseenter", function(){
        $("button2").css("color", "#30391A")
        });
        
        $("button2").on("mouseleave", function(){
        $("button2").css("color", "white")
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

