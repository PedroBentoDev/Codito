import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { success: false, message: "Email e senha são obrigatórios." },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json(
        { success: false, message: "Email ou senha inválidos." },
        { status: 401 }
      );
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return Response.json(
        { success: false, message: "Email ou senha inválidos." },
        { status: 401 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Login realizado com sucesso!",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          level: user.level,
          xp: user.xp,
          honey: user.honey,
          lives: user.lives,
          streak: user.streak,
          currentTitle: user.currentTitle,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao fazer login:", error);

    return Response.json(
      { success: false, message: "Erro interno ao fazer login." },
      { status: 500 }
    );
  }
}