class App
{
    runApplication()
    {
     
        console.log("Hello world!");
        let arr = ["artiest1", "artiest2", "artiest3"]
        console.log(arr)

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(i + ": "+ element)
        }

        for (let i = 0; i < 5; i++) {
            const element = arr[i];
            arr.push("artiest4")
            arr.push("artiets5")
            console.log(i + ": "+ element)
        }

        for (let i = 0; i < 5; i++) {
            const element = arr[i];
            arr.push("artiest4")
            arr.push("artiest5")
            console.log(i + ": "+ element)
            let indexToRemove = arr.indexOf("artiest4")
            let indexToRemove1 = arr.indexOf("artiest5")
            arr.splice(indexToRemove,1)
            arr.splice(indexToRemove1,5)
            arr.push("artiest6")
            arr.push("artiest7")  
        }
    }
}
let app = new App();
app.runApplication();