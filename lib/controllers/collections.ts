import {fetchWithAuth} from "@/lib/controllers/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function createCollection(formData: FormData) {
    const collectionName = formData.get("collection-name");
    const collectionDescription = formData.get("collection-description");
    try {
        const response = await fetchWithAuth(`${API_URL}/Collection`, {
            method: "POST",
            body: JSON.stringify({collectionName, collectionDescription}),
        });
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}

export async function getCollections() {
    try {
        const response = await fetchWithAuth(`${API_URL}/Collection/collections`, {method: "GET"});
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}


export async function getCollection(collectionId: number) {
    try {
        const response = await fetchWithAuth(`${API_URL}/Collection/${collectionId}`, {method: "GET"});
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}

export async function deleteCollection(collectionId: number) {
    try {
        const response = await fetchWithAuth(`${API_URL}/Collection/${collectionId}`, {method: "DELETE"});
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}

export async function updateCollection(collectionId: number, formData: FormData) {
    const collectionName = formData.get("collection-name");
    const collectionDescription = formData.get("collection-description");
    try {
        const response = await fetchWithAuth(`${API_URL}/Collection/${collectionId}`, {
            method: "PUT",
            body: JSON.stringify({collectionName, collectionDescription}),
        });
        return await response?.json();
    } catch (e) {
        console.error(e);
    }
}