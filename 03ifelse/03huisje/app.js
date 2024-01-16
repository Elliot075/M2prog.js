class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas=document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let random = Math.random();
        let kleur = "pink"
        console.log(random);

        if(random < 0.5)
        {
            console.log('kleiner');
            kleur = "yellow"
        }
        else if(random > 0.5)
        {
            kleur = "black"
        }

        g.beginPath()
        g.fillStyle = "darkbrown"
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
        g.fillStyle = "brown";
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(600,400);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = kleur;
        g.moveTo(250,370);
        g.lineTo(250,470);
        g.lineTo(400,500);
        g.lineTo(400,400);
        g.closePath();
        g.stroke();
        g.fill()
    }
}

let app = new App();
app.runApplication();
