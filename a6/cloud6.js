/* Aufgabe: 6
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a6;
(function (a6) {
    class Clouds extends a6.Move {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            a6.crc2.beginPath();
            a6.crc2.arc(this.x, this.y, 23, 0, 2 * Math.PI);
            a6.crc2.fillStyle = "#ffffff";
            a6.crc2.fill();
            a6.crc2.beginPath();
            a6.crc2.arc(this.x + 23, this.y - 13, 25, 0, 2 * Math.PI);
            a6.crc2.fill();
            a6.crc2.beginPath();
            a6.crc2.arc(this.x + 36, this.y + 4, 22, 0, 2 * Math.PI);
            a6.crc2.fill();
        }
        move() {
            if (this.x > 820) {
                this.x = -20;
            }
            this.x += 1;
            this.draw();
        }
    }
    a6.Clouds = Clouds;
})(a6 || (a6 = {}));
//# sourceMappingURL=cloud6.js.map