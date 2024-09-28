import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, Address } = await req.json();

    if (!name || !Address) {
      return NextResponse.json(
        { message: "Name and address are required!" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        addresses: {
          create: [{ street: Address }],
        },
      },
    });

    return NextResponse.json(
      { message: "User and address saved successfully!", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user and address:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
