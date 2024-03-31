class Producto {
    constructor() {
        this.nombre = '';
        this.precio = 0;
        this.disponible = true;
        this.tipo = '';
    }

    esOfertaEspecial() {
        if (this.tipo === 'Oferta') {
            return true;
        } else {
            return false;
        }
    }

    calcularPrecioConDescuento() {
        if (this.tipo === 'Oferta') {
            return this.precio * 0.8;
        } else {
            return this.precio;
        }
    }

    esVegetariano() {
        if (this.tipo === 'Vegetariano') {
            return true;
        } else {
            return false;
        }
    }
}

class Cliente {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.email = '';
        this.nivelCliente = '';
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }

    asignarNivelCliente() {
        if (this.edad < 18) {
            this.nivelCliente = 'Menor';
        } else if (this.edad >= 18 && this.edad < 30) {
            this.nivelCliente = 'Joven';
        } else {
            this.nivelCliente = 'Adulto';
        }
    }

    tieneCorreoValido() {
        if (this.email.includes('@')) {
            return true;
        } else {
            return false;
        }
    }
}

class Empleado {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.cargo = '';
        this.sueldo = 0;
    }

    esGerente() {
        if (this.cargo.toLowerCase() === 'gerente') {
            return true;
        } else {
            return false;
        }
    }

    calcularBono() {
        if (this.cargo.toLowerCase() === 'gerente') {
            return this.sueldo * 0.2;
        } else {
            return this.sueldo * 0.1;
        }
    }

    tieneMasDe5AñosExperiencia() {
        if (this.edad >= 5) {
            return true;
        } else {
            return false;
        }
    }
}

class Mesa {
    constructor() {
        this.numero = 0;
        this.capacidad = 0;
        this.estado = '';
        this.reservada = false;
    }

    estaOcupada() {
        if (this.estado === 'Ocupada') {
            return true;
        } else {
            return false;
        }
    }

    estaDisponibleParaReservar() {
        if (this.estado === 'Libre' && !this.reservada) {
            return true;
        } else {
            return false;
        }
    }

    asignarEstado() {
        if (this.capacidad >= 4) {
            this.estado = 'Grande';
        } else {
            this.estado = 'Pequeña';
        }
    }
}

class Pedido {
    constructor() {
        this.numero = 0;
        this.productos = [];
        this.total = 0;
        this.entregado = false;
    }

    calcularTotalPedido() {
        this.total = 0;
        this.productos.forEach(producto => {
            this.total += producto.precio;
        });
    }

    estaCompleto() {
        return this.productos.length > 0;
    }

    marcarComoEntregado() {
        this.entregado = true;
    }
}

const productos = [];
for (let i = 0; i < 15; i++) {
    const producto = new Producto();
    producto.nombre = `Producto ${i+1}`;
    producto.precio = 2.5 + i;
    producto.tipo = i % 2 === 0 ? 'Oferta' : 'Normal';
    productos.push(producto);
}

const clientes = [];
for (let i = 0; i < 15; i++) {
    const cliente = new Cliente();
    cliente.nombre = `Cliente ${i+1}`;
    cliente.edad = 18 + i;
    cliente.email = `cliente${i+1}@example.com`;
    clientes.push(cliente);
}

const empleados = [];
for (let i = 0; i < 15; i++) {
    const empleado = new Empleado();
    empleado.nombre = `Empleado ${i+1}`;
    empleado.edad = 20 + i;
    empleado.cargo = i % 2 === 0 ? 'Gerente' : 'Camarero';
    empleado.sueldo = 1500 + i * 100;
    empleados.push(empleado);
}

const mesas = [];
for (let i = 0; i < 15; i++) {
    const mesa = new Mesa();
    mesa.numero = i + 1;
    mesa.capacidad = 2 + i % 4;
    mesa.reservada = i % 3 === 0;
    mesas.push(mesa);
}

const pedidos = [];
for (let i = 0; i < 15; i++) {
    const pedido = new Pedido();
    pedido.numero = i + 1;
    pedido.productos = [productos[i], productos[i+1], productos[i+2]];
    pedidos.push(pedido);
}

console.log("Ejemplos de información de algunas instancias:");
console.log("Información de algunos productos:");
console.log(productos[0]);
console.log(productos[5]);
console.log(productos[10]);
console.log("Información de algunos clientes:");
console.log(clientes[0]);
console.log(clientes[5]);
console.log(clientes[10]);
console.log("Información de algunos empleados:");
console.log(empleados[0]);
console.log(empleados[5]);
console.log(empleados[10]);
console.log("Información de algunas mesas:");
console.log(mesas[0]);
console.log(mesas[5]);
console.log(mesas[10]);
console.log("Información de algunos pedidos:");
console.log(pedidos[0]);
console.log(pedidos[5]);
console.log(pedidos[10]);
console.log("\nResultados de los problemas resueltos:");
console.log("Problemas resueltos para algunos productos:");
console.log("¿El primer producto es una oferta especial?", productos[0].esOfertaEspecial());
console.log("¿El segundo producto tiene descuento?", productos[1].calcularPrecioConDescuento());
console.log("¿El tercer producto es vegetariano?", productos[2].esVegetariano());
console.log("Problemas resueltos para algunos clientes:");
console.log("¿El primer cliente es mayor de edad?", clientes[0].esMayorDeEdad());
clientes[1].asignarNivelCliente();
console.log("Nivel del segundo cliente:", clientes[1].nivelCliente);
console.log("¿El tercer cliente tiene un correo válido?", clientes[2].tieneCorreoValido());
console.log("Problemas resueltos para algunos empleados:");
console.log("¿El primer empleado es gerente?", empleados[0].esGerente());
console.log("Bono del segundo empleado:", empleados[1].calcularBono());
console.log("¿El tercer empleado tiene más de 5 años de experiencia?", empleados[2].tieneMasDe5AnosExperiencia());
console.log("Problemas resueltos para algunas mesas:");
console.log("¿La primera mesa está ocupada?", mesas[0].estaOcupada());
console.log("¿La segunda mesa está disponible para reservar?", mesas[1].estaDisponibleParaReservar());
mesas[2].asignarEstado();
console.log("Estado de la tercera mesa:", mesas[2].estado);
console.log("Problemas resueltos para algunos pedidos:");
console.log("Total del primer pedido:", pedidos[0].calcularTotalPedido());
console.log("¿El segundo pedido está completo?", pedidos[1].estaCompleto());
console.log("¿El tercer pedido ha sido entregado?", pedidos[2].entregado);