import React from "react";
import { Props } from "./UpdateInput.type";
import useUpdateForm from "./useUpdateForm";

const UpdateInput = ({ project, setFormView }: Props) => {
  const { register, handleSubmit, errors, onSubmit } = useUpdateForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Project name"
          className="flex-1 outline:none border-b-2 border-white focus:outline-none bg-transparent font-semibold text-[20px] text-white "
          {...register("projectName", {
            value: `${project?.name}`,
            required: true,
          })}
        />
        {errors.projectName && (
          <p className="text-red-400">Project name is required</p>
        )}
        <input
        type="hidden"
        {...register("projectId", {
          value: project?.id
        })}
        />

        <button
          type="submit"
          className="text-gray-500 bg-white rounded-md font-bold px-2 py-1">
          Update
        </button>
        <button
          onClick={() => setFormView({ visible: false, listValue: 0 })}
          className="text-red-500 bg-white rounded-md font-bold px-2 py-1">
          Close
        </button>
      </div>
    </form>
  );
};

export default UpdateInput;
