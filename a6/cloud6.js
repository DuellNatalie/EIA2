/* Aufgabe: 6
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a6;
(function (a6) {
    class cloudInfo {
        constructor(_cloudx, _cloudy) {
            this.cloudx = _cloudx;
            this.cloudy = _cloudy;
        }
        draw() {
            a6.crc2.beginPath();
            a6.crc2.arc(this.cloudx, this.cloudy, 23, 0, 2 * Math.PI);
            a6.crc2.fillStyle = "#ffffff";
            a6.crc2.fill();
            a6.crc2.beginPath();
            a6.crc2.arc(this.cloudx + 23, this.cloudy - 13, 25, 0, 2 * Math.PI);
            a6.crc2.fill();
            a6.crc2.beginPath();
            a6.crc2.arc(this.cloudx + 36, this.cloudy + 4, 22, 0, 2 * Math.PI);
            a6.crc2.fill();
        }
        move() {
            if (this.cloudx > 820) {
                this.cloudx = -20;
            }
            this.cloudx += 1;
            this.draw();
        }
    }
    a6.cloudInfo = cloudInfo;
})(a6 || (a6 = {}));
//# sourceMappingURL=cloud6.js.map