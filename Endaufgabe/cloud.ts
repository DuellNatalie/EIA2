/* Aufgabe: Freie Arbeit*/ 

/*  Name: Natalie Düll
    Matrikel: 256026
    Datum: 23.02.2018
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.*/



namespace A {

    export class Clouds extends Move {
        
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            
            super(_x, _y)

        }

        draw(): void{
            
            crc2.beginPath();
            crc2.arc(this.x, this.y, 28, 0, 2 * Math.PI);
            crc2.globalAlpha = 0.95;
            crc2.fillStyle = "#a6a6a6";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 23, this.y - 13, 28, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 36, this.y + 4, 28, 0, 2 * Math.PI);
            crc2.fill();
            
        }


        move(): void {
            
            if (this.x > 1260) {
                
                this.x = -20;
                
            }
            
            this.x += 0.5;
            this.draw();
       
        }
    }
}