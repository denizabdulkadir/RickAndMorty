import { useQueries, useQuery } from "@tanstack/react-query";

export const useCharacterList = (characterList) => {
  return useQueries({
    queries: characterList.map((characterUrl) => {
      return {
        queryKey: ["characters", characterUrl],
        queryFn: () => fetchCharacterDetails(characterUrl),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
};

export async function fetchCharacterDetails(url) {
  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error("Failed to fetch character details");
  }
  const json = await res.json();

  return json;
}

export const useCharacter = (id) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch character details");
      }
      const json = await res.json();

      return json;
    },
  });
};

export async function fetchAllCharacters({ pageParam }) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageParam}`);
  if (!res.ok) {
    throw new Error("Failed to fetch episodes!");
  }
  const json = await res.json();
  return json.results;
}

//

export async function fetchCharacter(filterType, searchParam) {
  console.log(filterType, searchParam);
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?${filterType}=${searchParam}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch episodes!");
  }
  const json = await res.json();
  return json.results;
}
