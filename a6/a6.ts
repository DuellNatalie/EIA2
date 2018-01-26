/* Aufgabe: 6
    Name: Natalie Düll
    Matrikel: 256026
    Datum: 24.11.2017
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert. */

namespace a6 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imagedata: ImageData;

    let shapes: Move[] = [];
    let tree: Trees[] = [];


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


        //Wolken  
        for (let i: number = 0; i < 3; i++) {

            let c: Clouds = new Clouds(Math.random() * 800, 60 + Math.random() * 70);
            shapes.push(c); 

        }


        // SCHNEE
        for (let i: number = 0; i < 300; i++) {

            let s: Snowflake = new Snowflake(Math.random() * 800, Math.random() * 600);
            shapes.push(s);

        }


        //Bäume
        for (let i: number = 0; i < 5; i++) {

            let s: Trees = new Trees(60 + Math.random() * 300, 200 + Math.random() * 220) //element erstellen, in array füllen
            tree[i] = s;

        }


        //Fahrer
        for (let i: number = 0; i < 5; i++) {

            let f: Skier = new Skier(Math.random() * 10, Math.random() * 300, Math.random() * 1 + 1.5, Math.random() * 2.5 + 1, "hsl(" + Math.random() * 360 + ", 100%, 90%)", "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            shapes.push(f);

        }


        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

    }



    //ANIMATAION/////////////////////////////////////////////////
    function animate(): void {
        crc2.putImageData(imagedata, 0, 0);


        for (let i: number = 0; i < shapes.length; i++) {
            let s: Move = shapes[i]; //s = das objekt an der stelle die ich abfrage
            s.move(); 

        }


        //Bäume
        for (let i: number = 0; i < tree.length; i++) {

            tree[i].draw();

        }

        window.setTimeout(animate, 25);

    }
}