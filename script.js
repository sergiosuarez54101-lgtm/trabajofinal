// Muestra la calculadora de IMC
function mostrarCalculadora(){

    // Busca la calculadora
    const calculadora = document.querySelector(".calculadora");

    // Muestra la calculadora
    calculadora.style.display = "block";

    // Lleva la pantalla hasta la calculadora
    calculadora.scrollIntoView({
        behavior: "smooth"
    });

}


// Calcula el IMC
function calcularIMC(){

    // Obtiene el peso
    const peso = document.getElementById("peso").value;

    // Obtiene la estatura
    const estatura = document.getElementById("estatura").value;

    // Comprueba que los campos no estén vacíos
    if(peso === "" || estatura === ""){

        alert("Por favor, ingresa tu peso y tu estatura.");

        return;

    }

    // Convierte la estatura a metros
    const estaturaMetros = estatura / 100;

    // Calcula el IMC
    const imc = peso / (estaturaMetros * estaturaMetros);

    // Busca el espacio del resultado
    const resultado = document.getElementById("resultadoIMC");

    // Determina el estado del IMC
    let estado;

    if(imc < 18.5){

        estado = "Bajo peso";

    }else if(imc < 25){

        estado = "Peso normal";

    }else if(imc < 30){

        estado = "Sobrepeso";

    }else{

        estado = "Obesidad";

    }

    // Muestra el resultado
    resultado.innerHTML = `

        <h3>Tu IMC es: ${imc.toFixed(2)}</h3>

        <p>Estado: ${estado}</p>

    `;

}


// Muestra la calculadora de agua
function mostrarAgua(){

    // Busca la calculadora de agua
    const calculadora = document.querySelector(".calculadoraAgua");

    // Muestra la calculadora
    calculadora.style.display = "block";

    // Lleva la pantalla hasta la calculadora
    calculadora.scrollIntoView({
        behavior: "smooth"
    });

}


// Calcula el consumo de agua
function calcularAgua(){

    // Obtiene el peso
    const peso = document.getElementById("pesoAgua").value;

    // Comprueba que el campo no esté vacío
    if(peso === ""){

        alert("Por favor, ingresa tu peso.");

        return;

    }

    // Calcula el agua recomendada
    const agua = peso * 35;

    // Convierte los mililitros a litros
    const litros = agua / 1000;

    // Busca el espacio del resultado
    const resultado = document.getElementById("resultadoAgua");

    // Muestra el resultado
    resultado.innerHTML = `

        <h3>Tu consumo recomendado es:</h3>

        <p>${litros.toFixed(2)} litros de agua al día</p>

    `;

}