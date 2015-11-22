angular.module('starter.services', [])
.factory('ActService', function() {
  var veladasValientes = [
  {
    actividad:"Sábado 20, 18.30 hs - La Boutique del Libro, Chacabuco 459",
    details:"La cocina de un Libro - Conversaciones con María José Herrera.Invitada: María José Herrera. Directora del MAT, ex directora artística del MNBA.Presentación del desarrollo y producción del libro “Cien años de arte Argentino”,editorial Biblos / OSDE, 2014.  ",
    taller:"La Boutique del Libro",
    numero:17

   },
  {
    actividad:"Martes 23, 19 hs - Roque Saenz Peña 267, Acassuso",
    details:"Mano a mano - Encuentro entre galeristas.Invitadas: Clara Martínez (Galería Jacques Martínez) / Florencia Braga Menéndez (Braga Menéndez Arte Contemporáneo).Exponentes de dos galerías que marcaron la historia del comercio de arte argentino en diferentes épocas, comparten sus miradas desmitificadoras sobre el mercado del arte, sus posibilidades y sus proyecciones.",
    taller:"Roque Saenz Peña",
    numero:47
   },
  {
    actividad:"Miércoles 24, 19 hs - Ambos Mundos Fondo de Arte / Galería, Chubut 855",
    details:"Arte a La bolilla - Clínicas al azar.Facilitadoras: Magalí de Torres, Sol Pochat, Noe Novosel.Inspiradas en el método “Mirror Critics” (Clínicas Espejo) del artista Gabriel Orozco. Se convoca abiertamente a artistas a compartir sus obras en una memoria digital (pendrive), estas formarán parte de un bolillero y la que surja séra presentada por una persona de la audiencia elegida al azar.",
    taller:"AMBOS MUNDOS",
    numero:40
   },
  {
    actividad:"Jueves 25, 19 hs - Escuela Superior de Bellas Artes Regina Pacis,25 de Mayo 327",
    details:"¿Por qué estudiar arte? - Encuentro sobre arte y educación.Invitados: Germán Caporale, Mercedes Niklison, Alejandra Niño Amieva, Eduardo Niño Amieva, Héctor Maranesi, Alejandra Repetto Escardó.Espacio de diálogo y reflexión acerca de la formación en artes, sus contenidos, metodo- logías, conflictos y contradicciones.",
    taller:"Escuela Superior de Bellas Artes Regina Pacis",
    numero:19
   },
  {
    actividad:"Viernes 26, 19 hs - Escuela Superior de Bellas Artes Regina Pacis,25 de Mayo 327",
    details:"¿Quién vive del arte? - Miradas y posturas frente a la vida en relación con la producción artística.Invitados: Alejandro Montaldo, Julieta Barderi, Carola Zech, Nora Aslan, María Paula Zacharías, Enrique Burone Risso, Isabel Peña, Paula Zaccaria.Diferentes perspectivas sobre la producción de arte, los sistemas de legitimación y la circulación de obra.",
    taller:"Escuela Superior de Bellas Artes Regina Pacis",
    numero:19   
   },
  ]
  var categoriesList = [
  {
    name:"Gastronomía",
    thumb:"./img/category_icons/gastronomia.png",
    url:"gastronomia"
  },
  {
       name:"Muestras y Exposiciones",
    thumb:"./img/category_icons/exposiciones.png",
    url:"exposiciones"
  },
  {
    name:"Actividad para toda la familia",
    thumb:"./img/category_icons/familiar.png",
    url:"familiar"
  },
  {
       name:"Actividad para adultos",
    thumb:"./img/category_icons/adultos.png",
    url:"adultos"
  },
  {
       name:"Actividad para niños",
    thumb:"./img/category_icons/chicos.png",
    url:"chicos"
  },
  {
       name:"Charlas, perfomance en vivo..",
    thumb:"./img/category_icons/performance.png",
    url:"performance"
  },
  {
       name:"música",
    thumb:"./img/category_icons/musica.png",
    url:"arte"
  },
  {
       name:"teatro",
    thumb:"./img/category_icons/teatro.png",
    url:"arte"
  },
  {
       name:"pintura",
    thumb:"./img/category_icons/pintura.png",
    url:"arte"
  },


  ];

  var talleresDB = [
    {
  "taller":"Atellier Casapuente",
  "numero":1,
  "dir":"Parodi 92"
},
{
  "taller":"Nora Aslan",
  "numero":2,
  "dir":"33 Orientales 291"
},
{
  "taller":"Paula Duri",
  "numero":3,
  "dir":"33 Orientales 502"
},
{
  "taller":"Casa Taller de Majo Vidal",
  "numero":4,
  "dir":"French 1813"
},
{
  "taller":"Las Fridas",
  "numero":5,
  "dir":"Posadas 204"
},
{
  "taller":"Taller de Acuarela de Kira Mamontoff",
  "numero":6,
  "dir":"Av. Centenario 1891 "
},
{
  "taller":"M. Laura Baylac",
  "numero":7,
  "dir":"Acasusso 1962"
},
{
  "taller":"Casa atelier Espacio Imaginario",
  "numero":8,
  "dir":"Neyer 26"
},
{
  "taller":"El Taller de Santiago Heath",
  "numero":9,
  "dir":"Suipacha 1320"
},
{
  "taller":"EL GLOBO ROJO Javiera Carril",
  "numero":10,
  "dir":"Rivadavia 1191"
},
{
  "taller":"La Cocina",
  "numero":11,
  "dir":"Estanislao Díaz 270"
},
{
  "taller":"Susana Raddi",
  "numero":12,
  "dir":"Estanislao Díaz 301"
},
{
  "taller":"Dirección de Juventud",
  "numero":13,
  "dir":"Don Bosco 47"
},
{
  "taller":"Madame Schablon de Allison Lelawski",
  "numero":14,
  "dir":"Maipú 182"
},
{
  "taller":"Mama Lola",
  "numero":15,
  "dir":"Acassuso 675"
},
{
  "taller":"Ideas Rodantes",
  "numero":16,
  "dir":"Almirante Brown 513"
},
{
  "taller":"La Boutique del Libro",
  "numero":17,
  "dir":"Chacabuco 459"
},
{
  "taller":"Honorable Concejo Deliberante",
  "numero":18,
  "dir":"25 de mayo 459"
},
{
  "taller":"Escuela Superior de Bellas Artes Regina Pacis",
  "numero":19,
  "dir":"25 de Mayo 327"
},
{
  "taller":"Pablo de Tomaso y Mariana Lacroze",
  "numero":20,
  "dir":"Roque Sáenz Peña 708"
},
{
  "taller":"Tienda de Costumbres",
  "numero":21,
  "dir":"L. N. Alem 563"
},
{
  "taller":"IOLO Café & Market",
  "numero":22,
  "dir":"25 de Mayo 107"
},
{
  "taller":"Honoré Casa de Arte",
  "numero":23,
  "dir":"25 de Mayo 156"
},
{
  "taller":"Hilda D Aiello",
  "numero":24,
  "dir":"Martín y Omar 475 1P"
},
{
  "taller":"Colegio de Abogados de San Isidro",
  "numero":25,
  "dir":"Martín y Omar 339"
},
{
  "taller":"Paisaje Interior de Julia Valente",
  "numero":26,
  "dir":"Rivadavia 133, 1º B"
},
{
  "taller":"Casa de Cultura San Isidro Centro",
  "numero":27,
  "dir":"Av. Centenario 77"
},
{
  "taller":"Cámara de Industrias de San Isidro",
  "numero":28,
  "dir":"Av. Centenario 49"
},
{
  "taller":"Casa taller Eugenia Mendoza",
  "numero":29,
  "dir":"Alsina 24, dpto 5"
},
{
  "taller":"Nora Corradetti",
  "numero":30,
  "dir":"Obispo Terrrero 25, timbre 2"
},
{
  "taller":"artenlacalle de Silvia Carrasco Obispo",
  "numero":31,
  "dir":"Terrero 105"
},
{
  "taller":"Jacqueline Cartier",
  "numero":32,
  "dir":"Garibaldi 58"
},
{
  "taller":"Bosco Bosch",
  "numero":33,
  "dir":"Don Bosco 361"
},
{
  "taller":"La Casa del Arte, de Guillermina Arias",
  "numero":34,
  "dir":"General Paz 681"
},
{
  "taller":"Carola Zech",
  "numero":35,
  "dir":"General Paz 1057"
},
{
  "taller":"El boliche",
  "numero":36,
  "dir":"Avellaneda 557"
},
{
  "taller":"El Taller del Pez Globo",
  "numero":37,
  "dir":"Avellaneda 674"
},
{
  "taller":"Rebeca Mendoza",
  "numero":38,
  "dir":"Jacinto Díaz 1261"
},
{
  "taller":"María Iturralde",
  "numero":39,
  "dir":"Diego Palma 772"
},
{
  "taller":"AMBOS MUNDOS",
  "numero":40,
  "dir":"Chubut 855"
},
{
  "taller":"La Ronda",
  "numero":41,
  "dir":"Alsina 774"
},
{
  "taller":"El taller de Inés Rey",
  "numero":42,
  "dir":"Av. B. Márquez 981"
},
{
  "taller":"Federico Hurtado",
  "numero":43,
  "dir":"Alsina 984"
},
{
  "taller":"Lic Vivi Grotewold",
  "numero":44,
  "dir":"Chubut 1123"
},
{
  "taller":"Casa taller Manzone",
  "numero":45,
  "dir":"Manzone 663, Acassuso"
},
{
  "taller":"Crear Vale la Pena",
  "numero":46,
  "dir":"Madame Curie 1955"
},
{
  "taller":"Roque Saenz Peña",
  "numero":47,
  "dir":"Roque Saenz Peña 267"
}
]

  var actividadesDB=[{"tallerNumero":1,"nombre":"Sebastián Boado Montero, artes visuales","descripccion":"","categoria":"exposiciones","taller":"Atellier Casapuente","dia":"sábados","hora":"de 14 a 16s","fecha":"['20-6','27-6']","horario":"13:00"},
{"tallerNumero":2,"nombre":"Pensar TÉ","descripccion":"","categoria":"gastronomia","taller":"Nora Aslan","dia":"sábados","hora":"de 14 a 16s","fecha":"['20-6','27-6']","horario":"13:00"},
{"tallerNumero":2,"nombre":"Detrás de la puerta - obras y procesos de Nora Aslan","descripccion":"","categoria":"exposiciones","taller":"Nora Aslan","dia":"sábados","hora":"de 14 a 16s","fecha":"['20-6','27-6']","horario":"13:00"},
{"tallerNumero":2,"nombre":" Procesos de artista","descripccion":"Taller participativo permanente.","categoria":"performance","taller":"Nora Aslan","dia":"sábados y domingos","hora":"de 14 a 16s","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":3,"nombre":"Orfebrería y escultura en metal, taller de alumnos.","descripccion":"Artistas invitados: Eduardo Salvioli, 4 manos 2 cabezas, escultura; Peia Favier, Florencia Mantengna, escultura y orfebrería; Gabriela Piccini, fotografía.","categoria":"exposiciones","taller":"Paula Duri","dia":"Domingos","hora":"de 13 a 14","fecha":"['21-6','28-6']","horario":"13:00"},
{"tallerNumero":3,"nombre":"El Cadáver Exquisito, soldadura participativa.","descripccion":"","categoria":"adultos","taller":"Paula Duri","dia":"Domingos","hora":"de 16 a 19","fecha":"['21-6','28-6']","horario":"16:00"},
{"tallerNumero":3,"nombre":"performance de fotografía, taller participativo.","descripccion":"","categoria":"adultos","taller":"Paula Duri","dia":"Domingos","hora":"de 16 a 19","fecha":"['21-6','28-6']","horario":"16:00"},
{"tallerNumero":4,"nombre":"mini atelier","descripccion":"","categoria":"chicos","taller":"Casa Taller de Majo Vidal","dia":"Domingos","hora":" 16.30 hs","fecha":"['21-6','28-6']","horario":"16:30"},
{"tallerNumero":4,"nombre":"charla y clase demostrativa de caligrafía artística ","descripccion":"por Valeria Torres Román","categoria":"performance","taller":"Casa Taller de Majo Vidal","dia":"sábados","hora":"16 hs","fecha":"['20-6','27-6']","horario":"16:00"},
{"tallerNumero":4,"nombre":"Arte contemporáneo, dibujo, pintura,  instalaciones, objetos.","descripccion":"Artistas invitadas: alumnas del taller- clínica Natalia Lobato, Mabel Martín, pintura; Valeria Torres Román, caligrafía artística; Florencia Acacia, pintura y objetos; Lucía Bellani, instalaciones con papel y lámparas.","categoria":"exposiciones","taller":"Casa Taller de Majo Vidal","dia":"sábados","hora":"de 14 a 16s","fecha":"['20-6','27-6']","horario":"14:00"},
{"tallerNumero":5,"nombre":"taller para niños","descripccion":"","categoria":"chicos","taller":"Las Fridas","dia":"Domingos","hora":"de 15 a 17hs","fecha":"['21-6','28-6']","horario":"15:00"},
{"tallerNumero":5,"nombre":"alfarería en vivo","descripccion":"","categoria":"performance","taller":"Las Fridas","dia":"sábados","hora":"15hs","fecha":"['20-6','27-6']","horario":"15:30"},
{"tallerNumero":5,"nombre":"nstalación participativa: SMS al aire","descripccion":"Acércate a compartir tus pensamientos en burbujas de colores.","categoria":"performance","taller":"Las Fridas","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":5,"nombre":"música en vivo","descripccion":"","categoria":"musica","taller":"Las Fridas","dia":"sábados","hora":"17hs","fecha":"['20-6','27-6']","horario":"17:00"},
{"tallerNumero":5,"nombre":"música en vivo","descripccion":"","categoria":"musica","taller":"Las Fridas","dia":"Domingos","hora":"17hs","fecha":"['21-6','28-6']","horario":"17:00"},
{"tallerNumero":5,"nombre":"Taller de arte para niños, jóvenes y adultos","descripccion":"Artista invitado: Jorge Barboza, escultura y pintura en vivo.","categoria":"exposiciones","taller":"Las Fridas","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":5,"nombre":"Con gusto a arte de la mano de Dolka Cakes","descripccion":"Muestra de arte y gastronomía de la mano de Dolka Cakes  ","categoria":"exposiciones","taller":"Las Fridas","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":6,"nombre":"Taller de Acuarela de Kira Mamontoff","descripccion":"Kira Mamontoff, Catherine Alvarino, Graciela Velázquez, Luisa Barbero, Lillian Giannetti, Ximena Batagelj, Dolores Vidal Domínguez, Irina Vasine, Sonia Ciorciari, Paulina Laucirica, María del Sagrario Asenjo, Paola Pasinato, Ema San Juan Osswald y Mara Véntola.","categoria":"performance","taller":"Taller de Acuarela de Kira Mamontoff","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":7,"nombre":"Muestra de la Artista  M. Laura Baylac","descripccion":"","categoria":"exposiciones","taller":"M. Laura Baylac","dia":"Domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":8,"nombre":"Taller de serigrafía","descripccion":"traé tu remera y estampala! A cargo de Textink","categoria":"familiar","taller":"Casa atelier Espacio Imaginario","dia":"sábado","hora":"15hs","fecha":"20-06","horario":"15:00"},
{"tallerNumero":8,"nombre":"Santi Pascual en vivo.","descripccion":"","categoria":"musica","taller":"Casa atelier Espacio Imaginario","dia":"Domingos","hora":"16hs","fecha":"21-06","horario":"16:00"},
{"tallerNumero":8,"nombre":"Kamishibai Infinito, teatro de papel","descripccion":"","categoria":"teatro","taller":"Casa atelier Espacio Imaginario","dia":"sabado","hora":"16hs","fecha":"20-06","horario":"16:00"},
{"tallerNumero":8,"nombre":"Taller de grabado Jimena Tablado Cores","descripccion":"","categoria":"familiar","taller":"Casa atelier Espacio Imaginario","dia":"21,27 y 28","hora":"17hs","fecha":"['21-6','27-6','28-6']","horario":"17:00"},
{"tallerNumero":8,"nombre":"Jimena Tablado Cores","descripccion":"grabado, escultura, escenografía, teatro de papel.","categoria":"exposiciones","taller":"Casa atelier Espacio Imaginario","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":8,"nombre":"Popurrí de delicias caseras, directo de la cocina de la abuela en nuestra casa atelier.","descripccion":"Artistas invitados: Marcelo Mognoni, serigrafía; Función, prestaciones escenográficas.","categoria":"gastronomia","taller":"Casa atelier Espacio Imaginario","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":8,"nombre":"Todos los días: tu foto en el acto!","descripccion":"Vení a divertirte!","categoria":"performance","taller":"Casa atelier Espacio Imaginario","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":9,"nombre":"Actividad de taller","descripccion":"","categoria":"familiar","taller":"El Taller de Santiago Heath","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":9,"nombre":"Guiso de Escultor","descripccion":"de legumbres y verduras","categoria":"gastronomia","taller":"El Taller de Santiago Heath","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":9,"nombre":"Santiago Heath, escultura en madera","descripccion":"","categoria":"performance","taller":"El Taller de Santiago Heath","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":10,"nombre":"música de cámara","descripccion":"dúo de chello y flauta traversa, con Stephanie Muller y Judith Zlotsky y dúo de guitarra y flauta traversa con Judith Zlotsky y Facundo González","categoria":"musica","taller":"EL GLOBO ROJO Javiera Carril","dia":"Domingos","hora":"de 15 a 17.30hs","fecha":"['21-6','28-6']","horario":"15:00"},
{"tallerNumero":10,"nombre":"aller de Minilibros ilustrados","descripccion":"Escribí tu historia y llevate tu librito a casa!","categoria":"familiar","taller":"EL GLOBO ROJO Javiera Carril","dia":"sábados","hora":"de 16 a 17.30hs","fecha":"['20-6','27-6']","horario":"16:00"},
{"tallerNumero":10,"nombre":"Muestra de dibujos y pinturas.","descripccion":"Ilustración infantil. ","categoria":"exposiciones","taller":"EL GLOBO ROJO Javiera Carril","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":10,"nombre":"Sinforiana - cuadernos artesanales:","descripccion":" intervenidos con dibujos originales, cosidos a mano.","categoria":"exposiciones","taller":"EL GLOBO ROJO Javiera Carril","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":11,"nombre":"Claudia Alberti, alfarería y cerámicas.Majo Caporaletti, dibujo.","descripccion":"Presenta trabajos de su última residencia en París.","categoria":"exposiciones","taller":"La Cocina","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":12,"nombre":"dibujo con modelo vivo.","descripccion":"","categoria":"familiar","taller":" Susana Raddi ","dia":"sábados","hora":"16hs","fecha":"['20-6','27-6']","horario":"16:00"},
{"tallerNumero":12,"nombre":"Dibujo, pintura, escultura.","descripccion":"Artistas invitadas: Bárbara Triest, Queli Bertold, Adriana Pascucci, Ester Suaya, María Chapur, Sofía Gorchacov.","categoria":"exposiciones","taller":"Susana Raddi","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":13,"nombre":"Caminante no hay camino.","descripccion":" Túneles, tapias y boquetes.","categoria":"familiar","taller":"Dirección de Juventud","dia":"Domingos","hora":"de 14 a 18hs","fecha":"28-06","horario":"14:00"},
{"tallerNumero":13,"nombre":"Dj en vivo","descripccion":"","categoria":"musica","taller":"Dirección de Juventud","dia":"Sábado 27 y Domingo 28","hora":"de 14 a 18hs","fecha":"['27-6','28-6']","horario":"14:00"},
{"tallerNumero":13,"nombre":"Joaquín Torres Zavaleta (Bater), artista urbano, muralista.","descripccion":"Graffittis en el frente de la Dirección de Juventud.","categoria":"performance","taller":"Dirección de Juventud","dia":"sabado 27 y domingo 28","hora":"14hs","fecha":"['27-6','28-6']","horario":"16:00"},
{"tallerNumero":13,"nombre":"Juan Saravia & Javier Mansilla","descripccion":"dúo de Jazz (teclado y saxo).","categoria":"musica","taller":"Dirección de Juventud","dia":"sábados","hora":"16hs","fecha":"['20-6','27-6']","horario":"16:00"},
{"tallerNumero":13,"nombre":"Teatro. Obra: El acompañamiento de Carlo Gorostiza","descripccion":"Con Matías Vitali y Ramiro Revainera. Dirección: Elenco de Teatro estable de la Casa de la Juventud: Matías Vitali, Ramiro Revainera, Romina Palavecino, René Pérez, Denise Misses y Ramiro Carrera.","categoria":"teatro","taller":"Dirección de Juventud","dia":"Domingos","hora":"16hs","fecha":"21-06","horario":"16:00"},
{"tallerNumero":13,"nombre":"Santiago Fredes, artista visual. Exposición de fotografías: ","descripccion":"Cuando los caminos dejan de conducir a Roma.","categoria":"exposiciones","taller":"Dirección de Juventud","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":14,"nombre":"taller de estampación textil.","descripccion":"","categoria":"familiar","taller":"Madame Schablon de Allison Lelawski","dia":"sábados y domingos","hora":"de 15 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"15:00"},
{"tallerNumero":14,"nombre":"Serigrafía artística.","descripccion":"Artistas invitadas: Ana Suardi, Valeria Rovatti, Belén Monsegur, Julieta Antúnez.Instalación “Noticias de otra época”. Trabajos realizados durante el verano de 2014/15 basada en la 2da. Sección “Artes y Letras” del diario “La Nacion” de 1920-1970.","categoria":"exposiciones","taller":"Madame Schablon de Allison Lelawski","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":15,"nombre":"M.Graciela Noguera y M.Marta Noguera","descripccion":"Alfarería y técnicas de cerámica, arte utilitario","categoria":"exposiciones","taller":"Mama Lola","dia":"sábados y domingos","hora":"de 16 a 19","fecha":"['20-6','21-6','27-6','28-6']","horario":"16:00"},
{"tallerNumero":16,"nombre":"taller para niños a cargo de Sofía Aguirre Saravia y Giamila Cecchi.","descripccion":"","categoria":"chicos","taller":"Ideas Rodantes","dia":"sábado 20 y domingo 21","hora":"de 14 a 15:30hs","fecha":"['20-6','21-6']","horario":"14:00"},
{"tallerNumero":16,"nombre":"taller para niños por Obra Viva","descripccion":" English + Art + Nature.","categoria":"chicos","taller":"Ideas Rodantes","dia":"Dom. 28","hora":"de 14.30 a 15:30 hs","fecha":"28-06","horario":"14:30"},
{"tallerNumero":16,"nombre":"vení a pintar en familiar","descripccion":"","categoria":"familiar","taller":"Ideas Rodantes","dia":"sábado 20 y domingo 21","hora":"de 14.30 a 15:30 hs","fecha":"['22-6','21-6']","horario":"14:30"},
{"tallerNumero":16,"nombre":"vení a pintar en familia","descripccion":"","categoria":"familiar","taller":"Ideas Rodantes","dia":"Dom. 28","hora":"dede 16 a 17 hs","fecha":"28-06","horario":"16:00"},
{"tallerNumero":16,"nombre":"unipersonal humorístico a cargo de Juliana Czudnowsky.","descripccion":"","categoria":"teatro","taller":"Ideas Rodantes","dia":"Sab. 27","hora":"de 16.30 a 17hs","fecha":"27-06","horario":"16:30"},
{"tallerNumero":16,"nombre":"música en vivo con  Con dos Martini y una Paula.","descripccion":"","categoria":"musica","taller":"Ideas Rodantes","dia":"Sab. 27","hora":"17hs","fecha":"27-06","horario":"17:00"},
{"tallerNumero":16,"nombre":"King Cobrizo en vivo.","descripccion":"","categoria":"musica","taller":"Ideas Rodantes","dia":"Dom. 28","hora":"17hs","fecha":"28-06","horario":"17:00"},
{"tallerNumero":16,"nombre":"taller teórico vivencial a cargo de Rhodocrosita Esmeralda","descripccion":"Centro de estudio e Investi- gación en terapia artística. Reflexiones y experiencias de Artistas Contemporáneos significativos. Sobre Marina Abramovic.","categoria":"performance","taller":"Ideas Rodantes","dia":"Dom. 21","hora":"17.30hs17.30 a 20 hs","fecha":"21-06","horario":"17:30"},
{"tallerNumero":16,"nombre":"música en vinilo por Nacho Flotta","descripccion":"","categoria":"musica","taller":"Ideas Rodantes","dia":"Sábado 20","hora":"17hs","fecha":"20-06","horario":"17:00"},
{"tallerNumero":16,"nombre":"taller de Origami ","descripccion":"por Mona Suárez","categoria":"familiar","taller":"Ideas Rodantes","dia":"Sab. 27","hora":"de 14.30 a 15.30 hs","fecha":"27-06","horario":"14:30"},
{"tallerNumero":16,"nombre":"Exponen: Exponen: Ana Möller, Edurne Ortiz de Zarate, Mona Suárez, María Durlach.","descripccion":"","categoria":"exposiciones","taller":"Ideas Rodantes","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":16,"nombre":"Arte Delivery","descripccion":"obras pequeño formato a precio muy accesible","categoria":"exposiciones","taller":"Ideas Rodantes","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":16,"nombre":"Café,té,mate,jugos exprimidos,cerveza","descripccion":"Picadas cromáticas, Budines y tortas artísticas, Sandwiches de autor.","categoria":"gastronomia","taller":"Ideas Rodantes","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":17,"nombre":"debate entre artistas y galeristas","descripccion":"La venta de arte en Argentina. ¿De qué viven los artistas? ¿El arte es sólo para una elite? La política y el arte - Subsidios para artistas.","categoria":"performance","taller":"La Boutique del Libro","dia":"Sab. 27","hora":"18.30hs","fecha":"27-06","horario":"18:30"},
{"tallerNumero":17,"nombre":"La cocina de un Libro, conversaciones con María José Herrera","descripccion":"Presentación del desarrollo y producción del libro “Cien años de arte Argentino”, editorial Biblos / OSDE, 2014.","categoria":"performance","taller":"La Boutique del Libro","dia":"Sab. 20","hora":"18.30hs","fecha":"20-06","horario":"18:30"},
{"tallerNumero":17,"nombre":"Exponen","descripccion":"Pat Muller: arte textil; Francisco Acuña, Bahía Silveyra, Catalina S. Bardi, Morrison, Tempe Hernández, Ezequiel Tazelaar, pintura.","categoria":"exposiciones","taller":"La Boutique del Libro","dia":"sábados y domingos","hora":"desde 14 a 16hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":17,"nombre":"Instalación gourmet con productos naturales Chantal Coutenceau","descripccion":"arte y  nuevas tendencias en jugos, cafés, tortas y sandwiches","categoria":"gastronomia","taller":"La Boutique del Libro","dia":"sábados y domingos","hora":"desde 14 a 16hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":17,"nombre":"Todos los días, final del día: música en vivo.","descripccion":"","categoria":"musica","taller":"La Boutique del Libro","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":18,"nombre":"cuentos para niños","descripccion":" por Graciela Deza: “Catala, tregua, catala”.","categoria":"chicos","taller":"Honorable Concejo Deliberante","dia":"Sab. 27","hora":"17hs","fecha":"27-06","horario":"17:00"},
{"tallerNumero":18,"nombre":"Sobre lo intangible","descripccion":"por Luciano Goncalves y Perro Miranda, pintura.","categoria":"exposiciones","taller":"Honorable Concejo Deliberante","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":19,"nombre":"Retratos mudos","descripccion":" proyecto fotográfico interactivo de Laura Woller.","categoria":"adultos","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Sab. 20","hora":"de 14 a 17 hs","fecha":"20-06","horario":"14:00"},
{"tallerNumero":19,"nombre":"taller de diseño textil y serigrafía","descripccion":"coord. Silvina Wynnyk.","categoria":"adultos","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Dom. 28","hora":"de 14 a 17 hs","fecha":"28-06","horario":"14:00"},
{"tallerNumero":19,"nombre":"taller experimental de diseño textil y serigrafía","descripccion":"a cargo de Silvina Wynnyk.","categoria":"adultos","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Dom. 21","hora":"de 14 a 16 hs","fecha":"21-06","horario":"14:00"},
{"tallerNumero":19,"nombre":"Esculturas al paso","descripccion":"con Nanni Muggler.","categoria":"familiar","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Sab. 27","hora":"de 14 a 17 hs","fecha":"27-06","horario":"14:00"},
{"tallerNumero":19,"nombre":"Intervención de arcón de dote","descripccion":"proyecto de Pía Persia, experiencia: bordado trash.","categoria":"familiar","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Dom. 28","hora":"de 14 a 17 hs","fecha":"28-06","horario":"14:00"},
{"tallerNumero":19,"nombre":"taller de palabras ilustradas","descripccion":" a cargo de Verónica Del Giúdice y Lali Parra.","categoria":"adultos","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Dom. 28","hora":"de 15 a 17 hs","fecha":"28-06","horario":"15:00"},
{"tallerNumero":19,"nombre":"taller de origami.","descripccion":"Coord. Victoria Rann","categoria":"familiar","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Sab. 27","hora":"de 15 a 17 hs","fecha":"27-06","horario":"15:00"},
{"tallerNumero":19,"nombre":"croquis con modelo y música en vivo.","descripccion":"a cargo de Javier Alonso.","categoria":"familiar","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Sab. 20","hora":"de 15 a 17 hs","fecha":"20-06","horario":"15:00"},
{"tallerNumero":19,"nombre":"taller de libro de artista","descripccion":"a cargo de Victoria Bianchetti.","categoria":"adultos","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Dom. 21","hora":"16hs","fecha":"21-06","horario":"16:00"},
{"tallerNumero":19,"nombre":"Palabras preferidas","descripccion":" proyecto interactivo de Laura Woller.","categoria":"familiar","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Sab. 27","hora":"de 16 a 17 hs","fecha":"27-06","horario":"16:00"},
{"tallerNumero":19,"nombre":"Todos podemos dibujar","descripccion":"dibujando con el hemisferio derecho, con Norma Romano.","categoria":"familiar","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Sab. 20","hora":"de 16 a 18 hs","fecha":"20-06","horario":"16:00"},
{"tallerNumero":19,"nombre":"cierre con música en vivo: Abedul.","descripccion":"","categoria":"musica","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Sab. 27","hora":"17hs","fecha":"27-06","horario":"17:00"},
{"tallerNumero":19,"nombre":"cierra con música, Calíope","descripccion":"","categoria":"musica","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Dom. 28","hora":"17hs","fecha":"28-06","horario":"17:00"},
{"tallerNumero":19,"nombre":"música en vivo: Papi lo burguese","descripccion":"","categoria":"musica","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"Dom. 21","hora":"17hs","fecha":"21-06","horario":"17:00"},
{"tallerNumero":19,"nombre":"Bar abierto y parrilla.","descripccion":"","categoria":"gastronomia","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":19,"nombre":"Alumnos y docentes de la Escuela trabajando en vivo","descripccion":"","categoria":"performance","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":19,"nombre":"Artistas invitados","descripccion":"Natalia Martínez, Federico Taboada, Daiana Ares, Belén Cárcano, Florencia Caiazza y muchos más.","categoria":"performance","taller":"Escuela Superior de Bellas Artes Regina Pacis","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":20,"nombre":"Pablo de Tomaso, esculturas; Mariana Lacroze, pinturas.","descripccion":"","categoria":"exposiciones","taller":"Pablo de Tomaso y Mariana Lacroze","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":20,"nombre":"Música: Juan de Tomaso, Tino.","descripccion":"","categoria":"musica","taller":"Pablo de Tomaso y Mariana Lacroze","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":21,"nombre":"taller de bordado","descripccion":"","categoria":"familiar","taller":"Tienda de Costumbres","dia":"Sab. 27","hora":"de 14 a 18hs","fecha":"27-06","horario":"14:00"},
{"tallerNumero":21,"nombre":"Santiago Calderón, exposición de fotografía del Norte Argentino","descripccion":"","categoria":"exposiciones","taller":"Tienda de Costumbres","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":22,"nombre":"Artista invitada: Verónica Escalante, arte digital, pintura.","descripccion":"“Gemas del Océano” - ilustraciones digitales intervenidas a mano.","categoria":"exposiciones","taller":"IOLO Café & Market","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":23,"nombre":"Kika Tarelli, serigrafía.","descripccion":"","categoria":"exposiciones","taller":"Honoré Casa de Arte","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":23,"nombre":"Exposición y prueba de estampas y teñidos - actividad permanente.","descripccion":"","categoria":"performance","taller":"Honoré Casa de Arte","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":24,"nombre":"Prof. Fernando Quirós, artista plástico y Prof. Adriana Ortolani, escultura: taller de retrato, dibujo y pintura.","descripccion":"","categoria":"exposiciones","taller":"Hilda D Aiello","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":24,"nombre":"Caricaturas","descripccion":" muestra de teatro.","categoria":"exposiciones","taller":"Hilda D Aiello","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":25,"nombre":"modelo vivo","descripccion":"a cargo de Enrique Burone Risso","categoria":"adultos","taller":"Colegio de Abogados de San Isidro","dia":"Domingos","hora":"15hs","fecha":"['21-6','28-6']","horario":"15:00"},
{"tallerNumero":25,"nombre":"clase abierta de pintura por Enrique Burone Risso.","descripccion":"","categoria":"familiar","taller":"Colegio de Abogados de San Isidro","dia":"sábados","hora":"15hs","fecha":"['20-6','27-6']","horario":"15:00"},
{"tallerNumero":25,"nombre":"taller de dibujo y pintura","descripccion":" con material disponible, por Aníbal Tuso.","categoria":"familiar","taller":"Colegio de Abogados de San Isidro","dia":"sábados y domingos","hora":"de 15 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"15:00"},
{"tallerNumero":25,"nombre":"clase abierta del Taller de Danzas Folclóricas del Colegio","descripccion":"por Ariel Bustos","categoria":"familiar","taller":"Colegio de Abogados de San Isidro","dia":"Sab. 27","hora":"15:30hs","fecha":"27-06","horario":"15:30"},
{"tallerNumero":25,"nombre":"coro del Colegio de Abogados de San Isidro","descripccion":"","categoria":"musica","taller":"Colegio de Abogados de San Isidro","dia":"Sab. 20","hora":"17hs","fecha":"20-06","horario":"17:00"},
{"tallerNumero":25,"nombre":"final de los talleres con enlace al “Concierto del Atardecer” por la Camerata del I.U.N.A:","descripccion":"dirigida por Rodrigo González Jacob y coordinada por Charlotte Stuij.","categoria":"musica","taller":"Colegio de Abogados de San Isidro","dia":"Dom. 28","hora":"17.30hs","fecha":"28-06","horario":"17:30"},
{"tallerNumero":25,"nombre":"Muestra en el Salón de Actos de la sede colonial","descripccion":"artistas plásticos de Zona Norte y del taller de dibujo y pintura del Colegio.","categoria":"exposiciones","taller":"Colegio de Abogados de San Isidro","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":26,"nombre":"Mandalas Tibetanos","descripccion":"","categoria":"familiar","taller":"Paisaje Interior de Julia Valente","dia":"Sábados 20 y 27,","hora":"16.30hs","fecha":"20-06","horario":"0.6875"},
{"tallerNumero":26,"nombre":"Mandala Andino","descripccion":"","categoria":"gastronomia","taller":"Paisaje Interior de Julia Valente","dia":"Domingos","hora":"16.30hs","fecha":"['21-6','28-6']","horario":"16:30"},
{"tallerNumero":26,"nombre":"Diseño y pintura de Mandalas","descripccion":". Geometría Sagrada.","categoria":"exposiciones","taller":"Paisaje Interior de Julia Valente","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":26,"nombre":"DeDelicias Mandálicas.","descripccion":"","categoria":"familiar","taller":"Paisaje Interior de Julia Valente","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":27,"nombre":"taller de arte y juego para toda la familia.","descripccion":"","categoria":"familiar","taller":"Casa de Cultura San Isidro Centro","dia":"Dom.28","hora":"14hs","fecha":"28-06","horario":"14:00"},
{"tallerNumero":27,"nombre":"taller participativo de pintura étnica sobre calabazas","descripccion":"","categoria":"familiar","taller":"Casa de Cultura San Isidro Centro","dia":"Sab. 27","hora":"16hs","fecha":"27-06","horario":"16:00"},
{"tallerNumero":27,"nombre":"taller abierto de batería","descripccion":"Prof. Marcelo Fernández.","categoria":"familiar","taller":"Casa de Cultura San Isidro Centro","dia":"Sab. 20","hora":"16hs","fecha":"20-06","horario":"16:00"},
{"tallerNumero":27,"nombre":"Taller abierto de canto","descripccion":"Prof. Juan Juncales","categoria":"familiar","taller":"Casa de Cultura San Isidro Centro","dia":"Sab. 27","hora":"17hs","fecha":"27-06","horario":"17:00"},
{"tallerNumero":27,"nombre":"taller pintura sobre piedras.","descripccion":"","categoria":"familiar","taller":"Casa de Cultura San Isidro Centro","dia":"Dom.28","hora":"17hs","fecha":"28-06","horario":"17:00"},
{"tallerNumero":27,"nombre":"taller de pintura participativo.","descripccion":"","categoria":"familiar","taller":"Casa de Cultura San Isidro Centro","dia":"Dom. 21","hora":"17hs","fecha":"21-06","horario":"17:00"},
{"tallerNumero":27,"nombre":"exposición de talleres de pintura","descripccion":"Prof. Lilian Bonaguro y Prof. Graciela Pölcher.","categoria":"exposiciones","taller":"Casa de Cultura San Isidro Centro","dia":"Sábados 27 y Domingo 28","hora":"de 14 a 18hs","fecha":"27-06","horario":"14:00"},
{"tallerNumero":27,"nombre":"exposición taller de pintura Prof. Ana Möller.","descripccion":"","categoria":"exposiciones","taller":"Casa de Cultura San Isidro Centro","dia":"Sábados 20 y Domingo 21,","hora":"de 14 a 18hs","fecha":"20-06","horario":"14:00"},
{"tallerNumero":28,"nombre":"Pagode da Montanha, roda da samba.","descripccion":"Música en viv","categoria":"musica","taller":"Cámara de Industrias de San Isidro","dia":"Dom.28","hora":"17hs","fecha":"28-06","horario":"17:00"},
{"tallerNumero":28,"nombre":"Exposición colectiva “Encuentro del arte y la industria 2015”.","descripccion":"Artistas participantes: Candelaria Botana, Elsa Farina, Nora Sfich, óleo; Rafi Duque, arte digital; Ana M. Frutos Chilavert, Cristina Delgui, Haydee Rodríguez, t. mixta; Adela B. Pecorino, Marcos Timoteo Peñalva, Sandra Poblet, Laura Ubeira, Pilar Sala, acrílico; Gladys Rodríguez, acuarela.","categoria":"exposiciones","taller":"Cámara de Industrias de San Isidro","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":29,"nombre":"taller de proyecciones para chicos por Cecilia Leiva.","descripccion":" Enterate como armar tu propio proyector.","categoria":"familiar","taller":"Casa taller Eugenia Mendoza","dia":"Sab. 27","hora":"15.30hs","fecha":"27-06","horario":"15:30"},
{"tallerNumero":29,"nombre":"taller de collage y tranfer a cargo de Eugenia Mendoza.","descripccion":" Llevate tu propia obra.","categoria":"familiar","taller":"Casa taller Eugenia Mendoza","dia":"Sab. 20","hora":"15.30hs","fecha":"20-06","horario":"15:30"},
{"tallerNumero":29,"nombre":"taller de collage rasgado","descripccion":" Llevate un retrato hecho con papeles y sin tijeras.","categoria":"familiar","taller":"Casa taller Eugenia Mendoza","dia":"Dom. 21","hora":"15.30hs","fecha":"21-06","horario":"15:30"},
{"tallerNumero":29,"nombre":"modelo vivo","descripccion":"Vení a dibujar o pintar gratis y luego te llevás una “Venus de jalea”.","categoria":"familiar","taller":"Casa taller Eugenia Mendoza","dia":"Dom. 28","hora":"de 16 a 18hs","fecha":"28-06","horario":"16:00"},
{"tallerNumero":29,"nombre":"taller de histo rieta a cargo de Nik Cornejo. T","descripccion":"ips para crear tu propio personaje y ponerlo en acción.","categoria":"familiar","taller":"Casa taller Eugenia Mendoza","dia":"Sab. 27","hora":"16.30hs","fecha":"27-06","horario":"16:30"},
{"tallerNumero":29,"nombre":"luego de pasar por el  Consultorio","descripccion":"oracular de la artista Lucía Sibila Pujadas comprobá tu destino con las galletas de la suerte.","categoria":"performance","taller":"Casa taller Eugenia Mendoza","dia":"Dom. 21","hora":"16.30hs","fecha":"21-06","horario":"16:30"},
{"tallerNumero":29,"nombre":"Ectoplasma: proyecciones y música","descripccion":"Clara Ayala, proyecciones analógicas y Tomás Buron, guitarra reverberante. Degustación de trufas psicodélicas.","categoria":"performance","taller":"Casa taller Eugenia Mendoza","dia":"Sab. 20","hora":"17.30hs","fecha":"20-06","horario":"17:30"},
{"tallerNumero":29,"nombre":"Ectoplasma","descripccion":" proyecciones y música, Clara Ayala, proyecciones analógicas y Tomás Buron, guitarra reverberante. Degustación de trufas psicodélicas.","categoria":"exposiciones","taller":"Casa taller Eugenia Mendoza","dia":"Dom. 28","hora":"18hs","fecha":"28-06","horario":"18:00"},
{"tallerNumero":29,"nombre":"Inauguración de la serie  Galería Alsina","descripccion":" Pintura, dibujo, video e instalación en la nueva galería under de San Isidro. Empanadas y vino en el Bar Alsina.","categoria":"performance","taller":"Casa taller Eugenia Mendoza","dia":"Sab. 27","hora":"18hs","fecha":"27-06","horario":"18:00"},
{"tallerNumero":29,"nombre":"Artistas invitados","descripccion":" Victoriana La Loca, restauración y pátinas; Nicolás Rodríguez, pintura; Lucía Sibila Pujadas, instalación; Clara Ayala, grabado y proyecciones ana- lógicas; Nik Cornejo, historieta; Cecilia Leiva, proyecciones y Tomás Buron, guitarra.","categoria":"exposiciones","taller":"Casa taller Eugenia Mendoza","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":29,"nombre":"El coleccionista de sillones","descripccion":" Instalación con tapizados donados por el tapicero de la Galería Alsina en la escalera del edificio. Eugenia Mendoza.","categoria":"exposiciones","taller":"Casa taller Eugenia Mendoza","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":29,"nombre":"Galería Alsina","descripccion":"Serie de pinturas, dibujos, instalación y video en locales prestados de la Galería Alsina (Alsina 26). Sáb. 27 y dom. 28. Eugenia Mendoza.","categoria":"exposiciones","taller":"Casa taller Eugenia Mendoza","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":29,"nombre":"Consultorio","descripccion":" El espectador - consultante podrá acceder a un recinto íntimo para buscar una respuesta en las páginas del libro oracular: una cartilla médica intervenida. Lucía Sibila Pujadas.","categoria":"performance","taller":"Casa taller Eugenia Mendoza","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":30,"nombre":"Clínicas de arte, taller, seminarios, espacio abierto a capacidades especiales. Trastienda de obras. ","descripccion":"","categoria":"exposiciones","taller":"Nora Corradetti","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":31,"nombre":"charla y taller para la realización de un Libro de Artista","descripccion":"a cargo de los artistas invitados de la disciplina grabado.","categoria":"adultos","taller":"artenlacalle de Silvia Carrasco Obispo","dia":"Sábados 20 y Domingo 21,","hora":"de 16 a 18hs","fecha":"20-06","horario":"16:00"},
{"tallerNumero":31,"nombre":"Artistas invitados","descripccion":"Patricio Bosch, Ana Noya, Teresa Roquero, Marcela Llarín, Susana Gómez, grabado; María Cristina San Martín, Cinthia Cambarieri, pintura; Mariana Meijide, escultura.","categoria":"exposiciones","taller":"artenlacalle de Silvia Carrasco Obispo","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":32,"nombre":"Artista invitada: Laura Muñoz, gráfica.","descripccion":"","categoria":"exposiciones","taller":"Jacqueline Cartier","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":33,"nombre":"Pintura en vivo.","descripccion":"Francisco López Alconada, ","categoria":"performance","taller":"Bosco Bosch","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":34,"nombre":"Gabriela Pereyra trabaja en vivo con lápices de colores.","descripccion":"","categoria":"performance","taller":"La Casa del Arte, de Guillermina Arias","dia":"Sab. 27","hora":"15hs","fecha":"27-06","horario":"15:00"},
{"tallerNumero":34,"nombre":"el escultor francés Marc Errebie conversa con el público.","descripccion":"","categoria":"performance","taller":"La Casa del Arte, de Guillermina Arias","dia":"Sab. 20","hora":"15hs","fecha":"20-06","horario":"15:00"},
{"tallerNumero":34,"nombre":"Espacio de arte. Orquídeas en flor","descripccion":"Artistas invitados: Gabriela Pereyra, pintura y Adriano Sales, dibujo y pintura.","categoria":"exposiciones","taller":"La Casa del Arte, de Guillermina Arias","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":35,"nombre":"talleres participativos permanentes.","descripccion":"","categoria":"familiar","taller":"Carola Zech","dia":"sábados y domingos","hora":"14.30hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:30"},
{"tallerNumero":35,"nombre":"Artes visuales","descripccion":"","categoria":"exposiciones","taller":"Carola Zech","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":35,"nombre":"Magneticcookies y té Chai.","descripccion":"","categoria":"gastronomia","taller":"Carola Zech","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":36,"nombre":"Taller participativo para niños permanente.","descripccion":"","categoria":"adultos","taller":"El boliche","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":36,"nombre":"Natalia Martínez, María Eugenia Cozzi","descripccion":"","categoria":"exposiciones","taller":"El boliche","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":37,"nombre":"taller de encuadernación","descripccion":"con Florencia Juárez. Con las mejores berenjenas al escabeche.","categoria":"familiar","taller":"El Taller del Pez Globo","dia":"Dom. 21","hora":"15hs","fecha":"21-06","horario":"15:00"},
{"tallerNumero":37,"nombre":"Collage mural","descripccion":"con Sofía D´andré y Mane Degano. Explotaremos la piñata de la imaginación y nos comeremos sus golosinas!","categoria":"chicos","taller":"El Taller del Pez Globo","dia":"Sab. 27","hora":"16hs","fecha":"27-06","horario":"16:00"},
{"tallerNumero":37,"nombre":"intervención colectiva con Luciano Goncalvez","descripccion":"De postre: bizcochuelo Mondrian.","categoria":"familiar","taller":"El Taller del Pez Globo","dia":"Sab. 20","hora":"16hs","fecha":"20-06","horario":"16:00"},
{"tallerNumero":37,"nombre":"collage participativo con todo el Pez Globo","descripccion":" Y nos comemos un retrato de Archimboldo.","categoria":"familiar","taller":"El Taller del Pez Globo","dia":"Dom. 28","hora":"16hs","fecha":"28-06","horario":"16:00"},
{"tallerNumero":37,"nombre":"Expositores","descripccion":"Federico Prassel, Luciano Goncalves, Florencia Juárez","categoria":"exposiciones","taller":"El Taller del Pez Globo","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":38,"nombre":" taller Expresión genuina","descripccion":"","categoria":"familiar","taller":"Rebeca Mendoza","dia":"Dom. 28","hora":"15.30hs","fecha":"28-06","horario":"15:30"},
{"tallerNumero":38,"nombre":"encuentro participativo: Ojo crítico - Ojo curioso","descripccion":"","categoria":"performance","taller":"Rebeca Mendoza","dia":"Dom. 28","hora":"15.30hs","fecha":"28-06","horario":"15:30"},
{"tallerNumero":38,"nombre":"Alumnas y docentes del taller","descripccion":"artistas plásticas: Florencia Martelli, Silvana Timo, Rosa Millán, Romina Bianchi, Patricia Cavanagh, Norma Frola, Verónica Puiggari.","categoria":"exposiciones","taller":"Rebeca Mendoza","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":39,"nombre":"Lo de Martha","descripccion":"fusión de violonchelo y danza","categoria":"musica","taller":"María Iturralde","dia":"Dom. 21","hora":"14.30hs","fecha":"21-06","horario":"14:30"},
{"tallerNumero":39,"nombre":"Palmito y sus delirios","descripccion":" obra de teatro para niños","categoria":"teatro","taller":"María Iturralde","dia":"Dom. 28","hora":"14.30hs","fecha":"28-06","horario":"14:30"},
{"tallerNumero":39,"nombre":"Teresita Iturralde, canto para niños con taller.","descripccion":"","categoria":"chicos","taller":"María Iturralde","dia":"Sab. 27","hora":"15.30hs","fecha":"27-06","horario":"15:30"},
{"tallerNumero":39,"nombre":"modelado en arcilla con Ana Noguer","descripccion":"","categoria":"familiar","taller":"María Iturralde","dia":"Sab. 20","hora":"15.30hs","fecha":"20-06","horario":"15:30"},
{"tallerNumero":39,"nombre":"Ama Silveyra, canto","descripccion":"","categoria":"musica","taller":"María Iturralde","dia":"Sab. 20","hora":"16hs","fecha":"20-06","horario":"16:00"},
{"tallerNumero":39,"nombre":"mural en vivo","descripccion":" Felicitas Beckdorf y María Iturralde.","categoria":"performance","taller":"María Iturralde","dia":"Dom. 21","hora":"16hs","fecha":"21-06","horario":"16:00"},
{"tallerNumero":39,"nombre":"El Garca de Noé","descripccion":"(se suspende por lluvia)","categoria":"musica","taller":"María Iturralde","dia":"Dom. 28","hora":"17hs","fecha":"28-06","horario":"17:00"},
{"tallerNumero":39,"nombre":"El Garca de Noé","descripccion":"(se suspende por lluvia)","categoria":"musica","taller":"María Iturralde","dia":"Dom. 21","hora":"17hs","fecha":"21-06","horario":"17:00"},
{"tallerNumero":39,"nombre":"Artistas invitadas","descripccion":"Ana Noguer, escultura; Nuria Velázquez, Camila Mack, Inés Donelly, grabado; Patricia Geisen, cerámica; Joaquina Silveyra, fotografía; Felicitas Beckdorf, pinturas, tejas y macetas intervenidas; Carolina Beckdorf, de luces y colores (diseños).","categoria":"exposiciones","taller":"María Iturralde","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":40,"nombre":"Barro en la plaza","descripccion":" Actividad con arcilla para toda la familia. ","categoria":"familiar","taller":"AMBOS MUNDOS","dia":"sábados","hora":"16hs","fecha":"['20-6','27-6']","horario":"16:00"},
{"tallerNumero":40,"nombre":"Bingo & Arte","descripccion":"¡Apostale al arte y ganate una obra!","categoria":"familiar","taller":"AMBOS MUNDOS","dia":"Sab. 27","hora":"18hs","fecha":"27-06","horario":"18:00"},
{"tallerNumero":40,"nombre":"Crudo","descripccion":"Muestra de cerámica  por Desiree de Rider, Lucila Guerrero, María Villanueva.","categoria":"exposiciones","taller":"AMBOS MUNDOS","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":40,"nombre":"El Triángulo Culinario","descripccion":". Gastronomía & Alimentación.","categoria":"gastronomia","taller":"AMBOS MUNDOS","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":41,"nombre":"Taller de collage y técnicas mixtas para chicos","descripccion":"Intervención del público con distintos materiales de una gigantofotografía. Domingo 28, se sortea entre los participantes.","categoria":"chicos","taller":"La Ronda","dia":"Domingos","hora":"16hs","fecha":"['21-6','27-6']","horario":"16:00"},
{"tallerNumero":41,"nombre":"Ine Vernet","descripccion":"","categoria":"musica","taller":"La Ronda","dia":"Sab. 20","hora":"18hs","fecha":"20-06","horario":"18:00"},
{"tallerNumero":41,"nombre":"Matrimonios: intervención de fotografías de Cecilia Espinosa, técnicas mixtas.","descripccion":"Cecilia Espinosa, Victoria Espinosa, Agustina Espinosa, Analía Brown, Luli Guerrero, Viktor Nash y Laura Quesada.","categoria":"exposiciones","taller":"La Ronda","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":41,"nombre":"Fresco , batata y otras uniones para toda la vida.","descripccion":"","categoria":"gastronomia","taller":"La Ronda","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":42,"nombre":"Norma Aguilar: taller activo de pintura y ensamble para participantes de toda edad.","descripccion":"","categoria":"familiar","taller":"El taller de Inés Rey","dia":"Sab. 27","hora":"de 14 a 17hs","fecha":"27-06","horario":"14:00"},
{"tallerNumero":42,"nombre":"Inés Rey, charla y demostración de técnica.","descripccion":"","categoria":"performance","taller":"El taller de Inés Rey","dia":"Sábado 27 y Domingo 28","hora":"de 14 a 18hs","fecha":"['27-6','28-6']","horario":"14:00"},
{"tallerNumero":42,"nombre":"Artistas Invitadas","descripccion":"Norma Aguilar, Nora López, Mayte Stinga","categoria":"exposiciones","taller":"El taller de Inés Rey","dia":"Sábado 27 y Domingo 28","hora":"de 14 a 18hs","fecha":"['27-6','28-6']","horario":"14:00"},
{"tallerNumero":42,"nombre":"Pasteles y dulces por jóvenes artistas","descripccion":"Café, mate y chocolate ¡y tu obra llevate!","categoria":"gastronomia","taller":"El taller de Inés Rey","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":42,"nombre":"Nora López: fotografías intervenidas, foto, pintura","descripccion":"Muestra y demostración permanente.","categoria":"performance","taller":"El taller de Inés Rey","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":43,"nombre":"Collage  Grupo Chasco!","descripccion":"clase de introducción a la técnica del collage. Con inscripción previa: collageartsi@gmail.com","categoria":"exposiciones","taller":"Federico Hurtado","dia":"sábados y domingos","hora":"de 15 a 16.30hs","fecha":"['20-6','21-6','27-6','28-6']","horario":""},
{"tallerNumero":44,"nombre":"charla acerca de la implementación del arte-terapia en la actualidad.","descripccion":"","categoria":"performance","taller":"Lic Vivi Grotewold","dia":"sábados y domingos","hora":"17hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"17:00"},
{"tallerNumero":44,"nombre":"Arte terapia + taller creativo: pintura,fotografía, objetos.","descripccion":"","categoria":"exposiciones","taller":"Lic Vivi Grotewold","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":45,"nombre":"Artistas invitados","descripccion":"Diego Solsona, escultura; Andrea Lichtenfels, diseño; Laura Tarsitano, pintura; Paula Iglesias, grabado + impresión; María Macardle, pintura + arte reciclado; Paula Bladimirsquy, calado en papel","categoria":"exposiciones","taller":"Casa taller Manzone","dia":"sábados y domingos","hora":"de 14 a 18hs","fecha":"['20-6','21-6','27-6','28-6']","horario":"14:00"},
{"tallerNumero":46,"nombre":"Varieté!","descripccion":"","categoria":"familiar","taller":"Crear Vale la Pena","dia":"Sab. 27","hora":"19hs","fecha":"27-06","horario":"19:00"},
{"tallerNumero":46,"nombre":"Bandas en vivo, baile, mural comunitario, feria artesanal, proyecciones y actividades para toda la familia.","descripccion":"","categoria":"exposiciones","taller":"Crear Vale la Pena","dia":"Sábado 20 y 27","hora":"de 14 a 18hs","fecha":"['20-6','27-6']","horario":"14:00"},
{"tallerNumero":47,"nombre":"Mano a mano - Encuentro entre galeristas.Invitadas: Clara Martínez (Galería Jacques Martínez) / Florencia Braga Menéndez (Braga Menéndez Arte Contemporáneo).Exponentes de dos galerías que marcaron la historia del comercio de arte argentino en diferentes épocas, comparten sus miradas desmitificadoras sobre el mercado del arte, sus posibilidades y sus proyecciones.","descripccion":"","categoria":"exposiciones","taller":"Roque Saenz Peña","dia":"Sábado 20 y 27","hora":"19hs","fecha":"['23-6']","horario":"19:00"}


]
  return {
    getAll: function() {
      return actividadesDB;
    },
    talleres: function(){
      return talleresDB
    },
    categorias : function(){
      return categoriesList
    },
    veladasValientes: function(){
      return veladasValientes
    }
  }
});
