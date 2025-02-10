import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Fondo con llamas animadas */}
      <div className="absolute inset-0 flex items-center justify-center flame-bg"></div>

      {/* Contenedor del login con efecto 3D */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md relative z-10 transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <h2 className="text-3xl font-bold text-center mb-6">Bienvenido</h2>
          <p className="text-gray-600 text-center mb-6">Inicia sesión en tu cuenta</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Correo</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-4 flex justify-between text-sm">
            <Link href="/register" className="text-blue-500 hover:underline">
              Registrarse
            </Link>
            <Link href="/forgot-password" className="text-blue-500 hover:underline">
              Recuperar Contraseña
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
