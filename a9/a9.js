/*  Aufgabe 9
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 15.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/
var a9;
(function (a9) {
    window.addEventListener("load", init);
    let Letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let div = document.createElement("div");
    function init() {
        for (let i = 0; i < Letters.length; i++) {
            div.innerText = Letters[i];
            div.style.textAlign = "center";
        }
    }
    function pressKey() {
    }
    function mouseClick() {
    }
})(a9 || (a9 = {}));
//# sourceMappingURL=a9.js.map