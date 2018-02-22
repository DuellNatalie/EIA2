namespace A {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let BG: ImageData;
    // export let confettis: confetti[] = [];
    let shapes: Move[] = []; 
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");


    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        BG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        draw();

    }


    function draw(): void {
        
        // Himmel
        var gradient = crc2.createLinearGradient(0, 0, 0, 720);
        gradient.addColorStop(0, "#000d1a");
        gradient.addColorStop(0.6, "#00284d");
        gradient.addColorStop(0.61, "#141f14");
        gradient.addColorStop(1, " #0a100a");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1270, 720);
        var gradient2 = crc2.createRadialGradient(400, 150, 100, 400, 150, 50);


        //Random Sterne
        for (let i: number = 0; i < 70; i++) {
            let x: number = 10 + Math.random() * 1250;
            let y: number = 10 + Math.random() * 410;
            drawStars(x, y);}
        function drawStars(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "silver";
        crc2.fill();
        
        //Mond
        crc2.beginPath();
        crc2.arc(1105, 100, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "silver";
        crc2.fill();}
        
        //Wolken  
        for (let i: number = 0; i < 3; i++) {
            let c: Clouds = new Clouds(Math.random() * 800, 50 + Math.random() * 270);
            shapes.push(c); 

        }
        
        
       //Baum
        crc2.beginPath();
        crc2.moveTo(220, 660);
        crc2.lineTo(350, 650);
        crc2.lineTo(320, 300);
        crc2.lineTo(270, 305);
        crc2.closePath();
        crc2.strokeStyle = " #1a0d00";
        crc2.stroke();
        crc2.fillStyle = " #1a0d00";
        crc2.fill(); 
        //Gruenzeug
        crc2.beginPath();
        crc2.arc(250, 300, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#1a3300";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(190, 250, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#284d00";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(230, 180, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#356600";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(300, 150, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#1a3300";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(370, 230, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#284d00";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(320, 300, 90, 0, 2 * Math.PI);
        crc2.fillStyle = "#356600";
        crc2.fill();
        //Apfel
        crc2.beginPath();
        crc2.arc(350, 355, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "darkred";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(360, 355, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "darkred";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(355, 340);
        crc2.lineTo(360, 335);
        crc2.lineTo(370, 330);
        crc2.closePath();
        crc2.strokeStyle = " #1a0d00";
        crc2.stroke();
        crc2.fillStyle = " #1a0d00";
        crc2.fill(); 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        BG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();}
    
        //ANIMATAION/////////////////////////////////////////////////
    function animate(): void {
        crc2.putImageData(BG, 0, 0);


        for (let i: number = 0; i < shapes.length; i++) {
            let s: Move = shapes[i];
            s.move(); 
        }
window.setTimeout(animate, 25);

    }


}