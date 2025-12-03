import { useState } from "react";
import { useForm } from "react-hook-form";
import { TicketPlus } from "lucide-react";
import toast from "react-hot-toast";
import { createBlog } from "../api/blogAPI.js";

const CreateBlogForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    const toastId = toast.loading("Publishing your blog...");

    try {
      const response = await createBlog(data);
      toast.success("Blog created successfully!", { id: toastId });
      reset(); // Clear the form
      console.log("Blog created successfully:", response);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Failed to create blog. Please try again.";
      toast.error(errorMessage, { id: toastId });
      console.error("Error creating blog:", error);
    } finally {
      setIsLoading(false);
    }
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
                {...register("author", { required: "Author name is required" })}
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.author.message}
                </p>
              )}
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
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
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
                {...register("content", {
                  required: "Content is required",
                  minLength: {
                    value: 20,
                    message: "Content must be at least 20 characters",
                  },
                })}
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.content.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-success flex-1 font-semibold disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isLoading ? "Publishing..." : "Publish Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogForm;
