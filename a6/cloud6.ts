/* Aufgabe: 6
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a6 {

    export class Clouds extends Move {
        
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            
            super(_x, _y)

        }

        draw(): void{
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 23, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 23, this.y - 13, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 36, this.y + 4, 22, 0, 2 * Math.PI);
            crc2.fill();
            
        }


        move(): void {
            
            if (this.x > 820) {
                
                this.x = -20;
                
            }
            
            this.x += 1;
            this.draw();
       
        }
    }
}