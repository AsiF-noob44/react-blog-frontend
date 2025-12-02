import { useForm } from "react-hook-form";
import { TicketPlus } from "lucide-react";

const CreateBlogForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TicketPlus className="w-10 h-10 md:w-12 md:h-12 text-blue-600 shrink-0" />
            <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r bg-clip-text text-blue-500">
              Create a New Blog
            </h1>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Blog Author */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-2">
                Author Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Your name..."
                {...register("author")}
              />
            </div>

            {/* Title Input */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                placeholder="Enter an engaging title..."
                {...register("title")}
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-2">
                Blog Content
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                placeholder="Write your blog content here..."
                rows="10"
                {...register("content")}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-success flex-1 font-semibold"
              >
                Publish Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
