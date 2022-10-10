export async function getLogin(usu, pass) {//espera las varibles para hacer la peticion asincrona
    try {
        const response = await fetch("api/contacto/" + usu + "/" + pass);
        return response;
    } catch (error) {
        throw error;
    }
}
