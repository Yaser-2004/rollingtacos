$(".rate1").on("mouseover", function() {
    $("#c1").css("background-color", "#00FF0A");
});
$(".rate1").on("mouseout", function() {
    $("#c1").css("background-color", "#FFFBEB");
});

$(".rate2").on("mouseover", function() {
    $("#c2").css("background-color", "#00FF0A");
});
$(".rate2").on("mouseout", function() {
    $("#c2").css("background-color", "#FFFBEB");
});

$(".rate3").on("mouseover", function() {
    $("#c3").css("background-color", "#00FF0A");
});
$(".rate3").on("mouseout", function() {
    $("#c3").css("background-color", "#FFFBEB");
});

$(".rate4").on("mouseover", function() {
    $("#c4").css("background-color", "#00FF0A");
});
$(".rate4").on("mouseout", function() {
    $("#c4").css("background-color", "#FFFBEB");
});


$(".rate1").on("mouseover", function() {
    $("#cc1").css("background-color", "#00FF0A");
});
$(".rate1").on("mouseout", function() {
    $("#cc1").css("background-color", "#FFFBEB");
});

$(".rate2").on("mouseover", function() {
    $("#cc2").css("background-color", "#00FF0A");
});
$(".rate2").on("mouseout", function() {
    $("#cc2").css("background-color", "#FFFBEB");
});

$(".rate3").on("mouseover", function() {
    $("#cc3").css("background-color", "#00FF0A");
});
$(".rate3").on("mouseout", function() {
    $("#cc3").css("background-color", "#FFFBEB");
});

$(".rate4").on("mouseover", function() {
    $("#cc4").css("background-color", "#00FF0A");
});
$(".rate4").on("mouseout", function() {
    $("#cc4").css("background-color", "#FFFBEB");
});

// Burger menu
var hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}