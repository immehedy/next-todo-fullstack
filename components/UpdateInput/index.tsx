import { Prisma } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";
import {GrUpdate} from 'react-icons/gr'
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
        try {
            const body = {name: data?.projectName}
            await fetch(`api/projects/${project?.id}`, {
                method: 'PUT',
                body : JSON.stringify(body)
            })
            refreshData();
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
          className="flex-1 outline:none border-b-2 border-white focus:outline-none bg-transparent font-semibold text-[20px] text-white "
          {...register("projectName", {
            value: `${project?.name}`,
            required: true,
          })}
        />
        {errors.projectName && (
          <p className="text-red-400">Project name is required</p>
        )}

        <button type="submit" className="text-gray-500 bg-white rounded-md font-bold px-2 py-1">Update</button>
        <button onClick={() => setFormView({visible: false, listValue: 0})} className="text-red-500 bg-white rounded-md font-bold px-2 py-1">Close</button>
      </div>
    </form>
  );
};

export default UpdateInput;
