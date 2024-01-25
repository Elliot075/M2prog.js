class App
{
    runApplication()
    {
        console.log("Hello world!");
        this.runmario();
        this.Bowserbrul();
        let y1 = this.nummers('vier',4);
        console.log(y1);
        this.tekst();
    }
    runmario()
    {
        console.log("MARIO!!")
    }
    Bowserbrul()
    {
        let bowser = console.log("BWAHAHA!!!")
        return bowser
    }
    nummers(a,b)
    {
        let y = Math.log(a) + Math.log(b)
        return y
    }
    tekst()
    {
        console.log("hey")
    }
}
let app = new App();
app.runApplication();
app.runmario();
app.Bowserbrul();
let y1 = app.nummers(4,4);
console.log(y1);
app.tekst();