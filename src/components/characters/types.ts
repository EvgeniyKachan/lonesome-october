export type Character = {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
  familiar?: {
    name: string;
    species: string;
    description: string;
    image?: string;
  };
};
