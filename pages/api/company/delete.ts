import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "DELETE") {
      const { id } = req.body
  
      await prisma.empresa.delete({
        where: { id },
      })
  
      res.status(200).json({ message: "Empresa eliminada" })
    }
  }
  