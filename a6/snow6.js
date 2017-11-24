/* Aufgabe: 6
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a6;
(function (a6) {
    class Snowflake extends a6.Move {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            a6.crc2.beginPath();
            a6.crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            a6.crc2.fillStyle = "#ffffff";
            a6.crc2.fill();
        }
        move() {
            if (this.y > 590) {
                this.y = 0;
            }
            this.y += 3;
            this.draw();
        }
    }
    a6.Snowflake = Snowflake;
})(a6 || (a6 = {}));
//# sourceMappingURL=snow6.js.map