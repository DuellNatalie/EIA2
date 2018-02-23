var Abschluss;
(function (Abschluss) {
    class confetti {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        update() {
            this.drawConfetti();
            this.move();
        }
        move() {
            this.y += Math.random() * (30);
            this.x += (Math.random() * (22) - -22) + (Math.random() * (-22) - 22);
            if (this.y > 900) {
                this.teleport = Math.random() * (5);
                if (this.teleport < 1) {
                    this.y = 10;
                    console.log("teleport");
                    let c = new confetti(this.x, this.y, this.color);
                    Abschluss.confettis.push(c);
                }
                else {
                    Abschluss.confettis.splice(0, Math.random() * (2));
                    console.log("deleted");
                    this.y = 10;
                }
            }
        }
        drawConfetti() {
            Abschluss.crc2.beginPath();
            Abschluss.crc2.lineTo(this.x + 10, this.y);
            Abschluss.crc2.lineTo(this.x + 10, this.y + 10);
            Abschluss.crc2.lineTo(this.x, this.y + 10);
            Abschluss.crc2.lineTo(this.x, this.y);
            Abschluss.crc2.closePath();
            Abschluss.crc2.fillStyle = this.color;
            Abschluss.crc2.fill();
            Abschluss.crc2.stroke();
            console.log("drawed");
        }
    }
    Abschluss.confetti = confetti;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=confetti.js.map