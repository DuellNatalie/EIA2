/* Aufgabe: 0
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 11.10.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    /*Lift-Linie*/
    crc2.beginPath();
    crc2.moveTo(0, 50);
    crc2.lineTo(0, 600);
    crc2.lineTo(800, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#000000";
    crc2.fill();
    /*Himmel*/
    crc2.beginPath();
    crc2.moveTo(0, 50);
    crc2.lineTo(0, 0);
    crc2.lineTo(800, 0);
    crc2.lineTo(800, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#CEECF5";
    crc2.fill();
    crc2.moveTo(0, 20);
    crc2.lineTo(800, 570);
    crc2.stroke();
}
//# sourceMappingURL=a1.js.map