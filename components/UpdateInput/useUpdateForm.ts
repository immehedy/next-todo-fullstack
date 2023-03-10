import { useForm } from "react-hook-form";
import { FormTypes } from "./UpdateInput.type";
const useUpdateForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: FormTypes ) => {
    try {
      const body = { name: data?.projectName };
      const projectId = data?.projectId
      await fetch(`api/projects/${projectId}`, {
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
