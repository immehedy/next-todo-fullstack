import React from "react";
import { useForm } from "react-hook-form";

interface formTypes {
  projectName?: string;
}

const InputForm = ({ refreshData }: any) => {
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
      refreshData();
      reset();
    } catch (error) {
      console.log({ error });
    }
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Project name"
            className="outline:none border-b-2 border-gray-400 focus:outline-none"
            {...register("projectName", { required: true })}
          />
          {errors.projectName && (
            <p className="text-red-400">Project name is required</p>
          )}

          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
