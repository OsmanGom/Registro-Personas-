

const guardarPersona = async (personas) => {
    try {
        let personasHTML = '';
        personas.forEach((persona) => {
            personasHTML += `<tr>
                   <td>${persona.id}</td> 
                   <td>${persona.nombre}</td>
                   <td>${persona.telefonoCasa}</td>
                   <td>${persona.telefonoCelular} </td>
                   <td>${persona.fechaNacimiento} </td>
                   <td> ${persona.fechaHoraRegistro} </td>
                   <td><button onclick="eliminarPersona(${persona.id} )">Eliminar</button></td>
                   </tr>`})
        return personasHTML;
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    guardarPersona
}