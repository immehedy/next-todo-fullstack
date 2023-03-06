import { Prisma } from "@prisma/client";
import InputForm from "../InputForm";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  projects: Prisma.ProjectsSelect[];
  refreshData: any;
}
const HomePage = ({ projects, refreshData }: Props) => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm();

  const [formView, setFormView] = useState<number>();

  return (
    <div>
      <InputForm refreshData={refreshData} />
      <ul>
        {projects?.map((project, i) => (
          <>
            {formView === i ? (
              <form key={i}>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Project name"
                    className="outline:none border-b-2 border-gray-400 focus:outline-none"
                    {...register("projectName", {value: `${project?.name}`,required: true })}
                  />
                  {errors.projectName && (
                    <p className="text-red-400">Project name is required</p>
                  )}

                  <button type="submit">update</button>
                </div>
              </form>
            ) : (
              <li key={i} className="flex gap-2 items-center">
                {project?.name}
                <BsFillPencilFill
                  className="cursor-pointer"
                  onClick={() => {setFormView(i); reset();}}
                />
                <BsFillTrashFill className="cursor-pointer" />
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
