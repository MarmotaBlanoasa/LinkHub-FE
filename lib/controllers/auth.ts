'use server';
import {NextResponse} from "next/server";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function fetchWithAuth(url:string, options: any = {}) {
    const token = cookies().get('jwt')?.value;
    const headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    const response = await fetch(url, {
        ...options,
        headers,
    });
    if (!response.ok) {
        if (response.status === 401) {
            console.log('Unauthorized');
        }
    }
    return response;
}


export async function registerUser(formData: FormData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: username, email, password}),
        });
        const data = await response.json();
        if (!response.ok) {
            return data;
        }
    } catch (e) {
        console.error(e);
    }
    return NextResponse.redirect("/login");
}

export async function loginUser(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        const data = await response.json();
        if (!response.ok) {
            console.log('Invalid email or password');
            return "Invalid email or password";
        }
        const {jwt} = data;
        cookies().set("jwt", jwt);
    } catch (e) {
        console.error(e);
    }
    return redirect("/collections");
}

export async function logoutUser() {
    try {
        const response = await fetch(`${API_URL}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await response.json();
        console.log('Logout response:', data);
        if (!response.ok) {
            console.log('Error logging out');
            return data;
        }
    } catch (e) {
        console.error(e);
    }
    return redirect("/login");
}

export async function getUser() {
    try {
        const response = await fetchWithAuth(`${API_URL}/user`, {method: "GET"});
        return await response.json();
    } catch (e) {
        console.error(e);
    }
    return redirect("/login");
}