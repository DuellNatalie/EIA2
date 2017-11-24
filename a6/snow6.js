/* Aufgabe: 6
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a6;
(function (a6) {
    class snowInfo {
        constructor(_snowx, _snowy) {
            this.snowx = _snowx;
            this.snowy = _snowy;
        }
        draw() {
            a6.crc2.beginPath();
            a6.crc2.arc(this.snowx, this.snowy, 4, 0, 2 * Math.PI);
            a6.crc2.fillStyle = "#ffffff";
            a6.crc2.fill();
        }
        move() {
            if (this.snowy > 590) {
                this.snowy = 0;
            }
            this.snowy += 3;
            this.draw();
        }
    }
    a6.snowInfo = snowInfo;
})(a6 || (a6 = {}));
//# sourceMappingURL=snow6.js.map