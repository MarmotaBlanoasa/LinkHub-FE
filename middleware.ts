import { NextResponse } from "next/server";
import type {NextRequest} from "next/server";
export function middleware (req: NextRequest){
    const { pathname} = req.nextUrl;
    if (!req.cookies.has("jwt") && !config.matcher.includes(pathname)) {
        console.log("Redirecting to login");
        return NextResponse.redirect( new URL('/login', req.url), {status: 303});
    }
    if (req.cookies.has("jwt") && config.matcher.includes(pathname)) {
        console.log("Redirecting to collections");
        return NextResponse.redirect(new URL('/collections', req.url), {status: 303});
    }
    return NextResponse.next();
}

export const config = {
    matcher: [ "/sign-up", "/login", "/" ],
}