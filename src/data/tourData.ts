import salinasImg from '../assets/images/itinerary_salinas_grandes_1794435884862.jpg';
import tilcaraImg from '../assets/images/itinerary_tilcara_pucara_1794435886180.jpg';
import hornocalImg from '../assets/images/itinerary_hornocal_14_colores_1794435886096.jpg';

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  subtitle: string;
  heroImage: string;
  imageAlt: string;
  altitudeRange: string;
  totalDistance: string;
  bestHour: string;
  highlights: string[];
  timeline: {
    time: string;
    activity: string;
    description: string;
    badge?: string;
  }[];
  insiderTip: string;
  diningRecommendation: {
    place: string;
    dish: string;
  };
}

export interface PackingItem {
  id: string;
  name: string;
  category: 'capas' | 'solar' | 'puna' | 'equipo';
  priority: 'indispensable' | 'recomendado';
  note: string;
}

export const ITINERARY: ItineraryDay[] = [
  {
    dayNumber: 1,
    title: 'Purmamarca, Los Colorados & Salinas Grandes',
    subtitle: 'El despertar entre tonos ocres y el mar blanco a 3.450 metros',
    heroImage: salinasImg,
    imageAlt: 'Salinas Grandes con piletón de agua turquesa bajo el cielo andino',
    altitudeRange: '2.190 msnm a 3.450 msnm (Paso Lipán: 4.170 msnm)',
    totalDistance: '140 km ida y vuelta por RN 52 asfaltada',
    bestHour: '08:30 para la cara este del cerro · 16:30 para reflejos en Salinas',
    highlights: [
      'Cerro de los Siete Colores con iluminación matinal',
      'Paseo de los Colorados entre farallones de arcilla',
      'Cuesta de Lipán y avistaje de vicuñas',
      'Piletones cristalinos y artesanos de sal en Salinas Grandes',
    ],
    timeline: [
      {
        time: '08:00',
        activity: 'Amanecer en Purmamarca y Cerro de los Siete Colores',
        description:
          'La luz matutina impacta de lleno sobre las capas sedimentarias del cerro (formado hace más de 600 millones de años). Momento ideal para fotografía sin multitudes.',
        badge: 'Fotografía clave',
      },
      {
        time: '09:30',
        activity: 'Trekking suave por el Paseo de los Colorados',
        description:
          'Circuito peatonal de 3 km alrededor del pueblo. Caminata entre cañadones rojizos, cardones gigantes y formaciones geológicas monumentales.',
      },
      {
        time: '12:00',
        activity: 'Almuerzo regional en la plaza de Purmamarca',
        description:
          'Empanadas jujeñas cortadas a cuchillo, cazuela de llama y tamales envueltos en chala fresca, acompañados de música folclórica en vivo.',
      },
      {
        time: '14:00',
        activity: 'Ascenso a la Cuesta de Lipán hacia la Puna',
        description:
          'Ruta zigzagueante de ingeniería asombrosa. Parada obligatoria en el monolito Abra de Potrerillos a 4.170 msnm para contemplar la quebrada desde las nubes.',
      },
      {
        time: '16:00',
        activity: 'Inmensidad blanca en Salinas Grandes',
        description:
          'Caminata guiada con cooperativa local sobre el manto salino de 212 km². Ojos de agua turquesa, fotos de perspectiva y atardecer dorado en el silencio absoluto.',
        badge: 'Imperdible',
      },
      {
        time: '19:30',
        activity: 'Regreso y peña con guitarreros en Purmamarca',
        description:
          'Cena íntima con degustación de Torrontés y vinos de extrema altura de la Quebrada.',
      },
    ],
    insiderTip:
      'En Salinas Grandes el reflejo solar es enceguecedor. Llevá gafas con filtro UV400 y protector FPS 50+. Abrigarse para el descenso de temperatura brusco a las 18:00.',
    diningRecommendation: {
      place: 'El Manantial del Silencio o Pedro Pancho',
      dish: 'Pastel de choclo y bondiola marinada en reduction de torrontés',
    },
  },
  {
    dayNumber: 2,
    title: 'Tilcara, Fortaleza de Pucará & Huacalera',
    subtitle: 'Arqueología preincaica, cañones milenarios y cruce del Trópico',
    heroImage: tilcaraImg,
    imageAlt: 'Ruinas de piedra del Pucará de Tilcara rodeadas de cardones',
    altitudeRange: '2.460 msnm a 2.700 msnm',
    totalDistance: '45 km sobre RN 9',
    bestHour: '10:00 para el Pucará · 15:00 para la Garganta del Diablo',
    highlights: [
      'Pucará de Tilcara y Jardín Botánico de Altura',
      'Trekking a la Garganta del Diablo sobre el río Huasamayo',
      'Monolito del Trópico de Capricornio en Huacalera',
      'Mercado de artesanos y orfebrería tilcareña',
    ],
    timeline: [
      {
        time: '09:00',
        activity: 'Pucará de Tilcara y Jardín Botánico',
        description:
          'Poblado fortificado construido por los tilcaras en el siglo XII. Caminata interpretativa entre corrales, viviendas de pirca y cardones centenarios.',
        badge: 'Patrimonio Arqueológico',
      },
      {
        time: '11:30',
        activity: 'Museo Arqueológico Dr. Eduardo Casanova',
        description:
          'Colección invaluable de cerámicas andinas, textiles y piezas de la cultura aguada, santamariana e incaica frente a la plaza principal.',
      },
      {
        time: '13:00',
        activity: 'Almuerzo en patios tilcareños',
        description:
          'Locro criollo pulsudo, tablas de quesos de cabra criollos y dulce de cayote con nuez en casonas coloniales.',
      },
      {
        time: '15:00',
        activity: 'Cañón y Cascada de la Garganta del Diablo',
        description:
          'Trekking por el desfiladero de roca viva donde el río Huasamayo cae en una cascada natural de 15 metros. Paisaje geológico sobrecogedor.',
        badge: 'Trekking suave',
      },
      {
        time: '17:30',
        activity: 'Huacalera y el Trópico de Capricornio',
        description:
          'Parada en el reloj solar que marca la línea exacta del Trópico de Capricornio, con los farallones coloreados de la posta colonial de fondo.',
      },
      {
        time: '20:30',
        activity: 'Noche bohemia en peñas de Tilcara',
        description:
          'Música en vivo con sikus, charangos y bombos legüeros en peñas legendarias como La Chapanay.',
      },
    ],
    insiderTip:
      'Comprá un ramo fresco de muña-muña y rica-rica en el mercado municipal; infusionadas en agua caliente son el mejor digestivo andino y perfuman el mate.',
    diningRecommendation: {
      place: 'El Patio de Tilcara o Los Puestos',
      dish: 'Trucha de río a la chapa con quinoa tostada y papines andinos',
    },
  },
  {
    dayNumber: 3,
    title: 'Humahuaca, Uquía & Serranía del Hornocal',
    subtitle: 'Ángeles arcabuceros, arcillas rojas y los 14 colores a 4.350m',
    heroImage: hornocalImg,
    imageAlt: 'Serranía del Hornocal con crestas triangulares de 14 colores',
    altitudeRange: '2.800 msnm a 4.350 msnm (Mirador Hornocal)',
    totalDistance: '90 km combinando asfalto y ripio consolidado',
    bestHour: '15:30 a 17:30 (la luz del oeste revela la gama completa de los 14 colores)',
    highlights: [
      'Iglesia San Francisco de Paula en Uquía con arte cusqueño',
      'Paseo por la Quebrada de las Señoritas',
      'Pueblo histórico de Humahuaca y Torre de Santa Bárbara',
      'Espectáculo cromático del Cerro de los 14 Colores (Hornocal)',
    ],
    timeline: [
      {
        time: '09:00',
        activity: 'Uquía y los Ángeles Arcabuceros',
        description:
          'Capilla colonial del siglo XVII que custodia una de las colecciones más enigmáticas del continente: 9 lienzos cusqueños de ángeles alados armados con arcabuces españoles.',
      },
      {
        time: '10:30',
        activity: 'Trekking a la Quebrada de las Señoritas',
        description:
          'Cañón rojizo esculpido por el viento. Cavernas de arcilla carmesí donde la leyenda ancestral relata el refugio de princesas incas protegiendo sus tesoros.',
        badge: 'Mística andina',
      },
      {
        time: '13:00',
        activity: 'Pueblo histórico de Humahuaca',
        description:
          'Paseo por las calles empedradas, visita al Monumento a la Independencia y bendición mecánica de San Francisco Solano a las 12:00 desde el campanario del Cabildo.',
      },
      {
        time: '15:30',
        activity: 'Ascenso en 4x4 a la Serranía del Hornocal',
        description:
          'Camino panorámico de montaña hasta el mirador a 4.350 msnm. Al ponerse el sol, las formaciones calizas plegadas en V exhiben 14 franjas minerales que van del ocre al violeta profundo.',
        badge: 'Punto Culminante',
      },
      {
        time: '18:00',
        activity: 'Brindis de despedida con vista al Hornocal',
        description:
          'Mate cocido con hierbas de altura, tortillas a la parrilla y contemplación del silencio andino.',
      },
    ],
    insiderTip:
      'Al llegar al mirador del Hornocal (4.350m), no corras ni camines apurado. Mantené respiración pausada, llevá caramelos de coca y abrigarte con gorro y campera de pluma porque el viento es helado.',
    diningRecommendation: {
      place: 'La Casona de Humahuaca o Pachamanca',
      dish: 'Cazuela de cordero quebradeño con papas oca y ají de gallina andino',
    },
  },
];

export const PACKING_ITEMS: PackingItem[] = [
  // Capas
  {
    id: 'pack_1',
    name: 'Campera cortaviento impermeable o de pluma',
    category: 'capas',
    priority: 'indispensable',
    note: 'La temperatura baja a 4°C al caer el sol y en la cima del Hornocal.',
  },
  {
    id: 'pack_2',
    name: 'Polar o buzo abrigado (segunda capa)',
    category: 'capas',
    priority: 'indispensable',
    note: 'Fácil de poner y sacar según la hora del día (método cebolla).',
  },
  {
    id: 'pack_3',
    name: 'Remeras transpirables y de manga larga liviana',
    category: 'capas',
    priority: 'indispensable',
    note: 'El sol de mediodía calienta pero la radiación quema la piel descubierta.',
  },
  {
    id: 'pack_4',
    name: 'Pantalones cómodos de trekking o cargo',
    category: 'capas',
    priority: 'recomendado',
    note: 'Ideales si son desmontables para adaptarse al calor del mediodía.',
  },
  {
    id: 'pack_5',
    name: 'Gorro de lana o vicuña y cuellito térmico',
    category: 'capas',
    priority: 'indispensable',
    note: 'Fundamental para Salinas Grandes al atardecer y Hornocal.',
  },

  // Protección Solar & Altura
  {
    id: 'pack_6',
    name: 'Gafas de sol con filtro UV400 categoría 3 o 4',
    category: 'solar',
    priority: 'indispensable',
    note: 'El reflejo en Salinas Grandes es cegador e irrita los ojos rápidamente.',
  },
  {
    id: 'pack_7',
    name: 'Protector solar facial y corporal FPS 50+',
    category: 'solar',
    priority: 'indispensable',
    note: 'A más de 2.500m la capa atmosférica filtra menos radiación ultravioleta.',
  },
  {
    id: 'pack_8',
    name: 'Bálsamo labial con manteca de cacao y FPS',
    category: 'solar',
    priority: 'indispensable',
    note: 'El aire del altiplano tiene humedad menor al 15% y agrieta los labios.',
  },
  {
    id: 'pack_9',
    name: 'Sombrero de ala ancha o gorra con visera',
    category: 'solar',
    priority: 'indispensable',
    note: 'Protección para cuello, orejas y rostro en caminatas.',
  },
  {
    id: 'pack_10',
    name: 'Botella térmica reutilizable (1 a 1.5 litros)',
    category: 'solar',
    priority: 'indispensable',
    note: 'Beber 2.5 a 3L diarios es la clave número uno contra el apunamiento.',
  },

  // Salud & Puna
  {
    id: 'pack_11',
    name: 'Hojas de coca seleccionadas y bicarbonato (yista)',
    category: 'puna',
    priority: 'indispensable',
    note: 'El acullico oxigena la sangre de forma natural y milenaria.',
  },
  {
    id: 'pack_12',
    name: 'Caramelos de coca, jengibre o propóleo',
    category: 'puna',
    priority: 'recomendado',
    note: 'Alivian la sequedad de garganta y ayudan en los ascensos en vehículo.',
  },
  {
    id: 'pack_13',
    name: 'Solución salina / gotas nasales y lágrimas artificiales',
    category: 'puna',
    priority: 'recomendado',
    note: 'El ambiente árido reseca las fosas nasales y la vista.',
  },
  {
    id: 'pack_14',
    name: 'Botiquín personal (analgésicos para cefalea)',
    category: 'puna',
    priority: 'indispensable',
    note: 'Ibuprofeno o paracetamol por si aparece dolor de cabeza leve al aclimatar.',
  },

  // Calzado, Equipo & Logística
  {
    id: 'pack_15',
    name: 'Calzado de trekking con buen dibujo (ya amoldado)',
    category: 'equipo',
    priority: 'indispensable',
    note: 'Piedra suelta, senderos de arcilla y salitre requieren buen agarre.',
  },
  {
    id: 'pack_16',
    name: 'Mochila de mano / día (20 a 30 litros)',
    category: 'equipo',
    priority: 'indispensable',
    note: 'Para llevar abrigo, agua, snacks y cámara durante las salidas del día.',
  },
  {
    id: 'pack_17',
    name: 'Dinero en efectivo (pesos argentinos billetes chicos)',
    category: 'equipo',
    priority: 'indispensable',
    note: 'Muchos artesanos, entradas comunales y comedores rurales no tienen POS/red.',
  },
  {
    id: 'pack_18',
    name: 'Batería externa / Powerbank de 10.000 mAh',
    category: 'equipo',
    priority: 'recomendado',
    note: 'Las bajas temperaturas reducen la autonomía de las baterías de celular.',
  },
];

export const GENERAL_TIPS = [
  {
    title: 'Aclimatación en el Día 1',
    description:
      'Hacer base en Purmamarca (2.324m) o Tilcara (2.460m) es ideal porque tienen menor altitud que Humahuaca o La Quiaca. No comer pesado el primer mediodía y evitar el alcohol en exceso.',
  },
  {
    title: 'Amplitud Térmica Andina',
    description:
      'En un mismo día podés experimentar 26°C al sol del mediodía y 3°C a las 21:00 hs. Vestirse siempre con el sistema de 3 capas superpuestas.',
  },
  {
    title: 'Cuándo Viajar',
    description:
      'De abril a noviembre los días son soleados con cielo azul diáfano y cero lluvias. De diciembre a marzo es la temporada de lluvias de verano y el célebre Carnaval Quebradeño.',
  },
  {
    title: 'Cuidado del Patrimonio',
    description:
      'No pisar las pircas del Pucará, no extraer piedras ni minerales de los cerros ni dejar residuos en los senderos sagrados de la Pachamama.',
  },
];

export const FAQS = [
  {
    question: '¿Qué nivel de dificultad física tiene el itinerario?',
    answer:
      'Es de dificultad baja a moderada. Los senderos peatonales (Paseo de los Colorados, Pucará, Quebrada de las Señoritas) son de ritmo pausado y aptos para toda la familia. En el mirador del Hornocal (4.350m) se camina muy poco.',
  },
  {
    question: '¿Cómo funciona la reserva por WhatsApp?',
    answer:
      'Al presionar el botón de WhatsApp se abrirá tu chat directamente con nuestro equipo de guías locales matriculados de Jujuy, con el mensaje ya armado con tus fechas y cantidad de pasajeros para coordinar traslados, alojamiento y presupuesto personalizado.',
  },
  {
    question: '¿Se necesita camioneta 4x4?',
    answer:
      'Las rutas principales (RN 9 y RN 52 a Salinas) son de asfalto impecable. El tramo final hacia el Hornocal es de ripio consolidado en pendiente; en nuestras escapadas se coordina con choferes baqueanos autorizados.',
  },
  {
    question: '¿Hay señal de celular e internet?',
    answer:
      'En los centros urbanos de Purmamarca, Tilcara y Humahuaca hay buena señal 4G (especialmente Claro y Personal). En los pasos de montaña (Lipán, Hornocal) la cobertura se corta temporalmente.',
  },
];

export const WHATSAPP_CONFIG = {
  phoneNumber: '5493884123456', // Formato internacional Jujuy, Argentina
  displayNumber: '+54 9 388 412-3456',
  agencyName: 'Quebrada Andina Expediciones',
  location: 'Purmamarca & Tilcara, Jujuy · Argentina',
};

export function buildWhatsAppLink(options: {
  daySelection?: number | 'all';
  date?: string;
  passengers?: number;
  experienceType?: string;
  lodging?: string;
}): string {
  const {
    daySelection = 'all',
    date = '',
    passengers = 2,
    experienceType = 'Escapada Clásica con Traslados',
    lodging = 'Hostería boutique en Purmamarca/Tilcara',
  } = options;

  let message = `¡Hola ${WHATSAPP_CONFIG.agencyName}! 🏔️ Quiero consultar por la *Escapada de 3 Días por la Quebrada de Humahuaca*.\n\n`;

  if (daySelection !== 'all') {
    message += `• *Consulta puntual:* Día ${daySelection}\n`;
  } else {
    message += `• *Programa:* Circuito Completo 3 Días (Purmamarca, Tilcara, Hornocal)\n`;
  }

  message += `• *Cantidad de personas:* ${passengers} pasajero${passengers > 1 ? 's' : ''}\n`;
  if (date) {
    message += `• *Fecha estimada:* ${date}\n`;
  }
  message += `• *Tipo de experiencia:* ${experienceType}\n`;
  message += `• *Alojamiento preferido:* ${lodging}\n\n`;
  message += `¿Me podrían brindar disponibilidad, tarifas actualizadas y detalles de los traslados? ¡Muchas gracias!`;

  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
}
