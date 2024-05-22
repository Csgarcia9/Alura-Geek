const camposForm = document.querySelectorAll("[required]");

// Para recorrer todos los elementos del form
const reserCampos = () =>{
    camposForm.forEach(element => {
        element.value = '';
    });
};

// Para poner a funcionar con el evento click la funcion ya hecha para limpiar los campos
document.getElementById("boton-limpiar").addEventListener("click", reserCampos);