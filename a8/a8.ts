/*  Aufgabe 8
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 08.12.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/

namespace a8   {

    window.addEventListener("load", input);
    
    function input () : void    {
        
        let num: string = prompt("Bitte gib eine Zahl zwischen 10 und 100 ein!"); //prompt kann keine number sein
        
        if (Number.isNaN(parseInt(num)) || parseInt(num) < 10 || parseInt(num) > 100) { //string zu number
            
            alert("Versuche es noch einmal!");  
            input();
        
        }
        
        else {
            
            for (let i = 0; i < parseInt(num); i++) {
                drawSquare(Math.random() * window.innerWidth - 45, Math.random() * window.innerHeight - 45, Math.random() * 360); //x,y, farbkreis
                    //The innerWidth property returns the inner width of a window's content area (w3schools)
            }
        }     
    }
    
    
    function drawSquare (x : number, y : number, color : number) : void { //uebergabeparameter
        
        let div = document.createElement("div"); //creates an Element Node with the specified name
        
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.backgroundColor = "hsl(" + color + ", 100%, 35%)"; //farbe, saettigung, haelligkeit
        div.style.left = x + "px";
        div.style.top = y + "px";
        
        document.body.appendChild(div); //Append <div> to <body>
    } 
}