import { Prisma } from "@prisma/client";
import InputForm from "../InputForm";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UpdateInput from "../UpdateInput";
import Image from "next/image";
import bgImg from "public/bg-todo.jpeg";
interface Props {
  projects: Prisma.ProjectsSelect[];
  refreshData: any;
}

const HomePage = ({ projects, refreshData }: Props) => {
  const { reset } = useForm();
  const [formView, setFormView] = useState({
    visible: false,
    listValue: 0,
  });
  const deleteItem = (projectId: any) => {
    try {
      fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });
      refreshData();
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="relative">
      <div className="w-full h-screen object-cover relative">
        <Image src={bgImg} alt="bg-image" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <h2 className="text-[40px] font-bold text-white mb-4 text-center">
          Todo with NEXT JS
        </h2>
        <InputForm refreshData={refreshData} />
        <ul className="flex flex-col gap-4 mt-4 list-disc">
          {projects?.map((project, i) => (
            <li key={i}>
              {formView?.visible && formView?.listValue === i ? (
                <UpdateInput
                  project={project}
                  refreshData={refreshData}
                  setFormView={setFormView}
                />
              ) : (
                <div className="flex gap-2 items-center border-2 border-white  text-[20px]  px-2 py-1 rounded-md bg-[rgb(0,0,0,0.5)]">
                  <span className="flex-1 text-white">{project?.name}</span>
                  <BsFillPencilFill
                    className="cursor-pointer text-gray-300 hover:text-gray-500"
                    onClick={() => {
                      setFormView({ visible: true, listValue: i });
                      reset();
                    }}
                  />
                  <BsFillTrashFill
                    className="cursor-pointer text-gray-300 hover:text-gray-500"
                    onClick={() => deleteItem(project?.id)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
