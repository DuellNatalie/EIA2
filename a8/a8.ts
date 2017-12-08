/*  Aufgabe 8
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 08.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/

namespace a8   
 {

    window.addEventListener("load", input);
    
    function input () : void    {
        
        let num = prompt("Bitte gib eine Zahl zwischen 10 und 100 ein!");
        
        if (Number.isNaN(parseInt(num)) || parseInt(num) < 10 || parseInt(num) > 100) {
            alert("Versuche es noch einmal!");
            
            input();
        }
        
        else {
            for (let i = 0; i < parseInt(num); i++) {
                drawSquare(Math.random() * window.innerWidth - 110, Math.random() * window.innerHeight - 150, Math.random() * 360);
            }
        }
        
    }
    
    function drawSquare (x : number, y : number, color : number) : void {
        
        let div = document.createElement("div");
        
        div.style.width = "40px";
        div.style.height = "40px";
        
        div.style.backgroundColor = "hsl(" + color + ", 100%, 35%)";
        
        div.style.left = x + "px";
        div.style.top = y + "px";
        
        document.body.appendChild(div);
    }
    
}