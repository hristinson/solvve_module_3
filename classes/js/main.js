console.log(`blank`);

class App{
    constructor(){
        this.init()
    }

    get size () {return `size`}
    /**
     * @param {number} s
     */
    set size(s) {console.log(`change size = ${s}`)}

    event(){
            console.log(app.size)
            app.size = 100
        }

    init(){
        console.log(`initialize...`)
        const button = document.getElementById(`button`)
        button.addEventListener(`click`, this.event)
    }

}

const app = new App
app.size = 198