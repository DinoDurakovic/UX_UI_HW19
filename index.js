$(".project1").on("mouseenter", function(){
    $(".project1").css("background-color", "grey")
});

document.getElementById("project1").addEventListener("mouseover", function(){
    document.getElementById("project1").style.backgroundColor = "grey";
});

console.log("hello world.");

$(".contact").on("click", function(){
    $(".popup-content, .popup-overlay").addClass("active");
});