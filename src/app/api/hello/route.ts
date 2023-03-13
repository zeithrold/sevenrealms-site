import { NextResponse } from "next/server";

// export async function GET(request: Request) {
export async function GET() {
  return NextResponse.json({ hello: "world" });
}
