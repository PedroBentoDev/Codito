import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return Response.json(
        { success: false, message: "Nome, email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { success: false, message: "A senha deve ter pelo menos 6 caracteres." },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const userExists = await User.findOne({ email });

    if (userExists) {
      return Response.json(
        { success: false, message: "Email já cadastrado." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return Response.json(
      { success: true, message: "Usuário cadastrado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);

    return Response.json(
      { success: false, message: "Erro interno ao cadastrar usuário." },
      { status: 500 }
    );
  }
}