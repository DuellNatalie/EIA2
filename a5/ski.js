/* Aufgabe: 5
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a5;
(function (a5) {
    class SkiInfo {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        sayHello() {
            console.log("Hallo");
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += Math.random() * 1 + 2; // hier experimentieren um
            this.y += Math.random() * 3 + 1; // andere Bewegungsmuster zu finden
        }
        draw() {
            a5.crc2.beginPath();
            a5.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            a5.crc2.fillStyle = this.colorKopf;
            a5.crc2.fill();
            a5.crc2.beginPath();
            a5.crc2.moveTo(this.x - 15, this.y - 1);
            a5.crc2.lineTo(this.x + 5, this.y + 15);
            a5.crc2.lineTo(this.x - 20, this.y + 50);
            a5.crc2.lineTo(this.x - 40, this.y + 35);
            a5.crc2.fillStyle = this.colorBody;
            a5.crc2.fill();
            a5.crc2.beginPath();
            a5.crc2.moveTo(this.x - 50, this.y + 25);
            a5.crc2.lineTo(this.x - 10, this.y + 55);
            a5.crc2.lineWidth = 5;
            a5.crc2.strokeStyle = "#000000";
            a5.crc2.stroke();
        }
        //        crc2.beginPath();
        //        crc2.arc(s.x, s.y, 10, 0, 2 * Math.PI);
        //        crc2.fillStyle = s.colorKopf;
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.moveTo(s.x - 15, s.y - 1);
        //        crc2.lineTo(s.x + 5, s.y + 15);
        //        crc2.lineTo(s.x - 20, s.y + 50);
        //        crc2.lineTo(s.x - 40, s.y + 35);
        //        crc2.fillStyle = s.colorBody;
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.moveTo(s.x - 50, s.y + 25);
        //        crc2.lineTo(s.x - 10, s.y + 55);
        //        crc2.lineWidth = 5;
        //        crc2.strokeStyle = "#000000";
        //        crc2.stroke();
        //    }
        setRandomStyle() {
            this.dx = 30;
            this.dy = 50;
            this.colorKopf = "hsl(" + Math.random() * 360 + ", 100%, 90%)";
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    a5.SkiInfo = SkiInfo;
})(a5 || (a5 = {}));
//# sourceMappingURL=ski.js.map