import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    if (pathname.startsWith('/cz/app') || pathname.startsWith('/en/app')) {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.redirect(new URL(`/${req.nextUrl.locale}/login`, req.url));
        }

        try {
            verify(token, process.env.JWT_SECRET!);
        } catch {
            return NextResponse.redirect(new URL(`/${req.nextUrl.locale}/login`, req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:locale/app/:path*'
};