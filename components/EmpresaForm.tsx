import { useState, useEffect } from "react";

interface Empresa {
  id: number;
  nombre: string;
  descripcion: string;
  color: string;
}

interface EmpresaFormProps {
  editingEmpresa: Empresa | null;
  onClose: () => void;
}

export default function EmpresaForm({ editingEmpresa, onClose }: EmpresaFormProps) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState("#000000");

  // Prellenar el formulario si se está editando
  useEffect(() => {
    if (editingEmpresa) {
      setNombre(editingEmpresa.nombre);
      setDescripcion(editingEmpresa.descripcion);
      setColor(editingEmpresa.color);
    } else {
      setNombre("");
      setDescripcion("");
      setColor("#000000");
    }
  }, [editingEmpresa]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = editingEmpresa
      ? { id: editingEmpresa.id, nombre, descripcion, color }
      : { nombre, descripcion, color };

    const endpoint = editingEmpresa ? "/api/company/update" : "/api/company/create";
    const method = editingEmpresa ? "PUT" : "POST";

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert(`¡Empresa ${editingEmpresa ? "actualizada" : "creada"}!`);
        onClose();
      } else {
        const errorData = await res.json();
        alert(`Error ${editingEmpresa ? "actualizando" : "creando"} empresa: ${errorData.message || "desconocido"}`);
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl transition transform scale-95">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {editingEmpresa ? "Editar Empresa" : "Nueva Empresa"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Descripción</label>
            <textarea
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-lg text-gray-800">Color:</label>
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              {editingEmpresa ? "Actualizar Empresa" : "Crear Empresa"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
