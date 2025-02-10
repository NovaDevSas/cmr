import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Plus, Edit, Trash2 } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import EmpresaForm from "../../components/EmpresaForm";
interface Empresa {
  id: number;
  nombre: string;
  descripcion: string;
  color: string;
}

export default function Empresas() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEmpresa, setEditingEmpresa] = useState<Empresa | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/company")
      .then((res) => res.json())
      .then((data) => setEmpresas(data));
  }, []);

  const openNewModal = () => {
    setEditingEmpresa(null);
    setModalOpen(true);
  };

  const openEditModal = (empresa: Empresa) => {
    setEditingEmpresa(empresa);
    setModalOpen(true);
  };

  // Cuando se cierre el modal, recargar la lista (opcional)
  const handleModalClose = () => {
    setModalOpen(false);
    // Recargar la lista de empresas tras cambios
    fetch("/api/company")
      .then((res) => res.json())
      .then((data) => setEmpresas(data));
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Lista de Empresas</h1>
          <button
            onClick={openNewModal}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            <Plus size={20} className="mr-2" />
            Nueva Empresa
          </button>
        </div>

        {/* Tabla de empresas */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse w-full">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Descripción</th>
                <th className="px-6 py-3">Color</th>
                <th className="px-6 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empresas.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500">
                    No hay empresas registradas.
                  </td>
                </tr>
              ) : (
                empresas.map((empresa) => (
                  <tr
                    key={empresa.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">{empresa.id}</td>
                    <td className="px-6 py-4">{empresa.nombre}</td>
                    <td className="px-6 py-4">{empresa.descripcion}</td>
                    <td className="px-6 py-4">
                      <span
                        style={{ backgroundColor: empresa.color }}
                        className="px-3 py-1 rounded text-white shadow"
                      >
                        {empresa.color}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button
                        onClick={() => openEditModal(empresa)}
                        className="text-yellow-500 hover:text-yellow-600 transition"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        onClick={() =>
                          alert("Lógica de eliminación pendiente")
                        }
                        className="text-red-500 hover:text-red-600 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal con el formulario */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <EmpresaForm
              editingEmpresa={editingEmpresa}
              onClose={handleModalClose}
            />
          </div>
        </div>
      )}
    </div>
  );
}