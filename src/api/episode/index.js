export async function fetchEpisodeList({ pageParam }) {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/?page=${pageParam}`);

  if (!res.ok) {
    throw new Error("Failed to fetch episodes!");
  }
  const json = await res.json();
  return json.results;
}

export async function fetchEpisodeDetails(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch episode details");
  }

  const json = await res.json();

  return json;
}

export async function fetchEpisode(name) {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/?name=${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch episodes!");
  }
  const json = await res.json();
  return json.results;
}
