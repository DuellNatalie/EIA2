/* Aufgabe: 0
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 11.10.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */



namespace a1 {
   
window.addEventListener("load", init);
 
    function init (): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    
    let crc2:CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2)
    

//Himmel
    crc2.fillStyle = "#CEECF5";
    crc2.fillRect (0, 0, 800, 600);
    
    //Berg
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(800, 600);
    crc2.lineTo(0,600);
    crc2.closePath();
    crc2.strokeStyle="#FFFFFF";
    crc2.stroke();
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
  
    }
    
    }