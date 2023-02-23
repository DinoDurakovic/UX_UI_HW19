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