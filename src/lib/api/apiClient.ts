export async function apiRequest<T>(url: string, method: "GET" | "POST" | "PUT" | "DELETE", body?: unknown): Promise<T> {
    const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        ...(body ? { body: JSON.stringify(body) } : {}),
    });

    if (!res.ok) {
        throw new Error(`API request failed: ${res.statusText}`);
    }

    return res.json();
}