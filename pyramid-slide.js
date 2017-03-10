var heightElem = document.getElementById("height");
var number = document.getElementById("output");
//console.log(heightElem.value);
//drawPyramid(symbol, height);

heightElem.addEventListener("input", function () {
    //console.log(heightElem.value);
    var heightStr = heightElem.value;
    var height = parseInt(heightStr);

    number.innerHTML = heightStr;
    drawPyramid(height);
});

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {
    console.log(height);
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
            rowStr += "#";
        }
        //console.log(rowStr);
        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
