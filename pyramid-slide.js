// retrieve HTML elements for height, symbol, and slider display
var height = document.getElementById("height");
var sliderOutput = document.getElementById("output");
var symbol = document.getElementById("symbol");

// display initial height and pyramid using default values
sliderOutput.innerHTML = height.value;
drawPyramid(parseInt(height.value), symbol.value);

// on slider change...
height.addEventListener("input", function () {
    // get the integer value of new height
    var heightValue = parseInt(height.value);
    // update the height display value
    sliderOutput.innerHTML = height.value;
    // draw pyramid using updated height and current symbol
    drawPyramid(heightValue, symbol.value);
});

//on symbol change...
symbol.addEventListener("change", function () {
    // draw pyramid using current height and updated symbol
    drawPyramid(parseInt(height.value), symbol.value);
});


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height,
 * and symbol.
 */
function drawPyramid(height, symbol) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
