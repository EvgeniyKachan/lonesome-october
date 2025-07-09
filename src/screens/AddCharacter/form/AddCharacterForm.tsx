import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../../components/shared/Input/Input";
import Button from "../../../components/shared/Button/Button";
import type { AddCharacterFormData } from "./type";
import { schema } from "./schema";
import Textarea from "../../../components/shared/Textarea/Textarea";
import type { Character } from "../../Home/CharacterInformation/types";

type AddCharacterFormProps = {
  onSubmit: (data: AddCharacterFormData) => void;
  isLoading: boolean;
  error: Error | null;
  defaultData?: Character | null;
};

const AddCharacterForm = ({
  onSubmit,
  isLoading,
  error,
  defaultData,
}: AddCharacterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCharacterFormData>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Character Name"
        name="characterName"
        register={register}
        error={errors.characterName}
        defaultValue={defaultData?.characterName}
      />
      <Input
        label="Character Role"
        name="characterRole"
        register={register}
        error={errors.characterRole}
        defaultValue={defaultData?.characterRole}
      />
      <Textarea
        label="Character Description"
        name="characterDescription"
        register={register}
        error={errors.characterDescription}
        defaultValue={defaultData?.characterDescription}
      />
      <Input
        label="Familiar Name"
        name="familiar.familiarName"
        register={register}
        error={errors.familiar?.familiarName}
        defaultValue={defaultData?.familiar?.familiarName}
      />

      <Input
        label="Familiar Species"
        name="familiar.familiarSpecies"
        register={register}
        error={errors.familiar?.familiarSpecies}
        defaultValue={defaultData?.familiar?.familiarSpecies}
      />
      <Textarea
        label="Familiar Description"
        name="familiar.familiarDescription"
        register={register}
        error={errors.familiar?.familiarDescription}
        defaultValue={defaultData?.familiar?.familiarDescription}
      />
      <Button type="submit" disabled={isLoading}>
        {defaultData ? "Edit" : "Add Character"}
      </Button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </form>
  );
};

export default AddCharacterForm;
