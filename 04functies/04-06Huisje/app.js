class App
{
    runApplication()
    {
        console.log("hello world!");
        this.tekenhuis(0,0)
        this.tekenhuis(-10, 500)
        this.tekenhuis(700, 50)
        this.tekenhuis(700, 500)
    }

    tekenhuis(x,y)
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(600+x,400+y);
        g.lineTo(800+x,300+y);
        g.lineTo(700+x,200+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.moveTo(300+x,100+y);
        g.lineTo(200+x,300+y);
        g.lineTo(600+x,400+y);
        g.lineTo(700+x,200+y);
        g.closePath();
        g.stroke();
        g.fill()


        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(600+x,400+y);
        g.lineTo(600+x,600+y);
        g.lineTo(200+x,500+y);
        g.lineTo(200+x,300+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(600+x,400+y);
        g.lineTo(800+x,300+y);
        g.lineTo(800+x,500+y);
        g.lineTo(600+x,600+y);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(250+x,370+y);
        g.lineTo(250+x,470+y);
        g.lineTo(400+x,500+y);
        g.lineTo(400+x,400+y);
        g.closePath();
        g.stroke();
        g.fill()
    }
}

let app = new App();
app.runApplication();