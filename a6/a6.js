/* Aufgabe: 6
    Name: Natalie D�ll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */
var a6;
(function (a6) {
    window.addEventListener("load", init);
    let imagedata;
    let shapes = [];
    let tree = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        a6.crc2 = canvas.getContext("2d");
        //Himmel
        a6.crc2.fillStyle = "#ceecf5";
        a6.crc2.fillRect(0, 0, 800, 600);
        //Ganz hinterer Berg  
        a6.crc2.beginPath();
        a6.crc2.strokeStyle = "#afbecf";
        a6.crc2.moveTo(590, 350);
        a6.crc2.lineTo(300, 600);
        a6.crc2.lineTo(700, 600);
        a6.crc2.closePath();
        a6.crc2.stroke();
        a6.crc2.fillStyle = "#afbecf";
        a6.crc2.fill();
        //Hinterer Berg  
        a6.crc2.beginPath();
        a6.crc2.strokeStyle = "#8a98a8";
        a6.crc2.moveTo(700, 300);
        a6.crc2.lineTo(400, 600);
        a6.crc2.lineTo(900, 600);
        a6.crc2.closePath();
        a6.crc2.stroke();
        a6.crc2.fillStyle = "#8a98a8";
        a6.crc2.fill();
        //Berg
        a6.crc2.beginPath();
        a6.crc2.moveTo(0, 0);
        a6.crc2.lineTo(800, 600);
        a6.crc2.lineTo(0, 600);
        a6.crc2.closePath();
        a6.crc2.strokeStyle = "#ffffff";
        a6.crc2.stroke();
        a6.crc2.fillStyle = "#ffffff";
        a6.crc2.fill();
        //Lift-Linie
        a6.crc2.beginPath();
        a6.crc2.strokeStyle = "#000000";
        a6.crc2.moveTo(50, 0);
        a6.crc2.lineTo(800, 555);
        a6.crc2.stroke();
        //Wolken  
        for (let i = 0; i < 3; i++) {
            let c = new a6.Clouds(Math.random() * 800, 60 + Math.random() * 70);
            shapes.push(c);
        }
        // SCHNEE
        for (let i = 0; i < 300; i++) {
            let s = new a6.Snowflake(Math.random() * 800, Math.random() * 600);
            shapes.push(s);
        }
        //B�ume
        for (let i = 0; i < 5; i++) {
            let s = new a6.Trees(60 + Math.random() * 300, 200 + Math.random() * 220); //element erstellen, in array f�llen
            tree[i] = s;
        }
        //Fahrer
        for (let i = 0; i < 5; i++) {
            let f = new a6.Skier(Math.random() * 10, Math.random() * 300, Math.random() * 1 + 1.5, Math.random() * 2.5 + 1, "hsl(" + Math.random() * 360 + ", 100%, 90%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            shapes.push(f);
        }
        imagedata = a6.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //ANIMATAION/////////////////////////////////////////////////
    function animate() {
        a6.crc2.putImageData(imagedata, 0, 0);
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i]; //s = das objekt an der stelle die ich abfrage
            s.move();
        }
        //B�ume
        for (let i = 0; i < tree.length; i++) {
            tree[i].draw();
        }
        window.setTimeout(animate, 25);
    }
})(a6 || (a6 = {}));
//# sourceMappingURL=a6.js.map