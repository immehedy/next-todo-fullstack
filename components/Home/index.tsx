import { Prisma } from "@prisma/client";
import InputForm from "../InputForm";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UpdateInput from "../UpdateInput";

interface Props {
  projects: Prisma.ProjectsSelect[];
  refreshData: any;
}

const HomePage = ({ projects, refreshData }: Props) => {
const {reset} = useForm();
  const [formView, setFormView] = useState<number>();
  return (
    <div>
      <InputForm refreshData={refreshData} />
      <ul>
        {projects?.map((project, i) => (
          <>
            {formView === i ? (
              <UpdateInput key={i} project={project} refreshData={refreshData} setFormView={setFormView}/>
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
