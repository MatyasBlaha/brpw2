import prisma from "@/lib/prisma/prisma";
import {NextResponse} from "next/server";

export async function POST(req: Request){
    const { userId, name, description } = await req.json();

    console.log(userId, name, description);

    const owner = await prisma.owner.create({
        data: {userId, name, description}
    })

    if(!owner){
        throw new Error("Failed to create owner")
    };

    return NextResponse.json(owner)
}