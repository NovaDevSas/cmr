import { useState } from "react";

export default function ForgotPassword() {
  const [correo, setCorreo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí implementarás la lógica de recuperación (envío de correo, etc.)
    setMessage("Si el correo existe, se enviarán instrucciones a tu email.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white p-4">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Recuperar Contraseña
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full px-4 py-2 border border-red-400 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-red-600"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 border border-red-400 rounded-lg text-red-400 hover:bg-red-400 hover:text-black transition duration-300 ease-in-out shadow-neon"
        >
          Recuperar Contraseña
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-white">
          {message}
        </p>
      )}
    </div>
  );
}