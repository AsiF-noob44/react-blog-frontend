import { useState, useEffect } from "react";
import { DiamondPlus, User, Calendar, Eye, Trash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getAllBlogs, deleteBlog } from "../api/blogAPI.js";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsData = await getAllBlogs();
        setBlogs(blogsData.blogs);
      } catch (error) {
        toast.error(error.response?.data?.error || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(id);
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
        toast.success("Blog deleted successfully");
      } catch (error) {
        toast.error(error.response?.data?.error || "Failed to delete blog");
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div className="bg-base-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-base-content mb-2">Blogs</h1>
            <p className="text-base-content/70">
              Share your thoughts and stories
            </p>
          </div>
          <Link to="/create-blog">
            <button className="btn btn-secondary gap-2 ">
              <DiamondPlus size={20} />
              Create Blog
            </button>
          </Link>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {/* If No Blogs */}
        {!loading && blogs.length === 0 && (
          <div className="card bg-base-100 shadow-md">
            <div className="card-body text-center py-16">
              <h2 className="card-title justify-center text-2xl mb-2">
                No blogs yet
              </h2>
              <p className="text-base-content/70 mb-4">
                Start creating your first blog post!
              </p>
            </div>
          </div>
        )}

        {/* Blog Cards Grid */}
        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog?._id}
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body">
                  {/* Blog Title */}
                  <h2 className="card-title text-xl mb-2 line-clamp-2">
                    {blog?.title}
                  </h2>

                  {/* Author and Date */}
                  <div className="flex flex-col gap-2 mb-3 text-sm text-base-content/70">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span className="font-medium">{blog?.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDate(blog?.createdAt)}</span>
                    </div>
                  </div>

                  {/* Content Preview */}
                  <p className="text-base-content/80 mb-4 line-clamp-3">
                    {truncateContent(blog?.content)}
                  </p>

                  {/* View Details Button */}
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => navigate(`/blogs/${blog?._id}`)}
                      className="btn btn-accent btn-sm gap-2"
                    >
                      <Eye size={16} />
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(blog?._id)}
                      className="btn btn-outline btn-error btn-sm gap-1.5 hover:btn-error"
                      aria-label="Delete blog"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
