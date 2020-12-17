function printPyramid(height, symbol) {
    pyramid.textContent = "";
    for (let i = 2; i <= height + 1; i++) {
        node_pyramid = document.createElement("P");
        node_pyramid.innerText = "\u00A0".repeat(height + 1 - i) + symbol.repeat(i);
        pyramid.appendChild(node_pyramid)
    }
}
brick = document.getElementById("brick");
range = document.getElementById("hight");
pyramid = document.getElementById("construction");
range.addEventListener("change", function (event) {
    printPyramid(Number(range.value), brick.value);
});