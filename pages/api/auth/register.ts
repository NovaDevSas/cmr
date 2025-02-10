import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Método no permitido" });

  const { nombre, correo, password, direccion, cargo } = req.body;

  console.log("Payload recibido:", { nombre, correo, password, direccion, cargo });

  if (!nombre || !correo || !password || !direccion || !cargo) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        nombre,
        correo,
        password: hashedPassword,
        direccion,
        cargo,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
}