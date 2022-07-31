const $imgLoading = new Image();
$imgLoading.src = `img/rocket.gif`;
const root = "https://swapi.dev/api/";
const $div = document.getElementById("tableCenter");
let $ul = document.getElementById(`main`);
const $navbar = document.getElementById(`navbar`);
const $next = document.getElementById("next");
const $previous = document.getElementById("previous");
const $mainTable = document.getElementById("mainTable");
let nextUrl;
let previousUrl;

function bottomMEssage(msg) {
   let output = ``;
   for (string in Object.entries(msg)) { output = output.concat(`<font class="innerFont">${Object.entries(msg)[string]} <br>`).replace(/,/g, `</font>:  `); };
   document.getElementById("bottom").innerHTML = output;
}

const parent = document.getElementById("center");
const child = document.getElementById("preloader");

axios.get(root, {}, {} ).then(res => {   
   parent.removeChild(child);
   Object.entries(res.data).forEach(([key, value]) => {
      const $button = document.createElement(`button`);
      $button.setAttribute(`class`, `btn btn-outline-success`);
      $button.innerHTML = `${key}`;
      $button.addEventListener('click', function() {menu(value, key)});
      $navbar.appendChild($button)});
                             });

$next.addEventListener('click', () => {routerKeys(`next`)});
$previous.addEventListener('click', () => {routerKeys(`prev`)});

function routerKeys(input) {if (input === `next`)menu(nextUrl); if (input === `prev`)menu(previousUrl);}
function menu(value, route) {
   if(route) {document.getElementById("route").innerHTML = `${route}`};
   document.getElementById("bottom").innerHTML = ``;
   $div.appendChild($imgLoading);
   $next.setAttribute(`class`, `btn btn-sm btn-outline-secondary disabled`);
   $previous.setAttribute(`class`, `btn btn-sm btn-outline-secondary disabled`);
   
   if(document.getElementById(`child`)) {
      $div.removeChild($ul);
      $ul = document.createElement(`ul`);
      $ul.setAttribute(`class`, `list-group`);
      $ul.setAttribute(`id`, `main`);
      $div.appendChild($ul)};

  axios.get(value, {}, {} ).then(res => {
      $div.removeChild($imgLoading);
      res.data.results.forEach(element => {
        const $li = document.createElement(`li`);
        $li.setAttribute(`class`, `list-group-item list-group-item-warning`);
        $li.setAttribute(`id`, `child`);
        $li.addEventListener('click', function() {bottomMEssage(element);});                                      
        if(element.title) {$li.innerHTML = `${element.title}`};
        if(element.name) {$li.innerHTML = `${element.name}`};
        $ul.appendChild($li);
     });

     if(res.data.next != null) {        
        if(!$next) {const $next = document.createElement(`td`)};
        $next.setAttribute(`class`, `btn btn-outline-success`);
        $next.innerHTML = `next`;
        nextUrl = res.data.next;
     } else {       
        $next.setAttribute(`class`, `btn btn-sm btn-outline-secondary disabled`);
        $next.innerHTML = `next`; };

    if(res.data.previous != null) {
        $previous.setAttribute(`class`, `btn btn-outline-success`);
        $previous.innerHTML = `previous`;
        previousUrl = res.data.previous;
     } else {   
        $previous.setAttribute(`class`, `btn btn-sm btn-outline-secondary disabled`);
        $previous.innerHTML = `previous`; }   
    })
}
   

