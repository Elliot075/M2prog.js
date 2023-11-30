class App
{
    runApplication()
    {
        console.log("hello world!")
        let canvas = document.getElementById("canvasid")
        let g = canvas.getContext("2d");
        g.fillStyle = "beige"
        g.fillRect(0,0,canvas.width,canvas.height)
        g.fillStyle = "green"
        g.fillRect(0,0,10,10);
        console.log(canvas)
    }
}
let app = new App();
app.runApplication()