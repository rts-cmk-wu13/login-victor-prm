import { redirect } from "react-router";

export async function fetchFromAPI(params: string) {
    const url = `http://localhost:4000/${params}`;
    //console.log(url)
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}

export function getToken() {
    const rawToken = sessionStorage.getItem("token");
    const token: string | null = rawToken ? JSON.parse(rawToken) : null;
    return token;
}

export async function fetchFromSecretAPI(params: string) {
    const token = getToken();

    if (!token) {
        return redirect("/")
        //throw new Error("No token found!")
    }

    const url = `http://localhost:4000/${params}`;
    console.log(url, token)

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }

    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}



