// src/app/api/lead/route.ts
import { NextResponse } from "next/server";

const REQUIRED = [
  "fullName", "email", "phone",
  "budgetMin", "budgetMax", "bedrooms",
  "locations", "garage", "garden",
  "notes", "consent"
] as const;

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    for (const k of REQUIRED) {
      if (data[k as keyof typeof data] === undefined || data[k as keyof typeof data] === null) {
        return NextResponse.json({ ok: false, error: `Missing field: ${k}` }, { status: 400 });
      }
    }

    // Forward to n8n webhook (self-hosted)
    const r = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "magalhaesjoel.com",
        timestamp: new Date().toISOString(),
        ...data,
      }),
    });

    if (!r.ok) {
      const txt = await r.text().catch(() => "");
      throw new Error(`n8n responded ${r.status} ${txt}`);
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Lead submit error:", e?.message || e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
