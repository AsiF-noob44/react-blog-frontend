import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react";
import toast from "react-hot-toast";
import { getBlogById } from "../api/blogAPI";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const blogData = await getBlogById(id);
        setBlog(blogData);
      } catch (error) {
        toast.error(error.response?.data?.error || "Failed to fetch blog");
        navigate("/blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-base-50 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-base-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blogs")}
          className="btn btn-ghost gap-2 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </button>

        {/* Blog Content Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-base-content mb-6">
              {blog.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap gap-4 mb-6 text-base-content/70">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{formatTime(blog.createdAt)}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Content */}
            <div className="prose max-w-none">
              <p className="text-base-content whitespace-pre-wrap leading-relaxed">
                {blog.content}
              </p>
            </div>

            {/* Updated info if available */}
            {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
              <div className="mt-6 pt-6 border-t border-base-300">
                <p className="text-sm text-base-content/60">
                  Last updated: {formatDate(blog.updatedAt)} at{" "}
                  {formatTime(blog.updatedAt)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
