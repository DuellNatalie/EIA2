/* Aufgabe: 5
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 17.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a5;
(function (a5) {
    window.addEventListener("load", init);
    let imagedata;
    let Snow = [];
    let Cloud = [];
    let Ski = [];
    let BaumX = [];
    let BaumY = [];
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
        //Wolken 
        for (let i = 0; i < 3; i++) {
            let s = new a5.cloudInfo(Math.random() * 800, 60 + Math.random() * 70);
            Cloud[i] = s;
        }
        //Schnee
        for (let i = 0; i < 300; i++) {
            let s = new a5.snowInfo(Math.random() * 800, 60 + Math.random() * 600);
            Snow[i] = s;
        }
        //B�ume
        for (let i = 0; i < 5; i++) {
            BaumX[i] = 60 + Math.random() * 300;
            BaumY[i] = 200 + Math.random() * 220;
        }
        //Fahrer //
        for (let i = 0; i < 5; i++) {
            let s = new a5.SkiInfo(0, 0, Math.random() * 1 + 2, Math.random() * 3 + 1);
            s.setRandomStyle();
            Ski[i] = s;
        }
        imagedata = a5.crc2.getImageData(0, 0, canvas.width, canvas.height);
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
        for (let i = 0; i < Cloud.length; i++) {
            let s = Cloud[i];
            s.move();
        }
        //Schnee (Bewegt sich nur in Y-Richtung)
        for (let i = 0; i < Snow.length; i++) {
            let s = Snow[i];
            s.move();
        }
        //B�ume
        for (let i = 0; i < BaumX.length; i++) {
            drawTree(BaumX[i], BaumY[i]);
        }
        window.setTimeout(animate, 25);
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=a5.js.map