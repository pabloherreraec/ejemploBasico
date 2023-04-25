function sumar()
{
    var numero1= document.getElementById("txtNumero1").value;
    var numero2= document.getElementById("txtNumero2").value;

    var suma = parseInt(numero1) + parseInt(numero2);
    //var suma = numero1 + numero2;

    document.getElementById("lblRespuesta").innerHTML = "Resultado: " + suma;
    
}