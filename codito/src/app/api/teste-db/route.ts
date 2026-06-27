import { connectMongoDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectMongoDB();

    return Response.json({
      success: true,
      message: "MongoDB conectado com sucesso!",
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";

    console.error("ERRO MONGODB:", errorMessage);

    return Response.json(
      {
        success: false,
        message: "Erro ao conectar ao MongoDB",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}