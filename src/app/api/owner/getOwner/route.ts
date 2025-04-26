import prisma from "@/lib/prisma/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const ownerId = searchParams.get('ownerId');

        // Validate request
        if (!ownerId) {
            return new Response(
                JSON.stringify({ success: false, message: "User ID required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Fetch owner
        const owner = await prisma.owner.findUnique({
            where: { id: ownerId },
        });

        // Handle missing owner
        if (!owner) {
            return new Response(
                JSON.stringify({ success: false, message: "Owner not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        // Return successful response with standardized format
        return new Response(
            JSON.stringify({ success: true, data: owner }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ success: false, message: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}