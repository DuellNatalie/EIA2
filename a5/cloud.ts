/* Aufgabe: 5
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a5 {

    export class cloudInfo {
        
        cloudx: number;
        cloudy: number;

        constructor(_cloudx: number, _cloudy: number) {
            
            this.cloudx = _cloudx;
            this.cloudy = _cloudy;

        }

        draw(): void{
            
            crc2.beginPath();
            crc2.arc(this.cloudx, this.cloudy, 23, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.cloudx + 23, this.cloudy - 13, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.cloudx + 36, this.cloudy + 4, 22, 0, 2 * Math.PI);
            crc2.fill();
        }


        move(): void {
            
            if (this.cloudx > 820) {
                this.cloudx = -20;
            }
            
            this.cloudx += 1;
            this.draw();
       
        }
    }
}