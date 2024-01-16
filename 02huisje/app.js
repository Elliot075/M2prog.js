class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas=document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300,100);
        g.lineTo(200,300);  
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()


        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "white";
        g.moveTo(650,450);
        g.lineTo(800,350);
        g.lineTo(800,450);
        g.lineTo(650,550);
        g.closePath();
        g.stroke();
        g.fill()
        ctx.fillRect(20, 20, 150, 100);
    }
}

let app = new App();
app.runApplication();