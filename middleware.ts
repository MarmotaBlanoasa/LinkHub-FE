import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {fetchWithAuth} from "@/lib/controllers/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('jwt')?.value;
    let user = null;

    if (token) {
        user = await fetchWithAuth(`${API_URL}/auth`, {method: "GET"}, token);
        if (!user) {
            console.log("Deleting cookie");
            const response = NextResponse.next();
            response.cookies.set('jwt', '', {maxAge: 0});
            return response;
        }
    }

    const {pathname} = req.nextUrl;
    if (!req.cookies.has("jwt") && !config.matcher.includes(pathname)) {
        console.log("Redirecting to login");
        return NextResponse.redirect(new URL('/login', req.url), {status: 303});
    }
    if (req.cookies.has("jwt") && config.matcher.includes(pathname)) {
        console.log("Redirecting to collections");
        return NextResponse.redirect(new URL('/collections', req.url), {status: 303});
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/sign-up", "/login", "/"],
}