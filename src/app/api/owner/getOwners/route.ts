import prisma from "@/lib/prisma/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return new Response(JSON.stringify({ message: "User ID required" }), {
                status: 400
            });
        }

        const owners = await prisma.owner.findMany({
            where: {
                user: {
                    id: userId
                }
            },
            include: {
                user: true
            }
        });

        console.log(owners)

        return new Response(JSON.stringify(owners), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Failed to load data'
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}