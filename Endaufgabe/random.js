var A;
(function (A) {
    class glitter {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        update() {
            this.drawGlitter();
            this.move();
        }
        move() {
            this.y += Math.random() * (40);
            this.x += (Math.random() * (15) - -15) + (Math.random() * (-15) - 15);
            if (this.y > 720) {
                this.xy = Math.random() * (5);
                if (this.xy < 1) {
                    this.y = 10;
                    let s = new glitter(this.x, this.y, this.color);
                    A.glitterx.push(s);
                }
                else {
                    A.glitterx.splice(0, Math.random() * (2));
                    this.y = 10;
                }
            }
        }
        drawGlitter() {
            A.crc2.beginPath();
            A.crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            A.crc2.closePath();
            A.crc2.fillStyle = this.color;
            A.crc2.fill();
        }
    }
    A.glitter = glitter;
})(A || (A = {}));
//# sourceMappingURL=random.js.map