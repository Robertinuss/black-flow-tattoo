//constructor
function Tatuaje(tipo, tamanio) 
{
    this.tipo = tipo;
    this.tamanio = tamanio; 
}
//cotizarTatuaje
Tatuaje.prototype.cotizarTatuaje = function () {
    /*
  
        1 = Tradicional (Old School)
        2 = Blackwork: solo con tinta negra
        3 = Neotradicional (Neotrad o New School)
        4 = Acuarela
        5 = Black & Grey
        6 = Dotwork (puntillista)
        7 = Japonés Tradicional y Neo Japonés
        8 = Realista   
    */ 

    let cantidad;
    const base = 2500;

    switch (this.tipo) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.25;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        case '4':
            cantidad = base * 1.45;
            break;
        case '5':
            cantidad = base * 1.55;
            break;
        case '6':
            cantidad = base * 1.65;
            break;
        case '7':
            cantidad = base * 1.75;
            break;
        case '8':
            cantidad = base * 1.85;
            break;
    }

    //leer el tamaño
    const diferencia = new getTipo() + this.tamanio;
    //cada tamaño de diferencia afeca en 3 %
    cantidad -= ((diferencia*3) * cantidad ) / 100;




//parte visual HTML
function Interfaz(){}

//Mensaje en HTml
Interfaz.prototype.mostarMensaje = function(mensaje, tipo) {
  const div = document.createElement("div");

  if (tipo === 'error') {
    div.classList.add('mensaje', 'error');
  } else {
    div.classList.add("mensaje", "correcto");
  }

  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector(".form-group"));

  setTimeout(function() {
      document.querySelector('.mensaje').remove();
  }, 2000);
};

//imprime resultado de cotización
Interfaz.prototype.mostrarResultado = function (Tatuaje, total) {
    const resultado = document.getElementById('resultado');
    let marca;

    switch (tatuaje.marca) {
        case '1':
            marca = 'Tradicional (Old School)';            
            break;
        case '2':
            marca = 'Blackwork: solo con tinta negra';
            break;
        case '3':
            marca = 'Neotradicional (Neotrad o New School)';
            break;
        case '4':
            marca = 'Acuarela';
            break;
        case '5':
            marca = 'Black & Grey';
            break;
        case '6':
            marca = 'Dotwork (puntillista)';
            break;
        case '7':
            marca = 'Japonés Tradicional y Neo Japonés';
            break;
        case '8':
            marca = 'Realista';
            break;
    }

    
    */ 

    //crear un div
    const div = document.createElement('div');
    //insertar la información
    div.innerHTML = `
       <p class="header">Tu resumen:</p>
       <p>Tipo: ${tipo}</p>
       <p>Total: $ ${total}</p>   
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    
    setTimeout(function(){
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 500);   
    
}

//capturar datops del formulario
const formulario = document.getElementById('cotizar-tatuaje');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //leer el tipo seleccionado
    const tipo = document.getElementById('Tipo');
    const tipoSeleccionada = tipo.options[tipo.selectedIndex].value;

    //leer el tamaño seleccionado
    const tamanio = document.getElementById("Tamanio");
    const tamanioSeleccionado = tamanio.options[tamanio.selectedIndex].value; 

    //leer dato del radio Button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();
    //revisamos que los campos no estén vacíos

    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        //interfaz imprimiendo error
        interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);
        //mostrar resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');

    }

});




const max = new Date().getFullYear(),
      min = max - 20;

const  selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
   let option = document.createElement('option');
   option.value = i;
   option.innerHTML = i;
   selectAnios.appendChild(option);
    
}