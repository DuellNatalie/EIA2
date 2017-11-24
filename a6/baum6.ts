/* Aufgabe: 6
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a6 {
    
    export class Trees {
        
        x: number;
        y: number

        constructor(_x: number, _y: number) {
            
            this.x = _x;
            this.y = _y
            
        }


        draw(): void {
            
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 40, this.y + 140);
            crc2.lineTo(this.x - 40, this.y + 140);
            crc2.closePath();
            crc2.strokeStyle = "#004d26";
            crc2.stroke();
            crc2.fillStyle = "#113b27";
            crc2.fill();
            
        }
    }
}