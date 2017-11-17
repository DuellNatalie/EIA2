/* Aufgabe: 5
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a5 {

    export let crc2: CanvasRenderingContext2D;

    let imagedata: ImageData;

    let SnowX: number[] = [];
    let SnowY: number[] = [];
    let CloudX: number[] = [];
    let CloudY: number[] = [];
    let Ski: SkiInfo[] = [];
    let BaumX: number[] = [];
    let BaumY: number[] = [];

    window.addEventListener("load", init);


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Himmel
        crc2.fillStyle = "#ceecf5";
        crc2.fillRect(0, 0, 800, 600);

        //Ganz hinterer Berg  
        crc2.beginPath();
        crc2.strokeStyle = "#afbecf";
        crc2.moveTo(590, 350);
        crc2.lineTo(300, 600);
        crc2.lineTo(700, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#afbecf";
        crc2.fill()

        //Hinterer Berg  
        crc2.beginPath();
        crc2.strokeStyle = "#8a98a8";
        crc2.moveTo(700, 300);
        crc2.lineTo(400, 600);
        crc2.lineTo(900, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#8a98a8";
        crc2.fill();

        //Berg
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.strokeStyle = "#ffffff";
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Lift-Linie
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(50, 0);
        crc2.lineTo(800, 555);
        crc2.stroke();




        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);



        //Wolken 
        for (let i: number = 0; i < 3; i++) {
            CloudX[i] = Math.random() * 800;
            CloudY[i] = 60 + Math.random() * 70;
        }

        //Schnee
        for (let i: number = 0; i < 300; i++) {
            SnowX[i] = Math.random() * 800;
            SnowY[i] = Math.random() * 600;
        }


        //Bäume
        for (let i: number = 0; i < 5; i++) {
            BaumX[i] = 60 + Math.random() * 300;
            BaumY[i] = 200 + Math.random() * 220;
        }

        //Fahrer //

        for (let i: number = 0; i < 5; i++) {
   
            
            let s: SkiInfo = new SkiInfo(Math.random() * 100, Math.random() * 200, Math.random() * 1 + 2, Math.random() * 3 + 1);
            s.setRandomStyle();
            Ski[i] = s;
        }


        animate();
    }


    function drawTree(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 40, _y + 140);
        crc2.lineTo(_x - 40, _y + 140);
        crc2.closePath();
        crc2.strokeStyle = "#004d26";
        crc2.stroke();
        crc2.fillStyle = "#113b27";
        crc2.fill();
    }

    function drawSnow(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function drawCloud(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 23, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 23, _y - 13, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 36, _y + 4, 22, 0, 2 * Math.PI);
        crc2.fill();
    }



    function animate(): void {
        crc2.putImageData(imagedata, 0, 0);


        //Fahrer
        for (let i: number = 0; i < Ski.length; i++) {

            if (Ski[i].x >= 800 || Ski[i].y >= 600) {

                Ski[i].x = Math.random() * 10;
                Ski[i].y = Math.random() * 300;

            }



            Ski[i].update();
        }

        //Wolken (Bewegen sich nur in X-Richtung)
        for (let i: number = 0; i < CloudX.length; i++) {
            if (CloudX[i] > 800) {
                CloudX[i] = 0;
            }

            CloudX[i] += 1;
            drawCloud(CloudX[i], CloudY[i]);
        }

        //Schnee (Bewegt sich nur in Y-Richtung)
        for (let i: number = 0; i < SnowX.length; i++) {
            if (SnowY[i] > 600) {
                SnowY[i] = 3;
            }

            SnowY[i] += 3;
            drawSnow(SnowX[i], SnowY[i]);
        }

        //Bäume
        for (let i: number = 0; i < BaumX.length; i++) {


            drawTree(BaumX[i], BaumY[i]);
        }

        window.setTimeout(animate, 30);



    }
}