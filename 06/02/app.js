class App
{
    runApplication()
    {
        console.log("Hello world!");
        let uibutton = document.getElementById("Mybutton")
        {
            console.log("click!");
        };
        uibutton.addEventListener("click",(e)=>
        {
            console.log("click!");
        });
    }
}
let app = new App();
app.runApplication();