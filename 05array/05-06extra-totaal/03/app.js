class App
{
    runApplication()
    {
        console.log("Hello world!");
        let uibutton = document.getElementById("Mybutton");
        let uibutton2 = document.getElementById("Mybutton2");
        let tekst = document.getElementById("tekst")

        uibutton.addEventListener("click",(e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("C");
            para.appendChild(node);
            document.body.appendChild(para);
        });

        uibutton2.addEventListener("click",(e)=>
        {
            const head = document.createElement("h1");
            const para = document.createElement("p");
            const img = document.createElement("IMG");
            const node = document.createTextNode("A");
            const node2 = document.createTextNode("B");
            img.setAttribute("src", "progImg.jpeg")
            img.setAttribute("width", "304")
            img.setAttribute("height", "228")
            img.setAttribute("alt", "cat");
            head.appendChild(node);
            para.appendChild(node2);
            document.body.appendChild(head)
            document.body.appendChild(para)
            document.body.appendChild(img)
        });

        tekst.addEventListener("click",(e)=>{
            const colour = tekst.style.backgroundColor;
            if (colour == 'red'){
                tekst.style.backgroundColor= "white"
            }
            else {
                const grote = document.createElement("h1")
                const tekstGrote = document.createTextNode("smth smth smth")
                grote.appendChild(tekstGrote);
                document.body.appendChild(grote);
                tekst.style.backgroundColor= "brown"
            }
        })
    }
}
let app = new App();
app.runApplication();