const autos = require('./autos.js');

const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        const buscarAutoPatente = this.autos.find(function(vehiculos){
            return vehiculos.patente == patente;
        })
        
        if(buscarAutoPatente){
            return buscarAutoPatente;
        } else {
            return null;
        }
        },
    venderAuto: function(patente){
        const buscarAuto = this.buscarAuto(patente);
        if(buscarAuto){
            buscarAuto.vendido = true;
        }
        return buscarAuto;
        },
    autosParaLaVenta: function(){
        const listadoParaLaVenta = this.autos.filter(function(vehiculos){
            return vehiculos.vendido == false;
        })

        return listadoParaLaVenta;
        },
    autosNuevos: function(){
        const autosParaVender = this.autosParaLaVenta();
        const autos0Km = autosParaVender.filter(function(vehiculos){
            return vehiculos.km < 100;
        })
        return autos0Km;
        },
    listaDeVentas: function(){
        let preciosAutosVendidos = [];
        this.autos.forEach(function(vehiculos){
            if(vehiculos.vendido == true){
                preciosAutosVendidos.push(vehiculos.precio)
            }
        })
        
        return preciosAutosVendidos;
        
        },
    totalDeVentas: function(){
        const listaVentas = this.listaDeVentas();
        const totalVentas = listaVentas.reduce(function(acumulador, elemento){
            return acumulador + elemento;
        }, 0);

        return totalVentas;
        },
    puedeComprar: function(auto, persona){
        if (
            auto.precio <= persona.capacidadDePagoTotal &&
            auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
          ) {
            return true;
          } else {
            return false;
          }
        },
    autosQuePuedeComprar: function(persona){
        const autosParaVender = this.autosParaLaVenta();
        const puedeComprar = autosParaVender.filter(function(auto){
            return concesionaria.puedeComprar(auto, persona);
        })
        return puedeComprar;
    }
};

//console.log(concesionaria.buscarAuto('JJK116'));
console.log("---------------------");
//console.log(concesionaria.venderAuto('APL123'));
console.log("---------------------");
//console.log(concesionaria.autosParaLaVenta());
console.log("---------------------");
//console.log(concesionaria.autosNuevos());
console.log("---------------------");
//console.log(concesionaria.listaDeVentas());
console.log("---------------------");
//console.log(concesionaria.totalDeVentas());
console.log("---------------------");
/*console.log(concesionaria.puedeComprar({   
    marca: "Chevrolet",
    modelo: "Onix",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 10,
    anio: 2020,
    patente: "KML401",
    vendido: false
}, {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }))
*/
/*console.log(concesionaria.autosQuePuedeComprar({
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 200000,
    capacidadDePagoTotal: 1000000
    }))
*/