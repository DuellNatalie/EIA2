/*  Aufgabe 8
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 08.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/
var a8;
(function (a8) {
    window.addEventListener("load", input);
    function input() {
        let n = prompt("10 - 100 Q");
        if (Number.isNaN(parseInt(n)) || parseInt(n) < 10 || parseInt(n) > 100) {
            alert("Versuche es noch einmal!");
            input();
        }
        else {
            for (let i = 0; i < parseInt(n); i++) {
                init(Math.random() * window.innerWidth - 130, Math.random() * window.innerHeight - 130, Math.random() * 360);
            }
        }
    }
    function init(x, y, color) {
        let div = document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
        div.style.left = x + "px";
        div.style.top = y + "px";
        document.body.appendChild(div);
    }
})(a8 || (a8 = {}));
//# sourceMappingURL=a8.js.map