import { useForm } from "react-hook-form";
import { Props, FormTypes } from "./UpdateInput.type";
const useUpdateForm = ({ project }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FormTypes) => {
    try {
      const body = { name: data?.projectName };
      await fetch(`api/projects/${project?.id}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      location.reload();
      reset();
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
export default useUpdateForm;
