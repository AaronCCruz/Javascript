function evento() {
    var elemento = document.getElementById("boton");
    elemento.ondblclick = mostrarmensaje;
    }
function mostrarmensaje() {
    document.getElementById("mensaje").innerHTML = "Bienvenido";
    }
function validarSiNumero(numero){
        if (!/^([0-9])*$/.test(numero))
        alert("El valor " + numero + " no es un número");
        }
function validateMail(email)
{
//Creamos un objeto
object=document.getElementById(email);
valueForm=object.value;
// Patron para el correo
var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
if(valueForm.search(patron)==0)
{
//Mail correcto
object.style.color="#000";
return;
}
//Mail incorrecto
object.style.color="#f00";
}
     
    window.onload = evento, validarSiNumero, validateMail;