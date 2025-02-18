import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import prisma from '@/lib/prisma/prisma';
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET
const TOKEN_EXPIRATION = "1h";
export async function POST(req: Request) {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });

    const cookie = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 60,
    });

    return new Response(JSON.stringify({ message: "Login successful" }), {
        status: 200,
        headers: { "Set-Cookie": cookie },
    });
}