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



console.log("hello world.");

$("popup1").on("click", function(){
    $("popup1").addClass("active");
});

$('#popup1').popup({
    background: false
});