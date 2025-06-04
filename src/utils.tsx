export async function fetchFromAPI(params: string) {
    const url = `http://localhost:4000/${params}`;
    //console.log(url)
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}

export async function fetchFromSecretAPI(params: string, token: string | null) {
    if (!token) {
        throw new Error("No token found!")
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



