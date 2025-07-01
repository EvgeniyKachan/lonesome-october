import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../../../components/shared/Input/Input";
import Button from "../../../components/shared/Button/Button";
import type { AddCharacterFormData } from "./type";

const schema = yup.object({
  characterName: yup.string().min(3).max(20).required(),
  characterRole: yup.string().min(3).max(20).required(),
  characterDescription: yup.string().min(10).max(500).required(),
  familiar: yup.object({
    familiarName: yup.string().min(3).max(20),
    familiarSpecies: yup.string().min(3).max(20),
    familiarDescription: yup.string().min(10).max(500),
  }),
});

type AddCharacterFormProps = {
  onSubmit: (data: AddCharacterFormData) => void;
  isLoading: boolean;
  error: Error | null;
};

export default function AddCharacterForm({
  onSubmit,
  isLoading,
  error,
}: AddCharacterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCharacterFormData>({
    resolver: yupResolver(schema),
  });
  console.log("error", error);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Character Name"
        name="characterName"
        register={register}
        error={errors.characterName}
      />
      <Input
        label="Character Role"
        name="characterRole"
        register={register}
        error={errors.characterRole}
      />
      <Input
        label="Character Description"
        name="characterDescription"
        register={register}
        error={errors.characterDescription}
      />
      <Input
        label="Familiar Name"
        name="familiar.familiarName"
        register={register}
        error={errors.familiar?.familiarName}
      />

      <Input
        label="Familiar Species"
        name="familiar.familiarSpecies"
        register={register}
        error={errors.familiar?.familiarSpecies}
      />
      <Input
        label="Familiar Description"
        name="familiar.familiarDescription"
        register={register}
        error={errors.familiar?.familiarDescription}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Loading…" : "Add Character"}
      </Button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </form>
  );
}
