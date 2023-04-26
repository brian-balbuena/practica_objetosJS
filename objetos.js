// pongo el foco en el primer input 
let inputFocus = document.getElementById('nombre');
inputFocus.focus();

// lamo una funcion con el click de boton 
let boton = document.getElementById('agregar');
boton.onclick = capturaPersona;

// creo un arreglo vacio para guardar los datos 
let datos = [];
let contador = 0;

// funcion para capturar los datos de las personas
function capturaPersona() {

    // capturo los input para usarlos el el constructor 
    let nombreCap = document.getElementById('nombre').value;
    let edadCap = document.getElementById('edad').value;
    let colorFavCap = document.getElementById('color').value;

    // creo el constructor para el objeto 
    let info = {
        nombre: nombreCap,
        edad: edadCap,
        colorFav: colorFavCap,
    }

    function Persona(info) {
        this.nombre = info.nombre;
        this.edad = info.edad;
        this.colorFav = info.colorFav;
    }

    // creo el objeto
    newPersona = new Persona(info);

    // limpio los input 
    nombreCap = document.getElementById('nombre').value = "";
    edadCap = document.getElementById('edad').value = "";
    colorFavCap = document.getElementById('color').value = "";
    
    // pongo el foco en el primer input 
    inputFocus.focus();

    console.log(newPersona);
    agregarPersona();

}

// funcion para agregar las personas a la tabla 
function agregarPersona (){
    // relleno el arreglo con el objeto 
    datos.push(newPersona);

    // uso un contador para contar las personas que ingresan
    contador = contador+1;

    // mediante el innerHTML agrego lineas al html con las variables que quedan grabadas en el objeto 
    document.getElementById('tabla_muestra').innerHTML += '<tbody class="table-group-divider"><tr><th scope="row">'+contador+'</th><td>'+newPersona.nombre+ '</td><td>'+newPersona.edad+'</td><td>'+newPersona.colorFav+'</td></tr></tbody>'

}