class PromoBancaria {
    constructor(banco, descuento) {
        this.banco = banco;
        this.promocion = descuento;
    }

    mostrarInfo() {
        return `${this.banco} ${(this.promocion * 100)}%`;
    }
}

class Esmalte {
    constructor(nombre, sigla, descripcion) {
        this.nombre = nombre;
        this.sigla = sigla;
        this.descripcion = descripcion;
    }
    
    mostrarInfo() {
        return `${this.nombre} (${this.sigla})`;
    }
}

const precioUnidad = 7500;
const descuentoSeisPacks = 0.10;
const descuentoDocePacks = 0.15;
const cantidadDeOpciones = 6;

const listaColores = [
    new Esmalte('Tonos blancos', 'TB', '009 Super White, 091 Blanco French, 410 Via Lactea, 120 Pearly White, 605 Miami Pop y 654 Cosmopolitan'),
    new Esmalte('Tonos rosas a rojo', 'TR', '764 Pink Satin, 235 Lovely Rose, 495 Pink Flamingo, 125 Sweet Cherry, 514 Raspberry Beret y 484 Alpha Omega'),
    new Esmalte('Tonos gliter', 'TG', '602 Funky Town, 832 Lust for Life, 610 Shine a Light, 386 Glitter, 263 Soho Night y 262 Palladium Party'),
    new Esmalte('Tonos violetas', 'TV', '470 Lilac Shade, 471 Lavender Mist, 150 Purple Shine, 050 Soft Plum, 203 Indigo Sun y 215 Purple Rain'),
    new Esmalte('Tonos marrones', 'TM', '498 Neutral, 011 Champagne Rose, 909 Pearl of Orient, 081 Venetian Wedding, 592 Luxor Whisper y 399 Paris Amour'),
    new Esmalte('Tonos grises a negro', 'TG', '403 New York Grey, 549 Ashes of Love, 606 Silver Diamond, 162 Halloween, 410 Dark Knight y 397 Black'),
];

const promocionesBancarias = [
    new PromoBancaria('Banco Nación', 0.15),
    new PromoBancaria('Banco Francés', 0.05),
    new PromoBancaria('Banco HSBC', 0.05),
    new PromoBancaria('Mercado Pago', 0.10),
];
