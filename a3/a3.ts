/* Aufgabe: 3
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 27.10.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */



namespace a3 {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D
    
    
    

    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);

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


        //Bäume
        for (let i: number = 0; i < 6; i++) {
            let x: number = 60 + Math.random() * 380;
            let y: number = 200 + Math.random() * 230;
            drawTree(x, y);
        }
        
        //Schnee
        for (let i: number = 0; i < 300; i++) {
            let x: number = 10 + Math.random() * 780;
            let y: number = 10 + Math.random() * 580;
            drawSnow(x, y);
        }

        //Wolken
        for (let i: number = 0; i < 3; i++) {
            let x: number = 300 + Math.random() * 420;
            let y: number = 60 + Math.random() * 90;
            drawCloud(x, y);
        }
    }

    function drawTree(_x: number, _y: number): void {
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

    function drawSnow(x: number, y: number): void {
        crc2.beginPath();
        crc2.arc(x, y, 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function drawCloud(x: number, y: number): void {
        crc2.beginPath();
        crc2.arc(x, y, 23, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 23, y - 13, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 36, y + 4, 22, 0, 2 * Math.PI);
        crc2.fill();

    }
}