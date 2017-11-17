/* Aufgabe: 5
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a5;
(function (a5) {
    let imagedata;
    let SnowX = [];
    let SnowY = [];
    let CloudX = [];
    let CloudY = [];
    let Ski = [];
    let BaumX = [];
    let BaumY = [];
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        a5.crc2 = canvas.getContext("2d");
        //Himmel
        a5.crc2.fillStyle = "#ceecf5";
        a5.crc2.fillRect(0, 0, 800, 600);
        //Ganz hinterer Berg  
        a5.crc2.beginPath();
        a5.crc2.strokeStyle = "#afbecf";
        a5.crc2.moveTo(590, 350);
        a5.crc2.lineTo(300, 600);
        a5.crc2.lineTo(700, 600);
        a5.crc2.closePath();
        a5.crc2.stroke();
        a5.crc2.fillStyle = "#afbecf";
        a5.crc2.fill();
        //Hinterer Berg  
        a5.crc2.beginPath();
        a5.crc2.strokeStyle = "#8a98a8";
        a5.crc2.moveTo(700, 300);
        a5.crc2.lineTo(400, 600);
        a5.crc2.lineTo(900, 600);
        a5.crc2.closePath();
        a5.crc2.stroke();
        a5.crc2.fillStyle = "#8a98a8";
        a5.crc2.fill();
        //Berg
        a5.crc2.beginPath();
        a5.crc2.moveTo(0, 0);
        a5.crc2.lineTo(800, 600);
        a5.crc2.lineTo(0, 600);
        a5.crc2.closePath();
        a5.crc2.strokeStyle = "#ffffff";
        a5.crc2.stroke();
        a5.crc2.fillStyle = "#ffffff";
        a5.crc2.fill();
        //Lift-Linie
        a5.crc2.beginPath();
        a5.crc2.strokeStyle = "#000000";
        a5.crc2.moveTo(50, 0);
        a5.crc2.lineTo(800, 555);
        a5.crc2.stroke();
        imagedata = a5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Wolken 
        for (let i = 0; i < 3; i++) {
            CloudX[i] = Math.random() * 800;
            CloudY[i] = 60 + Math.random() * 70;
        }
        //Schnee
        for (let i = 0; i < 300; i++) {
            SnowX[i] = Math.random() * 800;
            SnowY[i] = Math.random() * 600;
        }
        //B�ume
        for (let i = 0; i < 5; i++) {
            BaumX[i] = 60 + Math.random() * 300;
            BaumY[i] = 200 + Math.random() * 220;
        }
        //Fahrer //
        for (let i = 0; i < 5; i++) {
            let s = new a5.SkiInfo(Math.random() * 100, Math.random() * 200);
            s.setRandomStyle();
        }
        animate();
    }
    function drawTree(_x, _y) {
        a5.crc2.beginPath();
        a5.crc2.moveTo(_x, _y);
        a5.crc2.lineTo(_x + 40, _y + 140);
        a5.crc2.lineTo(_x - 40, _y + 140);
        a5.crc2.closePath();
        a5.crc2.strokeStyle = "#004d26";
        a5.crc2.stroke();
        a5.crc2.fillStyle = "#113b27";
        a5.crc2.fill();
    }
    function drawSnow(_x, _y) {
        a5.crc2.beginPath();
        a5.crc2.arc(_x, _y, 4, 0, 2 * Math.PI);
        a5.crc2.fillStyle = "#ffffff";
        a5.crc2.fill();
    }
    function drawCloud(_x, _y) {
        a5.crc2.beginPath();
        a5.crc2.arc(_x, _y, 23, 0, 2 * Math.PI);
        a5.crc2.fillStyle = "#ffffff";
        a5.crc2.fill();
        a5.crc2.beginPath();
        a5.crc2.arc(_x + 23, _y - 13, 25, 0, 2 * Math.PI);
        a5.crc2.fill();
        a5.crc2.beginPath();
        a5.crc2.arc(_x + 36, _y + 4, 22, 0, 2 * Math.PI);
        a5.crc2.fill();
    }
    function animate() {
        a5.crc2.putImageData(imagedata, 0, 0);
        //Fahrer
        for (let i = 0; i < Ski.length; i++) {
            if (Ski[i].x >= 800 || Ski[i].y >= 600) {
                Ski[i].x = Math.random() * 10;
                Ski[i].y = Math.random() * 300;
            }
            Ski[i].update();
        }
        //Wolken (Bewegen sich nur in X-Richtung)
        for (let i = 0; i < CloudX.length; i++) {
            if (CloudX[i] > 800) {
                CloudX[i] = 0;
            }
            CloudX[i] += 1;
            drawCloud(CloudX[i], CloudY[i]);
        }
        //Schnee (Bewegt sich nur in Y-Richtung)
        for (let i = 0; i < SnowX.length; i++) {
            if (SnowY[i] > 600) {
                SnowY[i] = 3;
            }
            SnowY[i] += 3;
            drawSnow(SnowX[i], SnowY[i]);
        }
        //B�ume
        for (let i = 0; i < BaumX.length; i++) {
            drawTree(BaumX[i], BaumY[i]);
        }
        window.setTimeout(animate, 30);
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=a5.js.map