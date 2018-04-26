// Change to your URL
var textURL = "https://example.com/example.txt";

// Place the ID textOutput on where you want your text to output
$(document).ready(function() {
    $.get(textURL, function(textResult) {
        document.getElementById("textOutput").innerHTML = textResult;
    });
});
