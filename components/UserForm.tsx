import { useState, useEffect } from "react";

interface Company {
  id: number;
  nombre: string;
}

interface User {
  id?: number;
  nombre: string;
  direccion: string;
  correo: string;
  cargo: string;
  empresaId?: number;
  password?: string;
}

interface UserFormProps {
  editingUser: { id: number } | null;
  onClose: () => void;
}

export default function UserForm({ editingUser, onClose }: UserFormProps) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresaId, setEmpresaId] = useState("");
  const [password, setPassword] = useState("");
  const [companies, setCompanies] = useState<Company[]>([]);

  // Cargar el listado de compañías para el dropdown
  useEffect(() => {
    fetch("/api/company")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching companies:", error));
  }, []);

  // Si se está editando, cargamos la información completa del usuario
  useEffect(() => {
    if (editingUser && editingUser.id) {
      fetch(`/api/user?id=${editingUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setNombre(data.nombre || "");
            setDireccion(data.direccion || "");
            setCorreo(data.correo || "");
            setCargo(data.cargo || "");
            setEmpresaId(data.empresaId ? String(data.empresaId) : "");
          }
        })
        .catch((error) => console.error("Error fetching user:", error));
    } else {
      // Nuevo usuario: limpiar campos
      setNombre("");
      setDireccion("");
      setCorreo("");
      setCargo("");
      setEmpresaId("");
      setPassword("");
    }
  }, [editingUser]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: User =
      editingUser && editingUser.id
        ? {
            id: editingUser.id,
            nombre,
            direccion,
            correo,
            cargo,
            empresaId: empresaId === "" ? undefined : Number(empresaId),
          }
        : {
            nombre,
            direccion,
            correo,
            cargo,
            empresaId: empresaId === "" ? undefined : Number(empresaId),
            password,
          };

    const endpoint =
      editingUser && editingUser.id ? "/api/user/update" : "/api/user/create";
    const method = editingUser && editingUser.id ? "PUT" : "POST";

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert(`¡Usuario ${editingUser ? "actualizado" : "creado"}!`);
        onClose();
      } else {
        const errorData = await res.json();
        alert(
          `Error ${
            editingUser ? "actualizando" : "creando"
          } usuario: ${errorData.message || "desconocido"}`
        );
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl transition transform scale-95">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {editingUser && editingUser.id ? "Editar Usuario" : "Nuevo Usuario"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Dirección</label>
            <input
              type="text"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Correo</label>
            <input
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Cargo</label>
            <input
              type="text"
              placeholder="Cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Empresa</label>
            <select
              value={empresaId}
              onChange={(e) => setEmpresaId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            >
              <option value="">Seleccione compañía</option>
              {companies.map((comp) => (
                <option key={comp.id} value={comp.id}>
                  {comp.nombre}
                </option>
              ))}
            </select>
          </div>

          {!editingUser && (
            <div>
              <label className="block text-gray-700 font-medium">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
          )}

          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              {editingUser && editingUser.id ? "Actualizar Usuario" : "Crear Usuario"}
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
