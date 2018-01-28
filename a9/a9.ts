/*  Aufgabe 9
    Name: Natalie Duell
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
            div.style.display = "inline"; //(weiss welcher container angeklickt wird)v //horizontal
            div.id = Letters[i]; //div mit id A  (Stelle0) um darauf zugreifen zu koennen 
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


    function drawLetter(_event: MouseEvent): void {//funktion holt sich event
        if (output == "")
        { 
            return;
        }
            
    else {
            
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.innerText = output;
        newDiv.style.position = "absolute"; //sonst: Buchstaben erscheinen nach box(nach nÃ¤chstem Element, standart (static))
        newDiv.style.color = "#00334d";
        newDiv.style.font = "bold 2.3em Courier,serif";
        newDiv.style.left = _event.pageX + "px"; //px macht es zum string, dort wird es gezeichnet
        newDiv.style.top = _event.pageY + "px";
        newDiv.addEventListener("mousedown", deleteDiv)
        document.body.appendChild(newDiv);

        let reset: HTMLDivElement = <HTMLDivElement>document.getElementById(output); //buchstabe wird resettet, setzt auf urspruenglichen wert zurueck
        reset.style.color = "white";                                // neues element = altes div2 element
        reset.style.backgroundColor = "#00334d";
        }
    }

    function deleteDiv(_event: MouseEvent): void {//funktion holt sich event
        if (_event.altKey == true) {
            let letter: HTMLDivElement = <HTMLDivElement>_event.target; //wie element, welches ich ausgewaehlt habe, wird dann gelöscht
            document.body.removeChild(letter);
        }
    }
}
