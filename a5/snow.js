/* Aufgabe: 5
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a5;
(function (a5) {
    class snowInfo {
        constructor(_snowx, _snowy) {
            this.snowx = _snowx;
            this.snowy = _snowy;
        }
        draw() {
            a5.crc2.beginPath();
            a5.crc2.arc(this.snowx, this.snowy, 4, 0, 2 * Math.PI);
            a5.crc2.fillStyle = "#ffffff";
            a5.crc2.fill();
        }
        move() {
            if (this.snowy > 600) {
                this.snowy = 0;
            }
            this.snowy += 3;
            this.draw();
        }
    }
    a5.snowInfo = snowInfo;
})(a5 || (a5 = {}));
//# sourceMappingURL=snow.js.map