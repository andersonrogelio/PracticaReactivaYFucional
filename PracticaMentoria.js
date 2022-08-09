// Escribir una función que calcule el total de una factura tras aplicarle el IVA. La función debe recibir 
// la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. Si se invoca 
// la función sin pasarle el porcentaje de IVA, deberá aplicar un 21%.
// eddi.garcia@sofka.com.co
function calculoIva(precio, iva) {
    if (iva == 0) {
        return precio * 0.21;
    }
    return precio * iva;
}
var facturaSinIva = [10, 2.5, 100];
// let facturaConIva  = facturaSinIva.map(precio => calculoIva(precio,0.25));
var facturaConIva = facturaSinIva.reduce(function (total, producto) { return total += calculoIva(producto, 0.25); }, 0);
console.log("Total de factura con 25% de IVA:" + facturaConIva);
var facturaConIvaPredeterminado = facturaSinIva.reduce(function (total, producto) { return total += calculoIva(producto, 0); }, 0);
console.log("Total de factura con 21% de IVA:" + facturaConIvaPredeterminado);
