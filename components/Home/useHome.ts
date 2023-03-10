import { useState } from "react";
import { useForm } from "react-hook-form";

const useHome = () => {
  const { reset } = useForm();
  const [formView, setFormView] = useState({
    visible: false,
    listValue: 0,
  });
  
  const deleteItem = (projectId: number | any) => {
    try {
      fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });
      location.reload();
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    reset,
    formView,
    setFormView,
    deleteItem,
  };
};

export default useHome;
