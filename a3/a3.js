/* Aufgabe: 3
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 27.10.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.. */
var a3;
(function (a3) {
    window.addEventListener("load", init);
    let crc2;
    let imagedata;
    let SnowX = [];
    let SnowY = [];
    let CloudX = [];
    let CloudY = [];
    let SkiX = [];
    let SkiY = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
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
        crc2.fill();
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
        //B�ume
        for (let i = 0; i < 5; i++) {
            let x = 60 + Math.random() * 300;
            let y = 200 + Math.random() * 220;
            drawTree(x, y);
        }
        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);
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
        //Fahrer
        for (let i = 0; i < 1; i++) {
            SkiX[i] = 0;
            SkiY[i] = 0;
        }
        animate();
    }
    function drawTree(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 50, _y + 150);
        crc2.lineTo(_x - 50, _y + 150);
        crc2.closePath();
        crc2.strokeStyle = "#004d26";
        crc2.stroke();
        crc2.fillStyle = "#113b27";
        crc2.fill();
    }
    function drawSnow(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawCloud(_x, _y) {
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
    function drawSki(x, y, Ski) {
        //Mensch
        crc2.beginPath();
        crc2.arc(x, y, 10, 0, 2 * Math.PI);
        crc2.fillStyle = Ski;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x - 15, y - 1);
        crc2.lineTo(x + 5, y + 15);
        crc2.lineTo(x - 20, y + 50);
        crc2.lineTo(x - 40, y + 35);
        crc2.fillStyle = Ski;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x - 50, y + 25);
        crc2.lineTo(x - 10, y + 55);
        crc2.lineWidth = 5;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
    function animate() {
        crc2.putImageData(imagedata, 0, 0);
        //Fahrer
        for (let i = 0; i < SkiX.length; i++) {
            if (SkiX[i] >= 800) {
                SkiY[i] = 0;
                SkiX[i] = 0;
            }
            SkiX[i] += 5;
            SkiY[i] += 3.8;
            drawSki(SkiX[i], SkiY[i], "#80002a");
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
                SnowY[i] = 0;
            }
            SnowY[i] += 3 + Math.round(Math.random() * 3);
            drawSnow(SnowX[i], SnowY[i]);
        }
        window.setTimeout(animate, 30);
    }
})(a3 || (a3 = {}));
//# sourceMappingURL=a3.js.map