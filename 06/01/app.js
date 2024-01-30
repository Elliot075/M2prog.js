class App
{
    runApplication()
    {
        let uibutton = document.getElementById("Mybutton")

        let localeFunction = function (e)
        {
            console.log("click!");
        };
        uibutton.addEventListener("click", localeFunction);
        console.log("Hello world!");
    }
}
let app = new App();
app.runApplication();