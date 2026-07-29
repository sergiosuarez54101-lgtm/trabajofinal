/* Muestra la sección de herramientas */

function mostrarHerramientas(){

    document.querySelector(".herramientas").scrollIntoView({

        behavior: "smooth"

    });

}


/* Muestra la calculadora de IMC */

function mostrarCalculadora(){

    document.querySelector(".calculadora").scrollIntoView({

        behavior: "smooth"

    });

}


/* Muestra la calculadora de agua */

function mostrarAgua(){

    document.querySelector(".calculadoraAgua").scrollIntoView({

        behavior: "smooth"

    });

}


/* Muestra la calculadora de calorías */

function mostrarCalorias(){

    document.querySelector(".calculadoraCalorias").scrollIntoView({

        behavior: "smooth"

    });

}


/* Muestra la información de alimentos */

function mostrarAlimentos(){

    document.querySelector(".alimentos").scrollIntoView({

        behavior: "smooth"

    });

}





/* Calculadora de IMC */

function calcularIMC(){

    /* Obtiene el peso ingresado */

    let peso = parseFloat(document.getElementById("peso").value);


    /* Obtiene la estatura ingresada */

    let estatura = parseFloat(document.getElementById("estatura").value);


    /* Espacio donde aparecerá el resultado */

    let resultado = document.getElementById("resultadoIMC");


    /* Verifica que los datos sean correctos */

    if(
        isNaN(peso) ||
        isNaN(estatura) ||
        peso <= 0 ||
        estatura <= 0
    ){

        resultado.innerHTML = `

            <h3>
                Datos incorrectos
            </h3>

            <p>
                Ingresa un peso y una estatura válidos.
            </p>

        `;

        return;

    }


    /* Convierte la estatura de centímetros a metros */

    let estaturaMetros = estatura / 100;


    /* Calcula el IMC */

    let imc = peso / (estaturaMetros * estaturaMetros);


    /* Variable para guardar la clasificación */

    let categoria;


    /* Determina la clasificación del IMC */

    if(imc < 18.5){

        categoria = "Bajo peso";

    }

    else if(imc < 25){

        categoria = "Peso normal";

    }

    else if(imc < 30){

        categoria = "Sobrepeso";

    }

    else{

        categoria = "Obesidad";

    }


    /* Muestra el resultado */

    resultado.innerHTML = `

        <h3>
            Resultado del IMC
        </h3>

        <p>
            Tu IMC es:
            <strong>${imc.toFixed(2)}</strong>
        </p>

        <p>
            Clasificación:
            <strong>${categoria}</strong>
        </p>

    `;

}





/* Calculadora de agua */

function calcularAgua(){

    /* Obtiene el peso */

    let peso = parseFloat(document.getElementById("pesoAgua").value);


    /* Espacio donde aparecerá el resultado */

    let resultado = document.getElementById("resultadoAgua");


    /* Verifica que el peso sea válido */

    if(isNaN(peso) || peso <= 0){

        resultado.innerHTML = `

            <h3>
                Dato incorrecto
            </h3>

            <p>
                Ingresa un peso válido.
            </p>

        `;

        return;

    }


    /* Calcula la cantidad aproximada de agua */

    let aguaMililitros = peso * 35;


    /* Convierte los mililitros a litros */

    let aguaLitros = aguaMililitros / 1000;


    /* Muestra el resultado */

    resultado.innerHTML = `

        <h3>
            Recomendación diaria
        </h3>

        <p>
            Debes consumir aproximadamente
            <strong>${aguaLitros.toFixed(2)} litros</strong>
            de agua al día.
        </p>

        <p>
            Esto equivale aproximadamente a
            <strong>${aguaMililitros.toFixed(0)} ml</strong>.
        </p>

    `;

}





/* Calculadora de calorías */

function calcularCalorias(){

    /* Obtiene el peso */

    let peso = parseFloat(
        document.getElementById("pesoCalorias").value
    );


    /* Obtiene la estatura */

    let estatura = parseFloat(
        document.getElementById("estaturaCalorias").value
    );


    /* Obtiene la edad */

    let edad = parseFloat(
        document.getElementById("edadCalorias").value
    );


    /* Obtiene el sexo */

    let sexo = document.getElementById("sexoCalorias").value;


    /* Obtiene el nivel de actividad */

    let actividad = parseFloat(
        document.getElementById("actividadCalorias").value
    );


    /* Espacio donde aparecerá el resultado */

    let resultado = document.getElementById("resultadoCalorias");


    /* Verifica que todos los datos sean válidos */

    if(
        isNaN(peso) ||
        isNaN(estatura) ||
        isNaN(edad) ||
        peso <= 0 ||
        estatura <= 0 ||
        edad <= 0
    ){

        resultado.innerHTML = `

            <h3>
                Datos incorrectos
            </h3>

            <p>
                Ingresa todos los datos correctamente.
            </p>

        `;

        return;

    }


    /* Variable para almacenar el metabolismo basal */

    let metabolismoBasal;


    /* Calcula el metabolismo basal dependiendo del sexo */

    if(sexo === "hombre"){

        metabolismoBasal =
            (10 * peso) +
            (6.25 * estatura) -
            (5 * edad) +
            5;

    }

    else{

        metabolismoBasal =
            (10 * peso) +
            (6.25 * estatura) -
            (5 * edad) -
            161;

    }


    /* Calcula las calorías diarias */

    let caloriasDiarias =
        metabolismoBasal * actividad;


    /* Calcula valores aproximados para diferentes objetivos */

    let bajarPeso =
        caloriasDiarias - 300;

    let subirPeso =
        caloriasDiarias + 300;


    /* Muestra el resultado */

    resultado.innerHTML = `

        <h3>
            Resultado de calorías
        </h3>

        <p>
            Metabolismo basal:
            <strong>${metabolismoBasal.toFixed(0)} kcal</strong>
        </p>

        <p>
            Calorías diarias estimadas:
            <strong>${caloriasDiarias.toFixed(0)} kcal</strong>
        </p>

        <p>
            Estimación para reducir peso:
            <strong>${bajarPeso.toFixed(0)} kcal</strong>
        </p>

        <p>
            Estimación para aumentar peso:
            <strong>${subirPeso.toFixed(0)} kcal</strong>
        </p>

        <p>
            Los valores son estimaciones y pueden variar según las características de cada persona.
        </p>

    `;

}





/* Buscar información nutricional */

async function buscarAlimento(){

    /* Obtiene el alimento escrito por el usuario */

    let alimento =
        document.getElementById("busquedaAlimento").value.trim();


    /* Espacio donde aparecerá el resultado */

    let resultado =
        document.getElementById("resultadoAlimento");


    /* Verifica que el campo no esté vacío */

    if(alimento === ""){

        resultado.innerHTML = `

            <h3>
                Campo vacío
            </h3>

            <p>
                Escribe un alimento para realizar la búsqueda.
            </p>

        `;

        return;

    }


    /* Muestra mensaje mientras se consulta la API */

    resultado.innerHTML = `

        <h3>
            Buscando alimento
        </h3>

        <p>
            Consultando información nutricional...
        </p>

    `;


    try{

        /* URL de la API de Open Food Facts */

        let url =
            "https://world.openfoodfacts.org/cgi/search.pl" +
            "?search_terms=" +
            encodeURIComponent(alimento) +
            "&search_simple=1" +
            "&action=process" +
            "&json=1" +
            "&page_size=1";


        /* Realiza la petición a la API */

        let respuesta = await fetch(url);


        /* Verifica si la respuesta fue correcta */

        if(!respuesta.ok){

            throw new Error("No se pudo conectar con la API.");

        }


        /* Convierte la respuesta a JSON */

        let datos = await respuesta.json();


        /* Verifica si encontró productos */

        if(
            !datos.products ||
            datos.products.length === 0
        ){

            resultado.innerHTML = `

                <h3>
                    Alimento no encontrado
                </h3>

                <p>
                    No encontramos información para "${alimento}".
                </p>

            `;

            return;

        }


        /* Obtiene el primer producto encontrado */

        let producto = datos.products[0];


        /* Obtiene la información nutricional */

        let nutrimentos = producto.nutriments || {};


        /* Nombre del producto */

        let nombre =
            producto.product_name ||
            alimento;


        /* Marca del producto */

        let marca =
            producto.brands ||
            "No especificada";


        /* Calorías */

        let calorias =
            nutrimentos["energy-kcal_100g"] ??
            nutrimentos["energy-kcal"];


        /* Proteínas */

        let proteinas =
            nutrimentos["proteins_100g"] ??
            nutrimentos["proteins"];


        /* Carbohidratos */

        let carbohidratos =
            nutrimentos["carbohydrates_100g"] ??
            nutrimentos["carbohydrates"];


        /* Grasas */

        let grasas =
            nutrimentos["fat_100g"] ??
            nutrimentos["fat"];


        /* Azúcares */

        let azucares =
            nutrimentos["sugars_100g"] ??
            nutrimentos["sugars"];


        /* Sal */

        let sal =
            nutrimentos["salt_100g"] ??
            nutrimentos["salt"];


        /* Obtiene la imagen del producto */

        let imagen =
            producto.image_front_small_url ||
            producto.image_front_url;


        /* Muestra la información */

        resultado.innerHTML = `

            <h3>
                ${nombre}
            </h3>

            <div class="informacionProducto">

                <p>
                    <strong>Marca:</strong>
                    ${marca}
                </p>

            </div>

            ${
                imagen
                ?
                `
                <img
                    src="${imagen}"
                    alt="Imagen de ${nombre}"
                    class="imagenAlimento"
                >
                `
                :
                ""
            }

            <div class="tablaNutricional">

                <div class="nutriente">

                    <span>
                        Calorías
                    </span>

                    <strong>
                        ${formatearDato(calorias)} kcal
                    </strong>

                </div>


                <div class="nutriente">

                    <span>
                        Proteínas
                    </span>

                    <strong>
                        ${formatearDato(proteinas)} g
                    </strong>

                </div>


                <div class="nutriente">

                    <span>
                        Carbohidratos
                    </span>

                    <strong>
                        ${formatearDato(carbohidratos)} g
                    </strong>

                </div>


                <div class="nutriente">

                    <span>
                        Grasas
                    </span>

                    <strong>
                        ${formatearDato(grasas)} g
                    </strong>

                </div>


                <div class="nutriente">

                    <span>
                        Azúcares
                    </span>

                    <strong>
                        ${formatearDato(azucares)} g
                    </strong>

                </div>


                <div class="nutriente">

                    <span>
                        Sal
                    </span>

                    <strong>
                        ${formatearDato(sal)} g
                    </strong>

                </div>

            </div>


            <p class="referenciaNutricional">

                Valores aproximados por cada 100 g del producto.

            </p>

        `;

    }


    catch(error){

        /* Muestra el error en la consola */

        console.error(error);


        /* Mensaje para el usuario */

        resultado.innerHTML = `

            <h3>
                Error de conexión
            </h3>

            <p>
                No fue posible consultar la información nutricional.
            </p>

        `;

    }

}





/* Formatea los datos nutricionales */

function formatearDato(valor){

    /* Si no existe el dato */

    if(
        valor === undefined ||
        valor === null ||
        valor === ""
    ){

        return "No disponible";

    }


    /* Convierte el valor a número */

    let numero = Number(valor);


    /* Verifica que sea un número */

    if(isNaN(numero)){

        return "No disponible";

    }


    /* Devuelve el número con un decimal */

    return numero.toFixed(1);

}