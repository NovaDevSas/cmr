import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      // Devuelve la compañía específica según el id
      const empresa = await prisma.empresa.findUnique({
        where: { id: Number(id) },
        include: { usuarios: true },
      });
      return res.json(empresa);
    } else {
      // Devuelve todas las compañías
      const empresas = await prisma.empresa.findMany({
        include: { usuarios: true },
      });
      return res.json(empresas);
    }
  }
  res.status(405).json({ message: "Método no permitido" });
}