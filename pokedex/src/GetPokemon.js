export async function getPokemon(URL) {
    // get rid of the first character of the hash (#); return everything after it
    let queryString = window.location.hash.slice(1);
    // return whole URL
    const url = `${URL}${queryString}`;
    // send that url along to the fetch
    const response = await fetch(url);
    const json = await response.json();
    if (json.response === "False") {
        return {
        Search: [],
        pokemonCount: 0
        };
    }
    return json;
}