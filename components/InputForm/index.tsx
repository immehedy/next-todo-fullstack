import { MdOutlineAddCircle } from "react-icons/md";
import useInputForm from "./useInputForm";

const InputForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useInputForm();
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

          <button
            type="submit"
            className="text-gray-200 font-semibold text-[30px] shadow-sm">
            <MdOutlineAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
