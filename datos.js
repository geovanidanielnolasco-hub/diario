// ========================================
// DATOS DEL DIARIO DE AMOR
// ========================================

// ========================================
// 📸 GLOSARIO DE FOTOS Y MULTIMEDIA
// ========================================
//
// Aquí defines tus fotos/videos UNA SOLA VEZ
// Luego solo usas foto1, foto2, etc. en tus entradas
//
// ¡OPCIONES DISPONIBLES!
//
// 1. FOTO LOCAL (en carpeta images/):
//    foto1: 'images/mi-foto.jpg'
//
// 2. URL DE IMAGEN EXTERNA:
//    foto2: 'https://i.imgur.com/abc123.jpg'
//
// 3. VIDEO DE YOUTUBE:
//    foto3: 'https://www.youtube.com/watch?v=abc123'
//    foto4: 'https://youtu.be/abc123'
//
// 4. SIN FOTO (solo placeholder):
//    foto5: null   o   foto5: ''
//
// 5. IMAGEN GENÉRICA (se repite en varios días):
//    foto6: 'images/imagen-generica-amor.png'
//
const fotosGlosario = {
    // Tus fotos reales (INVERTIDAS - ahora correctas)
    foto1: 'images/dia2.jpeg',  // Esta era la que estaba en dia2
    foto2: 'images/dia1.jpeg',  // Esta era la que estaba en dia1

    // Imagen para el día 3
    foto3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgBEqKn2i6COeKNV6QUvx04MJJh1pkmavTQ&s',

    // Imagen de Coraline para el día 4
    coraline: 'https://play-lh.googleusercontent.com/1MVSxuCvyppMOAMToGiaAy_YHIzlzXe13VKpUzNAzOOY69KS8tulON2stN7_I6FczLzVeuND7PzKBlLK6Q=s1280-w1280-h720',

    // Agrega más fotos aquí según las necesites:
    // foto5: 'images/dia5.jpeg',
    // foto6: 'https://ejemplo.com/imagen.jpg',

    // También puedes usar videos de YouTube:
    // video1: 'https://www.youtube.com/watch?v=abc123',

    // Para días sin foto, usa: photo: null

    // ... y así sucesivamente
};

// ========================================
// 💕 ENTRADAS DEL DIARIO
// ========================================
//
// Formato de cada entrada:
// {
//     day: número del día (1, 2, 3, etc.),
//     date: fecha en formato 'YYYY-MM-DD',
//     caption: texto corto que aparece en el polaroid,
//     text: tu entrada de diario (puede ser tan larga como quieras),
//     photo: usa 'foto1', 'foto2', etc. del glosario de arriba
// }
//
// ========================================

const diaryEntries = [
    {
        day: 1,
        date: '2026-01-09',
        caption: 'El inicio de nuestra historia',
        text: `Hola mi amor, hoy comenzamos esta historia de amor. Quiero decirte que estaba muy nervioso porque no sabía qué pasaría. Si te soy sincero, me súper emocioné por este día y disfruté mucho preparar todo.

La verdad me disculpo porque no estaba la cena lista a tiempo, pero la verdad me da gusto que te haya gustado. Por otro lado, te agradezco infinitamente por este día porque la verdad fue un día especial y de verdad amor, como te dije ese día, es una oportunidad que no pienso desperdiciar en nada.

Eres la persona más maravillosa del mundo y deseo con todo el corazón que estemos juntos siempre porque la verdad yo creo que el para siempre sí existe.`,
        photo: 'foto1'
    },
    {
        day: 2,
        date: '2026-01-10',
        caption: 'Nuestro segundo día',
        text: `Hola amor, la verdad este día comenzó súper temprano porque nos dormimos muy temprano jaja. Mi amor, este es el día dos, cenamos y vimos una peli la neta sí bien buena, luego nos acostamos y al siguiente día agarramos camino.

¿Te acuerdas que manejas muy bien? Me encanta mi amor. Llegamos y comimos rosquita y jaja ay cielo, diste más vueltas que una pirinola. Nunca te había visto batallar tanto para dormir.

En fin mi amor, este es el resumen del día. ¡Eres increíble!`,
        photo: 'foto2'
    },
    {
        day: 3,
        date: '2026-01-11',
        caption: 'Estableciendo nuestras bases',
        text: `Hola bebé, este día fue diría interesante, pero en resumen se establecieron las reglas para que todo esto funcione. De verdad tengo muchos deseos de que seamos felices juntos, deseo y anhelo que cada día que pase estemos juntos por siempre.

Gracias porque la verdad eres lo mejor del mundo y como te dije no te vas a arrepentir, yo deseo que estemos bien, cumplamos nuestros sueños, nuestras metas pero poder estar ahí para vértelas cumplir.

Eres 1 en 3 billones de personas. ¡Eres única!`,
        photo: 'foto3'
    },
    {
        day: 4,
        date: '2026-01-12',
        caption: 'Un día sin internet',
        text: `Hola mi amor, la verdad hoy había escrito algo porque pensé que íbamos a jugar pero qué crees, estaba bien gacha tu internet y ya no jugamos, ahora se complicó y ya nos vamos a dormir.

No olvides que eres lo más importante para mí y que estoy muy agradecido por todo lo que haces por mí.`,
        photo: 'coraline'  // Imagen de Coraline
    },
    {
        day: 5,
        date: '2026-01-13',
        caption: 'Noticias del trabajo',
        text: `Hola mi amor, ¿cómo estás? Hoy te fuiste muy temprano a la escuela pero me da gusto saber que te fue bien, espero que hoy sí podamos jugar.

Hoy me dijeron que trabajaré hasta el 30, bueno no como tal pero sí me lo mencionaron, me puse muy nervioso pero gracias por darme palabras de ánimo, sin duda eres la mejor del mundo.`,
        photo: null
    },
    {
        day: 6,
        date: '2026-01-14',
        caption: 'Te extraño mucho',
        text: `Hola mi amor, hoy es un día en el que en verdad te extraño como no tienes idea, quiero correr e ir a verte pero no quiero interrumpir tus actividades pero debes saber que te extraño mucho. Hoy fue un día interesante, me confirmaron que me voy el 30, compramos la iPad en gris, yo creo que el viernes llega y estrenaremos iPad. También vendí la tablet hoy, se la llevó Toño. Hoy jugué con Cris unas partidas de ajedrez, me di el tiempo cuando comprábamos la iPad.

Cierto, hoy hice mi primera tinga y el día de ayer nos desvelamos jugando un jueguito de peleas, estuvo bien divertido porque eres buena matando jaja. A cierto, olvidé lo más divertido de hoy, mi novia me marcó desde el baño reclamándome que le había llevado el gritón jaja, casi termino bloqueado y no fui yo.

En fin amor, hasta aquí mi reporte del día de hoy. Besitos mi niña, gracias por permitirme estar a tu lado.`,
        photo: null
    },
    {
        day: 7,
        date: '2026-01-15',
        caption: 'Ya tengo tu iPad',
        text: `Hola mi amor, hoy fue un día interesante. Toño ya me pagó la tablet y yo ya tengo tu iPad, mañana a estas horas ya deberíamos estar viéndola y tú sacando el remojo jaja.

Ay amor, hoy fue un día en el que no hice casi nada, me dediqué full a avanzar con la empresa y los pendientes. Hoy toca esperar que sea madrugada para tratar de firmar la empresa, ojalá funcione. En fin amor, hasta hoy me duró la tinga.

Supongo que hoy también tocará desvelarse para acabar con esas páginas, hoy hiciste 6 en la mañana.

Por cierto mi amor, nos desvelamos jugando otra vez valitas, estuvo súper divertido. Te dormiste a las 2, no podías dormir, te pasas.

Bueno mi amor, hasta aquí mi reporte, besitos hermosa.`,
        photo: null
    },
    {
        day: 8,
        date: '2026-01-16',
        caption: 'Sushi en La Paz',
        text: `Hola mi amor, hoy fue viernes, el último de la semana. Fue un día bastante divertido, tuvimos que regresar a Puebla porque se me olvidó la iPad. A verdad no la abrimos el viernes, pero sí estuvo súper chido porque fuimos a un sushi en La Paz súper buenísimo, el top pero carito de París jaja, pero valió mucho la experiencia.

Me encanta verte y estar contigo, gracias por todo.`,
        photo: null
    },
    {
        day: 9,
        date: '2026-01-17',
        caption: 'Fiesta y desveladas',
        text: `Hola amor, hoy estuvo súper bueno, nos levantamos tarde y de ahí nos fuimos a una fiesta de una prima tuya. No ma, estuvo súper buena aunque al final me puse celosito, es que o sea sí aguanto pero a veces no jaja, es que eres mi princesa y me da miedito pero no me lo tomes a mal, sé que eres la persona más confiable del mundo.

Por cierto, hoy estuvo uffff, ya sabes a qué me refiero jaja. Gracias por estas desveladas de risas, momentos y abrazos.`,
        photo: null
    },
    // ========================================
    // AGREGAR MÁS DÍAS AQUÍ
    // ========================================
    //
    // Copia y pega este formato para agregar más días:
    /*
    {
        day: 4,
        date: '2026-01-12',
        caption: 'Cuarto día mágico',
        text: `Tu texto aquí...

        Puedes escribir varias líneas
        y será muy bonito`,
        photo: 'foto4'  // Foto local del glosario
    },
    {
        day: 5,
        date: '2025-01-13',
        caption: 'Día sin foto',
        text: `Hoy no nos vimos pero pienso en ti...`,
        photo: null  // Sin foto = aparece corazón placeholder
    },
    {
        day: 6,
        date: '2025-01-14',
        caption: 'Video especial',
        text: `Mira este video que me recordó a nosotros...`,
        photo: 'foto5'  // Video de YouTube del glosario
    },
    {
        day: 7,
        date: '2025-01-15',
        caption: 'Imagen de internet',
        text: `Encontré esta imagen hermosa...`,
        photo: 'foto6'  // URL externa del glosario
    },
    */
    //
    // OPCIONES PARA "photo":
    // 1. 'foto1' = Foto del glosario (local, URL o video)
    // 2. null = Sin foto (muestra placeholder con corazón)
    // 3. '' = Sin foto (muestra placeholder con corazón)
    //
    // RECUERDA:
    // 1. Primero agrega la foto al glosario arriba (fotosGlosario)
    // 2. Luego usa 'foto4', 'foto5', etc. aquí
    // 3. Pon una coma (,) después de cada entrada excepto la última
    //
    // ========================================
];

// ========================================
// NOTAS IMPORTANTES:
// ========================================
//
// 📸 OPCIONES PARA FOTOS/VIDEOS:
//
// ┌─────────────────────────────────────────────────────────┐
// │ 1. FOTO LOCAL (en carpeta images/)                     │
// ├─────────────────────────────────────────────────────────┤
// │   foto1: 'images/mi-foto.jpg',                          │
// │   photo: 'foto1'                                        │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ 2. URL DE IMAGEN EXTERNA (Imgur, Google Photos, etc.)  │
// ├─────────────────────────────────────────────────────────┤
// │   foto2: 'https://i.imgur.com/abc123.jpg',              │
// │   photo: 'foto2'                                        │
// │                                                         │
// │   Ejemplos de servicios:                                │
// │   • Imgur: https://i.imgur.com/abc123.jpg               │
// │   • Dropbox: https://dl.dropboxusercontent.com/...      │
// │   • Google Photos: (obtén link directo a imagen)        │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ 3. VIDEO DE YOUTUBE                                     │
// ├─────────────────────────────────────────────────────────┤
// │   foto3: 'https://www.youtube.com/watch?v=abc123',      │
// │   foto4: 'https://youtu.be/abc123',                     │
// │   photo: 'foto3'                                        │
// │                                                         │
// │   Ambos formatos funcionan:                             │
// │   • youtube.com/watch?v=...                             │
// │   • youtu.be/...                                        │
// └─────────────────────────────────────────────────────────┘
//
// ┌─────────────────────────────────────────────────────────┐
// │ 4. SIN FOTO (muestra placeholder con corazón)           │
// ├─────────────────────────────────────────────────────────┤
// │   photo: null                                           │
// │   photo: ''                                             │
// │                                                         │
// │   Ideal para días que no se vieron o sin foto          │
// └─────────────────────────────────────────────────────────┘
//
// ========================================
//
// 💡 VENTAJAS DEL SISTEMA:
//
// ✓ Fotos locales con nombres originales (NO renombrar)
// ✓ URLs de imágenes externas
// ✓ Videos de YouTube embebidos
// ✓ Placeholders automáticos cuando no hay foto
// ✓ Todo en un solo glosario fácil de mantener
// ✓ Cambiar contenido = editar solo el glosario
//
// ========================================
//
// 📋 EJEMPLOS COMPLETOS:
//
// ┌─────────────────────────────────────────────────────────┐
// │ EJEMPLO 1: Combinación de todo                         │
// └─────────────────────────────────────────────────────────┘
//
// const fotosGlosario = {
//     foto1: 'images/IMG_0001.jpg',                      // Local
//     foto2: 'https://i.imgur.com/abc123.jpg',           // URL
//     foto3: 'https://www.youtube.com/watch?v=abc123',   // Video
//     foto4: 'images/nuestra-cita.png',                  // Local
// };
//
// const diaryEntries = [
//     { day: 1, photo: 'foto1' },      // Muestra foto local
//     { day: 2, photo: 'foto2' },      // Muestra imagen de internet
//     { day: 3, photo: 'foto3' },      // Muestra video de YouTube
//     { day: 4, photo: null },         // Muestra placeholder
//     { day: 5, photo: 'foto4' },      // Muestra otra foto local
// ];
//
// ┌─────────────────────────────────────────────────────────┐
// │ EJEMPLO 2: Imagen genérica para varios días            │
// └─────────────────────────────────────────────────────────┘
//
// const fotosGlosario = {
//     fotoGenerica: 'images/corazon-generico.png',
//     foto1: 'images/dia-especial.jpg',
// };
//
// const diaryEntries = [
//     { day: 1, photo: 'foto1' },         // Foto especial
//     { day: 2, photo: 'fotoGenerica' },  // Genérica
//     { day: 3, photo: 'fotoGenerica' },  // Genérica
//     { day: 4, photo: null },            // Placeholder
// ];
//
// ========================================
//
// 📝 OTROS TIPS:
//
// • Formatos de imagen: .jpg, .jpeg, .png, .gif, .webp
// • Videos: Solo YouTube (por ahora)
// • URLs: Deben empezar con http:// o https://
//
// • Para el texto, usa saltos de línea:
//   text: `Primera línea
//   Segunda línea
//
//   Otra línea después de un espacio`
//
// • Formato de fecha: 'YYYY-MM-DD'
//   Ejemplo: '2025-01-15' para el 15 de enero de 2025
//
// • Para fotos locales, siempre usa 'images/' al inicio:
//   ✓ Correcto:   'images/mi-foto.jpg'
//   ✗ Incorrecto: 'mi-foto.jpg'
//
// ========================================
