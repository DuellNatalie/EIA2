/* Aufgabe: 5
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a5 {

    export class snowInfo {
        snowx: number;
        snowy: number;

        constructor(_snowx: number, _snowy: number) {
            this.snowx = _snowx;
            this.snowy = _snowy;

        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.snowx, this.snowy, 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        }


        move(): void {
            if (this.snowy > 590) {
                this.snowy = 0;
            }
            this.snowy += 3;
            this.draw();
        }
    }
}