let listaNombreGastos = [];
let listaValorGastos = [];
let listaDescripcionGastos = [];
let indiceEdicion = -1; 

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGastos').value; 

    if (indiceEdicion === -1) {
        
        listaNombreGastos.push(nombreGasto);
        listaValorGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGasto);
    } else {
       
        listaNombreGastos[indiceEdicion] = nombreGasto;
        listaValorGastos[indiceEdicion] = valorGasto;
        listaDescripcionGastos[indiceEdicion] = descripcionGasto;
        indiceEdicion = -1; 
    }

    actualizarListaGastos();
}
  
function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValorGastos[posicion]);
        const descripcionGasto = listaDescripcionGastos[posicion]; 
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcionGasto} 
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <button onclick="editarGasto(${posicion});">Actualizar</button>
            </li>`;

       
        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);

 
    if (totalGastos > 1500) {
        alert('¡Cuidado! Estás gastando demasiado dinero este mes.');
    }

    limpiarCampos();
}

function limpiarCampos() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGastos').value = ''; 
}

function eliminarGasto(posicion) {
    listaNombreGastos.splice(posicion, 1);
    listaValorGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1); 
    actualizarListaGastos();
}

function editarGasto(posicion) {
  
    document.getElementById('nombreGasto').value = listaNombreGastos[posicion];
    document.getElementById('valorGasto').value = listaValorGastos[posicion];
    document.getElementById('descripcionGastos').value = listaDescripcionGastos[posicion];
    
 
    indiceEdicion = posicion;
}
