const $menuEsmaltes = document.querySelector('#menu-contenedor');

const generarMenuEsmaltes = (listaDeEsmaltes) => {
    listaDeEsmaltes.forEach(esmalte => {
        const contenedor = document.createElement('div');
        const nombre = document.createElement('p');
        const descripcion = document.createElement('p');
    
        nombre.textContent = esmalte.nombre;
        descripcion.textContent = `(${esmalte.descripcion})`;
    
        contenedor.append(nombre, descripcion);
        $menuEsmaltes.appendChild(contenedor);
    });
};

generarMenuEsmaltes(listaColores);

