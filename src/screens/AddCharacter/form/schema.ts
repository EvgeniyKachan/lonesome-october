import * as yup from "yup";

export const schema = yup.object({
  characterName: yup
    .string()
    .min(3, "Character name must be at least 3 characters")
    .max(20)
    .required(),
  characterRole: yup
    .string()
    .min(3, "Character role must be at least 3 characters")
    .max(20)
    .required(),
  characterDescription: yup
    .string()
    .min(10, "Character description must be at least 10 characters")
    .max(500)
    .required(),
  familiar: yup.object({
    familiarName: yup
      .string()
      .min(3, "Familiar name must be at least 3 characters")
      .max(20),
    familiarSpecies: yup
      .string()
      .min(3, "Familiar species must be at least 3 characters")
      .max(20),
    familiarDescription: yup
      .string()
      .min(10, "Familiar description must be at least 10 characters")
      .max(500),
  }),
});
