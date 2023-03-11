/*function Load(){
        console.log('Holas')
    }
    document.addEventListener('DOMContentLoaded',Load());*/

//document.addEventListener('DOMContentLoaded',()=> console.log('Hola desde consola'));

let saludo = 'Hola a todos';

const load = (mensaje) => console.log(mensaje);

class country{
    constructor(pais){
        this.flag = pais.flag;
        this.name = pais.name;
        this.region = pais.region;
    }
}

const getCountry = async(name)=>{
    const uri = `https://restcountries.com/v2/name/${name}`;
    const resp = await fetch(uri);
    const data = await resp.json();

    let pais = new country(data[0]);
    let region = pais.region;
    //console.log(region);

    let {region2} = pais;

    let array = ['Avion', 'Carro', 'Moto'];
    let [,,veiculo3] = array;

    document.getElementById('pais_name').innerHTML = pais.name;
    document.getElementById('pais_flag').src = pais.flag;
    document.getElementById('pais_region').innerHTML = region;

    

}

const $btn_search = document.getElementById('btn_search');

$btn_search.addEventListener('click', ()=>{
    const $pais_input = document.getElementById('pais_input');

    getCountry($pais_input.value);
});

getCountry('Colombia');