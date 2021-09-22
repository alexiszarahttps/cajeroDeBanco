function inicioSesion() {
    user = prompt("Ingrese su usuario")
    password = prompt("Ingrese su contraseña")
    if (user == "fulanito" && password == "123456") {
        window.location.replace("./menu.html")
    }
}

function saldoActual() {
} if(accion == "1") {
        let saldoActual = 21300
        alert(("Su saldo actual es de ") + parseInt(saldoActual))
}

function retirarDinero() {
    if(accion == "2") {
        let extraccion = prompt("Ingrese el monto a extraer")
        let resto = saldoActual - parseInt(extraccion)
        alert("Tu saldo actual es de: " + parseInt(resto))
    }
}

function depositarDinero() {
    if(accion == "3") {
        let depositar = prompt("Ingrese monto a depositar")
        let deposito = saldoActual + parseInt(depositar)
        alert("Tu saldo actual es de: " + parseInt(deposito))
}

function cambiarClave() {
    if(accion == "4") {
        let cambiar = prompt("Ingrese su clave actual")
        let cambio = prompt("Ingrese su clave nueva")
        let repetirCambio = prompt("Ingrese su nueva clave nuevamente")
        if(cambio == repetirCambio) {
            alert("Su cambio ha sido exitoso")
         
        } else {
            alert("Su cambio no ha sido exitoso")
            
         }
    
    }
}

function cerrarSesion() {
   window.location.replace("./index.html")
}