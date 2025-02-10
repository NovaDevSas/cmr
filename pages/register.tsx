import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { nombre, direccion, correo, cargo, password };
    console.log("Payload enviado:", payload);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      alert("¡Registro exitoso!");
      router.push("/login");
    } else {
      const errorData = await res.json();
      alert(`Error en el registro: ${errorData.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white p-4">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Registro</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-2 border border-green-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-green-600"
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          className="w-full px-4 py-2 border border-green-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-green-600"
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full px-4 py-2 border border-green-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-green-600"
        />
        <input
          type="text"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          className="w-full px-4 py-2 border border-green-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-green-600"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-green-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-green-600"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition duration-300 ease-in-out shadow-neon"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}