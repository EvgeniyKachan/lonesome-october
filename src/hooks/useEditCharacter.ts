import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import type { AddCharacterFormData } from "../screens/AddCharacter/form/type";
import type { CharacterResponse } from "../components/characters/types";

export function useEditCharacter(
  characterId: string
): UseMutationResult<CharacterResponse, Error, AddCharacterFormData> {
  const { userId, token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["character", characterId],
    mutationFn: async (data) => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/characters/${characterId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...data, creator: userId }),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || res.statusText);
      }
      return res.json() as Promise<CharacterResponse>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["character", characterId] });
    },
  });
}
