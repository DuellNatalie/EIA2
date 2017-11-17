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
        x2: number;
        y2: number;
        dx: number;
        dy: number;
        colorKopf: string;
        colorBody: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += Math.random() * 1 + 2; // hier experimentieren um
            this.y += Math.random() * 3 + 1; // andere Bewegungsmuster zu finden
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
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


        //        crc2.beginPath();
        //        crc2.arc(s.x, s.y, 10, 0, 2 * Math.PI);
        //        crc2.fillStyle = s.colorKopf;
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.moveTo(s.x - 15, s.y - 1);
        //        crc2.lineTo(s.x + 5, s.y + 15);
        //        crc2.lineTo(s.x - 20, s.y + 50);
        //        crc2.lineTo(s.x - 40, s.y + 35);
        //        crc2.fillStyle = s.colorBody;
        //        crc2.fill();
        //        crc2.beginPath();
        //        crc2.moveTo(s.x - 50, s.y + 25);
        //        crc2.lineTo(s.x - 10, s.y + 55);
        //        crc2.lineWidth = 5;
        //        crc2.strokeStyle = "#000000";
        //        crc2.stroke();
        //    }

        setRandomStyle(): void {
            this.dx = 30;
            this.dy = 50;
            this.colorKopf = "hsl(" + Math.random() * 360 + ", 100%, 90%)";
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }



    }
}