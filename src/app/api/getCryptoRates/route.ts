// app/api/getCryptoRates/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.COINLAYER_API_KEY;
  const apiUrl = `https://api.coinlayer.com/live?access_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch crypto rates" }, { status: 500 });
  }
}
