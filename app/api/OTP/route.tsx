// app/api/OTP/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "http://157.100.77.174:8093/api/OTP"; // o el host que uses

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const identificacion = searchParams.get("identificacion");
  const codigo = searchParams.get("codigo");

  try {
    const response = await axios.get(BASE_URL, {
      params: { identificacion, codigo },
      headers: { API_KEY: process.env.API_KEY as string },
      timeout: 10000,
    });
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("GET /OTP error:", error?.message);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  let body: any = {};
  try { body = await req.json(); } catch { }

  const identificacion = body.identificacion;
  const codigo = body.codigo;
  const aprobacion = body.aprobacion ?? "SI";

  try {
    const response = await axios.put(
      BASE_URL,
      { identificacion, codigo, aprobacion }, // Ahora se envía como JSON
      {
        headers: { API_KEY: process.env.API_KEY as string },
        timeout: 10000,
      }
    );
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("PUT /OTP error:", error?.message);
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}

