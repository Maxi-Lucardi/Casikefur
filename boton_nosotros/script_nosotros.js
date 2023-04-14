/* alert("hola") */

const contenedorHTML = document.getElementById("nosContenedorIntegr")

fetch("./db/nosDatabase.json")
    .then(response => response.json())
    .then(data => {
        for (integrante of data) {
            contenedorHTML.innerHTML +=`
            <div class="nosCard">
                <div class="nosCardImgIntegr">
                    <img src=${integrante.url}>
                </div>  
                
                <div class="nosCardIntegr">
                    <p>Mi Nombre es ${integrante.nombre}</p>
                    <p> de Apellido ${integrante.apellido}</p>
                    <p>Tengo ${integrante.edad} años de edad</p>
                    <p>y mi rol en la empresa es ${integrante.ocupacion}</p>
                </div>    
            </div>
            `
        }
    })