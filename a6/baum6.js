/* Aufgabe: 6
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a6;
(function (a6) {
    class Trees {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            a6.crc2.beginPath();
            a6.crc2.moveTo(this.x, this.y);
            a6.crc2.lineTo(this.x + 40, this.y + 140);
            a6.crc2.lineTo(this.x - 40, this.y + 140);
            a6.crc2.closePath();
            a6.crc2.strokeStyle = "#004d26";
            a6.crc2.stroke();
            a6.crc2.fillStyle = "#113b27";
            a6.crc2.fill();
        }
    }
    a6.Trees = Trees;
})(a6 || (a6 = {}));
//# sourceMappingURL=baum6.js.map