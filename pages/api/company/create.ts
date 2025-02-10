import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, descripcion, imagen, color } = req.body;

    const empresa = await prisma.empresa.create({
      data: { nombre, descripcion, imagen, color },
    });

    res.status(201).json(empresa);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}