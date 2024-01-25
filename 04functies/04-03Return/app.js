class App
{

    runApplication()
    {
        console.log("hello world!");
    }
}

let app = new App();
app.runApplication();

function Result()
{
      let resultaat =1;
      return resultaat;
}

let hetResult = Result();
console.log(hetResult);
console.log(Result());

function ax2bcWiskunde(x, a, b, c)
{
        

    let y = (a*(x*x) )+ (b*x) +c;  
    return y; 
}

ax2bcWiskunde(2, 5, 8, 1);
let som = ax2bcWiskunde(2, 5, 8, 1);
console.log(som);

    let y1 = ax2bcWiskunde(9,3,4,89);
    console.log(y1);

    let y2 = ax2bcWiskunde(3,6,5,45);
    console.log(y2);

    let y3 = ax2bcWiskunde(7,1,2,13);
    console.log(y3);

function decimaal(u, h, l)
{

    let logY = Math.log(l) +  h + Math.pow(u,2);
    return logY;
}
 decimaal(9,8,15);
 let uitkomst = decimaal(9,8,15);
 console.log(uitkomst);