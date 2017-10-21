/* Aufgabe: 2
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 20.10.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */



namespace a2 {

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
        //Baum 3
        crc2.beginPath();
        crc2.strokeStyle = "#265941";
        crc2.moveTo(70, 500);
        crc2.lineTo(190, 500);
        crc2.lineTo(140, 350);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#265941";
        crc2.fill();
        //Baum 2
        crc2.beginPath();
        crc2.strokeStyle = "#004d26";
        crc2.moveTo(130, 570);
        crc2.lineTo(250, 570);
        crc2.lineTo(200, 420);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#004d26";
        crc2.fill();
        //Baum1
        crc2.beginPath();
        crc2.strokeStyle = "#113b27";
        crc2.moveTo(50, 600);
        crc2.lineTo(170, 600);
        crc2.lineTo(110, 450);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#113b27";
        crc2.fill();
        //Wolke
        crc2.beginPath();
        crc2.strokeStyle = "#ffffff";
        crc2.arc(500, 125, 23, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(523, 108, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(535, 129, 22, 0, 2 * Math.PI);;
        crc2.fill();

        //Bäume
        for (let i:number = 0; i < 7; i++) {
            let x: number = 20 * Math.random() * 380;
            let y: number = 280 * Math.random() * 300;
            drawTree(x, y, "#113b27");
        }


    }

    function drawTree(_x:number, _y:number, _color:string): void {

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 30, _y + 30);
        crc2.lineTo(_x - 30, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }



}