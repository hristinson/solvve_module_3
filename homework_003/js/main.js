class App {
    $parentList = null;
    slide = 20;
    offSet = 20;

    constructor({ parentList }) 
    { 
        this.$parentList = parentList
        this.init()}

     init() 
    {   
        document.getElementById(`buttonRight`).addEventListener(`click`, (event) => {this.off = this._off + this.slide })
        document.getElementById(`buttonLeft`).addEventListener(`click`, (event) => {this.off = this._off - this.slide })
    }

preloaderHide() {document.getElementById(`pokemonSpiner`).setAttribute(`class`, `hidden`)}
preloaderShow(){document.getElementById(`pokemonSpiner`).setAttribute(`class`, `pokemon`)}


_off = 0
get off(){return this._off}
set off (offN){ 
        this._off = offN
        this.getListPokemon(offN) 
    }

    async getListPokemon (off) {
        this.preloaderShow();
        const main = `https://pokeapi.co/api/v2/pokemon/?offset=${this.off}&limit=${this.offSet}`
        const result = await axios.get(main, {}, {})
        if(result.data.next){
            document.getElementById(`buttonRight`).setAttribute(`class`, `btn btn-secondary`)
            }  else {
                document.getElementById(`buttonRight`).setAttribute(`class`, `btn btn-secondary disabled`)}
        if(result.data.previous){
            document.getElementById(`buttonLeft`).setAttribute(`class`, `btn btn-secondary`)
        } else {
                document.getElementById(`buttonLeft`).setAttribute(`class`, `btn btn-secondary disabled`)}
        this.renderPokemons(result)
        this.preloaderHide();
     }

     async renderPokemons(res){

            this.$parentList.innerHTML = ``
            Object.entries(res.data.results).forEach(([key, value]) => {
            this.showPokemon(value.url, value.name)
            })
     }

                async showPokemon(url, name) { 
                const data = await axios.get(url, {}, {})
                const $div = document.createElement('div');
                $div.className = 'list-group-item';
                $div.setAttribute(`class`, `cell`)
                $div.innerHTML = `<img src="${data.data.sprites.front_default}" id="${name}" alt="${name}">`;
                $div.addEventListener(`mouseover`, (event) => {document.getElementById(`${name}`).src = data.data.sprites.front_shiny})
                $div.addEventListener(`mouseout`, (event) => {document.getElementById(`${name}`).src = data.data.sprites.front_default})
                $div.addEventListener(`click`, (event) => {this.clickOnPokemon(url)})
                this.$parentList.appendChild($div);

     }
     

        async clickOnPokemon(url){
        const data = await axios.get(url, {}, {})
        const $div = document.getElementById('modal-content');
        const $child = document.createElement('div');
        $div.appendChild($child)
        const name = data.data.name.charAt(0).toUpperCase() + data.data.name.slice(1)
        $child.innerHTML = `
        <p>Name: ${name}</p>
        <p>Height: ${data.data.height}, weight: ${data.data.weight}</p>
        <img src="${data.data.sprites.other.dream_world.front_default}">`;

        const modal = document.getElementById("modalPokemon");
        const span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() { modal.style.display = "none"; $child.innerHTML = ``}
        window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; $child.innerHTML = ``} }

    }
 
 }

 const app = new App({parentList: document.querySelector('#monsters_list')})
 app.getListPokemon()

