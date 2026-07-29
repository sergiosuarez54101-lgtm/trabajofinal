// modificacion :D

// Muestra la sección de la calculadora de IMC
function mostrarCalculadora() {

    // Busca la calculadora por su clase
    const calculadora = document.querySelector(".calculadora");

    // Muestra la calculadora en pantalla
    calculadora.style.display = "block";

    // Lleva la pantalla hasta la calculadora
    calculadora.scrollIntoView({
        behavior: "smooth"
    });

}


// Calcula el índice de masa corporal
function calcularIMC() {

    // Obtiene el peso que escribió el usuario
    const peso = document.getElementById("peso").value;

    // Obtiene la estatura que escribió el usuario
    const estatura = document.getElementById("estatura").value;

    // Comprueba que los campos tengan información
    if (peso === "" || estatura === "") {

        alert("Por favor, ingresa tu peso y tu estatura.");

        return;
    }


    // Convierte la estatura de centímetros a metros
    const estaturaMetros = estatura / 100;


    // Calcula el IMC
    const imc = peso / (estaturaMetros * estaturaMetros);


    // Busca el espacio donde se mostrará el resultado
    const resultado = document.getElementById("resultadoIMC");


    // Determina el estado según el resultado del IMC
    let estado;


    if (imc < 18.5) {

        estado = "Bajo peso";

    } else if (imc < 25) {

        estado = "Peso normal";

    } else if (imc < 30) {

        estado = "Sobrepeso";

    } else {

        estado = "Obesidad";

    }


    // Muestra el resultado en la página
    resultado.innerHTML = `

        <h3>Tu IMC es: ${imc.toFixed(2)}</h3>

        <p>Estado: ${estado}</p>

    `;

}