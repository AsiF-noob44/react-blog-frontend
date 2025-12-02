import { useForm } from "react-hook-form";

const CreateBlogForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default CreateBlogForm;
