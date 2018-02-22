var A;
(function (A) {
    class Clouds extends A.Move {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            A.crc2.beginPath();
            A.crc2.arc(this.x, this.y, 23, 0, 2 * Math.PI);
            A.crc2.fillStyle = "#ffffff";
            A.crc2.fill();
            A.crc2.beginPath();
            A.crc2.arc(this.x + 23, this.y - 13, 25, 0, 2 * Math.PI);
            A.crc2.fill();
            A.crc2.beginPath();
            A.crc2.arc(this.x + 36, this.y + 4, 22, 0, 2 * Math.PI);
            A.crc2.fill();
        }
        move() {
            if (this.x > 820) {
                this.x = -20;
            }
            this.x += 1;
            this.draw();
        }
    }
    A.Clouds = Clouds;
})(A || (A = {}));
//# sourceMappingURL=cloud.js.map