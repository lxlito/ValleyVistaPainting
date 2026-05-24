import { NextResponse } from "next/server";

// Stubbed quote intake endpoint.
// TODO: wire this to a real provider — see README.md (Resend / Formspree / Sendgrid).
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Minimal server-side validation — the form also validates client-side.
    if (!data?.name || !data?.email || !data?.details) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // For now, just log the lead so it's visible during dev.
    console.log("[quote] new request:", {
      ...data,
      received: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote] error:", err);
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
