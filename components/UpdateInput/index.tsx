import { Prisma } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";
interface Props {
    project: any;
    refreshData: any;
    setFormView: any;
  }
interface FormTypes {
    projectName? : string
}
const UpdateInput = ({project, refreshData, setFormView}: Props) => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm();
    const onSubmit = async (data: FormTypes) => {
        console.log(typeof data)
        try {
            const body = {name: data?.projectName}
            await fetch(`api/projects/${project?.id}`, {
                method: 'PUT',
                body : JSON.stringify(body)
            })
            refreshData();
            setFormView();
            reset();
        } catch (error) {
            console.log({error})
        }
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Project name"
          className="outline:none border-b-2 border-gray-400 focus:outline-none"
          {...register("projectName", {
            value: `${project?.name}`,
            required: true,
          })}
        />
        {errors.projectName && (
          <p className="text-red-400">Project name is required</p>
        )}

        <button type="submit">update</button>
      </div>
    </form>
  );
};

export default UpdateInput;
