import { useForm } from "react-hook-form";
import { formTypes } from "./InputForm.type";

const useInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: formTypes) => {
    const body = { name: data?.projectName };
    try {
      await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      location.reload();
      reset();
    } catch (error) {
      console.log({ error });
    }
    reset();
  };
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
export default useInputForm;
