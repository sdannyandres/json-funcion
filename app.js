var factura = {
    id: 1,
    fecha:new Date(),
    cliente: {
        nombre: "juan",
        id:"id1",
        dir: {
            calle: "av la estacion",
            dp: 5876
        },
    },
    lineas : [
        {
            nombre: "produc1",
            cantidad:1,
            precio : 12.5
        },
        {
            nombre: "produc2",
            cantidad:3,
            precio:1.5
        }
        ]

}
function calcularTotal(f){
    var total = 0
    for (item of f.lineas){
        total = total + item.cantidad * item.precio
        console.log("bucle", total)
    }
    return total
}
    console.log("total", calcularTotal(factura))
