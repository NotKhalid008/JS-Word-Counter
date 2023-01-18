var button = document.getElementById("submit");
var answer = document.getElementById("answer");
clear = document.getElementById("clear")

button.addEventListener("click", function() {
    var input = document.getElementById("inptf").value.trim();
    if (input === "") {
        answer.innerHTML = "enter text";
    } else {
        var wordCount = input.split(" ").length;
        wordCount--;
        answer.innerHTML = wordCount;
    }
});
clear.addEventListener("click", function() {
    document.getElementById("inptf").value = "";
    document.getElementById("answer").innerHTML = "";
});
