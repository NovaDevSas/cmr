import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, direccion, correo, cargo, empresaId, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { nombre, direccion, correo, cargo, empresaId, password: hashedPassword },
    });

    res.status(201).json(user);
  }
}