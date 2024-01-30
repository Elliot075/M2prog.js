class App
{
    runApplication()
    {
     
        console.log("Hello world!");
        let headersByCssClass = document.getElementsByClassName("Artist")
        for (let i = 0; i < headersByCssClass.length; i++) {
            const element = headersByCssClass[i];
            console.log(element);
            console.log(element.innerText);// geef weer wat de text is van mijnH1
            headersByCssClass[0].innerText = "nieuws ";
            headersByCssClass[1].innerText = "reviews";
            headersByCssClass[2].innerText = "commentaar ";
            headersByCssClass[3].innerText = "beste forum posts ";
            headersByCssClass[4].innerText = "pricewatch ";
        }   

        
    }
}
let app = new App();
app.runApplication();