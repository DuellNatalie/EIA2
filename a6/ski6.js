/* Aufgabe: 6
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a6;
(function (a6) {
    class SkiInfo {
        constructor(_x, _y, _speedx, _speedy, _colorKopf, _colorBody) {
            this.x = _x;
            this.y = _y;
            this.speedx = _speedx;
            this.speedy = _speedy;
            this.colorKopf = _colorKopf;
            this.colorBody = _colorBody;
        }
        draw() {
            a6.crc2.beginPath();
            a6.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            a6.crc2.fillStyle = this.colorKopf;
            a6.crc2.fill();
            a6.crc2.beginPath();
            a6.crc2.moveTo(this.x - 15, this.y - 1);
            a6.crc2.lineTo(this.x + 5, this.y + 15);
            a6.crc2.lineTo(this.x - 20, this.y + 50);
            a6.crc2.lineTo(this.x - 40, this.y + 35);
            a6.crc2.fillStyle = this.colorBody;
            a6.crc2.fill();
            a6.crc2.beginPath();
            a6.crc2.moveTo(this.x - 50, this.y + 25);
            a6.crc2.lineTo(this.x - 10, this.y + 55);
            a6.crc2.lineWidth = 5;
            a6.crc2.strokeStyle = "#000000";
            a6.crc2.stroke();
        }
        move() {
            if (this.x >= 800 || this.y >= 600) {
                this.x = Math.random() * 10;
                this.y = Math.random() * 300;
            }
            this.x += this.speedx;
            this.y += this.speedy;
            this.draw();
        }
    }
    a6.SkiInfo = SkiInfo;
})(a6 || (a6 = {}));
//# sourceMappingURL=ski6.js.map