class App
{
    runApplication()
    {

        console.log("Hello world!");
        let title= document.getElementById("newstitle")
        const newsitem1= document.getElementsByClassName("gamenews")[0];
        const newsitem2= document.getElementsByClassName("gamenews")[1];
        console.log(title);
        console.log(newsitem1);
        console.log(newsitem2); 
        let random = Math.random();//0-1
        console.log(random);
        if(random <= 0.2)
        {
            title.style.backgroundColor = "#FF0000";
            newsitem1.style.backgroundColor = "#067C48";
            newsitem2.style.backgroundColor = "##FFD700";
        }
        else if(random > 0.75)
        {
            title.style.backgroundColor = "#228BCC"; 
            newsitem1.style.backgroundColor = "#022020";
            newsitem2.style.backgroundColor = "#C50505";
        }
        else if(random > 0.2 && random < 0.6)
        {
            title.style.backgroundColor = "#22CC68";
            newsitem1.style.backgroundColor = "#2F4F4F";
            newsitem2.style.backgroundColor = "##8A2BE2	";
        }

        else if(random > 0.6 && random < 0.75)
        {
            title.style.backgroundColor = "#DA9707";
            newsitem1.style.backgroundColor = "#B00DF1";
            newsitem2.style.backgroundColor = "#F90976";
        }
    }
}
let app = new App();
app.runApplication();
