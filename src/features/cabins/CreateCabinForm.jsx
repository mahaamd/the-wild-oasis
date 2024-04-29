import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import useCreateCabinForm from "./useCreateCabinForm";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditing = Boolean(editId);

  const { mutate, isLoading } = useCreateCabinForm();

  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: isEditing ? editValues : {},
  });

  const { errors } = formState;
  console.log(errors);

  const onError = (error) => {
    console.log(error);
  };

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label={"cabin name"} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "this field is reqired" })}
        />
      </FormRow>

      <FormRow label={"maximum capacity"} error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is reqired",
            min: {
              value: 1,
              message: "capacity shoul be at least one",
            },
          })}
        />
      </FormRow>

      <FormRow label={"Regular price"} error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "this field is reqired" })}
        />
      </FormRow>

      <FormRow label={"Discount"} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is reqired",
            validate: (value) => {
              value <= getValues().regularPrice ||
                "discount should less than reqular price";
            },
          })}
        />
      </FormRow>

      <FormRow
        label={"Description for website"}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "this field is reqired" })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditing ? false : "this field is reqired",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          disabled={isLoading}
          variation="secondary"
          type="reset"
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button>{isEditing ? "edit cabin" : "add cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
