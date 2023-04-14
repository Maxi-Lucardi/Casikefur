const formulariosUsuarios = document.querySelector(".formUsuarios")
const contenedorUsuarios = document.querySelector("#contenedorUsuarios")

const usuarios = []



const renderizarUsuarios = () => {
    contenedorUsuarios.innerHTML = ""
    for (const usuario of usuarios) {
        contenedorUsuarios.innerHTML += `
        <div  class="user-card">
    <h5> Gracias por elegirnos!! su plan es:</h5>
            <h2> ${usuario.plan}</h2>
            <p>Nombre ${usuario.nombre}</p>
            <p>Apellido: ${usuario.apellido}</p>
            <p>Email: ${usuario.email}</p>
            <p> Dispositivo: ${usuario.dispositivo}</p>
        </div>
        `
    }

}

formulariosUsuarios.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(formulariosUsuarios.dispositivo.value)
    usuarios.push({
        nombre: formulariosUsuarios.nombre.value,
        apellido: formulariosUsuarios.apellido.value,
        email: formulariosUsuarios.email.value,
        plan: formulariosUsuarios.plan.value,
        dispositivo: formulariosUsuarios.dispositivo.value

       

    })
   
})

const email = document.getElementById("email")
email.addEventListener("focusout", (e) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(validRegex)){
        alert("Por favor escriba su correo electronico")
        const aux = document.getElementById("nombre")
        aux.focus();
    }
})
const formSubmit = document.querySelector(".formUsuarios")

formSubmit.addEventListener("submit", (event) =>{
    event.preventDefault()
    if(document.getElementById("nombre").value == "" || document.getElementById("email").value == "" || document.getElementById("apellido").value == "" ){
        alert("Debe Completar todos los campos")
        document.getElementById("nombre").focus()
        
       
    }else{
        alert("Mensaje Enviado")
        formSubmit.reset()
       
        renderizarUsuarios()


        
        
    }
 
} )
