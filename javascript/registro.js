
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const datos = new FormData(formulario);

    const nombresCampos = {
        Nombre: "Nombre",
        Apellido: "Apellido",
        DNI: "DNI",
        FechaNacimiento: "Fecha de nacimiento",
        Direccion: "Direccion",
        Direccion: "Direccion",
        Telefono: "Telefono",
        Telefono: "Telefono",
        Email: "Correo electronico",
        FueAutoridadMesa: "¿Fue autoridad de mesa?",
        RealizoCapacitacion: "¿Realizo capacitacion?",
        EstaAfiliado: "¿Esta afiliado?"
    };

    let resumen = "Revisa los datos de tu inscripcion:\n\n";

    for (const [campo, valor] of datos.entries()) {
        let nombre = nombresCampos[campo] || campo;

        let respuesta = valor;

        if (valor === "true") {
            respuesta = "Si";
        } else if (valor === "false") {
            respuesta = "No";
        }

        resumen += nombre + ": " + respuesta + "\n";
    }

    resumen += "\n¿Los datos son correctos?";

    // Primera ventana: revisar y confirmar.
    const confirmar = window.confirm(resumen);

    if (confirmar) {
        // Segunda ventana: inscripción confirmada.
        window.alert(
            "¡Inscripcion confirmada!\n\n" +
            "Tu inscripcion fue registrada correctamente."
        );

        formulario.reset();
    } else {
        // La persona puede volver al formulario y corregir.
        window.alert(
            "La inscripcion no fue confirmada.\n" +
            "Podes revisar y corregir tus datos."
        );
    }
});