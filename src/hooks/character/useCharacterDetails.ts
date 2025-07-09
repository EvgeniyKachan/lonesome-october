import { useQuery } from "@tanstack/react-query";
import type { Character } from "../../screens/Home/CharacterInformation/types";

export const useCharacterDetails = (characterId: string) => {
  const { isPending, error, data } = useQuery<Character>({
    queryKey: ["character", characterId],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/characters/${characterId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch character details");
      }
      return (await response.json()).character as Character;
    },
  });
  console.log("useCharacterDetails", isPending);
  return { isPending, error, character: data || null };
};
