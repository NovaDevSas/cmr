import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      // Devuelve el usuario específico según el id
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
        include: { empresa: true },
      });
      return res.json(user);
    } else {
      // Devuelve todos los usuarios
      const users = await prisma.user.findMany({
        include: { empresa: true },
      });
      return res.json(users);
    }
  }
  res.status(405).json({ message: "Método no permitido" });
}