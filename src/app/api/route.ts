import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Please login" }, { status: 401 });
  }

  return NextResponse.json({ authenticated: !!session });
};
