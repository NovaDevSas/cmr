import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex-1 p-6">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Panel de Control</h1>
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Sección de Información General */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Total de Empresas</h3>
            <p className="text-2xl font-bold text-blue-500">120</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Total de Usuarios</h3>
            <p className="text-2xl font-bold text-green-500">450</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Registros Hoy</h3>
            <p className="text-2xl font-bold text-indigo-500">35</p>
          </div>
        </div>

        {/* Tabla de Últimos Registros */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse w-full">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Correo</th>
                <th className="px-6 py-3">Empresa</th>
                <th className="px-6 py-3 text-right">Registrado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4">001</td>
                <td className="px-6 py-4">Juan Pérez</td>
                <td className="px-6 py-4">juan@example.com</td>
                <td className="px-6 py-4">Tech Corp</td>
                <td className="px-6 py-4 text-right">Feb 9, 2025</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4">002</td>
                <td className="px-6 py-4">María López</td>
                <td className="px-6 py-4">maria@example.com</td>
                <td className="px-6 py-4">Finanzas SA</td>
                <td className="px-6 py-4 text-right">Feb 9, 2025</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4">003</td>
                <td className="px-6 py-4">Carlos Gómez</td>
                <td className="px-6 py-4">carlos@example.com</td>
                <td className="px-6 py-4">InnovaTech</td>
                <td className="px-6 py-4 text-right">Feb 8, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
