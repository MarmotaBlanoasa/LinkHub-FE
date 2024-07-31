import {fetchWithAuth} from "@/lib/controllers/auth";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function createLink(formData: FormData, collectionId: number) {
    const linkName = formData.get("link-name");
    const linkUrl = formData.get("link-url");
    try {
        const response = await fetchWithAuth(`${API_URL}/Links`, {
            method: "POST",
            body: JSON.stringify({collectionId, linkName, linkUrl}),
        });
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}

export async function getLinksByCollection(collectionId: number) {
    try {
        const response = await fetchWithAuth(`${API_URL}/Links/collection/${collectionId}`, {method: "GET"});
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}


export async function deleteLink(linkId: number) {
    try {
        const response = await fetchWithAuth(`${API_URL}/Links/${linkId}`, {method: "DELETE"});
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}

export async function updateLink(linkId: number, formData: FormData) {
    const linkName = formData.get("link-name");
    const linkUrl = formData.get("link-url");
    try {
        const response = await fetchWithAuth(`${API_URL}/Links/${linkId}`, {
            method: "PUT",
            body: JSON.stringify({linkName, linkUrl}),
        });
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}