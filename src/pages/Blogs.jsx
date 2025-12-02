import { DiamondPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-base-50 p-8">
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

        {/* Placeholder for blogs list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog cards */}
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="card-body">
              <h2 className="card-title">No blogs yet</h2>
              <p>Start creating your first blog post!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
