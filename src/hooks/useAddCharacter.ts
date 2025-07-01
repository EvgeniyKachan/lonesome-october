// hooks/useAddCharacter.ts
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import type { AddCharacterFormData } from "../screens/AddCharacter/form/type";
import type { Character } from "../components/characters/types";

export function useAddCharacter(): UseMutationResult<
  Character,
  Error,
  AddCharacterFormData
> {
  const { userId, token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["characters", "add"],
    mutationFn: async (data) => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/characters`,
        {
          method: "POST",
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
      return res.json() as Promise<Character>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["characters", "list"] });
    },
  });
}
