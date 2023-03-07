import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAddCircle } from "react-icons/md";

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
        <div className="flex gap-2 items-center shadow-md">
          <input
            type="text"
            placeholder="Project name"
            className="outline:none border-b-2 border-white focus:outline-none bg-transparent text-[30px] text-white"
            {...register("projectName", { required: true })}
          />
          {errors.projectName && (
            <p className="text-red-400">Project name is required</p>
          )}

          <button type="submit" className="text-gray-200 font-semibold text-[30px] shadow-sm"><MdOutlineAddCircle/></button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
