const $ = document.querySelector.bind(document);
const $menu = $('#menu');
const $opciones = $('#opciones');
const $pedido = $('#pedido');
const $contenedorFinalizar = $('#finalizar');
const $color = $('#color')
const $cantidad = $('#cantidad');
const $botonSumar = $('#boton-sumar');
const $botonRestar = $('#boton-restar');
const $botonProcesarPedido = $('#procesar-pedido');
const $botonFinalizar = $('#boton-finalizar');
const $contenedorDePago = $('#contenedor-pago');


const botonAgregar = document.createElement('button');
botonAgregar.id = 'boton-agregar';
botonAgregar.textContent = 'Agregar Esmaltes';

const botonFinalizar = document.createElement('button');
botonFinalizar.id = 'boton-finalizar';
botonFinalizar.textContent = 'Finalizar pedido';


const crearInputColor = (value, id) => {
    const color = document.createElement('input');
    color.disabled = true;
    color.type = 'text';
    color.className = 'color';
    color.id = id;
    color.value = value;
    return color;
};

const crearInputCantidad = (value, id) => {
    const cantidad = document.createElement('input');
    cantidad.disabled = true;
    cantidad.type = 'number';
    cantidad.className = 'cantidad';
    cantidad.id = id;
    cantidad.value = value;
    return cantidad;
};

const crearBotonSumar = () => {
    const boton = document.createElement('button');
    boton.textContent = '+';
    boton.className = 'boton-sumar';
    return boton;
};

const crearBotonRestar = () => {
    const boton = document.createElement('button');
    boton.textContent = '-';
    boton.className = 'boton-restar';
    return boton;
};

const agregarOpcionAlMenuOpciones = (value, id) => {
    let cantidadIngresada = 0;

    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-opcion';
    const cantidad = crearInputCantidad(cantidadIngresada, `cantidad${id}`);
    const botonSumar = crearBotonSumar();
    const botonRestar = crearBotonRestar();

    contenedor.append(
        crearInputColor(value, `color${id}`),
        cantidad,
        botonRestar,
        botonSumar
    );

    botonSumar.addEventListener('click',() => {
        cantidadIngresada++;
        cantidad.value = cantidadIngresada;
    });

    botonRestar.addEventListener('click', () => {
        if (cantidadIngresada > 0) {
            cantidadIngresada--;
            cantidad.value = cantidadIngresada;
        }
    });

    return contenedor;
};

const crearMenuDeOpciones = (listaDeEsmaltes) => {
    let id = 0;
    listaDeEsmaltes.forEach(color => {
        id++;
        const opcion = agregarOpcionAlMenuOpciones(color.nombre, id);
        $opciones.append(opcion);
    });
};


crearMenuDeOpciones(listaColores);
$opciones.append(botonAgregar);


const carrito = [];

const agregarColoresAlCarrito = () => {
    const coloresIngresados = document.querySelectorAll('.color');
    let id = 0;
    coloresIngresados.forEach(color => {
        id++;
        const cantidad = Number(document.querySelector(`#cantidad${id}`).value);

        if (cantidad > 0) {
            carrito.push({color: color.value, cantidad: cantidad});
        }
    })
};

const $carrito = $('#carrito');
const $coloresElegidos = $('#colores-elegidos');
const $cantidadesElegidas = $('#cantidades-elegidas');

botonAgregar.addEventListener('click', () => {

    if (carrito.length === 0) {
        agregarColoresAlCarrito();

        carrito.forEach(producto => {
            const texto = document.createElement('p');
            texto.textContent = producto.color;
            $coloresElegidos.append(texto);

            const cantidad = document.createElement('p');
            cantidad.textContent = `x ${producto.cantidad}`;
            $cantidadesElegidas.append(cantidad);
        })
    }
});

let cantidadDelPedido = 0;
let clickBotonIrAPagar = 0;

$botonProcesarPedido.addEventListener('click', () => {

    clickBotonIrAPagar++;

    carrito.forEach(producto => {
        const cantidad = producto.cantidad;
        cantidadDelPedido += cantidad;
    })

    if (clickBotonIrAPagar === 1) {
        if (cantidadDelPedido > 0) {
            const mensajeFinal = document.createElement('p');
            mensajeFinal.textContent = `Tu total es de: $ ${cantidadDelPedido * precioUnidad}`;
            $contenedorDePago.append(mensajeFinal);
            $contenedorDePago.append(botonFinalizar);
        } else {
            clickBotonIrAPagar = 0;
        }
    }
});

const finalizarPedido = () => {

    const mensaje = document.createElement('p');
    mensaje.textContent = '¡Gracias por tu compra!';
    mensaje.id = 'mensaje-finalizar';
    $contenedorFinalizar.append(mensaje);
};


let clickBotonFinalizar = 0;

botonFinalizar.addEventListener('click', () => {

    clickBotonFinalizar++;

    if (clickBotonFinalizar === 1) {
        if (cantidadDelPedido > 0) {
            finalizarPedido();
            setTimeout(() => {
                window.location.reload();
            }, 4000);
        } else {
            clickBotonFinalizar = 0;
        }
    }
});
