

const residuos = [

    // NIVEL 1
    {
        nombre: "Cáscara de banana",
        icono: "🍌",
        tipo: "organico",
        informacion: "La cáscara de banana es un residuo orgánico porque proviene de una planta y se descompone naturalmente.",
        importancia: "Puede utilizarse para hacer compost y devolver nutrientes al suelo."
    },

    {
        nombre: "Manzana",
        icono: "🍎",
        tipo: "organico",
        informacion: "Los restos de manzana son residuos orgánicos que se descomponen de forma natural.",
        importancia: "Pueden convertirse en compost y ayudar a reducir la cantidad de residuos que llegan al basural."
    },

    {
        nombre: "Naranja",
        icono: "🍊",
        tipo: "organico",
        informacion: "La cáscara y los restos de naranja son residuos orgánicos.",
        importancia: "Pueden aprovecharse para hacer compost y aportar materia orgánica al suelo."
    },

    {
        nombre: "Hojas",
        icono: "🍂",
        tipo: "organico",
        informacion: "Las hojas caídas son residuos orgánicos provenientes de las plantas.",
        importancia: "Son excelentes para el compost y ayudan a enriquecer el suelo."
    },

    {
        nombre: "Yerba usada",
        icono: "🧉",
        tipo: "organico",
        informacion: "La yerba usada es un residuo orgánico que proviene de una planta.",
        importancia: "Puede incorporarse al compost y ayudar a generar abono natural."
    },

    {
        nombre: "Botella de plástico",
        icono: "🧴",
        tipo: "inorganico",
        informacion: "Las botellas de plástico pueden tardar muchísimo tiempo en degradarse.",
        importancia: "Separarlas permite recuperar el plástico y transformarlo en nuevos productos."
    },

    {
        nombre: "Lata",
        icono: "🥫",
        tipo: "inorganico",
        informacion: "Las latas están fabricadas principalmente con metales como aluminio o acero.",
        importancia: "El metal puede reciclarse y utilizarse nuevamente, evitando extraer nuevos recursos."
    },

    {
        nombre: "Caja de cartón",
        icono: "📦",
        tipo: "inorganico",
        informacion: "El cartón está formado por fibras de papel provenientes principalmente de la madera.",
        importancia: "Si está limpio y seco, puede reciclarse para fabricar nuevos productos de papel y cartón."
    },

    {
        nombre: "Botella de vidrio",
        icono: "🍾",
        tipo: "inorganico",
        informacion: "El vidrio se fabrica principalmente a partir de arena y otros minerales.",
        importancia: "Puede reciclarse muchas veces sin perder sus propiedades."
    },

    {
        nombre: "Papel",
        icono: "📄",
        tipo: "inorganico",
        informacion: "El papel está compuesto principalmente por fibras de celulosa.",
        importancia: "Separarlo correctamente permite reciclarlo y reducir el consumo de materias primas."
    },


    // NIVEL 2
    {
        nombre: "Cáscara de huevo",
        icono: "🥚",
        tipo: "organico",
        informacion: "La cáscara de huevo es un residuo de origen natural y puede descomponerse.",
        importancia: "Puede incorporarse al compost y aportar minerales al suelo."
    },

    {
        nombre: "Restos de comida",
        icono: "🍽️",
        tipo: "organico",
        informacion: "Los restos de frutas, verduras y otros alimentos son residuos orgánicos.",
        importancia: "Pueden aprovecharse para producir compost en lugar de terminar en un basural."
    },

    {
        nombre: "Pan viejo",
        icono: "🍞",
        tipo: "organico",
        informacion: "El pan que ya no se puede consumir es un residuo orgánico.",
        importancia: "Puede compostarse y convertirse en materia orgánica para el suelo."
    },

    {
        nombre: "Tomate",
        icono: "🍅",
        tipo: "organico",
        informacion: "Los restos de tomate son residuos orgánicos de origen vegetal.",
        importancia: "Pueden descomponerse y utilizarse para producir compost."
    },

    {
        nombre: "Lechuga",
        icono: "🥬",
        tipo: "organico",
        informacion: "Las hojas y restos de lechuga son residuos orgánicos.",
        importancia: "Pueden convertirse en compost y aportar nutrientes al suelo."
    },

    {
        nombre: "Diario",
        icono: "📰",
        tipo: "inorganico",
        informacion: "Los diarios están hechos principalmente de papel.",
        importancia: "Cuando están limpios y secos pueden reciclarse para fabricar nuevos productos de papel."
    },

    {
        nombre: "Revista",
        icono: "📚",
        tipo: "inorganico",
        informacion: "Las revistas están hechas principalmente de papel y pueden contener tintas y otros materiales.",
        importancia: "Separarlas permite recuperar materiales que pueden volver al circuito de reciclaje."
    },

    {
        nombre: "Envase de shampoo",
        icono: "🧴",
        tipo: "inorganico",
        informacion: "Los envases de shampoo suelen estar fabricados con plástico.",
        importancia: "Separarlos correctamente permite recuperar el plástico y reducir los residuos."
    },

    {
        nombre: "Lata de gaseosa",
        icono: "🥤",
        tipo: "inorganico",
        informacion: "Las latas de gaseosa suelen estar fabricadas de aluminio.",
        importancia: "El aluminio puede reciclarse y volver a utilizarse para fabricar nuevos productos."
    },

    {
        nombre: "Frasco de vidrio",
        icono: "🏺",
        tipo: "inorganico",
        informacion: "Los frascos de vidrio pueden utilizarse para conservar alimentos y otros productos.",
        importancia: "El vidrio puede reutilizarse y reciclarse muchas veces."
    },


    // NIVEL 3
    {
        nombre: "Sandía",
        icono: "🍉",
        tipo: "organico",
        informacion: "Los restos y la cáscara de sandía son residuos orgánicos de origen vegetal.",
        importancia: "Pueden aprovecharse para hacer compost y reducir los residuos."
    },

    {
        nombre: "Durazno",
        icono: "🍑",
        tipo: "organico",
        informacion: "Los restos de durazno son residuos orgánicos que provienen de una planta.",
        importancia: "Pueden descomponerse y formar parte de un compost."
    },

    {
        nombre: "Papa",
        icono: "🥔",
        tipo: "organico",
        informacion: "La papa y sus cáscaras son residuos orgánicos de origen vegetal.",
        importancia: "Pueden aprovecharse para producir compost y nutrientes para el suelo."
    },

    {
        nombre: "Zanahoria",
        icono: "🥕",
        tipo: "organico",
        informacion: "Los restos y las cáscaras de zanahoria son residuos orgánicos.",
        importancia: "Pueden descomponerse naturalmente y utilizarse para hacer compost."
    },

    {
        nombre: "Pepino",
        icono: "🥒",
        tipo: "organico",
        informacion: "Los restos de pepino son residuos orgánicos de origen vegetal.",
        importancia: "Pueden incorporarse al compost y ayudar a generar abono natural."
    },

    {
        nombre: "Botella de detergente",
        icono: "🧴",
        tipo: "inorganico",
        informacion: "Las botellas de detergente suelen estar fabricadas con plástico.",
        importancia: "Separarlas permite recuperar el material y disminuir la cantidad de plástico descartado."
    },

    {
        nombre: "Caja de cereal",
        icono: "📦",
        tipo: "inorganico",
        informacion: "Las cajas de cereal generalmente están hechas de cartón.",
        importancia: "Si están limpias y secas, pueden reciclarse para fabricar nuevos productos."
    },

    {
        nombre: "Lata de atún",
        icono: "🥫",
        tipo: "inorganico",
        informacion: "Las latas de atún suelen estar fabricadas de acero u otros metales.",
        importancia: "El metal puede recuperarse mediante el reciclaje y utilizarse nuevamente."
    },

    {
        nombre: "Botella de agua",
        icono: "💧",
        tipo: "inorganico",
        informacion: "Las botellas de agua descartables suelen estar fabricadas con plástico.",
        importancia: "Separarlas permite reciclar el plástico y reducir su impacto en el ambiente."
    },

    {
        nombre: "Cartón",
        icono: "📦",
        tipo: "inorganico",
        informacion: "El cartón está compuesto principalmente por fibras de celulosa.",
        importancia: "Puede reciclarse y convertirse en nuevos envases y productos de papel."
    }
];