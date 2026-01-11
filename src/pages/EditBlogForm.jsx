import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Edit } from "lucide-react";
import toast from "react-hot-toast";
import { getBlogById, updateBlog } from "../api/blogAPI.js";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingBlog, setFetchingBlog] = useState(true);
  const [originalBlog, setOriginalBlog] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setFetchingBlog(true);
        const blogData = await getBlogById(id);
        setOriginalBlog(blogData);
        setValue("author", blogData.author);
        setValue("title", blogData.title);
        setValue("content", blogData.content);
      } catch (error) {
        toast.error(error.response?.data?.error || "Failed to fetch blog");
        navigate("/blogs");
      } finally {
        setFetchingBlog(false);
      }
    };

    fetchBlog();
  }, [id, navigate, setValue]);

  // Handle form submission
  const onSubmit = async (data) => {
    // Check if any changes were made
    if (
      data.author === originalBlog.author &&
      data.title === originalBlog.title &&
      data.content === originalBlog.content
    ) {
      toast.error("No changes detected. Please make changes before updating.");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Updating your blog...");

    try {
      await updateBlog(id, data);
      toast.success("Blog updated successfully!", { id: toastId });
      window.scrollTo(0, 0);
      navigate(`/blogs/${id}`);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Failed to update blog. Please try again.";
      toast.error(errorMessage, { id: toastId });
      console.error("Error updating blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Takes the user back to the top of blog details page without saving changes
  const handleCancel = () => {
    window.scrollTo(0, 0);
    navigate(`/blogs/${id}`);
  };

  if (fetchingBlog) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Edit className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 shrink-0" />
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">
              Edit Blog Post
            </h1>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Author Field */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-2">
                Author Name
              </label>
              <input
                type="text"
                placeholder="Your name..."
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                {...register("author", {
                  required: "Author name is required",
                  minLength: {
                    value: 2,
                    message: "Author name must be at least 2 characters",
                  },
                })}
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.author.message}
                </p>
              )}
            </div>

            {/* Title Field */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                placeholder="Enter an engaging title..."
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
                {...register("title", {
                  required: "Blog title is required",
                  minLength: {
                    value: 5,
                    message: "Title must be at least 5 characters",
                  },
                })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Content Field */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-2">
                Blog Content
              </label>
              <textarea
                placeholder="Write your blog content here..."
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                rows="12"
                {...register("content", {
                  required: "Blog content is required",
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Updating...
                  </>
                ) : (
                  <>
                    <Edit size={18} />
                    Update Blog
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlogForm;
