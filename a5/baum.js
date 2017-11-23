/* Aufgabe: 5
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a5;
(function (a5) {
    class baumInfo {
        constructor(_baumx, _baumy) {
            this.baumx = _baumx;
            this.baumy = _baumy;
        }
        draw() {
            a5.crc2.beginPath();
            a5.crc2.moveTo(this.baumx, this.baumy);
            a5.crc2.lineTo(this.baumx + 40, this.baumy + 140);
            a5.crc2.lineTo(this.baumx - 40, this.baumy + 140);
            a5.crc2.closePath();
            a5.crc2.strokeStyle = "#004d26";
            a5.crc2.stroke();
            a5.crc2.fillStyle = "#113b27";
            a5.crc2.fill();
        }
    }
    a5.baumInfo = baumInfo;
})(a5 || (a5 = {}));
//# sourceMappingURL=baum.js.map