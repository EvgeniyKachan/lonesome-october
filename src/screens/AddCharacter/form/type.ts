export type AddCharacterFormData = {
  characterName: string;
  characterRole: string;
  characterDescription: string;
  familiar: {
    familiarName?: string;
    familiarSpecies?: string;
    familiarDescription?: string;
  };
};
