import { NextResponse } from "next/server"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzeczFttniPE7_xFFd80DFkY5QuJznxaV_DjAWmODlDBn2MOu1njfPayovNJb1_LDU/exec"

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 })
  }

  // GAS always 302-redirects after running doPost — don't follow or the
  // redirect converts to GET and doPost never fires. A 302 means success.
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
    redirect: "manual",
  })

  if (res.status !== 200 && res.status !== 302) {
    return NextResponse.json({ error: "Failed to save email." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
