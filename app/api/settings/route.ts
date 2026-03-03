import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";

/* ================= GET ================= */

export async function GET() {
  try {
    const snapshot = await db.ref("settings").get();

    return NextResponse.json(
      snapshot.val() || {
        showInstagram: false,
        showLinkedin: false,
            siteDown: false,

      }
    );
  } catch (error) {
    console.error("GET error:", error);

    return NextResponse.json(
      { showInstagram: false, showLinkedin: false,    siteDown: false,
 },
      { status: 200 }
    );
  }
}

/* ================= POST ================= */

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await db.ref("settings").set(body);

    return NextResponse.json({
      success: true,
      settings: body,
    });
  } catch (error) {
    console.error("POST error:", error);

    return NextResponse.json(
      { error: "Failed to update" },
      { status: 500 }
    );
  }
}