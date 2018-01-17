/*  Aufgabe 9
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 15.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/

namespace a9 {

    window.addEventListener("load", init);


    let Letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let output: string = "";


    function init(): void {
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
            div.id = Letters[i].toUpperCase(); //div mit id A  (Stelle0) um darauf zugreifen zu können (weiß welcher container angeklickt wird) -> Werden groß geschrieben
            div.addEventListener("mousedown", mouseClick);  //-> mit diesem container kann man was machen
            document.body.appendChild(div);
        }
        inputBox();
    }

    function inputBox(): void { //zeichnet kasten

        let inputBox: HTMLDivElement = document.createElement("div");
        inputBox.style.width = "80%";
        inputBox.style.margin = "5px";
        inputBox.style.height = "600px";
        inputBox.style.backgroundColor = "white";
        inputBox.style.border = "solid #00334d 3px";
        inputBox.addEventListener("mousedown", drawLetter);
        document.body.appendChild(inputBox);

    }


    function mouseClick(_event: MouseEvent): void { //funktion holt sich event

        let div2: HTMLDivElement = <HTMLDivElement>_event.target; //div2 als neue variable wird erstellt, sie ist gleich das HTML Div Element welches ziel meines mausklicks war
        div2.style.color = "#00334d";
        div2.style.backgroundColor = "#99dfff";
        output = div2.id; //legt die id in variable output  

    }


    function drawLetter(_event: MouseEvent): void {
        if (output == "")
        { //wenn output leer -> funktion wird beendet
            return;
        }
            
    else {
            
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.innerText = output;
        newDiv.style.position = "absolute"; //sonst: Buchstaben erscheinen nach box(nach nächstem Element, standart (static))
        newDiv.style.color = "#00334d";
        newDiv.style.font = "bold 2.3em Courier,serif";
        newDiv.style.left = _event.pageX + "px"; //px macht es zum string, dort wird es gezeichnet
        newDiv.style.top = _event.pageY + "px";
        newDiv.addEventListener("mousedown", deleteDiv)
        document.body.appendChild(newDiv);

        let reset: HTMLDivElement = <HTMLDivElement>document.getElementById(output); //buchstabe wird resettet, setzt auf ursür+nglichen wert zurück
        reset.style.color = "white";
        reset.style.backgroundColor = "#00334d";
        }


    }

    function deleteDiv(_event: MouseEvent): void {
        if (_event.altKey == true) {
            let letter: HTMLDivElement = <HTMLDivElement>_event.target; //element, welches ich ausgewählt habe
            document.body.removeChild(letter);
        }
    }
}