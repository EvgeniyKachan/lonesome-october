export type Character = {
  id: string;
  characterName: string;
  characterRole: string;
  characterDescription: string;
  characterImage?: string;
  familiar?: {
    familiarName: string;
    familiarSpecies: string;
    familiarDescription: string;
    familiarImage?: string;
  };
};
