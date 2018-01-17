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
    let output = "";
    function init() {
        for (let i = 0; i < Letters.length; i++) {
            let div = document.createElement("div");
            div.innerText = Letters[i];
            div.style.width = "40px";
            div.style.height = "40px";
            div.style.textAlign = "center";
            div.style.font = "bold 2.3em Courier,serif";
            div.style.marginLeft = "5px";
            div.style.marginTop = "5px";
            div.style.padding = "6px";
            div.style.color = "white";
            div.style.backgroundColor = "#00334d";
            div.style.display = "inline";
            div.id = Letters[i].toUpperCase(); //div mit id A  (Stelle0) um darauf zugreifen zu k�nnen (wei� welcher container angeklickt wird) -> Werden gro� geschrieben
            div.addEventListener("mousedown", mouseClick); //-> mit diesem container kann man was machen
            document.body.appendChild(div);
        }
        inputBox();
    }
    function inputBox() {
        let inputBox = document.createElement("div");
        inputBox.style.width = "80%";
        inputBox.style.margin = "5px";
        inputBox.style.height = "600px";
        inputBox.style.backgroundColor = "white";
        inputBox.style.border = "solid #00334d 3px";
        inputBox.addEventListener("mousedown", drawLetter);
        document.body.appendChild(inputBox);
    }
    function mouseClick(_event) {
        let div2 = _event.target; //div2 als neue variable wird erstellt, sie ist gleich das HTML Div Element welches ziel meines mausklicks war
        div2.style.color = "#00334d";
        div2.style.backgroundColor = "#99dfff";
        output = div2.id; //legt die id in variable output  
    }
    function drawLetter(_event) {
        if (output == "")
            return;
        else {
            let newDiv = document.createElement("div");
            newDiv.innerText = output;
            newDiv.style.position = "absolute"; //sonst: Buchstaben erscheinen nach box(nach n�chstem Element, standart (static))
            newDiv.style.color = "#00334d";
            newDiv.style.font = "bold 2.3em Courier,serif";
            newDiv.style.left = _event.pageX + "px";
            newDiv.style.top = _event.pageY + "px";
            newDiv.addEventListener("mousedown", deleteDiv);
            document.body.appendChild(newDiv);
            let reset = document.getElementById(output); //buchstabe wird resettet, setzt auf urs�r+nglichen wert zur�ck
            reset.style.color = "white";
            reset.style.backgroundColor = "#00334d";
        }
    }
    function deleteDiv(_event) {
        if (_event.altKey == true) {
            let letter = _event.target; //element, welches ich ausgew�hlt habe
            document.body.removeChild(letter);
        }
    }
})(a9 || (a9 = {}));
//# sourceMappingURL=a9.js.map