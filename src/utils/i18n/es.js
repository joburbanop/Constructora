const es = {
  header: {
    inicio: 'Inicio',
    proyectos: 'Proyectos',
    nosotros: 'Nosotros',
    contactanos: 'Contáctanos',
  },
  renders: {
    titulo: 'Tu nuevo comienzo\nempieza aquí',
    desc: 'Explora nuestras casas seleccionadas para quienes buscan más que un lugar donde vivir.',
    beneficios: [
      {
        titulo: 'Encuentra la casa ideal',
        desc: 'Explora fácilmente propiedades que se ajustan a lo que buscas: ubicación, tamaño, estilo y entorno.'
      },
      {
        titulo: 'Asesoría personalizada',
        desc: 'Nuestro equipo está listo para escucharte, responder tus dudas y acompañarte en todo el proceso.'
      },
      {
        titulo: 'Listas para habitar',
        desc: 'Casas con entrega inmediata, documentación al día y todos los detalles listos para mudarte sin preocupaciones.'
      }
    ]
  },
  proyectos: {
    titulo: 'Proyectos en marcha',
    subtitulo: 'Somos expertos constructores con 17 años de trayectoria en el sur occidente colombiano y ahora en Estados Unidos.',
    condominio: 'Condominio',
    urbanizacion: 'Urbanización',
    locales: 'Locales',
    rincon_titulo: 'Exclusivo condominio campestre',
    rincon_desc: 'Con zonas verdes, 16 amenidades y zona comercial',
    sanmiguel_titulo: 'Urbanización abierta',
    sanmiguel_desc: 'Ubicada en Rozo, sobre la vía que conduce a Cerrito.',
    marbella_titulo: 'Urbanización abierta',
    marbella_desc: 'Para construir a su gusto. Lotes más amplios y con el mejor precio de la zona. Sur de Jamundí',
    coral_titulo: 'Locales comerciales',
    coral_desc: 'La mejor oportunidad para invertir con seguridad.',
    jamundi_colombia: 'Jamundí, Colombia',
    usa: 'Estados Unidos',
    boton: 'Ver más',
    beneficio_titulo1: 'Somos',
    beneficio_titulo2: 'constructores con 17 años de trayectoria',
    beneficio_sub: 'en el sur occidente colombiano',
    beneficio1_titulo: 'Inversión segura',
    beneficio1_desc: 'Tu dinero está protegido y respaldado en cada proyecto.',
    beneficio2_titulo: 'Facilidades de pago',
    beneficio2_desc: 'Opciones flexibles para que puedas invertir sin preocupaciones.',
    beneficio3_titulo: 'Elige tu próximo hogar',
    beneficio3_desc: 'Encuentra la vivienda perfecta para ti y tu familia.',
    proximamente: 'Próximamente',
  },

  // informaciòn componentes que forman infoRinconLago.jsx
 
    // iformaciòn componente DetallesProyecto
 rincon_detalle: {
  espacios_titulo: 'Espacios comunes', 
  espacios_desc:'16 amenidades en 16.600 mts² de zonas comunes',
  titulo: 'Rincón del Lago',
  subtitulo: 'Más cerca de tus sueños',
  subtitulo_2: 'CONDOMINIO CAMPESTRE',
  descripcion: 'El condominio Rincón del Lago se ubica en Alfaguara, Jamundí, a solo 20 minutos de Cali y se destaca su entorno natural. Todas las vías asfaltadas, óptimos servicios públicos, telecomunicaciones, monitoreo permanente para disfrutar la seguridad, exclusividad y comodidad de vivir mejor. Obra en desarrollo continuo.',
  descripcion_2: 'Aprovecha precios de preventa en lotes. Entrega el 30 de abril de 2026.',
  // claves componente EspaciosCompartidos.jsx  del js infoEspacios.js
  espacios: [
    'bronceo',
    'piscina',
    'social',
    'gym',
    'voley',
    'multiple',
    'infantiles',
    'verdes',
    'senderos',
    'zonapet',
    'bbq',
    'comercial'
  ]
},
 // informaciòn componente AreaPrecioUbic.jsx
 info_AreaPrecioUbic: {
  rincon_lago: {
    area: 'Área',
    area_desc: 'Lotes desde 150 m² a 346 m² para autoconstruir con arquitectura unificada. Puede adecuar el interior de la casa a su gusto y necesidades con los materiales y acabados que prefiera. Disfruta de casas con ubicación tipo esquina y jardines privados que te brindan mayor privacidad. Elige también lotes únicos con zonas verdes alrededor y sin vecinos contiguos.',
    precio: 'Precio',
    precio_desc: 'Desde $65.000.000',
    ubicacion: 'Ubicación',
    ubicacion_desc: 'Jamundí, Colombia',
  },
  proyecto2: {
    slide_area_titulo: 'Área útil',
    slide_area_subtitulo: '160 m² de construcción',
   
  }
},

// informacionn componente infoZigZag.jsx
info_ZigZag_rincon: {
  elemento1: {
    titulo: "Lotes personalizables desde 150 m²",
    descripcion: "Lotes desde 150 m² hasta 346 m² para autoconstrucción con arquitectura unificada. Puede adecuar el interior de la casa a su gusto y necesidades, con los materiales y acabados que prefiera."
  },
  elemento2: {
    titulo: "Casas con mayor privacidad",
    descripcion: "Todas las casas son prácticamente esquineras, gracias a sus zonas verdes de retiro privadas."
  },
  elemento3: {
    titulo: "Lotes sin vecinos alrededor",
    descripcion: "Opción de lotes con zona verde alrededor, sin vecinos colindantes."
  },
  elemento4: {
    titulo: "Diseño sugerido con terraza y dos plantas",
    descripcion: "Arquitectura interior sugerida para casa de dos plantas, con opción de terraza, para un total de 230,44 m² construidos en lote de 150 m²."
  }
},

// Titulos componente EspaciosCompartidos.jsx  del js infoEspacios.js
espacios: {
  bronceo: 'Zona bronceo',
  piscina: 'Piscina',
  social: 'Salón social',
  gym: 'Gimnasio',
  voley: 'Voleibol playa',
  multiple: 'Cancha múltiple',
  infantiles: 'Parques infantiles',
  verdes: 'Zonas verdes',
  senderos: 'Senderos verdes',
  zonapet: 'Zona pet',
  bbq: 'Zona BBQ',
  comercial: 'Zona comercial'
},

// información videos de youtube 
videos: {
  rincon: {
    video1: { id: 'BRmd52pMUW4', titulo: 'Presentación Rincón', visible: true },
    render: { id: 'oSlfSdN70jQ', titulo: 'Recorre el Proyecto', visible: false }
  },
},
  entregados: {
    titulo: 'Proyectos entregados',
    puertas_del_sol: 'Puertas del Sol',
    cana_dulce: 'Caña Dulce',
    casa_brava: 'Casa Brava',
    palmeras_italia: 'Palmeras de la Italia',
    lote_medellin: 'Lote en Medellín',
    desc_lote_medellin: 'Perfecto para desarrollo urbano con excelentes servicios.',
    medellin: 'Medellín',
    urbano: 'Urbano',
    accesible: 'Accesible',
    boton: 'Ver proyecto'
  },
  footer: {
    formTitle: '¿Quieres que te contactemos?',
    email: 'Tu correo electrónico',
    telefono: 'Tu número de teléfono',
    enviar: 'Enviar',
    exito: '¡Gracias! Te contactaremos pronto.',
    privacidad: 'Política de Privacidad',
    terminos: 'Términos de Servicio',
    cookies: 'Configuración de Cookies',
    copy: '© 2025 Relume. Todos los derechos reservados.'
  },
  ambito: {
    titulo: 'Ámbito de acción',
    sub: 'Casas de lujo, urbanizaciones, condominios campestres,\nComplejos comerciales, Estaciones de servicio.',
    colombia_title: 'Proyectos Colombia',
    colombia_desc: 'Proyectos exclusivos que combinan lujo y confort en cada rincón.',
    usa_title: 'Proyectos U.S.A',
    usa_desc: 'Proyectos que marcan la diferencia en el mercado inmobiliario actual.',
    lujo_title: 'Casas de Lujo',
    lujo_desc: 'Exclusividad que redefine el confort.',
    boton: 'Ver más'
  },
  slider: {
    home: {
      slide1_title: 'DESCUBRE TU ESPACIO IDEAL',
      slide1_subtitle: 'CASAS, CONDOMINIOS Y LOTES',
      slide2_title: 'VIVE EN EL LUGAR QUE SUEÑAS',
      slide2_subtitle: 'PROYECTOS MODERNOS Y LUGARES DE ALTA VALORACION',
      slide3_title: 'INVIERTE CON CONFIANZA',
      slide3_subtitle: 'PROYECTOS SEGUROS Y DE CALIDAD',
      slide4_title: 'CREA TU FUTURO',
      slide4_subtitle: 'SOLUCIONES INMOBILIARIAS PARA TI',
      boton: 'Contáctanos'
  },
    rincon: {
      slide1_title: 'RINCÓN DEL LAGO: NATURALEZA Y ARQUITECTURA',
      slide1_subtitle: 'Un proyecto pensado para reconectarte con lo esencial',
      slide2_title: 'ESPACIOS MODERNOS EN ENTORNOS VERDES',
      slide2_subtitle: 'Diseño, confort y calidad de vida',
      slide3_title: 'VIVE EN ARMONÍA CON LA NATURALEZA',
      slide3_subtitle: 'Un lugar donde cada detalle cuenta',
      boton: 'Contáctanos'
    
  },
  usa: {
    slide1_title: 'Locales comerciales en USA',
    slide1_subtitle: 'La mejor oportunidad para invertir con seguridad',
    slide2_title: 'Locales comerciales en Cape Coral',
    slide2_subtitle: 'Espacios modernos y rentables',
    slide3_title: 'Inversión en Estados Unidos',
    slide3_subtitle: 'Diversifica tu portafolio con confianza',
    boton: 'Contáctanos'
  }
},

  dividers: {
    proyectos: 'Proyectos',
    entregados: 'Proyectos entregados',
    nosotros: 'Nosotros',
    renders: 'Renders destacados',
    espacios: 'Espacios ',
    galeria: 'Galería',
    detalles: 'Detalles',

  },
  expertos: {
    titulo: "Nuestro equipo de",
    highlight: "Expertos",
    saitama_nombre: "Saitama",
    saitama_cargo: "Asesor inmobiliario",
    saitama_desc: "con amplia experiencia en proyectos de urbanización y desarrollo habitacional. Comprometido con brindar acompañamiento personalizado a cada cliente, garantizando seguridad, confianza y resultados efectivos."
  },
  cta: {
    titulo1: '¿Listo para hacer realidad',
    titulo2: 'tu proyecto',
    inmobiliario: 'inmobiliario',
    desc1: 'Encuentra el lugar ideal para construir tu futuro.',
    desc2: 'Estamos listos para asesorarte en cada paso.',
    boton: 'Contáctanos'
  },
//Pagina de Proyectos USA
  proyectos_usa: {
  titulo: 'Proyectos U.S.A',
  descripcion: `Estamos en Cape Coral, Florida, a 160 millas de Miami. Esta ciudad es conocida como el "País de las Maravillas Costeras”, un verdadero paraíso con canales y ríos para quienes buscan una vida de plenitud y para la práctica de deportes náuticos.

              Inversión y valorización aseguradas.`
},
 proyectos_card_simple: {
    coral_title: 'Locales comerciales, chiquita BLVD, FL',
    coral_desc: 'La mejor oportunidad para invertir con seguridad.',
    casa_usa_1_title: 'Casa unifamiliar en venta',
    casa_usa_1_desc: 'Nueva casa unifamiliar en venta · Lehigh Acres, FL',
    casa_usa_2_title: 'Propiedad vendida',
    casa_usa_2_desc: 'Casa unifamiliar vendida. Lehigh Acres, FL',
    boton: 'Ver más',
    proximamente: 'Próximamente'
  },
};

export default es; 