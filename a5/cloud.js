/* Aufgabe: 5
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a5;
(function (a5) {
    class cloudInfo {
        constructor(_cloudx, _cloudy) {
            this.cloudx = _cloudx;
            this.cloudy = _cloudy;
        }
        draw() {
            a5.crc2.beginPath();
            a5.crc2.arc(this.cloudx, this.cloudy, 23, 0, 2 * Math.PI);
            a5.crc2.fillStyle = "#ffffff";
            a5.crc2.fill();
            a5.crc2.beginPath();
            a5.crc2.arc(this.cloudx + 23, this.cloudy - 13, 25, 0, 2 * Math.PI);
            a5.crc2.fill();
            a5.crc2.beginPath();
            a5.crc2.arc(this.cloudx + 36, this.cloudy + 4, 22, 0, 2 * Math.PI);
            a5.crc2.fill();
        }
        move() {
            if (this.cloudx > 820) {
                this.cloudx = 0;
            }
            this.cloudx += 1;
            this.draw();
        }
    }
    a5.cloudInfo = cloudInfo;
})(a5 || (a5 = {}));
//# sourceMappingURL=cloud.js.map