import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("entries");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
