class App
{

    runApplication()
    {
        console.log("hello world!");
    }
}

let app = new App();
app.runApplication();

function GlobalFunction()
{
    console.log("global");
    console.log("y");
}

GlobalFunction();


function aanroep()
{

}
 aanroep();

 function argumenten(shoutout)
{
   console.log("do you want a shoutout");
   console.log(shoutout);
}
 argumenten("Super Shout out");