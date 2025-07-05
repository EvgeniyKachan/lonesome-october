import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from "@tanstack/react-query";
import { useAuth } from "../auth/useAuth";
import type { AddCharacterFormData } from "../../screens/AddCharacter/form/type";
import type { CharacterResponse } from "../../screens/Home/CharacterInformation/types";

export function useAddCharacter(): UseMutationResult<
  CharacterResponse,
  Error,
  AddCharacterFormData
> {
  const { token } = useAuth();
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
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || res.statusText);
      }
      return res.json() as Promise<CharacterResponse>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["characters", "list"] });
    },
  });
}
