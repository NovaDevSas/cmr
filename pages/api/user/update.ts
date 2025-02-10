import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { id, nombre, direccion, correo, cargo, empresaId } = req.body;
      // Convertir id y empresaId a número (Prisma espera numérico)
      const idNum = Number(id);
      const empresaIdNum = empresaId !== undefined ? Number(empresaId) : undefined;

      const user = await prisma.user.update({
        where: { id: idNum },
        data: { nombre, direccion, correo, cargo, empresaId: empresaIdNum },
      });
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error actualizando usuario" });
    }
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}