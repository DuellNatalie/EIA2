/*  Aufgabe 9
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 15.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/

namespace a9   {
    
    window.addEventListener("load", init);
    
    
    let Letters : string [] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let output: string = "";
 
    
    function init() :void {
        for (let i = 0; i < Letters.length; i++) {
       //Buchstaben
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
            div.id = Letters[i].toUpperCase(); //Werden groß geschrieben
            div.addEventListener("mousedown", mouseClick);
            document.body.appendChild(div);
            }
    inputBox();
        }
    
function inputBox() : void {
    
    let inputBox: HTMLDivElement = document.createElement("div");  
        inputBox.style.width = "80%";
        inputBox.style.margin = "5px";
        inputBox.style.height = "600px";
        inputBox.style.backgroundColor = "white";
        inputBox.style.border = "solid #00334d 3px";
        inputBox.addEventListener("mousedown", drawLetter);
        document.body.appendChild(inputBox);
    
    }
    
    
function mouseClick(_event: MouseEvent) : void {
   
        let div2: HTMLDivElement = <HTMLDivElement>_event.target;
        div2.style.color = "#00334d";
        div2.style.backgroundColor = "#99dfff";
        output = div2.id;
        
    }
    
    
function drawLetter(_event: MouseEvent) : void {
    if (output == "")
    return;
    
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.innerText = output;
    newDiv.style.position = "absolute"; //sonst: Buchstaben erscheinen nach box(nach nächstem Element, standart (static))
    newDiv.style.color = "#00334d";
    newDiv.style.font = "bold 2.3em Courier,serif";
    newDiv.style.left = _event.pageX + "px";
    newDiv.style.top = _event.pageY + "px";
    newDiv.addEventListener("mousedown", deleteDiv)
    document.body.appendChild(newDiv);

    let reset: HTMLDivElement = <HTMLDivElement>document.getElementById(output);
    reset.style.color = "white";
    reset.style.backgroundColor = "#00334d";
   

    }    
    
    function deleteDiv(_event: MouseEvent) : void{
        if (_event.altKey == true) {
            let letter: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(letter);
        }
        }   
 }