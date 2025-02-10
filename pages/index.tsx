import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-800 to-purple-900 text-white overflow-hidden">
      {/* Fondo futurista animado */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[url('/futuristic-bg.svg')] bg-cover bg-center opacity-20 animate-fadeIn"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-purple-800 mix-blend-overlay opacity-60"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-6 py-10 relative z-10">
        {/* Encabezado */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight">NovaDev</h1>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-purple-900 transition duration-300"
          >
            ¡Comenzar!
          </Link>
        </header>

        {/* Sección de Innovación */}
        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Innovar con un toque futurista
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Transforma tus ideas en soluciones digitales de vanguardia y lleva tu
            negocio al futuro.
          </p>
        </section>

        {/* Sección de Servicios */}
        <section className="grid gap-10 md:grid-cols-3 mb-20">
          <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-2">Software a la medida</h3>
            <p className="text-lg">
              Soluciones personalizadas que se adaptan a las necesidades únicas de
              tu negocio.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-2">
              Optimiza tu operación
            </h3>
            <p className="text-lg">
              Automatiza procesos y reduce costos con tecnología de punta y
              procesos eficientes.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg transition transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-2">
              Conecta con tus clientes
            </h3>
            <p className="text-lg">
              Establece relaciones duraderas mediante experiencias digitales
              interactivas.
            </p>
          </div>
        </section>

        {/* Sección de Reviews */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            ¿Qué dicen de nosotros?
          </h2>
          <div className="space-y-8">
            <article className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg">
              <p className="text-lg italic">
                &quot;La aplicación se desarrolló en un tiempo récord con calidad
                superior. Realmente marcó la diferencia en nuestros procesos.&quot;
              </p>
              <p className="text-right font-bold mt-4">- Ficontabo</p>
            </article>
            <article className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg">
              <p className="text-lg italic">
                &quot;Optimizar tareas manuales ha revolucionado nuestro negocio,
                permitiéndonos crecer y brindar un servicio excepcional.&quot;
              </p>
              <p className="text-right font-bold mt-4">- Ficontabo</p>
            </article>
          </div>
        </section>

        {/* Sección de Estadísticas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg text-center">
              <h3 className="text-xl font-medium mb-2">
                Profesionales Capacitados
              </h3>
              <p className="text-4xl font-extrabold">5</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg text-center">
              <h3 className="text-xl font-medium mb-2">Usuarios Impactados</h3>
              <p className="text-4xl font-extrabold">3+</p>
            </div>
            <div className="p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-lg shadow-lg text-center">
              <h3 className="text-xl font-medium mb-2">Aliados</h3>
              <p className="text-4xl font-extrabold">2k</p>
            </div>
          </div>
        </section>

        {/* Llamada a la acción final */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para el futuro?</h2>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-purple-900 transition duration-300"
          >
            Contáctanos
          </Link>
        </section>
      </div>
    </div>
  );
}
