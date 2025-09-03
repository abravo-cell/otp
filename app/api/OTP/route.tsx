import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const identificacion = searchParams.get("identificacion");
  const codigo = searchParams.get("codigo");
  try {
    const response = await axios.get("http://157.100.77.174:8093/api/OTP", {
      params: {
        identificacion: identificacion,
        codigo: codigo
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