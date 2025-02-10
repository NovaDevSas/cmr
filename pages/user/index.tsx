import { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import UserForm from "../../components/UserForm";

interface User {
  id: number;
  nombre: string;
  correo: string;
  role?: string;
  empresa?: { nombre: string };
}

export default function Usuarios() {
  const [users, setUsers] = useState<User[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<{ id: number } | null>(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("¿Eliminar usuario?")) {
      const res = await fetch("/api/user/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setUsers(users.filter((user) => user.id !== id));
      } else {
        alert("Error eliminando usuario");
      }
    }
  };

  const openNewModal = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const openEditModal = (user: User) => {
    setEditingUser({ id: user.id });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    // Recargar la lista de usuarios tras cambios (opcional)
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Lista de Usuarios</h1>
          <button
            onClick={openNewModal}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            <Plus size={20} className="mr-2" />
            Nuevo Usuario
          </button>
        </div>

        {/* Tabla de usuarios */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse w-full">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700">
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Correo</th>
                <th className="px-6 py-3">Compañía</th>
                <th className="px-6 py-3">Rol</th>
                <th className="px-6 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500">
                    No hay usuarios registrados.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">{user.nombre}</td>
                    <td className="px-6 py-4">{user.correo}</td>
                    <td className="px-6 py-4">
                      {user.empresa ? user.empresa.nombre : "Sin Compañía"}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">
                        {user.role || "Usuario"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button
                        onClick={() => openEditModal(user)}
                        className="text-blue-500 hover:text-blue-600 transition"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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
            <UserForm editingUser={editingUser} onClose={handleModalClose} />
          </div>
        </div>
      )}
    </div>
  );
}