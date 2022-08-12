window.addEventListener(`storage`, event => 
{
    if (event.key === `avatar`) {document.body.style.backgroundColor = `red`}
    
})

//window.localStorage.setItem(`myKey`, `data`)
//window.localStorage.setItem(`myKey2`, 123455645)

console.log(window.localStorage.length);
console.log(window.sessionStorage.length);
//console.log(navigator.geolocation.getCurrentPosition(pos) => console.log(pos));



console.log(window.localStorage);



////////////////////////////////////// 
const prom = new Promise((res, rej) => {setTimeout(() => {rej(new Error(`ERROR`))}, 5000)})

prom.then(() => {console.log(`end_of_promise`)}).catch((err) => {console.log(err)})

//////////////////////////////////////////////////////////////////////


const data1 = fetch(`https://swapi.dev/api/people/7/`)
const data2 = fetch(`https://swapi.d___ev/api/people/9/`)
const data3 = fetch(`https://swapi.dev/api/people/3/`)

// https://swapi.dev/api/people/7/: https://swapi.dev/api/people/8/: https://swapi.dev/api/people/9/: https://swapi.dev/api/people/10/: https://swapi.dev/api/people/12/: https://swapi.dev/api/people/13/: https://swapi.dev/api/people/14/: https://swapi.dev/api/people/15/: https://swapi.dev/api/people/16/:


//Promise.all([data1,data2,data3]).then(()=>{console.log(`OK_PROMISE_LOG`)}).catch((err)=>{console.log(err)})
Promise.allSettled([data1,data2,data3]).then(()=>{console.log(`OK_PROMISE_LOG`)}).catch((err)=>{console.log(err)})
Promise.any([data1,data2,data3]).then(()=>{console.log(`OK_PROMISE_LOG`)}).catch((err)=>{console.error(err)})