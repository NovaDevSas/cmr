import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "PUT") {
      const { id, nombre, descripcion, imagen, color } = req.body
  
      const empresa = await prisma.empresa.update({
        where: { id },
        data: { nombre, descripcion, imagen, color },
      })
  
      res.status(200).json(empresa)
    }
  }
  