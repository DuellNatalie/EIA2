/* Aufgabe: 6
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a6 {
    
    export class baumInfo {
        
        baumx: number;
        baumy: number

        constructor(_baumx: number, _baumy: number) {
            
            this.baumx = _baumx;
            this.baumy = _baumy
            
        }


        draw(): void {
            
            crc2.beginPath();
            crc2.moveTo(this.baumx, this.baumy);
            crc2.lineTo(this.baumx + 40, this.baumy + 140);
            crc2.lineTo(this.baumx - 40, this.baumy + 140);
            crc2.closePath();
            crc2.strokeStyle = "#004d26";
            crc2.stroke();
            crc2.fillStyle = "#113b27";
            crc2.fill();
            
        }
    }
}