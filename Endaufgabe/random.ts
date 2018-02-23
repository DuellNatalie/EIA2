namespace A {


    export class glitter {
        x: number;
        y: number;
        color: string;
        xy: number;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }

        update(): void {
            this.drawGlitter();
            this.move();
        }

        move() {
            this.y += Math.random() * (30);
            this.x += (Math.random() * (22) - -22) + (Math.random() * (-22) - 22);
            if (this.y > 720) {
                this.xy = Math.random() * (5);
                if (this.xy < 1) {
                    this.y = 10;
                    let s: glitter = new glitter(this.x, this.y, this.color);
                    glitterx.push(s);
                }
                else {
                    glitterx.splice(0, Math.random() * (2))
                    this.y=10;
                }
            }
        }

        drawGlitter(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
         
        }
    }
}