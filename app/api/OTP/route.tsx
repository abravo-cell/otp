import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const identificacion = searchParams.get("identificacion");
  const codigo = searchParams.get("codigo");
  try {
    const response = await axios.get("http://192.168.10.138:8094/api/Promocion", {
      params: {
        identificacion: identificacion,
        usuario: codigo
      },
      headers: {
        API_KEY: "VBrqN7XNnWJDjH07Nl7QHhKCvYtPKaWc",
      },
      timeout: 10000,
    });

    console.log("Response data:", response.data);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}