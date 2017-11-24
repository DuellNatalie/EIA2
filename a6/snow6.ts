/* Aufgabe: 6
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a6 {

    export class Snowflake extends Move {
        
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            
           super(_x, _y)


        }

        draw(): void {
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
        }


        move(): void {
            
            if (this.y > 590) {
                
                this.y = 0;
                
            }
            
            this.y += 3;
            this.draw();
            
        }
    }
}