namespace Abschluss {


    export class confetti {
        x: number;
        y: number;
        color: string;
        teleport: number;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }

        update(): void {
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
                    let c: confetti = new confetti(this.x, this.y, this.color);
                    confettis.push(c);
                }
                else {
                    confettis.splice(0, Math.random() * (2))
                    console.log("deleted");
                    this.y=10;
                }
            }
        }

        drawConfetti(): void {
            crc2.beginPath();
            crc2.lineTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 10, this.y + 10);
            crc2.lineTo(this.x, this.y + 10);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.stroke();
            console.log("drawed")
        }
    }
}