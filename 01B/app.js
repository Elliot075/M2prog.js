class App
{
    runApplication()
    {
        this.boolean = false
        this.string = "test"
        this.number = 1000
        this.boolean2 = true
        this.string2 = "werkt"
        this.number2 = 10
        this.greeting = "starting up"
        this.appnaam = "demoapp"
        this.versienummer = 0.1
        this.versiedatum = "Thu Feb 02 2023 12:05:51 GMT+0100 (central European Standerd  time)"
        this.auther = "Elliot"
        this.copyright = "Media college"
        this.distributeur = "none"
        this.darkmode = false
        console.log(this.boolean)
        console.log(this.string)
        console.log(this.number)
        console.log(app.greeting)
        console.log("appnaam: " + this.appnaam)
        console.log("versienummer: " + this.versienummer)
        console.log("versiedatum: " + this.versiedatum)
        console.log("auther: " + this.auther)
        console.log("copyright: " + this.copyright)
        console.log("distributeur: " + this. distributeur)
        console.log("darkmode: " + this. darkmode)

    }
}
let app = new App();
app.runApplication();
console.log(app.boolean2)
console.log(app.string2)
console.log(app.number2)