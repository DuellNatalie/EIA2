/* Aufgabe: Freie Arbeit*/
/*  Name: Natalie D�ll
    Matrikel: 256026
    Datum: 23.02.2018
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/
var A;
(function (A) {
    class Clouds extends A.Move {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            A.crc2.beginPath();
            A.crc2.arc(this.x, this.y, 28, 0, 2 * Math.PI);
            A.crc2.globalAlpha = 0.95;
            A.crc2.fillStyle = "#a6a6a6";
            A.crc2.fill();
            A.crc2.beginPath();
            A.crc2.arc(this.x + 23, this.y - 13, 28, 0, 2 * Math.PI);
            A.crc2.fill();
            A.crc2.beginPath();
            A.crc2.arc(this.x + 36, this.y + 4, 28, 0, 2 * Math.PI);
            A.crc2.fill();
        }
        move() {
            if (this.x > 1260) {
                this.x = -20;
            }
            this.x += 0.5;
            this.draw();
        }
    }
    A.Clouds = Clouds;
})(A || (A = {}));
//# sourceMappingURL=cloud.js.map