function validar(formulario) {

    const nombre = formulario.nombre.value.trim();
    const sexo = formulario.sexo.value;
    const deporte = formulario.deporte.value;
    const edad = formulario.edad.value;

    if (nombre === "") {
        alert("Ingresa tu nombre.");
        return false; 
    }
   
    if(edad <= "18"){
        alert ("Debes ser mayor de edad para ingresar")
        return false;
    }
    
    if (!sexo) {
        alert("Selecciona tu sexo.");
        return false; 
    }


        alert("Inicio de sesión correcto");
    return true;
}