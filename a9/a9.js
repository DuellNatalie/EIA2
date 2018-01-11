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
    function init() {
        for (let i = 0; i < Letters.length; i++) {
            let div = document.createElement("div");
            div.innerText = Letters[i];
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.textAlign = "center";
            div.style.font = "bold 20px Courier,serif";
            div.style.marginLeft = "5px";
            div.style.marginTop = "5px";
            div.style.padding = "6px";
            div.style.color = "white";
            div.style.backgroundColor = "#00334d";
            div.style.fontSize = "2.3em";
            div.style.display = "inline";
            div.addEventListener("mousedown", pressKey);
            document.body.appendChild(div);
        }
    }
    function inputBox() {
        let inputBox = document.createElement("div");
    }
    function pressKey() {
        // #99dfff
    }
    function mouseClick() {
    }
    function drawLetter() {
    }
})(a9 || (a9 = {}));
//# sourceMappingURL=a9.js.map