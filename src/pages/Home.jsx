import { Link } from "react-router-dom";
import { Sparkles, BookOpen, Edit3, Users, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-linear-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-indigo-600 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to BlogIt
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Share your thoughts, stories, and ideas with the world. Create,
            discover, and connect through the power of words.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blogs">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer">
                Explore Blogs
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/create-blog">
              <button className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-md cursor-pointer">
                Start Writing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose BlogIt?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Edit3 className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Easy to Write
              </h3>
              <p className="text-gray-600">
                Simple and intuitive interface to create and publish your blogs
                in minutes. Focus on writing, we handle the rest.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Discover Content
              </h3>
              <p className="text-gray-600">
                Explore a diverse collection of blogs from various authors. Find
                inspiration and new perspectives every day.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Connect & Share
              </h3>
              <p className="text-gray-600">
                Join a community of writers and readers. Share your voice and
                connect with like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
