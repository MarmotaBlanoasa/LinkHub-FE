import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {isJwtValid} from "@/lib/controllers/auth";

export async function middleware(req: NextRequest) {
    const validToken = await isJwtValid();
    console.log("Valid token", validToken);

    if (!validToken){
        console.log("Delete JTW")
        const response = NextResponse.next();
        response.cookies.delete('jwt');
        return response;
    }

    const {pathname} = req.nextUrl;
    if (!validToken && !config.matcher.includes(pathname)) {
        console.log("Redirecting to login");
        return NextResponse.redirect(new URL('/login', req.url), {status: 303});
    }
    if (validToken && config.matcher.includes(pathname)) {
        console.log("Redirecting to collections");
        return NextResponse.redirect(new URL('/collections', req.url), {status: 303});
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/sign-up", "/login", "/"],
}