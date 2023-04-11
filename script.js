const formulariosUsuarios = document.querySelector(".formUsuarios")
const contenedorUsuarios = document.querySelector("#contenedorUsuarios")

const usuarios = []



const renderizarUsuarios = () => {
    contenedorUsuarios.innerHTML = ""
    for (const usuario of usuarios) {
        contenedorUsuarios.innerHTML += `
        <div  class="user-card">
        
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Apellido ${usuario.apellido}</p>
            <p>Email: ${usuario.email}</p>
            <p>Plan: ${usuario.plan}</p>
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
    renderizarUsuarios()
})



