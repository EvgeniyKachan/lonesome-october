import { useQuery } from "@tanstack/react-query";

export const useCharacters = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["characters"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_BACKEND_URL}/characters`).then((res) =>
        res.json()
      ),
  });

  return {
    characters: data?.characters || [],
    isLoading: isPending,
    error,
  };
};
