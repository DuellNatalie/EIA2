var A;
(function (A) {
    window.addEventListener("load", init);
    let BG;
    // export let confettis: confetti[] = [];
    let shapes = [];
    let canvas = document.getElementsByTagName("canvas")[0];
    A.crc2 = canvas.getContext("2d");
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        A.crc2 = canvas.getContext("2d");
        BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
        draw();
    }
    function draw() {
        // Himmel
        var gradient = A.crc2.createLinearGradient(0, 0, 0, 720);
        gradient.addColorStop(0, "#000d1a");
        gradient.addColorStop(0.6, "#00284d");
        gradient.addColorStop(0.61, "#141f14");
        gradient.addColorStop(1, " #0a100a");
        A.crc2.fillStyle = gradient;
        A.crc2.fillRect(0, 0, 1270, 720);
        var gradient2 = A.crc2.createRadialGradient(400, 150, 100, 400, 150, 50);
        //Random Sterne
        for (let i = 0; i < 70; i++) {
            let x = 10 + Math.random() * 1250;
            let y = 10 + Math.random() * 410;
            drawStars(x, y);
        }
        function drawStars(_x, _y) {
            A.crc2.beginPath();
            A.crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
            A.crc2.fillStyle = "silver";
            A.crc2.fill();
            //Mond
            A.crc2.beginPath();
            A.crc2.arc(1105, 100, 60, 0, 2 * Math.PI);
            A.crc2.fillStyle = "silver";
            A.crc2.fill();
        }
        //Wolken  
        for (let i = 0; i < 3; i++) {
            let c = new A.Clouds(Math.random() * 800, 60 + Math.random() * 70);
            shapes.push(c);
        }
        BG = A.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    //ANIMATAION/////////////////////////////////////////////////
    function animate() {
        A.crc2.putImageData(BG, 0, 0);
        for (let i = 0; i < shapes.length; i++) {
            let s = shapes[i]; //s = das objekt an der stelle die ich abfrage
            s.move();
        }
        window.setTimeout(animate, 25);
    }
})(A || (A = {}));
//# sourceMappingURL=main.js.map