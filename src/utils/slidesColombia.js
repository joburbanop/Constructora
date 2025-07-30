// Imágenes optimizadas para el slider de Proyectos Colombia (3 slides)
// Usando rutas correctas para Vite

export const slidesColombia = [
  {
    image: new URL('../assets/colombia/dji_0014_colombia.webp', import.meta.url).href,
    title: 'Lotes más grandes y con mejor precio',
    subtitle: 'Facilidad de pago hasta 6 años',
    description: 'Inversión segura en una de las zonas más dinámicas del Valle del Cauca'
  },
  {
    image: new URL('../assets/colombia/rincon_colombia.webp', import.meta.url).href,
    title: 'Conozca las ventajas de construir su casa',
    subtitle: 'Más amplia, mejor presupuesto, mejores acabados',
    description: 'Es momento de separar su lote en Rincón del Lago. Financiación 5 años.'
  },
  {
    image: new URL('../assets/colombia/img_20200130_colombia.webp', import.meta.url).href,
    title: 'Nuestro equipo está listo para escucharte',
    subtitle: 'Asesoría personalizada',
    description: 'Ubicada en Rozo, sobre la vía que conduce a Cerrito. Jamundí, Colombia'
  }
];

export default slidesColombia; 