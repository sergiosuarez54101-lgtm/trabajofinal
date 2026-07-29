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


// Lleva al usuario a las herramientas
function irAHerramientas(){

    // Busca la sección de herramientas
    const herramientas = document.getElementById("herramientas");

    // Lleva la pantalla hasta las herramientas
    herramientas.scrollIntoView({
        behavior: "smooth"
    });

}


// Muestra la sección de alimentos
function mostrarAlimentos(){

    // Busca la sección de alimentos
    const alimentos = document.getElementById("alimentos");

    // Lleva la pantalla hasta los alimentos
    alimentos.scrollIntoView({
        behavior: "smooth"
    });

}


// Busca un alimento en la API
async function buscarAlimento(){

    // Obtiene el nombre del alimento
    const alimento = document.getElementById("alimento").value.trim();

    // Busca el espacio del resultado
    const resultado = document.getElementById("resultadoNutricional");

    // Comprueba que exista un alimento
    if(alimento === ""){

        alert("Por favor, escribe un alimento.");

        return;

    }

    // Muestra mensaje mientras busca
    resultado.innerHTML = `

        <h3>Buscando información...</h3>

        <p>Espera un momento.</p>

    `;

    try{

        // Consulta la API de FoodData Central
        const respuesta = await fetch(
            `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${encodeURIComponent(alimento)}&pageSize=1`
        );

        // Comprueba que la respuesta sea correcta
        if(!respuesta.ok){

            throw new Error("No se pudo consultar la API.");

        }

        // Convierte la respuesta a JSON
        const datos = await respuesta.json();

        // Comprueba que exista un alimento
        if(!datos.foods || datos.foods.length === 0){

            resultado.innerHTML = `

                <h3>No encontramos el alimento</h3>

                <p>Intenta con otro nombre.</p>

            `;

            return;

        }

        // Obtiene el primer alimento encontrado
        const comida = datos.foods[0];

        // Busca los nutrientes
        const nutrientes = comida.foodNutrients || [];

        // Obtiene las calorías
        const calorias = obtenerNutriente(
            nutrientes,
            "Energy"
        );

        // Obtiene la proteína
        const proteina = obtenerNutriente(
            nutrientes,
            "Protein"
        );

        // Obtiene los carbohidratos
        const carbohidratos = obtenerNutriente(
            nutrientes,
            "Carbohydrate, by difference"
        );

        // Obtiene las grasas
        const grasas = obtenerNutriente(
            nutrientes,
            "Total lipid (fat)"
        );

        // Obtiene la fibra
        const fibra = obtenerNutriente(
            nutrientes,
            "Fiber, total dietary"
        );

        // Obtiene los azúcares
        const azucar = obtenerNutriente(
            nutrientes,
            "Sugars, total including NLEA"
        );

        // Muestra la información
        resultado.innerHTML = `

            <h3>${comida.description}</h3>

            <p>Información nutricional aproximada por 100 g:</p>

            <ul>

                <li>
                    <strong>Calorías:</strong>
                    ${calorias} kcal
                </li>

                <li>
                    <strong>Proteína:</strong>
                    ${proteina} g
                </li>

                <li>
                    <strong>Carbohidratos:</strong>
                    ${carbohidratos} g
                </li>

                <li>
                    <strong>Grasas:</strong>
                    ${grasas} g
                </li>

                <li>
                    <strong>Fibra:</strong>
                    ${fibra} g
                </li>

                <li>
                    <strong>Azúcares:</strong>
                    ${azucar} g
                </li>

            </ul>

            <p>
                Fuente: USDA FoodData Central
            </p>

        `;

    }catch(error){

        // Muestra un mensaje si ocurre un error
        resultado.innerHTML = `

            <h3>No se pudo obtener la información</h3>

            <p>
                Revisa tu conexión a internet e inténtalo nuevamente.
            </p>

        `;

        console.error(error);

    }

}


// Busca un nutriente específico
function obtenerNutriente(nutrientes, nombre){

    // Busca el nutriente
    const nutriente = nutrientes.find(
        item => item.nutrientName === nombre
    );

    // Devuelve el valor encontrado
    if(nutriente){

        return Number(nutriente.value).toFixed(2);

    }

    // Devuelve cero si no existe
    return "0.00";

}