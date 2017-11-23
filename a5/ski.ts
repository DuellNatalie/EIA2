/* Aufgabe: 5
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a5 {

    export class SkiInfo {
        
        x: number;
        y: number;
        colorKopf: string;
        colorBody: string;
        speedx: number;
        speedy: number;

        
        constructor(_x: number, _y: number, _speedx: number, _speedy: number, _colorKopf: string, _colorBody: string) {
            
            this.x = _x;
            this.y = _y;
            this.speedx = _speedx;
            this.speedy = _speedy;
            this.colorKopf = _colorKopf;
            this.colorBody = _colorBody;
            
        }


        draw(): void {
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI)
            crc2.fillStyle = this.colorKopf;
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y - 1);
            crc2.lineTo(this.x + 5, this.y + 15);
            crc2.lineTo(this.x - 20, this.y + 50);
            crc2.lineTo(this.x - 40, this.y + 35);
            crc2.fillStyle = this.colorBody;
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 50, this.y + 25);
            crc2.lineTo(this.x - 10, this.y + 55);
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#000000";
            crc2.stroke();

        }
        
        
        move(): void {

            if (this.x >= 800 || this.y >= 600) {
                this.x = Math.random() * 10;
                this.y = Math.random() * 300;

            }
            
            this.x += this.speedx;
            this.y += this.speedy;
            this.draw();
        }


    }
}