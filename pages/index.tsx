import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800">
      <div className="container">
        {/* Encabezado */}
        <header className="flex justify-between items-center py-6">
          <h1 className="text-4xl font-bold">NovaDev</h1>
          <Link href="/contact">
            <button className="px-4 py-2">¡Comenzar!</button>
          </Link>
        </header>

        {/* Sección de Innovación */}
        <section className="section text-center">
          <h2 className="text-3xl font-semibold mb-4">Innovar a través de un click</h2>
          <p className="text-lg">Llegó el momento de evolucionar!</p>
        </section>

        {/* Sección de Servicios */}
        <section className="section">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">#1 Software a la medida</h2>
            <p className="text-lg">
              Día a día la industria evoluciona, no te quedes atrás. El software personalizado es una solución diseñada específicamente para satisfacer las necesidades exclusivas de una empresa o individuo. A diferencia del software estándar, que puede ser utilizado por diferentes usuarios, el software personalizado se desarrolla teniendo en cuenta los requisitos específicos de un cliente. Esta personalización garantiza que todas las funciones y características del software se adapten perfectamente a las operaciones y procesos de la empresa, lo que resulta en una mayor eficiencia y productividad. Además, el software personalizado puede ser actualizado y modificado según sea necesario, lo que permite a la empresa mantenerse al día con los cambios en el entorno empresarial y tecnológico. En resumen, el software personalizado ofrece una solución a medida que se adapta perfectamente a las necesidades y objetivos de una empresa o individuo.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">#2 Optimiza tu operación</h2>
            <p className="text-lg">
              Las tareas manuales y operativas, en la mayoría de los casos se pueden agilizar, reduce tiempo y costo de recursos. Para optimizar la operación, es esencial identificar y eliminar cualquier obstáculo o ineficiencia en los procesos. Esto implica analizar de cerca todas las áreas de la operación, desde la producción hasta la logística y el servicio al cliente. Mediante la implementación de métodos y tecnologías más eficientes, se puede mejorar la productividad y reducir los tiempos de espera. Además, es importante capacitar al personal para que utilice las mejores prácticas y esté al tanto de los últimos avances en su campo. Al optimizar la operación, una empresa puede lograr una mayor rentabilidad y ofrecer un mejor servicio a sus clientes.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">#3 Mejora la relación con tus clientes</h2>
            <p className="text-lg">
              La interacción con el cliente es fundamental para el éxito de cualquier negocio. Es la forma en que nos comunicamos y conectamos con nuestros clientes, entendiendo sus necesidades y brindándoles soluciones personalizadas. A través de la interacción con el cliente, podemos obtener comentarios valiosos que nos ayudan a mejorar nuestros productos y servicios. Además, nos permite establecer relaciones duraderas y leales con nuestros clientes, lo que a su vez genera recomendaciones y referencias positivas. La interacción con el cliente puede llevarse a cabo a través de diferentes canales, como el teléfono, el correo electrónico, las redes sociales y el chat en línea. Es importante que esta interacción sea rápida, eficiente y amigable, para que los clientes se sientan valorados y satisfechos con su experiencia.
            </p>
          </div>
        </section>

        {/* Sección de Reviews */}
        <section className="section">
          <h2 className="text-2xl font-semibold mb-4">¿Qué dicen de Nosotros?</h2>
          <div className="card">
            <p className="text-lg italic">&quot;Estoy muy contenta porque ustedes nos entregaron la aplicación en un tiempo récord. Es sorprendente ver cómo han logrado desarrollarla tan rápido y con gran calidad. Su eficiencia y compromiso con el proyecto se reflejan en el resultado final. La aplicación cumple con todas nuestras expectativas y más. Ahora podemos utilizarla para mejorar nuestros procesos y optimizar nuestro trabajo diario. Su equipo ha demostrado estar altamente capacitado y comprometido con su labor. Agradezco sinceramente su esfuerzo y profesionalismo. Estoy seguro de que esta aplicación será un gran éxito y nos ayudará a llevar nuestro negocio al siguiente nivel. ¡Gracias por su excelente trabajo!&quot;</p>
            <p className="text-right font-bold">- Ficontabo</p>
          </div>
          <div className="card">
            <p className="text-lg italic">&quot;Estoy enormemente agradecido porque han optimizado tareas manuales y desgastantes utilizando tecnología. Antes, dedicaba horas interminables a realizar trabajos que requerían un gran esfuerzo físico, lo cual afectaba mi salud y mi bienestar general. Sin embargo, gracias a la implementación de la tecnología, ahora puedo realizar estas tareas de manera más eficiente y con menor desgaste físico. Esto ha mejorado significativamente mi calidad de vida, permitiéndome dedicar más tiempo a actividades que disfruto y a pasar tiempo con mi familia. Estoy realmente impresionado por los avances tecnológicos y agradezco a aquellos que han trabajado arduamente para hacer posible esta optimización en nuestras labores diarias.&quot;</p>
            <p className="text-right font-bold">- Ficontabo</p>
          </div>
        </section>

        {/* Sección de Estadísticas */}
        <section className="section">
          <h2 className="text-2xl font-semibold mb-4">Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-700">Profesionales altamente capacitados con experiencia internacional</h3>
              <p className="text-2xl font-bold text-primary">5</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-gray-700">Usuarios impactados</h3>
              <p className="text-2xl font-bold text-secondary">3+</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-gray-700">Aliados</h3>
              <p className="text-2xl font-bold text-accent">2k</p>
            </div>
          </div>
        </section>

        {/* Llamada a la acción final */}
        <section className="section text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Qué esperas para evolucionar?</h2>
          <Link href="/contact">
            <button className="px-6 py-3">¡Comenzar!</button>
          </Link>
        </section>
      </div>
    </div>
  );
}