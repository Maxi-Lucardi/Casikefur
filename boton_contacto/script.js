console.log(typeof(document.getElementById("email").value))
console.log(document.getElementById("email").value)

const email = document.getElementById("email")
email.addEventListener("focusout", (e) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(validRegex)){
        alert("el correo debe tener el formato ejemplo@gmail.com")
        const aux = document.getElementById("nombre")
        aux.focus();
    }
})

const formSubmit = document.querySelector("#formMensaje")

formSubmit.addEventListener("submit", (event) =>{
    event.preventDefault()
    if(document.getElementById("nombre").value == "" || document.getElementById("email").value == "" || document.getElementById("asunto").value == "" || document.getElementById("mensaje").value == ""){
        alert("Debe Completar todos los campos")
        document.getElementById("nombre").focus()
    }else{
        alert("Mensaje Enviado")
        formSubmit.reset()
    }
} )

/*document.getElementsByClassName("btn-menu")[0].onclick = function(){
    document.getElementsByClassName("lista-menu")[0].style.display = "block"
}*/
document.getElementsByClassName("btn-menu")[0].addEventListener("click", (event) =>{
    if(document.getElementsByClassName("lista-menu")[0].style.display == "none"){
        document.getElementsByClassName("lista-menu")[0].style.display = "block"
    }else{
        document.getElementsByClassName("lista-menu")[0].style.display = "none"
    }
    /*document.getElementsByClassName("lista-menu")[0].style.display = "block"*/
})