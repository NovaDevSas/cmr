import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { Home, Users, Building, Menu, X, LogOut } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Usuarios", href: "/user", icon: Users },
    { name: "Empresas", href: "/company", icon: Building },
  ];

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <div className={`h-screen bg-white shadow-md transition-all duration-300 flex flex-col ${isOpen ? "w-64" : "w-20"}`}>
      {/* Encabezado */}
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="bg-green-500 text-white px-3 py-1 rounded-md">N</span>
          {isOpen && <span className="text-lg font-bold text-gray-800">Nova Dev</span>}
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú de navegación */}
      <nav className="flex-1 mt-6">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center p-3 rounded-lg mx-3 my-1 transition ${
                isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              <item.icon size={22} className="mr-3" />
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Botón de Cerrar Sesión */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={22} className="mr-3" />
          {isOpen && <span className="text-sm font-medium">Cerrar Sesión</span>}
        </button>
      </div>
    </div>
  );
}
