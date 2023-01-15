var button = document.getElementById("submit");
var answer = document.getElementById("answer");

button.addEventListener("click", function() {
    var input = document.getElementById("inptf").value;
    var wordCount = input.split(" ").length;
    answer.innerHTML = wordCount;
});
var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {
    document.getElementById("inptf").value = "";
    answer.innerHTML = "";
});