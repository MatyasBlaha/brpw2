import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        return new Response(JSON.stringify({ user: decoded }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid or expired token" }), { status: 401 });
    }
}