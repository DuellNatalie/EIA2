/* Aufgabe: 0
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 11.10.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

window.addEventListener("load", init);

function init (): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    
    let crc2:CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2)
    
  /*Lift-Linie*/
    crc2.moveTo(0,0)
    crc2.lineTo(800,600);
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(0,50);
    crc2.lineTo(0,600);
    crc2.lineTo(800,600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle="#00ff00";
    crc2.fill();
    }